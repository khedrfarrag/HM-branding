# Phase 1 Data Model: China Business & Import/Export Directory

## 1. Core Common Schema (`IChinaDirectoryEntity`)

Every entity across all categories conforms to this foundational interface:

```typescript
export type VerificationStatus = 
  | 'not-verified'
  | 'source-verified'
  | 'officially-verified'
  | 'field-verified'
  | 'field-audited';

export interface IDirectorySource {
  name: string;
  url: string;
  type: 'government' | 'port-authority' | 'carrier-official' | 'trade-association' | 'business-directory';
  verifiedAt: string; // ISO Date YYYY-MM-DD
}

export interface IVerificationMetadata {
  status: VerificationStatus;
  verifiedBy?: { ar: string; en: string };
  verificationType?: string;
  verifiedAt?: string;
  fieldVerified: boolean;
  sourceVerified: boolean;
  fieldAudited: boolean; // STRICT: True ONLY for Hossam Mabrouk's direct field audits
  verificationNotes?: { ar: string; en: string };
}

export interface IChinaDirectoryEntity {
  id: string;
  slug: string;
  category: ChinaDirectoryCategory;
  name: {
    ar: string;
    en: string;
    zh: string;
    pinyin?: string;
  };
  provinceSlug: string;
  citySlug: string;
  district?: string;
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
  sources: IDirectorySource[];
  verification: IVerificationMetadata;
  createdAt: string;
  updatedAt: string;
}
```

## 2. Category-Specific Extensions

### A. `ShippingLineEntity`
```typescript
export interface IShippingLineEntity extends IChinaDirectoryEntity {
  category: 'shipping-lines';
  headquarters: {
    city: string;
    country: string;
    address: string;
  };
  chinaOffices: {
    city: string;
    address: string;
    phone?: string;
    email?: string;
  }[];
  fleetSize?: number;
  teuCapacity?: number;
  portsServedInChina: string[]; // Port Slugs (e.g., ['shanghai-port', 'ningbo-zhoushan', 'shenzhen-yantian'])
  destinationRegions: string[]; // e.g., ['Arabian Gulf', 'Red Sea', 'North Africa', 'East Mediterranean', 'Europe']
  mainServiceRoutes: {
    routeName: string;
    originPort: string;
    destinationPorts: string[];
    transitDaysAvg: number;
    isDirect: boolean;
  }[];
  trackingUrl?: string;
}
```

### B. `PortEntity` (Seaport & River Port)
```typescript
export interface IPortEntity extends IChinaDirectoryEntity {
  category: 'ports';
  portType: 'seaport' | 'river-port' | 'container' | 'bulk' | 'specialized';
  unLocode: string; // e.g., "CNSHA", "CNNGB", "CNYTN"
  waterDepthMeters?: number;
  annualThroughputTeu?: string;
  containerTerminals: {
    terminalName: string;
    berths: number;
    operator: string;
  }[];
  nearbyIndustrialHinterlands: string[]; // City or zone slugs
  callingShippingLines: string[]; // ShippingLine Slugs
  bondedLogisticsPark?: boolean;
}
```

### C. `CityEntity`
```typescript
export interface ICityDirectoryEntity extends IChinaDirectoryEntity {
  category: 'cities';
  administrativeLevel: 'municipality' | 'prefecture-level' | 'county-level' | 'special-administrative-region';
  populationMillions?: number;
  gdpBillionYuan?: number;
  famousIndustries: {
    ar: string[];
    en: string[];
  };
  manufacturingClusters: string[];
  nearbyPortSlugs: string[];
  nearestAirportSlug?: string;
}
```

### D. `MarketEntity`
```typescript
export interface IMarketDirectoryEntity extends IChinaDirectoryEntity {
  category: 'markets';
  marketType: 'wholesale' | 'specialized' | 'export-trade-center';
  totalBooths?: number;
  floorAreaSqm?: number;
  productSectors: {
    ar: string[];
    en: string[];
  };
  operatingHours?: string;
  nearestTransportHub?: string;
}
```

### E. `FactoryEntity`
```typescript
export interface IFactoryDirectoryEntity extends IChinaDirectoryEntity {
  category: 'factories';
  businessType: 'oem-manufacturer' | 'odm-manufacturer' | 'integrated-supplier';
  mainProducts: {
    ar: string[];
    en: string[];
  };
  certifications: string[]; // e.g., ['ISO 9001', 'CE', 'RoHS', 'FDA', 'SASO']
  exportMarkets: string[];
  industrialZoneSlug?: string;
}
```

### F. `HotelEntity`
```typescript
export interface IHotelDirectoryEntity extends IChinaDirectoryEntity {
  category: 'hotels';
  starRating?: number;
  distanceToMarketOrPort?: {
    destinationName: string;
    distanceKm: number;
  };
  amenities: string[]; // e.g., ['Business Center', 'Airport Shuttle', 'Meeting Rooms', 'Halal Food Nearby']
}
```

### G. `LogisticsEntity`
```typescript
export interface ILogisticsDirectoryEntity extends IChinaDirectoryEntity {
  category: 'logistics';
  services: ('sea-freight' | 'air-freight' | 'customs-clearance' | 'warehousing' | 'pre-shipment-inspection' | 'ddp')[];
  nvoccLicenseNumber?: string;
  coveredPorts: string[];
}
```

### H. `TranslatorEntity`
```typescript
export interface ITranslatorDirectoryEntity extends IChinaDirectoryEntity {
  category: 'translators';
  languagePairs: string[]; // e.g., ['Arabic <-> Chinese', 'English <-> Chinese']
  specializations: ('commercial-negotiation' | 'factory-audit' | 'contract-translation' | 'market-escort')[];
}
```

### I. `IndustrialZoneEntity` & `EconomicZoneEntity`
```typescript
export interface IZoneDirectoryEntity extends IChinaDirectoryEntity {
  category: 'industrial-zones' | 'economic-zones';
  zoneClassification: 'national-etdz' | 'national-hitz' | 'pilot-ftz' | 'comprehensive-bonded-zone';
  incentives: {
    ar: string[];
    en: string[];
  };
  dominantIndustries: string[];
}
```

### J. `AirportEntity` & `TradeFairEntity`
```typescript
export interface IAirportDirectoryEntity extends IChinaDirectoryEntity {
  category: 'airports';
  iataCode: string;
  icaoCode: string;
  cargoCapacityTons?: number;
}

export interface ITradeFairDirectoryEntity extends IChinaDirectoryEntity {
  category: 'trade-fairs';
  venueName: { ar: string; en: string; zh: string };
  frequency: 'biannual' | 'annual' | 'biennial';
  typicalMonths: number[];
  industryScope: { ar: string[]; en: string[] };
}
```

## 3. Bidirectional Relationship Index Schema

```typescript
export interface IChinaDirectoryRelationsIndex {
  cityToEntities: Record<string, {
    ports: string[];
    markets: string[];
    factories: string[];
    hotels: string[];
    logistics: string[];
    translators: string[];
    industrialZones: string[];
    economicZones: string[];
    airports: string[];
    tradeFairs: string[];
  }>;
  portToShippingLines: Record<string, string[]>;
  shippingLineToPorts: Record<string, string[]>;
  marketToHotels: Record<string, string[]>;
}
```
