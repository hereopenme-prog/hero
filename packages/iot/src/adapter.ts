import type { IoTEvent, IoTEventType, EventSeverity } from '@hereopen/types';

export interface DeviceAdapter {
  /**
   * Register a new device with the IoT platform
   */
  registerDevice(uid: string, credentials: DeviceCredentials): Promise<boolean>;
  
  /**
   * Authenticate a device and return an auth token
   */
  authenticateDevice(uid: string): Promise<string | null>;
  
  /**
   * Send a command to a device
   */
  sendCommand(
    deviceId: string,
    command: string,
    payload?: Record<string, any>
  ): Promise<CommandResult>;
  
  /**
   * Start listening for device events
   */
  onEvent(callback: (event: IoTEvent) => void): void;
  
  /**
   * Process a heartbeat from a device
   */
  processHeartbeat(deviceId: string, data: HeartbeatData): Promise<void>;
  
  /**
   * Update device firmware
   */
  updateFirmware(deviceId: string, version: string, fileUrl: string): Promise<boolean>;
  
  /**
   * Get device status
   */
  getDeviceStatus(deviceId: string): Promise<DeviceStatus | null>;
  
  /**
   * Check if device is online
   */
  isDeviceOnline(deviceId: string): Promise<boolean>;
}

export interface DeviceCredentials {
  publicKey?: string;
  privateKey?: string;
  authToken?: string;
  mqttUsername?: string;
  mqttPassword?: string;
}

export interface CommandResult {
  success: boolean;
  commandId?: string;
  error?: string;
  response?: any;
}

export interface HeartbeatData {
  uptime?: number;
  signalStrength?: number;
  networkType?: string;
  batteryLevel?: number;
  temperature?: number;
  firmwareVersion?: string;
  metadata?: Record<string, any>;
}

export interface DeviceStatus {
  deviceId: string;
  uid: string;
  status: 'ONLINE' | 'OFFLINE' | 'WARNING' | 'CRITICAL';
  lastHeartbeat?: Date;
  lastSeen?: Date;
  signalStrength?: number;
  batteryLevel?: number;
  firmwareVersion?: string;
}
