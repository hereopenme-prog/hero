import type { CreateNotificationInput } from '@hereopen/types';

/**
 * Console notification provider for development.
 * Logs notifications to the console instead of sending them.
 */
export class ConsoleNotificationProvider {
  async send(notification: CreateNotificationInput): Promise<boolean> {
    console.log('--- NOTIFICATION ---');
    console.log(`Type: ${notification.type}`);
    console.log(`Channel: ${notification.channel || 'IN_APP'}`);
    console.log(`User: ${notification.userId}`);
    console.log(`Title: ${notification.title}`);
    console.log(`Body: ${notification.body}`);
    if (notification.data) {
      console.log(`Data:`, notification.data);
    }
    console.log('--------------------');
    
    return true;
  }
}
