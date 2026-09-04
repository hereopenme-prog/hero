import { randomUUID } from 'crypto';
import type {
  DeviceAdapter,
  DeviceCredentials,
  CommandResult,
  HeartbeatData,
  DeviceStatus,
} from './adapter';
import type { IoTEvent, IoTEventType, EventSeverity } from '@hereopen/types';

/**
 * Simulated device adapter for development and testing.
 * 
 * IMPORTANT: This adapter simulates device behavior for development purposes.
 * It should NOT be used in production. Replace with actual hardware integration
 * when device specifications are provided.
 * 
 * The simulated adapter:
 * - Pretends to register devices
 * - Returns success for commands
 * - Generates fake heartbeats
 * - Does NOT connect to real hardware
 */
export class SimulatedDeviceAdapter implements DeviceAdapter {
  private devices: Map<string, DeviceStatus> = new Map();
  private eventCallbacks: ((event: IoTEvent) => void)[] = [];
  private commandCounter: number = 0;

  async registerDevice(uid: string, credentials: DeviceCredentials): Promise<boolean> {
    console.log(`[SIMULATED] Registering device: ${uid}`);
    
    this.devices.set(uid, {
      deviceId: randomUUID(),
      uid,
      status: 'OFFLINE',
      lastHeartbeat: undefined,
      lastSeen: undefined,
      firmwareVersion: '1.0.0',
    });
    
    return true;
  }

  async authenticateDevice(uid: string): Promise<string | null> {
    console.log(`[SIMULATED] Authenticating device: ${uid}`);
    return `simulated-token-${uid}-${Date.now()}`;
  }

  async sendCommand(
    deviceId: string,
    command: string,
    payload?: Record<string, any>
  ): Promise<CommandResult> {
    this.commandCounter++;
    const commandId = `SIM-CMD-${this.commandCounter}`;
    
    console.log(`[SIMULATED] Sending command ${command} to device ${deviceId}`);
    console.log(`[SIMULATED] Command ID: ${commandId}`);
    
    if (payload) {
      console.log(`[SIMULATED] Payload:`, payload);
    }
    
    // Simulate command acknowledgment after a short delay
    setTimeout(() => {
      this.emitEvent({
        id: randomUUID(),
        deviceId,
        type: 'COMMAND_ACKNOWLEDGED' as IoTEventType,
        severity: 'INFO' as EventSeverity,
        payload: { commandId, command, status: 'acknowledged' },
        processed: false,
        createdAt: new Date(),
      });
    }, 1000);
    
    // Simulate command completion after a longer delay
    setTimeout(() => {
      this.emitEvent({
        id: randomUUID(),
        deviceId,
        type: 'COMMAND_COMPLETED' as IoTEventType,
        severity: 'INFO' as EventSeverity,
        payload: { commandId, command, status: 'completed' },
        processed: false,
        createdAt: new Date(),
      });
    }, 3000);
    
    return {
      success: true,
      commandId,
      response: { status: 'sent', commandId },
    };
  }

  onEvent(callback: (event: IoTEvent) => void): void {
    this.eventCallbacks.push(callback);
  }

  async processHeartbeat(deviceId: string, data: HeartbeatData): Promise<void> {
    console.log(`[SIMULATED] Processing heartbeat from device ${deviceId}`);
    
    // Update device status
    const device = this.devices.get(deviceId);
    if (device) {
      device.status = 'ONLINE';
      device.lastHeartbeat = new Date();
      device.lastSeen = new Date();
      device.signalStrength = data.signalStrength || 85;
      device.batteryLevel = data.batteryLevel || 100;
      device.firmwareVersion = data.firmwareVersion || device.firmwareVersion;
    }
    
    // Emit heartbeat event
    this.emitEvent({
      id: randomUUID(),
      deviceId,
      type: 'HEARTBEAT',
      severity: 'INFO',
      payload: data,
      processed: false,
      createdAt: new Date(),
    });
  }

  async updateFirmware(deviceId: string, version: string, fileUrl: string): Promise<boolean> {
    console.log(`[SIMULATED] Updating firmware for device ${deviceId} to version ${version}`);
    
    const device = this.devices.get(deviceId);
    if (device) {
      device.firmwareVersion = version;
    }
    
    this.emitEvent({
      id: randomUUID(),
      deviceId,
      type: 'FIRMWARE_UPDATED',
      severity: 'INFO',
      payload: { version, fileUrl },
      processed: false,
      createdAt: new Date(),
    });
    
    return true;
  }

  async getDeviceStatus(deviceId: string): Promise<DeviceStatus | null> {
    // Find device by ID or UID
    for (const device of this.devices.values()) {
      if (device.deviceId === deviceId || device.uid === deviceId) {
        return device;
      }
    }
    return null;
  }

  async isDeviceOnline(deviceId: string): Promise<boolean> {
    const status = await this.getDeviceStatus(deviceId);
    return status?.status === 'ONLINE';
  }

  /**
   * Simulate a device coming online
   */
  simulateDeviceOnline(uid: string): void {
    const device = this.devices.get(uid);
    if (device) {
      device.status = 'ONLINE';
      device.lastOnlineAt = new Date();
      device.lastSeen = new Date();
      
      this.emitEvent({
        id: randomUUID(),
        deviceId: device.deviceId,
        type: 'DEVICE_ONLINE',
        severity: 'INFO',
        payload: { uid },
        processed: false,
        createdAt: new Date(),
      });
    }
  }

  /**
   * Simulate a device going offline
   */
  simulateDeviceOffline(uid: string): void {
    const device = this.devices.get(uid);
    if (device) {
      device.status = 'OFFLINE';
      device.lastOfflineAt = new Date();
      
      this.emitEvent({
        id: randomUUID(),
        deviceId: device.deviceId,
        type: 'DEVICE_OFFLINE',
        severity: 'WARNING',
        payload: { uid },
        processed: false,
        createdAt: new Date(),
      });
    }
  }

  /**
   * Simulate a security event
   */
  simulateSecurityEvent(
    uid: string,
    eventType: string,
    severity: EventSeverity = 'WARNING'
  ): void {
    const device = this.devices.get(uid);
    if (device) {
      this.emitEvent({
        id: randomUUID(),
        deviceId: device.deviceId,
        type: eventType as IoTEventType,
        severity,
        payload: { simulated: true, eventType },
        processed: false,
        createdAt: new Date(),
      });
    }
  }

  /**
   * Simulate a fire event
   */
  simulateFireEvent(
    uid: string,
    eventType: string,
    temperature?: number,
    smokeLevel?: number
  ): void {
    const device = this.devices.get(uid);
    if (device) {
      this.emitEvent({
        id: randomUUID(),
        deviceId: device.deviceId,
        type: eventType as IoTEventType,
        severity: temperature && temperature > 60 ? 'CRITICAL' : 'WARNING',
        payload: {
          simulated: true,
          eventType,
          temperature,
          smokeLevel,
        },
        processed: false,
        createdAt: new Date(),
      });
    }
  }

  private emitEvent(event: IoTEvent): void {
    for (const callback of this.eventCallbacks) {
      try {
        callback(event);
      } catch (error) {
        console.error('[SIMULATED] Error in event callback:', error);
      }
    }
  }
}

// Export a singleton instance for development
export const simulatedAdapter = new SimulatedDeviceAdapter();
