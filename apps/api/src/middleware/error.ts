import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  statusCode?: number;
  code?: string;
  details?: any;
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', err);
  
  // Don't expose internal errors in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  const statusCode = err.statusCode || 500;
  const code = err.code || 'INTERNAL_ERROR';
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        details: err.details,
        statusCode: 400,
      },
    });
  }
  
  if (err.name === 'NotFoundError') {
    return res.status(404).json({
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: err.message || 'Resource not found',
        statusCode: 404,
      },
    });
  }
  
  if (err.name === 'ConflictError') {
    return res.status(409).json({
      success: false,
      error: {
        code: 'CONFLICT',
        message: err.message || 'Resource conflict',
        statusCode: 409,
      },
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: err.message || 'Unauthorized',
        statusCode: 401,
      },
    });
  }
  
  if (err.name === 'ForbiddenError') {
    return res.status(403).json({
      success: false,
      error: {
        code: 'FORBIDDEN',
        message: err.message || 'Forbidden',
        statusCode: 403,
      },
    });
  }
  
  // Generic error response
  res.status(statusCode).json({
    success: false,
    error: {
      code,
      message: isProduction ? 'Internal server error' : err.message,
      statusCode,
    },
  });
}

export class ValidationError extends Error {
  statusCode = 400;
  code = 'VALIDATION_ERROR';
  details: any;
  
  constructor(message: string, details?: any) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }
}

export class NotFoundError extends Error {
  statusCode = 404;
  code = 'NOT_FOUND';
  
  constructor(message: string = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends Error {
  statusCode = 409;
  code = 'CONFLICT';
  
  constructor(message: string = 'Resource conflict') {
    super(message);
    this.name = 'ConflictError';
  }
}

export class UnauthorizedError extends Error {
  statusCode = 401;
  code = 'UNAUTHORIZED';
  
  constructor(message: string = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  statusCode = 403;
  code = 'FORBIDDEN';
  
  constructor(message: string = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
  }
}
