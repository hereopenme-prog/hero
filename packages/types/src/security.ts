export enum SecurityEventType {
  MOTION_DETECTED = 'MOTION_DETECTED',
  DOOR_OPENED = 'DOOR_OPENED',
  DOOR_CLOSED = 'DOOR_CLOSED',
  WINDOW_OPENED = 'WINDOW_OPENED',
  VIBRATION_DETECTED = 'VIBRATION_DETECTED',
  BREACH_DETECTED = 'BREACH_DETECTED',
  THEFT_ATTEMPT = 'THEFT_ATTEMPT',
  UNAUTHORIZED_ACCESS = 'UNAUTHORIZED_ACCESS',
  CUSTOMER_DEFINED = 'CUSTOMER_DEFINED',
}

export enum AlertSeverity {
  NORMAL = 'NORMAL',
  WARNING = 'WARNING',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export enum AlertStatus {
  ACTIVE = 'ACTIVE',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  RESOLVED = 'RESOLVED',
  DISMISSED = 'DISMISSED',
}

export interface SecurityEvent {
  id: string;
  shopId: string;
  deviceId?: string | null;
  type: SecurityEventType;
  severity: AlertSeverity;
  description?: string | null;
  payload?: any;
  imageUrl?: string | null;
  isAcknowledged: boolean;
  acknowledgedBy?: string | null;
  acknowledgedAt?: Date | null;
  isResolved: boolean;
  resolvedBy?: string | null;
  resolvedAt?: Date | null;
  resolution?: string | null;
  metadata?: any;
  createdAt: Date;
}

export interface Alert {
  id: string;
  shopId?: string | null;
  deviceId?: string | null;
  type: string;
  severity: AlertSeverity;
  title: string;
  message: string;
  metadata?: any;
  status: AlertStatus;
  acknowledgedBy?: string | null;
  acknowledgedAt?: Date | null;
  resolvedBy?: string | null;
  resolvedAt?: Date | null;
  resolution?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSecurityEventInput {
  shopId: string;
  deviceId?: string;
  type: SecurityEventType;
  severity?: AlertSeverity;
  description?: string;
  payload?: any;
  imageUrl?: string;
}
