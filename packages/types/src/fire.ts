export enum FireEventType {
  FIRE_DETECTED = 'FIRE_DETECTED',
  SMOKE_DETECTED = 'SMOKE_DETECTED',
  HIGH_TEMPERATURE = 'HIGH_TEMPERATURE',
  HEAT_DETECTED = 'HEAT_DETECTED',
  SENSOR_ERROR = 'SENSOR_ERROR',
  SENSOR_OFFLINE = 'SENSOR_OFFLINE',
  CUSTOM = 'CUSTOM',
}

export interface FireEvent {
  id: string;
  shopId: string;
  deviceId?: string | null;
  type: FireEventType;
  severity: string;
  temperature?: number | null;
  smokeLevel?: number | null;
  description?: string | null;
  payload?: any;
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

export interface CreateFireEventInput {
  shopId: string;
  deviceId?: string;
  type: FireEventType;
  severity?: string;
  temperature?: number;
  smokeLevel?: number;
  description?: string;
  payload?: any;
}

export interface FireThreshold {
  temperature: number;
  smokeLevel: number;
  humidity?: number;
}
