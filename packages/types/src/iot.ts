export enum IoTEventType {
  SHOP_OPENED = 'SHOP_OPENED',
  SHOP_CLOSED = 'SHOP_CLOSED',
  DEVICE_ONLINE = 'DEVICE_ONLINE',
  DEVICE_OFFLINE = 'DEVICE_OFFLINE',
  HEARTBEAT = 'HEARTBEAT',
  FIRE_DETECTED = 'FIRE_DETECTED',
  SMOKE_DETECTED = 'SMOKE_DETECTED',
  HIGH_TEMPERATURE = 'HIGH_TEMPERATURE',
  SECURITY_BREACH = 'SECURITY_BREACH',
  THEFT_ALERT = 'THEFT_ALERT',
  COMMAND_SENT = 'COMMAND_SENT',
  COMMAND_ACKNOWLEDGED = 'COMMAND_ACKNOWLEDGED',
  COMMAND_COMPLETED = 'COMMAND_COMPLETED',
  COMMAND_FAILED = 'COMMAND_FAILED',
  FIRMWARE_UPDATED = 'FIRMWARE_UPDATED',
  SENSOR_READING = 'SENSOR_READING',
  CUSTOM = 'CUSTOM',
}

export enum EventSeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
}

export interface IoTEvent {
  id: string;
  shopId?: string | null;
  deviceId: string;
  type: IoTEventType;
  severity: EventSeverity;
  payload?: any;
  processed: boolean;
  processedAt?: Date | null;
  metadata?: any;
  createdAt: Date;
}

export interface CreateIoTEventInput {
  shopId?: string;
  deviceId: string;
  type: IoTEventType;
  severity?: EventSeverity;
  payload?: any;
  metadata?: any;
}

export interface DeviceAdapter {
  registerDevice(uid: string, credentials: any): Promise<boolean>;
  authenticateDevice(uid: string): Promise<string>;
  sendCommand(deviceId: string, command: string, payload?: any): Promise<boolean>;
  receiveEvent(callback: (event: IoTEvent) => void): void;
  processHeartbeat(deviceId: string, data: any): Promise<void>;
  updateFirmware(deviceId: string, version: string): Promise<boolean>;
}

export interface IoTConfig {
  brokerUrl: string;
  username?: string;
  password?: string;
  clientId: string;
  deviceSecretKey: string;
  commandTimeoutMs: number;
  heartbeatIntervalMs: number;
}
