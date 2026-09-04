import type { IoTEvent, IoTEventType, EventSeverity } from '@hereopen/types';

export interface EventProcessorConfig {
  onEventProcessed: (event: ProcessedEvent) => Promise<void>;
  thresholds?: EventThresholds;
}

export interface EventThresholds {
  temperature: {
    normal: number;
    warning: number;
    critical: number;
  };
  smoke: {
    normal: number;
    warning: number;
    critical: number;
  };
}

export interface ProcessedEvent extends IoTEvent {
  processedAt: Date;
  actions: EventAction[];
}

export interface EventAction {
  type: 'UPDATE_STATUS' | 'CREATE_ALERT' | 'NOTIFY_OWNER' | 'NOTIFY_ADMIN' | 'LOG';
  payload: Record<string, any>;
}

const DEFAULT_THRESHOLDS: EventThresholds = {
  temperature: {
    normal: 35,
    warning: 45,
    critical: 60,
  },
  smoke: {
    normal: 100,
    warning: 300,
    critical: 500,
  },
};

export class EventProcessor {
  private onEventProcessed: (event: ProcessedEvent) => Promise<void>;
  private thresholds: EventThresholds;

  constructor(config: EventProcessorConfig) {
    this.onEventProcessed = config.onEventProcessed;
    this.thresholds = config.thresholds || DEFAULT_THRESHOLDS;
  }

  async processEvent(event: IoTEvent): Promise<ProcessedEvent> {
    const actions: EventAction[] = [];
    
    // Process based on event type
    switch (event.type) {
      case 'SHOP_OPENED':
        actions.push(...this.processShopOpened(event));
        break;
      case 'SHOP_CLOSED':
        actions.push(...this.processShopClosed(event));
        break;
      case 'DEVICE_ONLINE':
        actions.push(...this.processDeviceOnline(event));
        break;
      case 'DEVICE_OFFLINE':
        actions.push(...this.processDeviceOffline(event));
        break;
      case 'HEARTBEAT':
        actions.push(...this.processHeartbeat(event));
        break;
      case 'FIRE_DETECTED':
        actions.push(...this.processFireDetected(event));
        break;
      case 'SMOKE_DETECTED':
        actions.push(...this.processSmokeDetected(event));
        break;
      case 'HIGH_TEMPERATURE':
        actions.push(...this.processHighTemperature(event));
        break;
      case 'SECURITY_BREACH':
      case 'THEFT_ALERT':
        actions.push(...this.processSecurityEvent(event));
        break;
      default:
        actions.push(...this.processGenericEvent(event));
    }
    
    const processedEvent: ProcessedEvent = {
      ...event,
      processedAt: new Date(),
      actions,
    };
    
    // Notify callback
    await this.onEventProcessed(processedEvent);
    
    return processedEvent;
  }

  private processShopOpened(event: IoTEvent): EventAction[] {
    return [
      {
        type: 'UPDATE_STATUS',
        payload: { shopId: event.shopId, status: 'OPEN', source: 'device' },
      },
      {
        type: 'LOG',
        payload: { message: 'Shop opened via device command' },
      },
    ];
  }

  private processShopClosed(event: IoTEvent): EventAction[] {
    return [
      {
        type: 'UPDATE_STATUS',
        payload: { shopId: event.shopId, status: 'CLOSED', source: 'device' },
      },
      {
        type: 'LOG',
        payload: { message: 'Shop closed via device command' },
      },
    ];
  }

  private processDeviceOnline(event: IoTEvent): EventAction[] {
    const actions: EventAction[] = [
      {
        type: 'UPDATE_STATUS',
        payload: { deviceId: event.deviceId, status: 'ONLINE' },
      },
    ];
    
    // If severity is high, notify admin
    if (event.severity === 'WARNING' || event.severity === 'CRITICAL') {
      actions.push({
        type: 'NOTIFY_ADMIN',
        payload: { message: 'Device came online after being offline' },
      });
    }
    
    return actions;
  }

  private processDeviceOffline(event: IoTEvent): EventAction[] {
    const actions: EventAction[] = [
      {
        type: 'UPDATE_STATUS',
        payload: { deviceId: event.deviceId, status: 'OFFLINE' },
      },
      {
        type: 'CREATE_ALERT',
        payload: {
          type: 'DEVICE_OFFLINE',
          severity: 'WARNING',
          title: 'Device Offline',
          message: `Device ${event.deviceId} has gone offline`,
        },
      },
      {
        type: 'NOTIFY_OWNER',
        payload: { message: 'Your device has gone offline' },
      },
    ];
    
    return actions;
  }

