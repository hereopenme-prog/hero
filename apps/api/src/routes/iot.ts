import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError } from '../middleware/error';

export const iotRouter = Router();

// Device heartbeat endpoint (called by IoT devices)
iotRouter.post('/heartbeat', async (req: Request, res: Response) => {
  const schema = z.object({
    deviceUid: z.string(),
    authToken: z.string(),
    data: z.object({
      uptime: z.number().optional(),
      signalStrength: z.number().optional(),
      networkType: z.string().optional(),
      batteryLevel: z.number().optional(),
      temperature: z.number().optional(),
      firmwareVersion: z.string().optional(),
    }).optional(),
  });
  
  const input = schema.parse(req.body);
  
  // Find device
  const device = await prisma.device.findUnique({
    where: { uid: input.deviceUid },
    include: {
      credentials: true,
    },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Verify auth token
  if (device.credentials?.authToken !== input.authToken) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid device credentials',
        statusCode: 401,
      },
    });
  }
  
  // Update device status
  await prisma.device.update({
    where: { id: device.id },
    data: {
      status: 'ONLINE',
      lastHeartbeat: new Date(),
      lastSeen: new Date(),
      lastOnlineAt: new Date(),
      signalStrength: input.data?.signalStrength,
      networkType: input.data?.networkType,
      batteryLevel: input.data?.batteryLevel,
      firmwareVersion: input.data?.firmwareVersion || device.firmwareVersion,
    },
  });
  
  // Create heartbeat record
  await prisma.deviceHeartbeat.create({
    data: {
      deviceId: device.id,
      uptime: input.data?.uptime,
      signalStrength: input.data?.signalStrength,
      networkType: input.data?.networkType,
      batteryLevel: input.data?.batteryLevel,
      temperature: input.data?.temperature,
      firmwareVersion: input.data?.firmwareVersion,
    },
  });
  
  // Create IoT event
  await prisma.ioTEvent.create({
    data: {
      deviceId: device.id,
      shopId: device.shopId,
      type: 'HEARTBEAT',
      severity: 'INFO',
      payload: input.data,
    },
  });
  
  res.json({
    success: true,
    message: 'Heartbeat received',
  });
});

// Device command acknowledgment (called by IoT devices)
iotRouter.post('/command/ack', async (req: Request, res: Response) => {
  const schema = z.object({
    deviceUid: z.string(),
    authToken: z.string(),
    commandId: z.string(),
    status: z.enum(['acknowledged', 'completed', 'failed']),
    response: z.any().optional(),
    error: z.string().optional(),
  });
  
  const input = schema.parse(req.body);
  
  // Find device
  const device = await prisma.device.findUnique({
    where: { uid: input.deviceUid },
    include: {
      credentials: true,
    },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Verify auth token
  if (device.credentials?.authToken !== input.authToken) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid device credentials',
        statusCode: 401,
      },
    });
  }
  
  // Find command
  const command = await prisma.deviceCommand.findUnique({
    where: { id: input.commandId },
  });
  
  if (!command) {
    throw new NotFoundError('Command not found');
  }
  
  // Update command status
  const updateData: any = {};
  
  if (input.status === 'acknowledged') {
    updateData.status = 'ACKNOWLEDGED';
    updateData.acknowledgedAt = new Date();
  } else if (input.status === 'completed') {
    updateData.status = 'COMPLETED';
    updateData.completedAt = new Date();
    updateData.response = input.response;
  } else if (input.status === 'failed') {
    updateData.status = 'FAILED';
    updateData.failedAt = new Date();
    updateData.error = input.error;
  }
  
  await prisma.deviceCommand.update({
    where: { id: input.commandId },
    data: updateData,
  });
  
  // Create command log
  await prisma.deviceCommandLog.create({
    data: {
      commandId: input.commandId,
      deviceId: device.id,
      action: `COMMAND_${input.status.toUpperCase()}`,
      status: input.status,
      response: input.response,
      error: input.error,
    },
  });
  
  // Create IoT event
  const eventType = input.status === 'acknowledged' 
    ? 'COMMAND_ACKNOWLEDGED'
    : input.status === 'completed'
    ? 'COMMAND_COMPLETED'
    : 'COMMAND_FAILED';
  
  await prisma.ioTEvent.create({
    data: {
      deviceId: device.id,
      shopId: device.shopId,
      type: eventType,
      severity: input.status === 'failed' ? 'WARNING' : 'INFO',
      payload: {
        commandId: input.commandId,
        status: input.status,
        response: input.response,
        error: input.error,
      },
    },
  });
  
  // If command is OPEN or CLOSED, update shop status
  if (input.status === 'completed' && (command.type === 'OPEN' || command.type === 'CLOSED')) {
    const newStatus = command.type === 'OPEN' ? 'OPEN' : 'CLOSED';
    
    if (device.shopId) {
      await prisma.shop.update({
        where: { id: device.shopId },
        data: {
          status: newStatus,
          lastStatusChange: new Date(),
          lastStatusSource: 'device',
        },
      });
      
      await prisma.shopStatusHistory.create({
        data: {
          shopId: device.shopId,
          status: newStatus,
          source: 'device',
          deviceId: device.id,
        },
      });
      
      // Emit WebSocket event
      const clients = req.app.locals.clients;
      if (clients) {
        const shopClients = clients.get(device.shopId);
        if (shopClients) {
          const message = JSON.stringify({
            type: 'shop:status:changed',
            payload: {
              shopId: device.shopId,
              status: newStatus,
              lastStatusChange: new Date(),
              source: 'device',
            },
          });
          
          for (const client of shopClients) {
            if (client.readyState === 1) {
              client.send(message);
            }
          }
        }
      }
    }
  }
  
  res.json({
    success: true,
    message: 'Command acknowledgment received',
  });
});

