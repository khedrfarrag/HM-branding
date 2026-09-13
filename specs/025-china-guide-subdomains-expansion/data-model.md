# Data Model: China Guide Subdomains Expansion (7 Commercial Pillars)

**Feature**: `025-china-guide-subdomains-expansion`  
**Status**: Completed  
**Prerequisites**: [spec.md](file:///g:/hossam%20mabrouk/specs/025-china-guide-subdomains-expansion/spec.md), [research.md](file:///g:/hossam%20mabrouk/specs/025-china-guide-subdomains-expansion/research.md)  

---

## 1. Core Subdomain Entity Interface

```typescript
import { BaseContent } from "@/types/content";
import { GeoCoordinates, ChinaSubdomain, Locale } from "@/domains/shared/value-objects";

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
```

---

## 2. Specialized Sector Entities

### A. Restaurant (`subdomain: 'restaurants'`)
- `cuisineType`: Localized cuisine category (e.g. "Halal Hotpot", "Xinjiang BBQ", "Cantonese Halal").
- `isHalal`: Boolean (must be `true` for Muslim dining guides).
- `halalCertificationAuthority`: Certification agency or Mosque validation.

### B. Hotel (`subdomain: 'hotels'`)
- `starRating`: 4 or 5 stars.
- `nearestTradingHub`: Proximity to wholesale markets or exhibition centers.
- `nearestMetro`: Line and station name.
- `amenities`: Array of business amenities (Executive lounge, translation desk, airport shuttle).

### C. Factory / Industrial Park (`subdomain: 'factories'`)
- `factoryTier`: National-level, provincial-level, or specialized export cluster.
- `primaryProducts`: Manufactured commodities.
- `annualCapacity`: Production volume metrics.
- `exportSuitability`: Direct OEM/ODM capability.

### D. Wholesale Market (`subdomain: 'markets'`)
- `marketScale`: Square meters and number of vendor booths.
- `operatingHours`: Daily trading schedules.
- `moqLevel`: Minimum Order Quantity tier (Low, Medium, Flexible).

### E. Translator / Interpreter (`subdomain: 'translators'`)
- `languages`: Language pairs supported (Arabic, Mandarin, English).
- `serviceModes`: Factory visit accompaniment, Canton Fair attendance, legal negotiation.
- `experienceYears`: Years of commercial trade interpreting in China.

### F. Shipping & Logistics Company (`subdomain: 'shipping-companies'`)
- `freightTypes`: FCL, LCL, Air Cargo, Express, DDP door-to-door.
- `destinations`: Middle East ports served (Jebel Ali, Jeddah, Dammam, Alexandria, Sokhna, etc.).
- `customsClearance`: Certified customs broker services.

### G. Port (`subdomain: 'ports'`)
- `portType`: Deepwater Seaport, Inland River Port, International Air Cargo Terminal.
- `annualThroughputTEU`: Container volume statistics.
- `berthCount`: Deepwater container berths.
- `directArabRoutes`: Direct shipping services to Arab and GCC ports.

---

## 3. Repository Layer Contract Updates

```typescript
export interface IChinaSubdomainRepository {
  getSubdomainItems(locale: Locale, subdomain: ChinaSubdomain, citySlug?: string): Promise<IChinaCommercialEntity[]>;
  getSubdomainItemBySlug(locale: Locale, subdomain: ChinaSubdomain, slug: string): Promise<IChinaCommercialEntity | null>;
  getAllSubdomainSlugs(locale: Locale): Promise<{ subdomain: ChinaSubdomain; slug: string }[]>;
}
```
