import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';
import { requirePermission } from '../middleware/auth';

export const deviceRouter = Router();

const registerDeviceSchema = z.object({
  uid: z.string().min(1).max(100),
  name: z.string().max(200).optional(),
  shopId: z.string().uuid().optional(),
  firmwareVersion: z.string().max(50).optional(),
  hardwareVersion: z.string().max(50).optional(),
  simNumber: z.string().max(20).optional(),
  simProvider: z.string().max(50).optional(),
});

const updateDeviceSchema = z.object({
  name: z.string().max(200).optional(),
  shopId: z.string().uuid().optional().nullable(),
  isActive: z.boolean().optional(),
});

// Register device (admin only)
deviceRouter.post('/', requirePermission('device', 'manage'), async (req: Request, res: Response) => {
  const input = registerDeviceSchema.parse(req.body);
  
  // Check if device UID exists
  const existing = await prisma.device.findUnique({
    where: { uid: input.uid },
  });
  
  if (existing) {
    throw new ValidationError('Device with this UID already exists');
  }
  
  const device = await prisma.device.create({
    data: {
      ...input,
      status: 'OFFLINE',
    },
  });
  
  // Create device credentials
  await prisma.deviceCredential.create({
    data: {
      deviceId: device.id,
    },
  });
  
  // Create default sensors
  const sensorTypes = [
    { type: 'temperature', name: 'Temperature Sensor', unit: '°C' },
    { type: 'smoke', name: 'Smoke Sensor', unit: 'ppm' },
    { type: 'motion', name: 'Motion Sensor', unit: 'boolean' },
  ];
  
  for (const sensor of sensorTypes) {
    await prisma.deviceSensor.create({
      data: {
        deviceId: device.id,
        ...sensor,
      },
    });
  }
  
  res.status(201).json({
    success: true,
    data: device,
  });
});

// List devices
deviceRouter.get('/', async (req: Request, res: Response) => {
  const { shopId, status, page = 1, limit = 20, search } = req.query;
  
  const where: any = {};
  
  if (shopId) {
    where.shopId = shopId;
  }
  
  if (status) {
    where.status = status;
  }
  
  if (search) {
    where.OR = [
      { uid: { contains: search as string, mode: 'insensitive' } },
      { name: { contains: search as string, mode: 'insensitive' } },
    ];
  }
  
  // If user is not admin, filter by their shops
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    where.shop = {
      business: {
        users: {
          some: { userId: req.user!.id },
        },
      },
    };
  }
  
  const [devices, total] = await Promise.all([
    prisma.device.findMany({
      where,
      include: {
        shop: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
        sensors: {
          select: {
            id: true,
            type: true,
            name: true,
            lastReading: true,
          },
        },
        _count: {
          select: {
            commands: true,
            heartbeats: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.device.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: devices,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get device by ID
deviceRouter.get('/:id', async (req: Request, res: Response) => {
  const device = await prisma.device.findUnique({
    where: { id: req.params.id },
    include: {
      shop: {
        select: {
          id: true,
          name: true,
          status: true,
        },
      },
      sensors: true,
      heartbeats: {
        orderBy: { timestamp: 'desc' },
        take: 10,
      },
      _count: {
        select: {
          commands: true,
          heartbeats: true,
        },
      },
    },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  res.json({
    success: true,
    data: device,
  });
});

// Update device
deviceRouter.put('/:id', async (req: Request, res: Response) => {
  const input = updateDeviceSchema.parse(req.body);
  
  const device = await prisma.device.findUnique({
    where: { id: req.params.id },
    include: {
      shop: {
        include: {
          business: {
            include: {
              users: {
                where: { userId: req.user!.id },
              },
            },
          },
        },
      },
    },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Check access
  const hasAccess = device.shop?.business.users.some((u) => u.isOwner) || 
    req.user!.role === 'SUPER_ADMIN' || 
    req.user!.role === 'ADMIN';
  
  if (!hasAccess) {
    throw new ForbiddenError('Access denied');
  }
  
  const updated = await prisma.device.update({
    where: { id: req.params.id },
    data: input,
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Assign device to shop
deviceRouter.post('/:id/assign', async (req: Request, res: Response) => {
  const schema = z.object({
    shopId: z.string().uuid(),
  });
  
  const input = schema.parse(req.body);
  
  const device = await prisma.device.findUnique({
    where: { id: req.params.id },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  const shop = await prisma.shop.findUnique({
    where: { id: input.shopId },
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
  
  const updated = await prisma.device.update({
    where: { id: req.params.id },
    data: {
      shopId: input.shopId,
      activatedAt: new Date(),
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Unassign device from shop
deviceRouter.post('/:id/unassign', async (req: Request, res: Response) => {
  const device = await prisma.device.findUnique({
    where: { id: req.params.id },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Check admin access
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    throw new ForbiddenError('Only admins can unassign devices');
  }
  
  const updated = await prisma.device.update({
    where: { id: req.params.id },
    data: {
      shopId: null,
      deactivatedAt: new Date(),
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Deactivate device
deviceRouter.post('/:id/deactivate', async (req: Request, res: Response) => {
  const schema = z.object({
    reason: z.string().max(500).optional(),
  });
  
  const input = schema.parse(req.body);
  
  const device = await prisma.device.findUnique({
    where: { id: req.params.id },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Check admin access
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    throw new ForbiddenError('Only admins can deactivate devices');
  }
  
  const updated = await prisma.device.update({
    where: { id: req.params.id },
    data: {
      isActive: false,
      status: 'DEACTIVATED',
      deactivatedAt: new Date(),
      deactivationReason: input.reason,
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Get device telemetry
deviceRouter.get('/:id/telemetry', async (req: Request, res: Response) => {
  const { hours = 24 } = req.query;
  
  const device = await prisma.device.findUnique({
    where: { id: req.params.id },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  const since = new Date(Date.now() - Number(hours) * 60 * 60 * 1000);
  
  const heartbeats = await prisma.deviceHeartbeat.findMany({
    where: {
      deviceId: req.params.id,
      timestamp: { gte: since },
    },
    orderBy: { timestamp: 'asc' },
  });
  
  res.json({
    success: true,
    data: {
      deviceId: req.params.id,
      period: `${hours} hours`,
      heartbeats,
    },
  });
});
