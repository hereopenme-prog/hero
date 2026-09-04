import type { CreateNotificationInput } from '@hereopen/types';

/**
 * SMS notification provider.
 * 
 * In production, this would integrate with an SMS service like:
 * - Twilio
 * - MSG91
 * - AWS SNS
 * - TextLocal
 * 
 * Currently logs to console for development.
 */
export class SMSNotificationProvider {
  async send(notification: CreateNotificationInput & { channel: 'SMS' }): Promise<boolean> {
    // TODO: Implement actual SMS sending
    // This requires user phone lookup and SMS template system
    
    console.log('[SMS] Would send SMS notification:');
    console.log(`  To: user ${notification.userId}`);
    console.log(`  Message: ${notification.title} - ${notification.body}`);
    
    // In production:
    // 1. Look up user phone from database
    // 2. Render SMS template
    // 3. Send via SMS service
    // 4. Track delivery status
    
    return true;
  }
}
