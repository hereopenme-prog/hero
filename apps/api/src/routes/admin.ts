import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';
import { requireRole } from '../middleware/auth';
import { UserRole } from '@hereopen/types';

export const adminRouter = Router();

// All admin routes require SUPER_ADMIN or ADMIN role
adminRouter.use(requireRole(UserRole.SUPER_ADMIN, UserRole.ADMIN));

// Get all businesses
adminRouter.get('/businesses', async (req: Request, res: Response) => {
  const { page = 1, limit = 20, search, status } = req.query;
  
  const where: any = {};
  
  if (search) {
    where.OR = [
      { name: { contains: search as string, mode: 'insensitive' } },
      { slug: { contains: search as string, mode: 'insensitive' } },
    ];
  }
  
  if (status === 'active') {
    where.isActive = true;
  } else if (status === 'inactive') {
    where.isActive = false;
  }
  
  const [businesses, total] = await Promise.all([
    prisma.business.findMany({
      where,
      include: {
        _count: {
          select: {
            shops: true,
            users: true,
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

// Verify business
adminRouter.post('/businesses/:id/verify', async (req: Request, res: Response) => {
  const business = await prisma.business.findUnique({
    where: { id: req.params.id },
  });
  
  if (!business) {
    throw new NotFoundError('Business not found');
  }
  
  const updated = await prisma.business.update({
    where: { id: req.params.id },
    data: {
      isVerified: true,
      verifiedAt: new Date(),
      verifiedBy: req.user!.id,
    },
  });
  
  // Create audit log
  await prisma.auditLog.create({
    data: {
      userId: req.user!.id,
      action: 'BUSINESS_VERIFIED',
      resource: 'business',
      resourceId: req.params.id,
      metadata: { businessName: business.name },
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Suspend business
adminRouter.post('/businesses/:id/suspend', async (req: Request, res: Response) => {
  const schema = z.object({
    reason: z.string().min(1).max(500),
  });
  
  const input = schema.parse(req.body);
  
  const business = await prisma.business.findUnique({
    where: { id: req.params.id },
  });
  
  if (!business) {
    throw new NotFoundError('Business not found');
  }
  
  const updated = await prisma.business.update({
    where: { id: req.params.id },
    data: {
      isActive: false,
      suspendedAt: new Date(),
      suspendedBy: req.user!.id,
      suspensionReason: input.reason,
    },
  });
  
  // Create audit log
  await prisma.auditLog.create({
    data: {
      userId: req.user!.id,
      action: 'BUSINESS_SUSPENDED',
      resource: 'business',
      resourceId: req.params.id,
      metadata: { reason: input.reason },
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Reactivate business
adminRouter.post('/businesses/:id/reactivate', async (req: Request, res: Response) => {
  const business = await prisma.business.findUnique({
    where: { id: req.params.id },
  });
  
  if (!business) {
    throw new NotFoundError('Business not found');
  }
  
  const updated = await prisma.business.update({
    where: { id: req.params.id },
    data: {
      isActive: true,
      suspendedAt: null,
      suspendedBy: null,
      suspensionReason: null,
    },
  });
  
  // Create audit log
  await prisma.auditLog.create({
    data: {
      userId: req.user!.id,
      action: 'BUSINESS_REACTIVATED',
      resource: 'business',
      resourceId: req.params.id,
      metadata: { businessName: business.name },
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Get all devices
adminRouter.get('/devices', async (req: Request, res: Response) => {
  const { page = 1, limit = 20, status, search } = req.query;
  
  const where: any = {};
  
  if (status) {
    where.status = status;
  }
  
  if (search) {
    where.OR = [
      { uid: { contains: search as string, mode: 'insensitive' } },
      { name: { contains: search as string, mode: 'insensitive' } },
    ];
  }
  
  const [devices, total] = await Promise.all([
    prisma.device.findMany({
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

// Get all users
adminRouter.get('/users', async (req: Request, res: Response) => {
  const { page = 1, limit = 20, role, search } = req.query;
  
  const where: any = {};
  
  if (role) {
    where.role = role;
  }
  
  if (search) {
    where.OR = [
      { name: { contains: search as string, mode: 'insensitive' } },
      { email: { contains: search as string, mode: 'insensitive' } },
      { phone: { contains: search as string, mode: 'insensitive' } },
    ];
  }
  
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        isActive: true,
        createdAt: true,
        lastLoginAt: true,
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.user.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: users,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get audit logs
adminRouter.get('/audit-logs', async (req: Request, res: Response) => {
  const { page = 1, limit = 20, action, resource, userId } = req.query;
  
  const where: any = {};
  
  if (action) {
    where.action = action;
  }
  
  if (resource) {
    where.resource = resource;
  }
  
  if (userId) {
    where.userId = userId;
  }
  
  const [logs, total] = await Promise.all([
    prisma.auditLog.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.auditLog.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: logs,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get system settings
adminRouter.get('/settings', async (req: Request, res: Response) => {
  const settings = await prisma.systemSetting.findMany({
    orderBy: { key: 'asc' },
  });
  
  res.json({
    success: true,
    data: settings,
  });
});

// Update system setting
adminRouter.put('/settings/:key', async (req: Request, res: Response) => {
  const schema = z.object({
    value: z.any(),
    description: z.string().optional(),
  });
  
  const input = schema.parse(req.body);
  
  const setting = await prisma.systemSetting.upsert({
    where: { key: req.params.key },
    update: {
      value: input.value,
      description: input.description,
    },
    create: {
      key: req.params.key,
      value: input.value,
      description: input.description,
    },
  });
  
  // Create audit log
  await prisma.auditLog.create({
    data: {
      userId: req.user!.id,
      action: 'SYSTEM_SETTING_UPDATED',
      resource: 'system_setting',
      resourceId: req.params.key,
      newValue: input.value,
    },
  });
  
  res.json({
    success: true,
    data: setting,
  });
});
