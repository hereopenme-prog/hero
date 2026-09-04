import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';

export const announcementRouter = Router();

const createAnnouncementSchema = z.object({
  businessId: z.string().uuid(),
  shopId: z.string().uuid().optional(),
  type: z.enum(['NEW_ARRIVAL', 'OPENING_DELAY', 'HOLIDAY_CLOSURE', 'STORE_UPDATE', 'SPECIAL', 'OFFER', 'CUSTOM']),
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  image: z.string().url().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

const updateAnnouncementSchema = z.object({
  type: z.enum(['NEW_ARRIVAL', 'OPENING_DELAY', 'HOLIDAY_CLOSURE', 'STORE_UPDATE', 'SPECIAL', 'OFFER', 'CUSTOM']).optional(),
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(2000).optional(),
  image: z.string().url().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  status: z.enum(['DRAFT', 'SCHEDULED', 'ACTIVE', 'EXPIRED']).optional(),
  shopId: z.string().uuid().optional().nullable(),
});

// Create announcement
announcementRouter.post('/', async (req: Request, res: Response) => {
  const input = createAnnouncementSchema.parse(req.body);
  
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
  
  const announcement = await prisma.announcement.create({
    data: {
      ...input,
      startDate: input.startDate ? new Date(input.startDate) : undefined,
      endDate: input.endDate ? new Date(input.endDate) : undefined,
      status: 'DRAFT',
    },
  });
  
  res.status(201).json({
    success: true,
    data: announcement,
  });
});

// List announcements
announcementRouter.get('/', async (req: Request, res: Response) => {
  const { businessId, shopId, type, status, page = 1, limit = 20 } = req.query;
  
  const where: any = {};
  
  if (businessId) {
    where.businessId = businessId;
  }
  
  if (shopId) {
    where.shopId = shopId;
  }
  
  if (type) {
    where.type = type;
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
  
  const [announcements, total] = await Promise.all([
    prisma.announcement.findMany({
      where,
      include: {
        shop: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.announcement.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: announcements,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get announcement by ID
announcementRouter.get('/:id', async (req: Request, res: Response) => {
  const announcement = await prisma.announcement.findUnique({
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
    },
  });
  
  if (!announcement) {
    throw new NotFoundError('Announcement not found');
  }
  
  res.json({
    success: true,
    data: announcement,
  });
});

// Update announcement
announcementRouter.put('/:id', async (req: Request, res: Response) => {
  const input = updateAnnouncementSchema.parse(req.body);
  
  const announcement = await prisma.announcement.findUnique({
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
  
  if (!announcement) {
    throw new NotFoundError('Announcement not found');
  }
  
  // Check access
  const hasAccess = announcement.business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.announcement.update({
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

// Delete announcement
announcementRouter.delete('/:id', async (req: Request, res: Response) => {
  const announcement = await prisma.announcement.findUnique({
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
  
  if (!announcement) {
    throw new NotFoundError('Announcement not found');
  }
  
  // Check access
  const isOwner = announcement.business.users.some((u) => u.isOwner);
  const isAdmin = req.user!.role === 'SUPER_ADMIN' || req.user!.role === 'ADMIN';
  
  if (!isOwner && !isAdmin) {
    throw new ForbiddenError('Access denied');
  }
  
  await prisma.announcement.delete({
    where: { id: req.params.id },
  });
  
  res.json({
    success: true,
    message: 'Announcement deleted successfully',
  });
});

// Publish announcement
announcementRouter.post('/:id/publish', async (req: Request, res: Response) => {
  const announcement = await prisma.announcement.findUnique({
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
  
  if (!announcement) {
    throw new NotFoundError('Announcement not found');
  }
  
  // Check access
  const hasAccess = announcement.business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.announcement.update({
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
