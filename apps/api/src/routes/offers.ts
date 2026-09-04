import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';

export const offerRouter = Router();

const createOfferSchema = z.object({
  businessId: z.string().uuid(),
  shopId: z.string().uuid().optional(),
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  image: z.string().url().optional(),
  ctaText: z.string().max(50).optional(),
  ctaUrl: z.string().url().optional(),
  discount: z.string().max(100).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

const updateOfferSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(2000).optional(),
  image: z.string().url().optional(),
  ctaText: z.string().max(50).optional(),
  ctaUrl: z.string().url().optional(),
  discount: z.string().max(100).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  status: z.enum(['DRAFT', 'SCHEDULED', 'ACTIVE', 'EXPIRED', 'PAUSED']).optional(),
  shopId: z.string().uuid().optional().nullable(),
});

// Create offer
offerRouter.post('/', async (req: Request, res: Response) => {
  const input = createOfferSchema.parse(req.body);
  
  // Check business access
  const businessUser = await prisma.businessUser.findFirst({
    where: {
      businessId: input.businessId,
      userId: req.user!.id,
    },
  });
  
  if (!businessUser && req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    throw new ForbiddenError('Access denied');
  }
  
  const offer = await prisma.offer.create({
    data: {
      ...input,
      startDate: input.startDate ? new Date(input.startDate) : undefined,
      endDate: input.endDate ? new Date(input.endDate) : undefined,
      status: 'DRAFT',
    },
  });
  
  res.status(201).json({
    success: true,
    data: offer,
  });
});

// List offers
offerRouter.get('/', async (req: Request, res: Response) => {
  const { businessId, shopId, status, page = 1, limit = 20 } = req.query;
  
  const where: any = {};
  
  if (businessId) {
    where.businessId = businessId;
  }
  
  if (shopId) {
    where.shopId = shopId;
  }
  
  if (status) {
    where.status = status;
  }
  
  // If user is not admin, filter by their businesses
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    where.business = {
      users: {
        some: { userId: req.user!.id },
      },
    };
  }
  
  const [offers, total] = await Promise.all([
    prisma.offer.findMany({
      where,
      include: {
        shop: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            views: true,
            clicks: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.offer.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: offers,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get offer by ID
offerRouter.get('/:id', async (req: Request, res: Response) => {
  const offer = await prisma.offer.findUnique({
    where: { id: req.params.id },
    include: {
      shop: {
        select: {
          id: true,
          name: true,
        },
      },
      business: {
        select: {
          id: true,
          name: true,
        },
      },
      _count: {
        select: {
          views: true,
          clicks: true,
        },
      },
    },
  });
  
  if (!offer) {
    throw new NotFoundError('Offer not found');
  }
  
  res.json({
    success: true,
    data: offer,
  });
});

// Update offer
offerRouter.put('/:id', async (req: Request, res: Response) => {
  const input = updateOfferSchema.parse(req.body);
  
  const offer = await prisma.offer.findUnique({
    where: { id: req.params.id },
    include: {
      business: {
        include: {
          users: {
            where: { userId: req.user!.id },
          },
        },
      },
    },
  });
  
  if (!offer) {
    throw new NotFoundError('Offer not found');
  }
  
  // Check access
  const hasAccess = offer.business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.offer.update({
    where: { id: req.params.id },
    data: {
      ...input,
      startDate: input.startDate ? new Date(input.startDate) : undefined,
      endDate: input.endDate ? new Date(input.endDate) : undefined,
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Delete offer
offerRouter.delete('/:id', async (req: Request, res: Response) => {
  const offer = await prisma.offer.findUnique({
    where: { id: req.params.id },
    include: {
      business: {
        include: {
          users: {
            where: { userId: req.user!.id },
          },
        },
      },
    },
  });
  
  if (!offer) {
    throw new NotFoundError('Offer not found');
  }
  
  // Check access
  const isOwner = offer.business.users.some((u) => u.isOwner);
  const isAdmin = req.user!.role === 'SUPER_ADMIN' || req.user!.role === 'ADMIN';
  
  if (!isOwner && !isAdmin) {
    throw new ForbiddenError('Access denied');
  }
  
  await prisma.offer.delete({
    where: { id: req.params.id },
  });
  
  res.json({
    success: true,
    message: 'Offer deleted successfully',
  });
});

// Publish offer
offerRouter.post('/:id/publish', async (req: Request, res: Response) => {
  const offer = await prisma.offer.findUnique({
    where: { id: req.params.id },
    include: {
      business: {
        include: {
          users: {
            where: { userId: req.user!.id },
          },
        },
      },
    },
  });
  
  if (!offer) {
    throw new NotFoundError('Offer not found');
  }
  
  // Check access
  const hasAccess = offer.business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.offer.update({
    where: { id: req.params.id },
    data: {
      status: 'ACTIVE',
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});
