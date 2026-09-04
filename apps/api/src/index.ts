import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { WebSocketServer, WebSocket } from 'ws';
import { createServer } from 'http';
import { getEnv } from '@hereopen/config';
import { prisma } from '@hereopen/database';
import { SimulatedDeviceAdapter } from '@hereopen/iot';
import { createNotificationService } from '@hereopen/notifications';
import { authRouter } from './routes/auth';
import { userRouter } from './routes/users';
import { businessRouter } from './routes/businesses';
import { shopRouter } from './routes/shops';
import { deviceRouter } from './routes/devices';
import { commandRouter } from './routes/commands';
import { offerRouter } from './routes/offers';
import { announcementRouter } from './routes/announcements';
import { customerRouter } from './routes/customers';
import { analyticsRouter } from './routes/analytics';
import { adminRouter } from './routes/admin';
import { iotRouter } from './routes/iot';
import { notificationRouter } from './routes/notifications';
import { authMiddleware, errorHandler, rateLimiter } from './middleware';

const app = express();
const env = getEnv();
const server = createServer(app);

// Initialize IoT adapter (simulated for development)
const iotAdapter = new SimulatedDeviceAdapter();

// Initialize notification service
const notificationService = createNotificationService();

// Make services available to routes
app.locals.iotAdapter = iotAdapter;
app.locals.notificationService = notificationService;
app.locals.prisma = prisma;

// Middleware
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(morgan('combined'));
app.use(rateLimiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/users', authMiddleware, userRouter);
app.use('/api/businesses', authMiddleware, businessRouter);
app.use('/api/shops', authMiddleware, shopRouter);
app.use('/api/devices', authMiddleware, deviceRouter);
app.use('/api/commands', authMiddleware, commandRouter);
app.use('/api/offers', authMiddleware, offerRouter);
app.use('/api/announcements', authMiddleware, announcementRouter);
app.use('/api/customers', authMiddleware, customerRouter);
app.use('/api/analytics', authMiddleware, analyticsRouter);
app.use('/api/admin', authMiddleware, adminRouter);
app.use('/api/iot', iotRouter);
app.use('/api/notifications', authMiddleware, notificationRouter);

// Public routes (no auth required)
app.get('/api/shop/:slug/status', async (req, res) => {
  try {
    const shop = await prisma.shop.findFirst({
      where: { slug: req.params.slug },
      select: {
        id: true,
        name: true,
        status: true,
        lastStatusChange: true,
        lastStatusSource: true,
      },
    });
    
    if (!shop) {
      return res.status(404).json({ error: 'Shop not found' });
    }
    
    res.json(shop);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling
app.use(errorHandler);

// WebSocket server for real-time updates
const wss = new WebSocketServer({ server, path: '/ws' });

const clients = new Map<string, Set<WebSocket>>();

wss.on('connection', (ws, req) => {
  console.log('WebSocket client connected');
  
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString());
      
      // Handle subscription to shop updates
      if (message.type === 'subscribe' && message.shopId) {
        if (!clients.has(message.shopId)) {
          clients.set(message.shopId, new Set());
        }
        clients.get(message.shopId)!.add(ws);
        ws.send(JSON.stringify({ type: 'subscribed', shopId: message.shopId }));
      }
      
      // Handle unsubscription
      if (message.type === 'unsubscribe' && message.shopId) {
        clients.get(message.shopId)?.delete(ws);
        ws.send(JSON.stringify({ type: 'unsubscribed', shopId: message.shopId }));
      }
    } catch (error) {
      console.error('WebSocket message error:', error);
    }
  });
  
  ws.on('close', () => {
    // Remove client from all subscriptions
    for (const [shopId, shopClients] of clients) {
      shopClients.delete(ws);
      if (shopClients.size === 0) {
        clients.delete(shopId);
      }
    }
  });
});

// Export for testing
export { app, server, wss, clients };

// Start server
const PORT = env.API_PORT;
server.listen(PORT, () => {
  console.log(`HERE OPEN API server running on port ${PORT}`);
  console.log(`WebSocket server running on ws://localhost:${PORT}/ws`);
});
