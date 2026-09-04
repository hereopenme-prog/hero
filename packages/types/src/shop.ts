export enum ShopStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  UNKNOWN = 'UNKNOWN',
}

export interface Shop {
  id: string;
  businessId: string;
  name: string;
  slug: string;
  description?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country: string;
  pincode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  phone?: string | null;
  email?: string | null;
  status: ShopStatus;
  lastStatusChange?: Date | null;
  lastStatusSource?: string | null;
  timezone: string;
  openTime?: string | null;
  closeTime?: string | null;
  operatingDays?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateShopInput {
  name: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  email?: string;
  openTime?: string;
  closeTime?: string;
  operatingDays?: string;
}

export interface UpdateShopInput {
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  email?: string;
  openTime?: string;
  closeTime?: string;
  operatingDays?: string;
  isActive?: boolean;
}

export interface ShopWithDetails extends Shop {
  business?: {
    id: string;
    name: string;
    slug: string;
  };
  devices?: Array<{
    id: string;
    uid: string;
    status: string;
  }>;
  _count?: {
    customerFollows: number;
    offers: number;
    announcements: number;
  };
}

export interface ShopStatusChange {
  shopId: string;
  status: ShopStatus;
  source: string;
  deviceId?: string;
  changedBy?: string;
}
