export interface ShopAnalytics {
  shopId: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  totalViews: number;
  openHours: number;
  closedHours: number;
  statusChanges: number;
  offerViews: number;
  offerClicks: number;
  customerInteractions: number;
  securityEvents: number;
  fireEvents: number;
  deviceUptime: number;
}

export interface BusinessAnalytics {
  businessId: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  totalShops: number;
  activeShops: number;
  totalCustomers: number;
  newCustomers: number;
  totalOffers: number;
  activeOffers: number;
  offerPerformance: OfferPerformance[];
  shopPerformance: ShopPerformance[];
  deviceStatus: DeviceStatusSummary;
}

export interface OfferPerformance {
  offerId: string;
  title: string;
  views: number;
  clicks: number;
  ctr: number;
  sentCount: number;
}

export interface ShopPerformance {
  shopId: string;
  name: string;
  status: string;
  views: number;
  openHours: number;
  customerFollows: number;
}

export interface DeviceStatusSummary {
  total: number;
  online: number;
  offline: number;
  warning: number;
  critical: number;
}

export interface DashboardMetrics {
  totalBusinesses: number;
  activeBusinesses: number;
  totalDevices: number;
  onlineDevices: number;
  offlineDevices: number;
  totalCustomers: number;
  securityEvents: number;
  fireEvents: number;
  totalOffers: number;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface TimeSeriesDataPoint {
  timestamp: Date;
  value: number;
  label?: string;
}

export interface AnalyticsFilter {
  startDate?: Date;
  endDate?: Date;
  period?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  shopId?: string;
  businessId?: string;
}
