export type TradeTier = 'tier-1' | 'tier-2' | 'tier-3';

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
  tradeFocus: 'Wholesale' | 'Retail' | 'Commercial Office' | 'Mixed' | 'Manufacturing';
  suitableForImporter: boolean;
  suitableForBusinessTravel: boolean;
  nearestMetro?: string;
  nearestStation?: string;
}

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

export interface ISourcingProduct {
  id: string;
  productName: { ar: string; en: string };
  industryCategory: string;
  whyThisCity: { ar: string; en: string };
  mainManufacturingArea: { ar: string; en: string };
  wholesaleAvailability: 'High' | 'Medium' | 'Direct Factory Only';
  exportSuitability: 'High' | 'Medium' | 'Specialized Requirements';
}

export interface ILogisticsInfo {
  nearestAirports: string[];
  seaPorts: string[];
  highSpeedRailwayStations: string[];
  seaFreightSuitability: { ar: string; en: string };
  airFreightSuitability: { ar: string; en: string };
  primaryCargoRoutes: { ar: string[]; en: string[] };
}

export interface ITouristAttraction {
  id: string;
  name: { ar: string; en: string; zh?: string };
  category: { ar: string; en: string };
  description: { ar: string; en: string };
  nearestMetro?: string;
  image?: string;
}

export interface IRecommendedHotel {
  id: string;
  name: { ar: string; en: string; zh?: string };
  starRating?: number;
  category: { ar: string; en: string };
  area: { ar: string; en: string };
  highlights: { ar: string; en: string };
  address?: { ar: string; en: string };
}

export interface IRecommendedRestaurant {
  id: string;
  name: { ar: string; en: string; zh?: string };
  cuisineType: { ar: string; en: string };
  isHalal: boolean;
  address: { ar: string; en: string };
  recommendedFor: { ar: string; en: string };
}

export interface ITravelerService {
  id: string;
  serviceType: { ar: string; en: string };
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  details?: { ar: string; en: string };
}

export interface IBusinessTravelGuide {
  bestVisitMonths: string[];
  suggestedStayDays: number;
  weatherSummary: { ar: string; en: string };
  recommendedStayAreas: { ar: string; en: string }[];
  localTransportAdvice: { ar: string; en: string };
  languageTips: { ar: string; en: string };
  essentialApps: string[];
  touristAttractions?: ITouristAttraction[];
  recommendedHotels?: IRecommendedHotel[];
  recommendedRestaurants?: IRecommendedRestaurant[];
  essentialServices?: ITravelerService[];
}

export interface ITradeFair {
  id: string;
  name: { ar: string; en: string };
  industry: string;
  venue: { ar: string; en: string };
  occurrence: { ar: string; en: string };
  officialWebsite?: string;
  bestFor: string[];
}

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
  region: string;
  tier: TradeTier;
  commercialImportanceScore: number; // 1 - 100
  heroImage: string;
  skylineImage?: string;
  gallery?: string[];
  description: {
    ar: string;
    en: string;
  };
  keyIndustries: string[]; // e.g. ['electronics', 'furniture', 'textiles', 'machinery', 'lighting', 'small-commodities']
  primaryProducts: {
    ar: string[];
    en: string[];
  };
  bestFor: string[]; // e.g. ['Importer', 'Wholesaler', 'Startup', 'Furniture Business', 'Electronics Merchant']
  
  // Detailed Section Datasets
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

