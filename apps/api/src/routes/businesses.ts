import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';
import { requirePermission } from '../middleware/auth';

export const businessRouter = Router();

const createBusinessSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  phone: z.string().min(10).max(15).optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  category: z.string().max(100).optional(),
  gstNumber: z.string().max(20).optional(),
});

const updateBusinessSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().max(1000).optional(),
  logo: z.string().url().optional(),
  coverImage: z.string().url().optional(),
  phone: z.string().min(10).max(15).optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  category: z.string().max(100).optional(),
});

// Create business
businessRouter.post('/', async (req: Request, res: Response) => {
  const input = createBusinessSchema.parse(req.body);
  
  // Generate slug
  const slug = input.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  
  // Check if slug exists
  const existing = await prisma.business.findUnique({ where: { slug } });
  if (existing) {
    throw new ValidationError('Business with similar name already exists');
  }
  
  const business = await prisma.business.create({
    data: {
      ...input,
      slug,
    },
  });
  
  // Add current user as owner
  await prisma.businessUser.create({
    data: {
      userId: req.user!.id,
      businessId: business.id,
      role: 'owner',
      isOwner: true,
      acceptedAt: new Date(),
    },
  });
  
  // Create default subscription
  await prisma.subscription.create({
    data: {
      businessId: business.id,
      plan: 'free',
      status: 'TRIAL',
      trialStart: new Date(),
      trialEnd: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
    },
  });
  
  res.status(201).json({
    success: true,
    data: business,
  });
});

// List businesses
businessRouter.get('/', async (req: Request, res: Response) => {
  const { page = 1, limit = 20, search } = req.query;
  
  const where: any = {};
  
  // If user is not admin, only show their businesses
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    where.users = {
      some: {
        userId: req.user!.id,
      },
    };
  }
  
  if (search) {
    where.OR = [
      { name: { contains: search as string, mode: 'insensitive' } },
      { slug: { contains: search as string, mode: 'insensitive' } },
    ];
  }
  
  const [businesses, total] = await Promise.all([
    prisma.business.findMany({
      where,
      include: {
        _count: {
          select: {
            shops: true,
            offers: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.business.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: businesses,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get business by ID
businessRouter.get('/:id', async (req: Request, res: Response) => {
  const business = await prisma.business.findUnique({
    where: { id: req.params.id },
    include: {
      shops: {
        select: {
          id: true,
          name: true,
          slug: true,
          status: true,
          city: true,
        },
      },
      users: {
        select: {
          id: true,
          userId: true,
          role: true,
          isOwner: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
            },
          },
        },
      },
      subscription: true,
      _count: {
        select: {
          shops: true,
          offers: true,
          announcements: true,
        },
      },
    },
  });
  
  if (!business) {
    throw new NotFoundError('Business not found');
  }
  
  // Check access
  const isOwner = business.users.some(
    (u) => u.userId === req.user!.id && u.isOwner
  );
  const isAdmin = req.user!.role === 'SUPER_ADMIN' || req.user!.role === 'ADMIN';
  
  if (!isOwner && !isAdmin) {
    throw new ForbiddenError('Access denied');
  }
  
  res.json({
    success: true,
    data: business,
  });
});

// Update business
businessRouter.put('/:id', async (req: Request, res: Response) => {
  const input = updateBusinessSchema.parse(req.body);
  
  const business = await prisma.business.findUnique({
    where: { id: req.params.id },
    include: {
      users: {
        where: { userId: req.user!.id },
      },
    },
  });
  
  if (!business) {
    throw new NotFoundError('Business not found');
  }
  
  // Check ownership
  const isOwner = business.users.some((u) => u.isOwner);
  const isAdmin = req.user!.role === 'SUPER_ADMIN' || req.user!.role === 'ADMIN';
  
  if (!isOwner && !isAdmin) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.business.update({
    where: { id: req.params.id },
    data: input,
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Get business analytics
businessRouter.get('/:id/analytics', async (req: Request, res: Response) => {
  const { period = 'monthly', startDate, endDate } = req.query;
  
  const business = await prisma.business.findUnique({
    where: { id: req.params.id },
    include: {
      users: {
        where: { userId: req.user!.id },
      },
    },
  });
  
  if (!business) {
    throw new NotFoundError('Business not found');
  }
  
  // Check access
  const hasAccess = business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  // Calculate date range
  const end = endDate ? new Date(endDate as string) : new Date();
  const start = startDate 
    ? new Date(startDate as string) 
    : new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
  
  // Get analytics data
  const [shops, offers, customers, events] = await Promise.all([
    prisma.shop.findMany({
      where: { businessId: req.params.id },
      select: {
        id: true,
        name: true,
        status: true,
      },
    }),
    prisma.offer.findMany({
      where: {
        businessId: req.params.id,
        createdAt: { gte: start, lte: end },
      },
      select: {
        id: true,
        title: true,
        viewCount: true,
        clickCount: true,
      },
    }),
    prisma.customerShopFollow.count({
      where: {
        shop: { businessId: req.params.id },
        followedAt: { gte: start, lte: end },
      },
    }),
    prisma.ioTEvent.count({
      where: {
        shop: { businessId: req.params.id },
        createdAt: { gte: start, lte: end },
      },
    }),
  ]);
  
  res.json({
    success: true,
    data: {
      period,
      startDate: start,
      endDate: end,
      shops: {
        total: shops.length,
        open: shops.filter((s) => s.status === 'OPEN').length,
        closed: shops.filter((s) => s.status === 'CLOSED').length,
      },
      offers: {
        total: offers.length,
        totalViews: offers.reduce((sum, o) => sum + o.viewCount, 0),
        totalClicks: offers.reduce((sum, o) => sum + o.clickCount, 0),
      },
      customers: {
        new: customers,
      },
      events: {
        total: events,
      },
    },
  });
});
