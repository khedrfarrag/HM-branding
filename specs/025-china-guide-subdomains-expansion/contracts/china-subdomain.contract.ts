/**
 * Contract: China Guide Subdomain Commercial Entity
 * Feature: 025-china-guide-subdomains-expansion
 */

import { ChinaSubdomain } from "@/domains/shared/value-objects";

export interface IChinaCommercialEntityContract {
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
  rating: number;
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
  curatorVerification: {
    verifiedBy: { ar: string; en: string };
    verificationDate: string;
    consultantRole: { ar: string; en: string };
    trustNotes: { ar: string; en: string };
  };
  lastUpdated: string;
}

export interface ISubdomainPagePropsContract {
  params: Promise<{
    locale: string;
    subdomain: string;
  }>;
}

export interface ISubdomainDetailPagePropsContract {
  params: Promise<{
    locale: string;
    subdomain: string;
    slug: string;
  }>;
}
