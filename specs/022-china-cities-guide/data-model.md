# Data Model: China Cities Commercial & Sourcing Guide

**Feature**: China Cities Guide (`specs/022-china-cities-guide`)

## 1. City Entity (`ICity`)

Represents a Chinese commercial city.

```typescript
export type TradeTier = 'tier-1' | 'tier-2' | 'tier-3';

export interface ICity {
  id: string;
  slug: string;
  name: {
    ar: string;
    en: string;
    zh: string;
  };
  province: {
    ar: string;
    en: string;
  };
  region: 'Pearl River Delta' | 'Yangtze River Delta' | 'Bohai Economic Rim' | 'Central China' | 'Western China' | 'Southwest China' | 'Northeast China';
  tier: TradeTier;
  commercialImportanceScore: number; // 1 - 100
  heroImage: string;
  skylineImage?: string;
  gallery: string[];
  description: {
    ar: string;
    en: string;
  };
  keyIndustries: string[]; // Industry IDs (e.g., 'furniture', 'electronics')
  primaryProducts: {
    ar: string[];
    en: string[];
  };
  bestFor: string[]; // Buyer profiles (e.g. 'Importer', 'Wholesaler', 'Startup', 'Furniture Business')
  
  // Section Datasets
  districts?: IDistrict[];
  wholesaleMarkets?: IWholesaleMarket[];
  industrialZones?: IIndustrialZone[];
  sourcingProducts?: ISourcingProduct[];
  logistics: ILogisticsInfo;
  businessTravelGuide: IBusinessTravelGuide;
  tradeFairs?: ITradeFair[];
  
  relatedCitySlugs: string[];
  relatedProductSlugs: string[];
  
  sources?: string[];
  lastUpdated: string; // YYYY-MM-DD
  
  seo: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
}
```

## 2. Wholesale Market Entity (`IWholesaleMarket`)

Represents a major commercial or wholesale market within a city.

```typescript
export interface IWholesaleMarket {
  id: string;
  cityId: string;
  name: {
    ar: string;
    en: string;
    zh: string;
  };
  type: 'Wholesale' | 'Retail' | 'Factory Showroom' | 'Mixed';
  category: string; // e.g. 'Furniture', 'Electronics', 'Textiles', 'Small Commodities'
  description: {
    ar: string;
    en: string;
  };
  address: {
    ar: string;
    en: string;
  };
  nearestMetro?: string;
  nearestAirport?: string;
  operatingHours?: string;
  moqLevel?: 'Low' | 'Medium' | 'High' | 'Flexible';
  websiteUrl?: string;
  image?: string;
}
```

## 3. Commercial District / Street Entity (`IDistrict`)

Represents a prominent commercial area or street within a city.

```typescript
export interface IDistrict {
  id: string;
  cityId: string;
  name: {
    ar: string;
    en: string;
  };
  activityType: {
    ar: string;
    en: string;
  };
  mainProducts: string[];
  tradeFocus: 'Wholesale' | 'Retail' | 'Commercial Office' | 'Mixed';
  suitableForImporter: boolean;
  suitableForBusinessTravel: boolean;
  nearestMetro?: string;
  nearestStation?: string;
}
```

## 4. Industrial Zone Entity (`IIndustrialZone`)

Represents a cluster of factories or manufacturing parks.

```typescript
export interface IIndustrialZone {
  id: string;
  cityId: string;
  name: {
    ar: string;
    en: string;
  };
  clusterSpecialization: {
    ar: string;
    en: string;
  };
  factoryTypes: string[];
  keyProducts: string[];
  specializationLevel: 'High' | 'Medium' | 'Emerging';
}
```

## 5. Sourcing Product Card (`ISourcingProduct`)

Represents product recommendation highlights for a city ("What to import from X").

```typescript
export interface ISourcingProduct {
  id: string;
  productName: { ar: string; en: string };
  industryCategory: string;
  whyThisCity: { ar: string; en: string };
  mainManufacturingArea: { ar: string; en: string };
  wholesaleAvailability: 'High' | 'Medium' | 'Direct Factory Only';
  exportSuitability: 'High' | 'Medium' | 'Specialized Requirements';
}
```

## 6. Transport & Logistics Entity (`ILogisticsInfo`)

Describes how goods leave the city and how travelers arrive.

```typescript
export interface ILogisticsInfo {
  nearestAirports: string[];
  seaPorts: string[];
  highSpeedRailwayStations: string[];
  seaFreightSuitability: string;
  airFreightSuitability: string;
  primaryCargoRoutes: string[];
}
```

## 7. Business Travel Guide Entity (`IBusinessTravelGuide`)

Practical guidance for traders visiting the city.

```typescript
export interface IBusinessTravelGuide {
  bestVisitMonths: string[];
  suggestedStayDays: number;
  weatherSummary: { ar: string; en: string };
  recommendedStayAreas: { ar: string; en: string }[];
  localTransportAdvice: { ar: string; en: string };
  languageTips: { ar: string; en: string };
  essentialApps: string[];
}
```

## 8. Trade Fair Entity (`ITradeFair`)

Trade shows and exhibitions hosted in the city.

```typescript
export interface ITradeFair {
  id: string;
  name: { ar: string; en: string };
  industry: string;
  venue: { ar: string; en: string };
  occurrence: { ar: string; en: string };
  officialWebsite?: string;
  bestFor: string[];
}
```
