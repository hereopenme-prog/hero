import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError, ForbiddenError } from '../middleware/error';
import { requirePermission } from '../middleware/auth';

export const commandRouter = Router();

const createCommandSchema = z.object({
  deviceId: z.string().uuid(),
  type: z.enum(['OPEN', 'CLOSED', 'PING', 'SYNC', 'RESTART', 'FIRMWARE_UPDATE']),
  payload: z.any().optional(),
  timeoutMs: z.number().min(1000).max(300000).optional(),
});

// Send command to device
commandRouter.post('/', async (req: Request, res: Response) => {
  const input = createCommandSchema.parse(req.body);
  
  const device = await prisma.device.findUnique({
    where: { id: input.deviceId },
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
  
  // Create command record
  const command = await prisma.deviceCommand.create({
    data: {
      deviceId: input.deviceId,
      type: input.type,
      status: 'REQUESTED',
      payload: input.payload,
      requestedBy: req.user!.id,
      timeoutMs: input.timeoutMs || 30000,
    },
  });
  
  // Send command to device via IoT adapter
  const iotAdapter = req.app.locals.iotAdapter;
  
  if (iotAdapter) {
    const result = await iotAdapter.sendCommand(
      input.deviceId,
      input.type,
      {
        commandId: command.id,
        ...input.payload,
      }
    );
    
    if (result.success) {
      await prisma.deviceCommand.update({
        where: { id: command.id },
        data: {
          status: 'SENT',
          sentAt: new Date(),
        },
      });
      
      // Create command log
      await prisma.deviceCommandLog.create({
        data: {
          commandId: command.id,
          deviceId: input.deviceId,
          action: 'COMMAND_SENT',
          status: 'SENT',
          payload: input.payload,
        },
      });
    } else {
      await prisma.deviceCommand.update({
        where: { id: command.id },
        data: {
          status: 'FAILED',
          failedAt: new Date(),
          error: result.error,
        },
      });
    }
  }
  
  res.status(201).json({
    success: true,
    data: command,
  });
});

// List commands
commandRouter.get('/', async (req: Request, res: Response) => {
  const { deviceId, type, status, page = 1, limit = 20 } = req.query;
  
  const where: any = {};
  
  if (deviceId) {
    where.deviceId = deviceId;
  }
  
  if (type) {
    where.type = type;
  }
  
  if (status) {
    where.status = status;
  }
  
  // If user is not admin, filter by their devices
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    where.device = {
      shop: {
        business: {
          users: {
            some: { userId: req.user!.id },
          },
        },
      },
    };
  }
  
  const [commands, total] = await Promise.all([
    prisma.deviceCommand.findMany({
      where,
      include: {
        device: {
          select: {
            id: true,
            uid: true,
            name: true,
          },
        },
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
    prisma.deviceCommand.count({ where }),
  ]);
  
  res.json({
    success: true,
    data: commands,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Get command by ID
commandRouter.get('/:id', async (req: Request, res: Response) => {
  const command = await prisma.deviceCommand.findUnique({
    where: { id: req.params.id },
    include: {
      device: {
        select: {
          id: true,
          uid: true,
          name: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      logs: true,
    },
  });
  
  if (!command) {
    throw new NotFoundError('Command not found');
  }
  
  res.json({
    success: true,
    data: command,
  });
});

// Cancel command
commandRouter.post('/:id/cancel', async (req: Request, res: Response) => {
  const command = await prisma.deviceCommand.findUnique({
    where: { id: req.params.id },
  });
  
  if (!command) {
    throw new NotFoundError('Command not found');
  }
  
  if (command.status !== 'REQUESTED' && command.status !== 'SENT') {
    throw new ValidationError('Command cannot be cancelled');
  }
  
  const updated = await prisma.deviceCommand.update({
    where: { id: req.params.id },
    data: {
      status: 'FAILED',
      failedAt: new Date(),
      error: 'Cancelled by user',
    },
  });
  
  res.json({
    success: true,
    data: updated,
  });
});

// Get command logs
commandRouter.get('/:id/logs', async (req: Request, res: Response) => {
  const logs = await prisma.deviceCommandLog.findMany({
    where: { commandId: req.params.id },
    orderBy: { timestamp: 'asc' },
  });
  
  res.json({
    success: true,
    data: logs,
  });
});
