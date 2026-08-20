import type { Locale } from "@/domains/shared/value-objects";

export type ToolCategory = 'cbm' | 'volumetric' | 'landed-cost' | 'profit-margin' | 'freight';

export type UnitSystem = 'metric' | 'imperial';

export interface MerchantTool {
  id: ToolCategory;
  slug: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  iconName: string;
  badgeAr: string;
  badgeEn: string;
}

export interface CbmInputs {
  length: number;       // cm or inches
  width: number;        // cm or inches
  height: number;       // cm or inches
  quantity: number;     // number of cartons
  unitWeight: number;   // kg or lbs per carton
  unitSystem: UnitSystem;
}

export interface VolumetricInputs {
  length: number;
  width: number;
  height: number;
  quantity: number;
  actualWeight: number;
  mode: 'express' | 'air' | 'sea'; // express=5000, air=6000, sea=1000/cbm
  unitSystem: UnitSystem;
}

export interface LandedCostInputs {
  unitFobPrice: number;
  orderQuantity: number;
  chinaShippingCost: number;
  intlFreightCost: number;
  customsDutyPercent: number;
  vatPercent: number;
  otherFees: number; // inspection, clearance, handling
  currency: string;  // USD, EGP, SAR, AED
}

export interface ProfitMarginInputs {
  landedCostPerUnit: number;
  targetRetailPrice: number;
  platformFeePercent: number; // e.g. Amazon 15%
  marketingCostPerUnit: number;
  currency: string;
}

export interface FreightEstimateInputs {
  originPort: string;
  destinationRegion: string;
  shippingType: 'fcl_20' | 'fcl_40' | 'fcl_40hq' | 'lcl' | 'air';
  cbmVolume?: number;
  weightKg?: number;
}

export interface CbmResult {
  totalCbm: number;
  totalCft: number;
  totalGrossWeightKg: number;
  container20FillPercent: number;
  container40FillPercent: number;
  container40HqFillPercent: number;
  suggestedContainer: 'lcl' | '20ft' | '40ft' | '40hq';
}

export interface VolumetricResult {
  actualWeightKg: number;
  volumetricWeightKg: number;
  chargeableWeightKg: number;
  billingBasis: 'actual' | 'volumetric';
  volumeRatioRatio: string;
}

export interface LandedCostResult {
  totalProductFob: number;
  totalCustomsDuty: number;
  totalVat: number;
  totalLandedCost: number;
  landedCostPerUnit: number;
  dutySharePercent: number;
  freightSharePercent: number;
  productSharePercent: number;
}

export interface ProfitMarginResult {
  netProfitPerUnit: number;
  netMarginPercent: number;
  roiPercent: number;
  breakEvenPrice: number;
  profitabilityStatus: 'healthy' | 'tight' | 'unprofitable';
}

export interface SummaryHandle {
  getSummaryText(locale: Locale): string;
}
