import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { NotFoundError } from '../middleware/error';

export const notificationRouter = Router();

// Get user notifications
notificationRouter.get('/', async (req: Request, res: Response) => {
  const { page = 1, limit = 20, type, unreadOnly } = req.query;
  
  const where: any = {
    userId: req.user!.id,
  };
  
  if (type) {
    where.type = type;
  }
  
  if (unreadOnly === 'true') {
    where.isRead = false;
  }
  
  const [notifications, total, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where,
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.notification.count({ where }),
    prisma.notification.count({
      where: {
        userId: req.user!.id,
        isRead: false,
      },
    }),
  ]);
  
  res.json({
    success: true,
    data: notifications,
    unreadCount,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get unread count
notificationRouter.get('/unread-count', async (req: Request, res: Response) => {
  const count = await prisma.notification.count({
    where: {
      userId: req.user!.id,
      isRead: false,
    },
  });
  
  res.json({
    success: true,
    data: { count },
  });
});

// Mark notification as read
notificationRouter.put('/:id/read', async (req: Request, res: Response) => {
  const notification = await prisma.notification.findUnique({
    where: { id: req.params.id },
  });
  
  if (!notification) {
    throw new NotFoundError('Notification not found');
  }
  
  if (notification.userId !== req.user!.id) {
    return res.status(403).json({
      success: false,
      error: {
        code: 'FORBIDDEN',
        message: 'Access denied',
        statusCode: 403,
      },
    });
  }
  
  const updated = await prisma.notification.update({
    where: { id: req.params.id },
    data: {
      isRead: true,
      readAt: new Date(),
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Mark all notifications as read
notificationRouter.put('/read-all', async (req: Request, res: Response) => {
  await prisma.notification.updateMany({
    where: {
      userId: req.user!.id,
      isRead: false,
    },
    data: {
      isRead: true,
      readAt: new Date(),
    },
  });
  
  res.json({
    success: true,
    message: 'All notifications marked as read',
  });
});

// Delete notification
notificationRouter.delete('/:id', async (req: Request, res: Response) => {
  const notification = await prisma.notification.findUnique({
    where: { id: req.params.id },
  });
  
  if (!notification) {
    throw new NotFoundError('Notification not found');
  }
  
  if (notification.userId !== req.user!.id) {
    return res.status(403).json({
      success: false,
      error: {
        code: 'FORBIDDEN',
        message: 'Access denied',
        statusCode: 403,
      },
    });
  }
  
  await prisma.notification.delete({
    where: { id: req.params.id },
  });
  
  res.json({
    success: true,
    message: 'Notification deleted',
  });
});

// Update notification preferences
notificationRouter.put('/preferences', async (req: Request, res: Response) => {
  const schema = z.object({
    push: z.boolean().optional(),
    email: z.boolean().optional(),
    sms: z.boolean().optional(),
    offers: z.boolean().optional(),
    shopUpdates: z.boolean().optional(),
    securityAlerts: z.boolean().optional(),
    fireAlerts: z.boolean().optional(),
  });
  
  const input = schema.parse(req.body);
  
  // Update customer preferences
  const customer = await prisma.customer.findUnique({
    where: { userId: req.user!.id },
  });
  
  if (customer) {
    await prisma.customer.update({
      where: { userId: req.user!.id },
      data: {
        notificationPrefs: input,
      },
    });
  }
  
  res.json({
    success: true,
    message: 'Notification preferences updated',
  });
});
