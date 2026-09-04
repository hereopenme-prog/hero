export const APP_NAME = 'HERE OPEN';
export const APP_DESCRIPTION = 'IoT + Mobile Platform for Real-Time Shop Visibility & 24/7 Safety';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
export const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3002';

export const SHOP_CATEGORIES = [
  'Grocery',
  'Restaurant',
  'Medical',
  'Salon',
  'Tailor',
  'Repair',
  'Retail',
  'Office',
  'Other',
] as const;

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Chandigarh',
  'Puducherry',
  'Andaman and Nicobar Islands',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Lakshadweep',
] as const;

export const DEVICE_SENSOR_TYPES = [
  'temperature',
  'smoke',
  'motion',
  'vibration',
  'humidity',
  'light',
] as const;

export const NETWORK_TYPES = ['2G', '3G', '4G', 'LTE'] as const;

export const POWER_SOURCES = ['battery', 'mains', 'solar'] as const;

export const SUBSCRIPTION_PLANS = [
  {
    id: 'free',
    name: 'Free',
    description: 'Basic features for small shops',
    price: 0,
    currency: 'INR',
    billingPeriod: 'monthly',
    features: ['1 shop', 'Basic status', 'Limited offers'],
    limits: {
      shops: 1,
      offers: 5,
      announcements: 3,
      customers: 100,
    },
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'For growing businesses',
    price: 499,
    currency: 'INR',
    billingPeriod: 'monthly',
    features: ['3 shops', 'Real-time status', '20 offers', 'Security alerts'],
    limits: {
      shops: 3,
      offers: 20,
      announcements: 10,
      customers: 500,
    },
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For established businesses',
    price: 1499,
    currency: 'INR',
    billingPeriod: 'monthly',
    features: ['10 shops', 'Full analytics', 'Priority support', 'IoT monitoring'],
    limits: {
      shops: 10,
      offers: 100,
      announcements: 50,
      customers: 5000,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large businesses',
    price: 4999,
    currency: 'INR',
    billingPeriod: 'monthly',
    features: ['Unlimited shops', 'Custom features', 'Dedicated support', 'API access'],
    limits: {
      shops: -1, // unlimited
      offers: -1,
      announcements: -1,
      customers: -1,
    },
  },
] as const;

export const FIRE_THRESHOLDS = {
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
} as const;

export const SECURITY_SEVERITY_LEVELS = {
  NORMAL: { color: 'green', label: 'Normal' },
  WARNING: { color: 'yellow', label: 'Warning' },
  HIGH: { color: 'orange', label: 'High' },
  CRITICAL: { color: 'red', label: 'Critical' },
} as const;

export const DEVICE_STATUS_COLORS = {
  ONLINE: 'green',
  OFFLINE: 'gray',
  WARNING: 'yellow',
  CRITICAL: 'red',
  ACTIVATING: 'blue',
  DEACTIVATED: 'gray',
} as const;

export const SHOP_STATUS_COLORS = {
  OPEN: 'green',
  CLOSED: 'red',
  UNKNOWN: 'gray',
} as const;

export const PAGINATION_DEFAULTS = {
  page: 1,
  limit: 20,
  maxLimit: 100,
} as const;

export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
} as const;

export const WEBSOCKET_EVENTS = {
  SHOP_STATUS_CHANGED: 'shop:status:changed',
  DEVICE_STATUS_CHANGED: 'device:status:changed',
  DEVICE_COMMAND: 'device:command',
  DEVICE_COMMAND_RESULT: 'device:command:result',
  SECURITY_EVENT: 'security:event',
  FIRE_EVENT: 'fire:event',
  ALERT_CREATED: 'alert:created',
  NOTIFICATION: 'notification',
  HEARTBEAT: 'heartbeat',
} as const;
