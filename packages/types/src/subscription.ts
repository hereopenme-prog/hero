export enum SubscriptionStatus {
  TRIAL = 'TRIAL',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  CANCELLED = 'CANCELLED',
}

export interface Subscription {
  id: string;
  businessId: string;
  plan: string;
  price?: number | null;
  currency: string;
  billingPeriod?: string | null;
  status: SubscriptionStatus;
  trialStart?: Date | null;
  trialEnd?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  cancelledAt?: Date | null;
  cancelReason?: string | null;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  businessId: string;
  subscriptionId?: string | null;
  amount: number;
  currency: string;
  status: PaymentStatus;
  provider?: string | null;
  providerTxnId?: string | null;
  method?: string | null;
  description?: string | null;
  metadata?: any;
  paidAt?: Date | null;
  createdAt: Date;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billingPeriod: string;
  features: string[];
  limits: Record<string, number>;
}

export interface CreatePaymentInput {
  businessId: string;
  subscriptionId?: string;
  amount: number;
  currency?: string;
  provider?: string;
  method?: string;
  description?: string;
}
