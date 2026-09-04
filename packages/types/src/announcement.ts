export enum AnnouncementType {
  NEW_ARRIVAL = 'NEW_ARRIVAL',
  OPENING_DELAY = 'OPENING_DELAY',
  HOLIDAY_CLOSURE = 'HOLIDAY_CLOSURE',
  STORE_UPDATE = 'STORE_UPDATE',
  SPECIAL = 'SPECIAL',
  OFFER = 'OFFER',
  CUSTOM = 'CUSTOM',
}

export enum AnnouncementStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
}

export interface Announcement {
  id: string;
  businessId: string;
  shopId?: string | null;
  type: AnnouncementType;
  title: string;
  description?: string | null;
  image?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  status: AnnouncementStatus;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAnnouncementInput {
  type: AnnouncementType;
  title: string;
  description?: string;
  image?: string;
  startDate?: Date;
  endDate?: Date;
  shopId?: string;
}

export interface UpdateAnnouncementInput {
  type?: AnnouncementType;
  title?: string;
  description?: string;
  image?: string;
  startDate?: Date;
  endDate?: Date;
  status?: AnnouncementStatus;
  shopId?: string;
}
