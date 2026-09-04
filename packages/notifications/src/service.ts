import type {
  Notification,
  CreateNotificationInput,
  NotificationChannel,
  NotificationService as INotificationService,
} from '@hereopen/types';
import { ConsoleNotificationProvider } from './providers/console';
import { EmailNotificationProvider } from './providers/email';
import { SMSNotificationProvider } from './providers/sms';
import { PushNotificationProvider } from './providers/push';

export interface NotificationServiceConfig {
  providers: {
    console?: boolean;
    email?: boolean;
    sms?: boolean;
    push?: boolean;
  };
  defaultChannels?: NotificationChannel[];
}

export class NotificationService implements INotificationService {
  private providers: Map<NotificationChannel, any> = new Map();
  private defaultChannels: NotificationChannel[];

  constructor(config: NotificationServiceConfig) {
    this.defaultChannels = config.defaultChannels || ['IN_APP'];
    
    if (config.providers.console) {
      this.providers.set('IN_APP', new ConsoleNotificationProvider());
    }
    
    if (config.providers.email) {
      this.providers.set('EMAIL', new EmailNotificationProvider());
    }
    
    if (config.providers.sms) {
      this.providers.set('SMS', new SMSNotificationProvider());
    }
    
    if (config.providers.push) {
      this.providers.set('PUSH', new PushNotificationProvider());
    }
  }

  async send(notification: CreateNotificationInput): Promise<boolean> {
    const channels = notification.channel 
      ? [notification.channel] 
      : this.defaultChannels;
    
    let success = true;
    
    for (const channel of channels) {
      const provider = this.providers.get(channel);
      if (provider) {
        try {
          await provider.send({
            ...notification,
            channel,
          });
        } catch (error) {
          console.error(`Failed to send ${channel} notification:`, error);
          success = false;
        }
      }
    }
    
    return success;
  }

  async sendBulk(notifications: CreateNotificationInput[]): Promise<boolean[]> {
    const results: boolean[] = [];
    
    for (const notification of notifications) {
      const result = await this.send(notification);
      results.push(result);
    }
    
    return results;
  }

  async markAsRead(id: string): Promise<boolean> {
    // This would be implemented with database access
    console.log(`Marking notification ${id} as read`);
    return true;
  }

  async markAllAsRead(userId: string): Promise<boolean> {
    // This would be implemented with database access
    console.log(`Marking all notifications as read for user ${userId}`);
    return true;
  }

  async getUnreadCount(userId: string): Promise<number> {
    // This would be implemented with database access
    return 0;
  }
}

export function createNotificationService(config?: NotificationServiceConfig): NotificationService {
  const defaultConfig: NotificationServiceConfig = {
    providers: {
      console: true,
      email: process.env.EMAIL_PROVIDER !== 'console',
      sms: process.env.SMS_PROVIDER !== 'console',
      push: !!process.env.FIREBASE_PROJECT_ID,
    },
    defaultChannels: ['IN_APP'],
  };
  
  return new NotificationService(config || defaultConfig);
}
