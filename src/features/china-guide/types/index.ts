import { ChinaSubdomain } from '@/domains/shared/value-objects';

export interface ILocalizedText {
  ar: string;
  en: string;
  zh?: string;
}

export interface ICuratorVerification {
  verifiedBy: { ar: string; en: string };
  verificationDate: string; // YYYY-MM-DD
  consultantRole: { ar: string; en: string };
  trustNotes: { ar: string; en: string };
}

export interface IChinaCommercialEntity {
  id: string;
  slug: string;
  subdomain: ChinaSubdomain;
  citySlug: string;
  name: {
    ar: string;
    en: string;
    zh: string;
  };
  category: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  coverImage: string;
  gallery?: string[];
  rating: number; // 1.0 to 5.0
  reviewCount: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  address: {
    ar: string;
    en: string;
    zh: string;
  };
  contactInfo: {
    phone?: string;
    wechat?: string;
    email?: string;
  };
  websiteUrl?: string | null;
  features: {
    ar: string[];
    en: string[];
  };
  specifications?: Record<string, { ar: string; en: string }>;
  curatorVerification: ICuratorVerification;
  lastUpdated: string;
}
