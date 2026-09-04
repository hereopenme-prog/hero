import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { NotFoundError, ForbiddenError } from '../middleware/error';

export const analyticsRouter = Router();

// Get shop analytics
analyticsRouter.get('/shop/:shopId', async (req: Request, res: Response) => {
  const { period = 'monthly', startDate, endDate } = req.query;
  
  const shop = await prisma.shop.findUnique({
    where: { id: req.params.shopId },
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
  
  // Calculate date range
  const end = endDate ? new Date(endDate as string) : new Date();
  const start = startDate 
    ? new Date(startDate as string) 
    : new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  // Get analytics data
  const [
    statusHistory,
    offers,
    customerFollows,
    securityEvents,
    fireEvents,
    iotEvents,
  ] = await Promise.all([
    prisma.shopStatusHistory.findMany({
      where: {
        shopId: req.params.shopId,
        createdAt: { gte: start, lte: end },
      },
      orderBy: { createdAt: 'asc' },
    }),
    prisma.offer.findMany({
      where: {
        shopId: req.params.shopId,
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
        shopId: req.params.shopId,
        followedAt: { gte: start, lte: end },
      },
    }),
    prisma.securityEvent.count({
      where: {
        shopId: req.params.shopId,
        createdAt: { gte: start, lte: end },
      },
    }),
    prisma.fireEvent.count({
      where: {
        shopId: req.params.shopId,
        createdAt: { gte: start, lte: end },
      },
    }),
    prisma.ioTEvent.count({
      where: {
        shopId: req.params.shopId,
        createdAt: { gte: start, lte: end },
      },
    }),
  ]);
  
  // Calculate open/closed hours (simplified)
  let openHours = 0;
  let closedHours = 0;
  
  for (let i = 0; i < statusHistory.length; i++) {
    const current = statusHistory[i];
    const next = statusHistory[i + 1];
    
    const duration = next 
      ? (next.createdAt.getTime() - current.createdAt.getTime()) / (1000 * 60 * 60)
      : (end.getTime() - current.createdAt.getTime()) / (1000 * 60 * 60);
    
    if (current.status === 'OPEN') {
      openHours += duration;
    } else if (current.status === 'CLOSED') {
      closedHours += duration;
    }
  }
  
  res.json({
    success: true,
    data: {
      period,
      startDate: start,
      endDate: end,
      shop: {
        id: shop.id,
        name: shop.name,
        status: shop.status,
      },
      statusChanges: statusHistory.length,
      openHours: Math.round(openHours * 100) / 100,
      closedHours: Math.round(closedHours * 100) / 100,
      offers: {
        total: offers.length,
        totalViews: offers.reduce((sum, o) => sum + o.viewCount, 0),
        totalClicks: offers.reduce((sum, o) => sum + o.clickCount, 0),
      },
      customers: {
        newFollows: customerFollows,
      },
      events: {
        security: securityEvents,
        fire: fireEvents,
        iot: iotEvents,
      },
    },
  });
});

// Get business analytics
analyticsRouter.get('/business/:businessId', async (req: Request, res: Response) => {
  const { period = 'monthly', startDate, endDate } = req.query;
  
  const business = await prisma.business.findUnique({
    where: { id: req.params.businessId },
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
    : new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  // Get analytics data
  const [
    shops,
    offers,
    customers,
    devices,
    securityEvents,
    fireEvents,
  ] = await Promise.all([
    prisma.shop.findMany({
      where: { businessId: req.params.businessId },
      select: {
        id: true,
        name: true,
        status: true,
      },
    }),
    prisma.offer.findMany({
      where: {
        businessId: req.params.businessId,
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
        shop: { businessId: req.params.businessId },
        followedAt: { gte: start, lte: end },
      },
    }),
    prisma.device.findMany({
      where: {
        shop: { businessId: req.params.businessId },
      },
      select: {
        id: true,
        status: true,
      },
    }),
    prisma.securityEvent.count({
      where: {
        shop: { businessId: req.params.businessId },
        createdAt: { gte: start, lte: end },
      },
    }),
    prisma.fireEvent.count({
      where: {
        shop: { businessId: req.params.businessId },
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
      business: {
        id: business.id,
        name: business.name,
      },
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
        newFollows: customers,
      },
      devices: {
        total: devices.length,
        online: devices.filter((d) => d.status === 'ONLINE').length,
        offline: devices.filter((d) => d.status === 'OFFLINE').length,
      },
      events: {
        security: securityEvents,
        fire: fireEvents,
      },
    },
  });
});

// Get dashboard metrics (admin)
analyticsRouter.get('/dashboard', async (req: Request, res: Response) => {
  // Only admins can access dashboard metrics
  if (req.user!.role !== 'SUPER_ADMIN' && req.user!.role !== 'ADMIN') {
    throw new ForbiddenError('Access denied');
  }
  
  const [
    totalBusinesses,
    activeBusinesses,
    totalDevices,
    onlineDevices,
    offlineDevices,
    totalCustomers,
    securityEvents,
    fireEvents,
    totalOffers,
  ] = await Promise.all([
    prisma.business.count(),
    prisma.business.count({ where: { isActive: true } }),
    prisma.device.count(),
    prisma.device.count({ where: { status: 'ONLINE' } }),
    prisma.device.count({ where: { status: 'OFFLINE' } }),
    prisma.customer.count(),
    prisma.securityEvent.count({
      where: {
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      },
    }),
    prisma.fireEvent.count({
      where: {
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      },
    }),
    prisma.offer.count(),
  ]);
  
  res.json({
    success: true,
    data: {
      totalBusinesses,
      activeBusinesses,
      totalDevices,
      onlineDevices,
      offlineDevices,
      totalCustomers,
      securityEvents,
      fireEvents,
      totalOffers,
    },
  });
});
