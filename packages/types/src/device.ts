export enum DeviceStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
  ACTIVATING = 'ACTIVATING',
  DEACTIVATED = 'DEACTIVATED',
}

export enum SIMStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  EXPIRED = 'EXPIRED',
}

export enum CommandType {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  PING = 'PING',
  SYNC = 'SYNC',
  RESTART = 'RESTART',
  FIRMWARE_UPDATE = 'FIRMWARE_UPDATE',
}

export enum CommandStatus {
  REQUESTED = 'REQUESTED',
  SENT = 'SENT',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  TIMEOUT = 'TIMEOUT',
}

export interface Device {
  id: string;
  uid: string;
  name?: string | null;
  shopId?: string | null;
  firmwareVersion?: string | null;
  hardwareVersion?: string | null;
  status: DeviceStatus;
  simNumber?: string | null;
  simProvider?: string | null;
  simStatus?: SIMStatus | null;
  networkType?: string | null;
  signalStrength?: number | null;
  ipAddress?: string | null;
  lastHeartbeat?: Date | null;
  lastSeen?: Date | null;
  lastOnlineAt?: Date | null;
  lastOfflineAt?: Date | null;
  powerSource?: string | null;
  batteryLevel?: number | null;
  isActive: boolean;
  isLocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDeviceInput {
  uid: string;
  name?: string;
  shopId?: string;
  firmwareVersion?: string;
  hardwareVersion?: string;
  simNumber?: string;
  simProvider?: string;
}

export interface UpdateDeviceInput {
  name?: string;
  shopId?: string;
  firmwareVersion?: string;
  isActive?: boolean;
}

export interface DeviceWithDetails extends Device {
  shop?: {
    id: string;
    name: string;
    status: string;
  };
  sensors?: Array<{
    id: string;
    type: string;
    name?: string;
    lastReading?: any;
  }>;
  _count?: {
    commands: number;
    heartbeats: number;
  };
}

export interface DeviceCommand {
  id: string;
  deviceId: string;
  type: CommandType;
  status: CommandStatus;
  payload?: any;
  requestedBy?: string;
  requestedAt: Date;
  sentAt?: Date | null;
  acknowledgedAt?: Date | null;
  completedAt?: Date | null;
  failedAt?: Date | null;
  response?: any;
  error?: string | null;
  timeoutMs: number;
  createdAt: Date;
}

export interface CreateCommandInput {
  deviceId: string;
  type: CommandType;
  payload?: any;
  timeoutMs?: number;
}

export interface DeviceHeartbeat {
  id: string;
  deviceId: string;
  timestamp: Date;
  uptime?: number | null;
  signalStrength?: number | null;
  networkType?: string | null;
  batteryLevel?: number | null;
  temperature?: number | null;
  firmwareVersion?: string | null;
  metadata?: any;
}
