export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  pagination?: PaginationMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
  statusCode: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedRequest {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

export interface bulkAction {
  ids: string[];
  action: string;
  metadata?: any;
}

export type ErrorCode =
  | 'VALIDATION_ERROR'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'RATE_LIMITED'
  | 'INTERNAL_ERROR'
  | 'BAD_REQUEST'
  | 'SERVICE_UNAVAILABLE';

export interface RequestWithUser {
  user: {
    id: string;
    email?: string;
    phone?: string;
    role: string;
  };
  ip?: string;
  userAgent?: string;
}

export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: Date;
  source?: string;
}

export interface SSEEvent {
  event: string;
  data: any;
  id?: string;
  retry?: number;
}
