import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { NotFoundError, ForbiddenError } from '../middleware/error';

export const customerRouter = Router();

// Get customers following a shop
customerRouter.get('/shop/:shopId', async (req: Request, res: Response) => {
  const { page = 1, limit = 20 } = req.query;
  
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
  
  const [follows, total] = await Promise.all([
    prisma.customerShopFollow.findMany({
      where: {
        shopId: req.params.shopId,
        isActive: true,
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            phone: true,
            email: true,
            lastActiveAt: true,
          },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { followedAt: 'desc' },
    }),
    prisma.customerShopFollow.count({
      where: {
        shopId: req.params.shopId,
        isActive: true,
      },
    }),
  ]);
  
  res.json({
    success: true,
    data: follows.map((f) => ({
      ...f.customer,
      followedAt: f.followedAt,
      notifyOnOffers: f.notifyOnOffers,
      notifyOnUpdates: f.notifyOnUpdates,
    })),
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  });
});

// Follow a shop (customer action)
customerRouter.post('/follow/:shopId', async (req: Request, res: Response) => {
  const shop = await prisma.shop.findUnique({
    where: { id: req.params.shopId },
  });
  
  if (!shop) {
    throw new NotFoundError('Shop not found');
  }
  
  // Get or create customer profile
  let customer = await prisma.customer.findUnique({
    where: { userId: req.user!.id },
  });
  
  if (!customer) {
    customer = await prisma.customer.create({
      data: {
        userId: req.user!.id,
        phone: req.user!.phone,
        email: req.user!.email,
        name: req.user!.email?.split('@')[0] || 'Customer',
      },
    });
  }
  
  // Check if already following
  const existingFollow = await prisma.customerShopFollow.findUnique({
    where: {
      customerId_shopId: {
        customerId: customer.id,
        shopId: req.params.shopId,
      },
    },
  });
  
  if (existingFollow) {
    if (!existingFollow.isActive) {
      // Reactivate follow
      const updated = await prisma.customerShopFollow.update({
        where: {
          customerId_shopId: {
            customerId: customer.id,
            shopId: req.params.shopId,
          },
        },
        data: {
          isActive: true,
          followedAt: new Date(),
        },
      });
      
      return res.json({
        success: true,
        data: updated,
      });
    }
    
    return res.json({
      success: true,
      message: 'Already following this shop',
    });
  }
  
  // Create follow
  const follow = await prisma.customerShopFollow.create({
    data: {
      customerId: customer.id,
      shopId: req.params.shopId,
    },
  });
  
  res.status(201).json({
    success: true,
    data: follow,
  });
});

// Unfollow a shop (customer action)
customerRouter.post('/unfollow/:shopId', async (req: Request, res: Response) => {
  const customer = await prisma.customer.findUnique({
    where: { userId: req.user!.id },
  });
  
  if (!customer) {
    throw new NotFoundError('Customer profile not found');
  }
  
  const follow = await prisma.customerShopFollow.findUnique({
    where: {
      customerId_shopId: {
        customerId: customer.id,
        shopId: req.params.shopId,
      },
    },
  });
  
  if (!follow) {
    throw new NotFoundError('Not following this shop');
  }
  
  await prisma.customerShopFollow.update({
    where: {
      customerId_shopId: {
        customerId: customer.id,
        shopId: req.params.shopId,
      },
    },
    data: {
      isActive: false,
    },
  });
  
  res.json({
    success: true,
    message: 'Unfollowed shop successfully',
  });
});

// Get followed shops (customer action)
customerRouter.get('/following', async (req: Request, res: Response) => {
  const customer = await prisma.customer.findUnique({
    where: { userId: req.user!.id },
  });
  
  if (!customer) {
    return res.json({
      success: true,
      data: [],
    });
  }
  
  const follows = await prisma.customerShopFollow.findMany({
    where: {
      customerId: customer.id,
      isActive: true,
    },
    include: {
      shop: {
        select: {
          id: true,
          name: true,
          slug: true,
          status: true,
          address: true,
          city: true,
        },
      },
    },
    orderBy: { followedAt: 'desc' },
  });
  
  res.json({
    success: true,
    data: follows.map((f) => ({
      ...f.shop,
      followedAt: f.followedAt,
    })),
  });
});