// Device event (called by IoT devices)
iotRouter.post('/event', async (req: Request, res: Response) => {
  const schema = z.object({
    deviceUid: z.string(),
    authToken: z.string(),
    type: z.string(),
    severity: z.enum(['INFO', 'WARNING', 'CRITICAL']).default('INFO'),
    payload: z.any().optional(),
  });
  
  const input = schema.parse(req.body);
  
  // Find device
  const device = await prisma.device.findUnique({
    where: { uid: input.deviceUid },
    include: {
      credentials: true,
    },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Verify auth token
  if (device.credentials?.authToken !== input.authToken) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid device credentials',
        statusCode: 401,
      },
    });
  }
  
  // Create IoT event
  const event = await prisma.ioTEvent.create({
    data: {
      deviceId: device.id,
      shopId: device.shopId,
      type: input.type as any,
      severity: input.severity,
      payload: input.payload,
    },
  });
  
  // Handle specific event types
  if (input.type === 'SECURITY_BREACH' || input.type === 'THEFT_ALERT') {
    await prisma.securityEvent.create({
      data: {
        shopId: device.shopId!,
        deviceId: device.id,
        type: input.type === 'THEFT_ALERT' ? 'THEFT_ATTEMPT' : 'BREACH_DETECTED',
        severity: input.severity,
        payload: input.payload,
      },
    });
    
    // Create alert
    await prisma.alert.create({
      data: {
        shopId: device.shopId,
        deviceId: device.id,
        type: 'SECURITY',
        severity: input.severity,
        title: 'Security Alert',
        message: `Security event detected: ${input.type}`,
        payload: input.payload,
      },
    });
  }
  
  if (input.type === 'FIRE_DETECTED' || input.type === 'SMOKE_DETECTED' || input.type === 'HIGH_TEMPERATURE') {
    await prisma.fireEvent.create({
      data: {
        shopId: device.shopId!,
        deviceId: device.id,
        type: input.type as any,
        severity: input.severity,
        temperature: input.payload?.temperature,
        smokeLevel: input.payload?.smokeLevel,
        payload: input.payload,
      },
    });
    
    // Create alert
    await prisma.alert.create({
      data: {
        shopId: device.shopId,
        deviceId: device.id,
        type: 'FIRE',
        severity: input.severity,
        title: 'Fire Alert',
        message: `Fire event detected: ${input.type}`,
        payload: input.payload,
      },
    });
  }
  
  res.json({
    success: true,
    message: 'Event received',
    eventId: event.id,
  });
});

// Simulate device event (development only)
iotRouter.post('/simulate', async (req: Request, res: Response) => {
  if (process.env.NODE_ENV !== 'development') {
    return res.status(403).json({
      success: false,
      error: {
        code: 'FORBIDDEN',
        message: 'Simulation only available in development',
        statusCode: 403,
      },
    });
  }
  
  const schema = z.object({
    deviceUid: z.string(),
    eventType: z.string(),
    payload: z.any().optional(),
  });
  
  const input = schema.parse(req.body);
  
  const device = await prisma.device.findUnique({
    where: { uid: input.deviceUid },
  });
  
  if (!device) {
    throw new NotFoundError('Device not found');
  }
  
  // Create simulated event
  const event = await prisma.ioTEvent.create({
    data: {
      deviceId: device.id,
      shopId: device.shopId,
      type: input.eventType as any,
      severity: 'INFO',
      payload: {
        ...input.payload,
        simulated: true,
      },
    },
  });
  
  res.json({
    success: true,
    message: 'Simulated event created',
    eventId: event.id,
  });
});
