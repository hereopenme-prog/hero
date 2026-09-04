import { randomUUID } from 'crypto';
import type { DeviceAdapter, CommandResult } from './adapter';
import type { CommandType, CommandStatus } from '@hereopen/types';

export interface CommandRequest {
  id: string;
  deviceId: string;
  type: CommandType;
  payload?: Record<string, any>;
  requestedBy: string;
  requestedAt: Date;
  timeoutMs: number;
}

export interface CommandResultWithStatus extends CommandResult {
  commandId: string;
  status: CommandStatus;
  sentAt?: Date;
  acknowledgedAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
  error?: string;
}

export interface CommandProcessorConfig {
  adapter: DeviceAdapter;
  defaultTimeoutMs?: number;
  onCommandUpdate?: (result: CommandResultWithStatus) => void;
}

export class CommandProcessor {
  private adapter: DeviceAdapter;
  private defaultTimeoutMs: number;
  private onCommandUpdate?: (result: CommandResultWithStatus) => void;
  private pendingCommands: Map<string, CommandRequest> = new Map();

  constructor(config: CommandProcessorConfig) {
    this.adapter = config.adapter;
    this.defaultTimeoutMs = config.defaultTimeoutMs || 30000;
    this.onCommandUpdate = config.onCommandUpdate;
    
    // Listen for command acknowledgments and completions
    this.adapter.onEvent((event) => {
      if (event.type === 'COMMAND_ACKNOWLEDGED') {
        this.handleAcknowledgment(event.payload?.commandId, event.deviceId);
      } else if (event.type === 'COMMAND_COMPLETED') {
        this.handleCompletion(event.payload?.commandId, event.deviceId, event.payload);
      } else if (event.type === 'COMMAND_FAILED') {
        this.handleFailure(event.payload?.commandId, event.deviceId, event.payload?.error);
      }
    });
  }

  async sendCommand(
    deviceId: string,
    type: CommandType,
    requestedBy: string,
    payload?: Record<string, any>,
    timeoutMs?: number
  ): Promise<CommandResultWithStatus> {
    const commandId = randomUUID();
    const timeout = timeoutMs || this.defaultTimeoutMs;
    
    const request: CommandRequest = {
      id: commandId,
      deviceId,
      type,
      payload,
      requestedBy,
      requestedAt: new Date(),
      timeoutMs: timeout,
    };
    
    this.pendingCommands.set(commandId, request);
    
    // Send command to device
    const result = await this.adapter.sendCommand(deviceId, type, {
      commandId,
      ...payload,
    });
    
    if (!result.success) {
      this.pendingCommands.delete(commandId);
      return {
        ...result,
        commandId,
        status: 'FAILED',
        failedAt: new Date(),
        error: result.error,
      };
    }
    
    // Set up timeout
    setTimeout(() => {
      this.handleTimeout(commandId, deviceId);
    }, timeout);
    
    const commandResult: CommandResultWithStatus = {
      ...result,
      commandId,
      status: 'SENT',
      sentAt: new Date(),
    };
    
    this.notifyUpdate(commandResult);
    
    return commandResult;
  }

  async sendShopCommand(
    deviceId: string,
    shopStatus: 'OPEN' | 'CLOSED',
    requestedBy: string
  ): Promise<CommandResultWithStatus> {
    return this.sendCommand(
      deviceId,
      shopStatus === 'OPEN' ? 'OPEN' : 'CLOSED',
      requestedBy,
      { shopStatus }
    );
  }

  async pingDevice(deviceId: string, requestedBy: string): Promise<CommandResultWithStatus> {
    return this.sendCommand(deviceId, 'PING', requestedBy);
  }

  async syncDevice(deviceId: string, requestedBy: string): Promise<CommandResultWithStatus> {
    return this.sendCommand(deviceId, 'SYNC', requestedBy);
  }

  async restartDevice(deviceId: string, requestedBy: string): Promise<CommandResultWithStatus> {
    return this.sendCommand(deviceId, 'RESTART', requestedBy);
  }

  async updateFirmware(
    deviceId: string,
    version: string,
    requestedBy: string
  ): Promise<CommandResultWithStatus> {
    return this.sendCommand(
      deviceId,
      'FIRMWARE_UPDATE',
      requestedBy,
      { firmwareVersion: version },
      120000 // Longer timeout for firmware updates
    );
  }

  getPendingCommands(): CommandRequest[] {
    return Array.from(this.pendingCommands.values());
  }

  getCommandById(commandId: string): CommandRequest | undefined {
    return this.pendingCommands.get(commandId);
  }

  private handleAcknowledgment(commandId: string | undefined, deviceId: string): void {
    if (!commandId) return;
    
    const request = this.pendingCommands.get(commandId);
    if (request) {
      const result: CommandResultWithStatus = {
        success: true,
        commandId,
        status: 'ACKNOWLEDGED',
        sentAt: request.requestedAt,
        acknowledgedAt: new Date(),
      };
      
      this.notifyUpdate(result);
    }
  }

  private handleCompletion(
    commandId: string | undefined,
    deviceId: string,
    payload?: any
  ): void {
    if (!commandId) return;
    
    const request = this.pendingCommands.get(commandId);
    if (request) {
      this.pendingCommands.delete(commandId);
      
      const result: CommandResultWithStatus = {
        success: true,
        commandId,
        status: 'COMPLETED',
        sentAt: request.requestedAt,
        acknowledgedAt: new Date(),
        completedAt: new Date(),
        response: payload,
      };
      
      this.notifyUpdate(result);
    }
  }

  private handleFailure(commandId: string | undefined, deviceId: string, error?: string): void {
    if (!commandId) return;
    
    const request = this.pendingCommands.get(commandId);
    if (request) {
      this.pendingCommands.delete(commandId);
      
      const result: CommandResultWithStatus = {
        success: false,
        commandId,
        status: 'FAILED',
        sentAt: request.requestedAt,
        failedAt: new Date(),
        error: error || 'Command failed',
      };
      
      this.notifyUpdate(result);
    }
  }

  private handleTimeout(commandId: string, deviceId: string): void {
    const request = this.pendingCommands.get(commandId);
    if (request) {
      this.pendingCommands.delete(commandId);
      
      const result: CommandResultWithStatus = {
        success: false,
        commandId,
        status: 'TIMEOUT',
        sentAt: request.requestedAt,
        failedAt: new Date(),
        error: 'Command timed out',
      };
      
      this.notifyUpdate(result);
    }
  }

  private notifyUpdate(result: CommandResultWithStatus): void {
    if (this.onCommandUpdate) {
      try {
        this.onCommandUpdate(result);
      } catch (error) {
        console.error('Error in command update callback:', error);
      }
    }
  }
}
