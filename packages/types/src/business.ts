export interface Business {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  logo?: string | null;
  coverImage?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  category?: string | null;
  gstNumber?: string | null;
  isVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBusinessInput {
  name: string;
  description?: string;
  phone?: string;
  email?: string;
  website?: string;
  category?: string;
  gstNumber?: string;
}

export interface UpdateBusinessInput {
  name?: string;
  description?: string;
  logo?: string;
  coverImage?: string;
  phone?: string;
  email?: string;
  website?: string;
  category?: string;
}

export interface BusinessUser {
  id: string;
  userId: string;
  businessId: string;
  role: string;
  isOwner: boolean;
  createdAt: Date;
}
