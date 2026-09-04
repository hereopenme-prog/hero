export enum OfferStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  PAUSED = 'PAUSED',
}

export interface Offer {
  id: string;
  businessId: string;
  shopId?: string | null;
  title: string;
  description?: string | null;
  image?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  discount?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  status: OfferStatus;
  sentCount: number;
  viewCount: number;
  clickCount: number;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOfferInput {
  title: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaUrl?: string;
  discount?: string;
  startDate?: Date;
  endDate?: Date;
  shopId?: string;
}

export interface UpdateOfferInput {
  title?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaUrl?: string;
  discount?: string;
  startDate?: Date;
  endDate?: Date;
  status?: OfferStatus;
  shopId?: string;
}

export interface OfferWithStats extends Offer {
  shop?: {
    id: string;
    name: string;
  };
  _count?: {
    views: number;
    clicks: number;
  };
}