  private processHeartbeat(event: IoTEvent): EventAction[] {
    const actions: EventAction[] = [
      {
        type: 'UPDATE_STATUS',
        payload: {
          deviceId: event.deviceId,
          lastHeartbeat: event.createdAt,
          ...event.payload,
        },
      },
    ];
    
    // Check for low battery
    if (event.payload?.batteryLevel && event.payload.batteryLevel < 20) {
      actions.push({
        type: 'CREATE_ALERT',
        payload: {
          type: 'DEVICE_LOW_BATTERY',
          severity: 'WARNING',
          title: 'Low Battery',
          message: `Device battery is at ${event.payload.batteryLevel}%`,
        },
      });
    }
    
    return actions;
  }

  private processFireDetected(event: IoTEvent): EventAction[] {
    const temperature = event.payload?.temperature;
    let severity: EventSeverity = 'WARNING';
    
    if (temperature && temperature >= this.thresholds.temperature.critical) {
      severity = 'CRITICAL';
    } else if (temperature && temperature >= this.thresholds.temperature.warning) {
      severity = 'HIGH';
    }
    
    return [
      {
        type: 'CREATE_ALERT',
        payload: {
          type: 'FIRE',
          severity,
          title: 'Fire Detected',
          message: `Fire detected at temperature ${temperature}°C`,
          shopId: event.shopId,
          deviceId: event.deviceId,
        },
      },
      {
        type: 'NOTIFY_OWNER',
        payload: { message: 'Fire detected at your shop!' },
      },
      {
        type: 'NOTIFY_ADMIN',
        payload: { message: 'Fire event detected' },
      },
    ];
  }

  private processSmokeDetected(event: IoTEvent): EventAction[] {
    const smokeLevel = event.payload?.smokeLevel;
    let severity: EventSeverity = 'WARNING';
    
    if (smokeLevel && smokeLevel >= this.thresholds.smoke.critical) {
      severity = 'CRITICAL';
    } else if (smokeLevel && smokeLevel >= this.thresholds.smoke.warning) {
      severity = 'HIGH';
    }
    
    return [
      {
        type: 'CREATE_ALERT',
        payload: {
          type: 'FIRE',
          severity,
          title: 'Smoke Detected',
          message: `Smoke detected at level ${smokeLevel}`,
          shopId: event.shopId,
          deviceId: event.deviceId,
        },
      },
      {
        type: 'NOTIFY_OWNER',
        payload: { message: 'Smoke detected at your shop!' },
      },
    ];
  }

  private processHighTemperature(event: IoTEvent): EventAction[] {
    const temperature = event.payload?.temperature;
    let severity: EventSeverity = 'WARNING';
    
    if (temperature && temperature >= this.thresholds.temperature.critical) {
      severity = 'CRITICAL';
    } else if (temperature && temperature >= this.thresholds.temperature.warning) {
      severity = 'HIGH';
    }
    
    return [
      {
        type: 'CREATE_ALERT',
        payload: {
          type: 'FIRE',
          severity,
          title: 'High Temperature',
          message: `High temperature detected: ${temperature}°C`,
          shopId: event.shopId,
          deviceId: event.deviceId,
        },
      },
      {
        type: 'NOTIFY_OWNER',
        payload: { message: 'High temperature detected at your shop!' },
      },
    ];
  }

  private processSecurityEvent(event: IoTEvent): EventAction[] {
    return [
      {
        type: 'CREATE_ALERT',
        payload: {
          type: 'SECURITY',
          severity: event.severity,
          title: 'Security Alert',
          message: `Security event: ${event.type}`,
          shopId: event.shopId,
          deviceId: event.deviceId,
        },
      },
      {
        type: 'NOTIFY_OWNER',
        payload: { message: 'Security alert at your shop!' },
      },
      {
        type: 'NOTIFY_ADMIN',
        payload: { message: 'Security event detected' },
      },
    ];
  }

  private processGenericEvent(event: IoTEvent): EventAction[] {
    return [
      {
        type: 'LOG',
        payload: { message: `Event processed: ${event.type}` },
      },
    ];
  }
}
