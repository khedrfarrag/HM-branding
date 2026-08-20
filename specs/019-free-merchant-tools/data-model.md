# Data Model: Free Merchant & Trade Calculators Suite

**Feature**: 019-free-merchant-tools
**Date**: 2026-08-13

---

## 1. Entities & Interfaces

### 1.1 Tool Definition (`MerchantTool`)
```typescript
export type ToolCategory = 'cbm' | 'volumetric' | 'landed-cost' | 'profit-margin' | 'freight';

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
```

### 1.2 Calculator Inputs (`CalculationInputs`)
```typescript
export type UnitSystem = 'metric' | 'imperial';

export interface CbmInputs {
  length: number;    // cm or inches
  width: number;     // cm or inches
  height: number;    // cm or inches
  quantity: number;  // number of cartons
  unitWeight: number; // kg or lbs per carton
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
  originPort: string;       // Guangzhou, Ningbo, Shanghai, Yiwu
  destinationRegion: string; // GCC, North Africa, Europe, USA
  shippingType: 'fcl_20' | 'fcl_40' | 'fcl_40hq' | 'lcl' | 'air';
  cbmVolume?: number;
  weightKg?: number;
}
```

### 1.3 Calculator Results (`CalculationResults`)
```typescript
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
  volumeRatioRatio: string; // "1:6000" or "1:5000"
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
```

---

## 2. Validation Rules (Zod Schemas)

- `length`, `width`, `height`, `quantity` MUST be $> 0$.
- `customsDutyPercent`, `vatPercent`, `platformFeePercent` MUST be $\ge 0$ and $\le 100$.
- Unit prices and landed costs MUST be $\ge 0$.
