import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '@hereopen/auth';
import { hasPermission } from '@hereopen/auth';
import type { UserRole } from '@hereopen/types';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email?: string;
        phone?: string;
        role: UserRole;
      };
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Missing or invalid authorization header',
        statusCode: 401,
      },
    });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const payload = verifyAccessToken(token);
    
    req.user = {
      id: payload.userId,
      email: payload.email,
      phone: payload.phone,
      role: payload.role as UserRole,
    };
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid or expired token',
        statusCode: 401,
      },
    });
  }
}

export function requirePermission(resource: string, action: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required',
          statusCode: 401,
        },
      });
    }
    
    const allowed = hasPermission(req.user.role, resource, action, {
      userId: req.user.id,
    });
    
    if (!allowed) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Insufficient permissions',
          statusCode: 403,
        },
      });
    }
    
    next();
  };
}

export function requireRole(...roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required',
          statusCode: 401,
        },
      });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Insufficient role',
          statusCode: 403,
        },
      });
    }
    
    next();
  };
}
