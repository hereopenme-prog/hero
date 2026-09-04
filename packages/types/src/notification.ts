export enum NotificationType {
  OFFER = 'OFFER',
  SHOP_UPDATE = 'SHOP_UPDATE',
  OPENING_DELAY = 'OPENING_DELAY',
  NEW_ARRIVAL = 'NEW_ARRIVAL',
  SECURITY_ALERT = 'SECURITY_ALERT',
  FIRE_ALERT = 'FIRE_ALERT',
  SYSTEM = 'SYSTEM',
  CUSTOM = 'CUSTOM',
}

export enum NotificationChannel {
  PUSH = 'PUSH',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  IN_APP = 'IN_APP',
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  channel: NotificationChannel;
  title: string;
  body: string;
  data?: any;
  isRead: boolean;
  readAt?: Date | null;
  sentAt?: Date | null;
  deliveredAt?: Date | null;
  error?: string | null;
  metadata?: any;
  createdAt: Date;
}

export interface CreateNotificationInput {
  userId: string;
  type: NotificationType;
  channel?: NotificationChannel;
  title: string;
  body: string;
  data?: any;
  metadata?: any;
}

export interface NotificationPreferences {
  push: boolean;
  email: boolean;
  sms: boolean;
  offers: boolean;
  shopUpdates: boolean;
  securityAlerts: boolean;
  fireAlerts: boolean;
}

export interface NotificationService {
  send(notification: CreateNotificationInput): Promise<boolean>;
  sendBulk(notifications: CreateNotificationInput[]): Promise<boolean[]>;
  markAsRead(id: string): Promise<boolean>;
  markAllAsRead(userId: string): Promise<boolean>;
  getUnreadCount(userId: string): Promise<number>;
}
