import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';
import { requirePermission } from '../middleware/auth';

export const shopRouter = Router();

const createShopSchema = z.object({
  businessId: z.string().uuid(),
  name: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  address: z.string().max(500).optional(),
  city: z.string().max(100).optional(),
  state: z.string().max(100).optional(),
  pincode: z.string().max(10).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  phone: z.string().min(10).max(15).optional(),
  email: z.string().email().optional(),
  openTime: z.string().optional(),
  closeTime: z.string().optional(),
  operatingDays: z.string().optional(),
});

const updateShopSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().max(1000).optional(),
  address: z.string().max(500).optional(),
  city: z.string().max(100).optional(),
  state: z.string().max(100).optional(),
  pincode: z.string().max(10).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  phone: z.string().min(10).max(15).optional(),
  email: z.string().email().optional(),
  openTime: z.string().optional(),
  closeTime: z.string().optional(),
  operatingDays: z.string().optional(),
  isActive: z.boolean().optional(),
});

const updateStatusSchema = z.object({
  status: z.enum(['OPEN', 'CLOSED']),
  source: z.enum(['manual', 'device', 'scheduled']).default('manual'),
});

// Create shop
shopRouter.post('/', async (req: Request, res: Response) => {
  const input = createShopSchema.parse(req.body);
  
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
  
  // Generate slug
  const slug = input.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  
  const shop = await prisma.shop.create({
    data: {
      ...input,
      slug,
      status: 'UNKNOWN',
    },
  });
  
  res.status(201).json({
    success: true,
    data: shop,
  });
});

// List shops
shopRouter.get('/', async (req: Request, res: Response) => {
  const { businessId, status, city, page = 1, limit = 20, search } = req.query;
  
  const where: any = {};
  
  if (businessId) {
    where.businessId = businessId;
  }
  
  if (status) {
    where.status = status;
  }
  
  if (city) {
    where.city = { contains: city as string, mode: 'insensitive' };
  }
  
  if (search) {
    where.OR = [
      { name: { contains: search as string, mode: 'insensitive' } },
      { address: { contains: search as string, mode: 'insensitive' } },
    ];
  }
  
  // If user is not admin, filter by their businesses
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    where.business = {
      users: {
        some: { userId: req.user!.id },
      },
    };
  }
  
  const [shops, total] = await Promise.all([
    prisma.shop.findMany({
      where,
      include: {
        business: {
          select: {
            id: true,
            name: true,
          },
        },
        devices: {
          select: {
            id: true,
            uid: true,
            status: true,
          },
        },
        _count: {
          select: {
            customerFollows: true,
            offers: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.shop.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: shops,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get shop by ID
shopRouter.get('/:id', async (req: Request, res: Response) => {
  const shop = await prisma.shop.findUnique({
    where: { id: req.params.id },
    include: {
      business: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      devices: {
        select: {
          id: true,
          uid: true,
          status: true,
          lastHeartbeat: true,
          batteryLevel: true,
          signalStrength: true,
        },
      },
      _count: {
        select: {
          customerFollows: true,
          offers: true,
          announcements: true,
        },
      },
    },
  });
  
  if (!shop) {
    throw new NotFoundError('Shop not found');
  }
  
  res.json({
    success: true,
    data: shop,
  });
});

// Update shop
shopRouter.put('/:id', async (req: Request, res: Response) => {
  const input = updateShopSchema.parse(req.body);
  
  const shop = await prisma.shop.findUnique({
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
  
  if (!shop) {
    throw new NotFoundError('Shop not found');
  }
  
  // Check access
  const hasAccess = shop.business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.shop.update({
    where: { id: req.params.id },
    data: input,
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Update shop status
shopRouter.put('/:id/status', async (req: Request, res: Response) => {
  const input = updateStatusSchema.parse(req.body);
  
  const shop = await prisma.shop.findUnique({
    where: { id: req.params.id },
    include: {
      business: {
        include: {
          users: {
            where: { userId: req.user!.id },
          },
        },
      },
      devices: true,
    },
  });
  
  if (!shop) {
    throw new NotFoundError('Shop not found');
  }
  
  // Check access
  const hasAccess = shop.business.users.length > 0 || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  // Update shop status
  const updated = await prisma.shop.update({
    where: { id: req.params.id },
    data: {
      status: input.status,
      lastStatusChange: new Date(),
      lastStatusSource: input.source,
    },
  });
  
  // Create status history
  await prisma.shopStatusHistory.create({
    data: {
      shopId: req.params.id,
      status: input.status,
      source: input.source,
      changedBy: req.user!.id,
    },
  });
  
  // If device exists and source is manual, send command to device
  if (input.source === 'manual' && shop.devices.length > 0) {
    const device = shop.devices[0];
    const iotAdapter = req.app.locals.iotAdapter;
    
    if (iotAdapter) {
      await iotAdapter.sendCommand(device.id, input.status, {
        shopId: shop.id,
        status: input.status,
      });
    }
  }
  
  // Emit WebSocket event
  const clients = req.app.locals.clients;
  if (clients) {
    const shopClients = clients.get(shop.id);
    if (shopClients) {
      const message = JSON.stringify({
        type: 'shop:status:changed',
        payload: {
          shopId: shop.id,
          status: input.status,
          lastStatusChange: updated.lastStatusChange,
        },
      });
      
      for (const client of shopClients) {
        if (client.readyState === 1) {
          client.send(message);
        }
      }
    }
  }
  
  res.json({
    success: true,
    data: updated,
  });
});

// Get shop status history
shopRouter.get('/:id/history', async (req: Request, res: Response) => {
  const { page = 1, limit = 20 } = req.query;
  
  const shop = await prisma.shop.findUnique({
    where: { id: req.params.id },
  });
  
  if (!shop) {
    throw new NotFoundError('Shop not found');
  }
  
  const [history, total] = await Promise.all([
    prisma.shopStatusHistory.findMany({
      where: { shopId: req.params.id },
      orderBy: { createdAt: 'desc' },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    }),
    prisma.shopStatusHistory.count({
      where: { shopId: req.params.id },
    }),
  ]);
  
  res.json({
    success: true,
    data: history,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});
