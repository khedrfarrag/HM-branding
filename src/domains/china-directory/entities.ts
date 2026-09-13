import { ChinaSubdomain } from "@/domains/shared/value-objects";

export type VerificationStatus =
  | "not-verified"
  | "source-verified"
  | "officially-verified"
  | "field-verified"
  | "field-audited";

export interface IDirectorySource {
  name: string;
  url: string;
  type: "government" | "port-authority" | "carrier-official" | "trade-association" | "business-directory";
  verifiedAt: string; // ISO date YYYY-MM-DD
}

export interface IVerificationMetadata {
  status: VerificationStatus;
  verifiedBy?: { ar: string; en: string };
  verificationType?: string;
  verifiedAt?: string;
  fieldVerified: boolean;
  sourceVerified: boolean;
  fieldAudited: boolean; // STRICT: True ONLY for Hossam Mabrouk direct ground audits
  verificationNotes?: { ar: string; en: string };
}

export interface IChinaDirectoryEntity {
  id: string;
  slug: string;
  subdomain: ChinaSubdomain;
  name: {
    ar: string;
    en: string;
    zh: string;
    pinyin?: string;
  };
  province: {
    ar: string;
    en: string;
    zh?: string;
  };
  provinceSlug: string;
  city: {
    ar: string;
    en: string;
    zh?: string;
  };
  citySlug: string;
  district?: {
    ar?: string;
    en?: string;
    zh?: string;
  };
  category: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  address: {
    ar: string;
    en: string;
    zh: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  coverImage?: string;
  gallery?: string[];
  websiteUrl?: string | null;
  contactInfo?: {
    phone?: string;
    email?: string;
    wechat?: string;
    fax?: string;
  };
  tags: string[];
  features?: {
    ar: string[];
    en: string[];
  };
  specifications?: Record<string, { ar: string; en: string }>;
  sources: IDirectorySource[];
  verification: IVerificationMetadata;
  // Specific optional fields based on category
  extra?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface IChinaDirectoryCoverage {
  category: ChinaSubdomain;
  labelAr: string;
  labelEn: string;
  targetCount: number;
  actualCount: number;
  sourceVerifiedCount: number;
  officiallyVerifiedCount: number;
  fieldAuditedCount: number;
  notVerifiedCount: number;
  sourceCoveragePercentage: number;
  imageCoveragePercentage: number;
}
