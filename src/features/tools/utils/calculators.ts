import type {
  CbmInputs,
  CbmResult,
  VolumetricInputs,
  VolumetricResult,
  LandedCostInputs,
  LandedCostResult,
  ProfitMarginInputs,
  ProfitMarginResult,
} from '../types';

/**
 * 1. CBM & Container Utilization Calculator
 */
export function calculateCbm(inputs: CbmInputs): CbmResult {
  const { length, width, height, quantity, unitWeight, unitSystem } = inputs;

  // Convert imperial inputs to metric if needed
  const lengthCm = unitSystem === 'imperial' ? length * 2.54 : length;
  const widthCm = unitSystem === 'imperial' ? width * 2.54 : width;
  const heightCm = unitSystem === 'imperial' ? height * 2.54 : height;
  const weightKgPerCarton = unitSystem === 'imperial' ? unitWeight * 0.453592 : unitWeight;

  const volumePerBoxM3 = (lengthCm * widthCm * heightCm) / 1_000_000;
  const totalCbm = Number((volumePerBoxM3 * Math.max(1, quantity)).toFixed(3));
  const totalCft = Number((totalCbm * 35.3147).toFixed(2));
  const totalGrossWeightKg = Number((weightKgPerCarton * Math.max(1, quantity)).toFixed(1));

  // Container Usable Capacity Benchmarks
  const c20Capacity = 28.0; // 20GP usable m3
  const c40Capacity = 58.0; // 40GP usable m3
  const c40HqCapacity = 68.0; // 40HQ usable m3

  const container20FillPercent = Number(Math.min(100, (totalCbm / c20Capacity) * 100).toFixed(1));
  const container40FillPercent = Number(Math.min(100, (totalCbm / c40Capacity) * 100).toFixed(1));
  const container40HqFillPercent = Number(Math.min(100, (totalCbm / c40HqCapacity) * 100).toFixed(1));

  let suggestedContainer: CbmResult['suggestedContainer'] = 'lcl';
  if (totalCbm >= 55) {
    suggestedContainer = '40hq';
  } else if (totalCbm >= 25) {
    suggestedContainer = '40ft';
  } else if (totalCbm >= 12) {
    suggestedContainer = '20ft';
  }

  return {
    totalCbm,
    totalCft,
    totalGrossWeightKg,
    container20FillPercent,
    container40FillPercent,
    container40HqFillPercent,
    suggestedContainer,
  };
}

/**
 * 2. Volumetric Chargeable Weight Calculator
 */
export function calculateVolumetric(inputs: VolumetricInputs): VolumetricResult {
  const { length, width, height, quantity, actualWeight, mode, unitSystem } = inputs;

  const lengthCm = unitSystem === 'imperial' ? length * 2.54 : length;
  const widthCm = unitSystem === 'imperial' ? width * 2.54 : width;
  const heightCm = unitSystem === 'imperial' ? height * 2.54 : height;
  const actualWeightKg = unitSystem === 'imperial' ? actualWeight * 0.453592 : actualWeight;

  let divisor = 6000;
  let volumeRatioRatio = '1:6000 (Air Freight)';

  if (mode === 'express') {
    divisor = 5000;
    volumeRatioRatio = '1:5000 (Courier Express)';
  } else if (mode === 'sea') {
    divisor = 1000;
    volumeRatioRatio = '1:1000 (1 CBM = 1000 kg)';
  }

  const volumeM3 = (lengthCm * widthCm * heightCm * quantity) / 1_000_000;
  let volumetricWeightKg = 0;

  if (mode === 'sea') {
    volumetricWeightKg = volumeM3 * 1000;
  } else {
    volumetricWeightKg = (lengthCm * widthCm * heightCm * quantity) / divisor;
  }

  volumetricWeightKg = Number(volumetricWeightKg.toFixed(2));
  const roundedActualKg = Number(actualWeightKg.toFixed(2));
  const chargeableWeightKg = Math.max(roundedActualKg, volumetricWeightKg);
  const billingBasis = volumetricWeightKg > roundedActualKg ? 'volumetric' : 'actual';

  return {
    actualWeightKg: roundedActualKg,
    volumetricWeightKg,
    chargeableWeightKg,
    billingBasis,
    volumeRatioRatio,
  };
}

/**
 * 3. Total Import Landed Cost Calculator
 */
export function calculateLandedCost(inputs: LandedCostInputs): LandedCostResult {
  const {
    unitFobPrice,
    orderQuantity,
    chinaShippingCost,
    intlFreightCost,
    customsDutyPercent,
    vatPercent,
    otherFees,
  } = inputs;

  const qty = Math.max(1, orderQuantity);
  const totalProductFob = Number((unitFobPrice * qty).toFixed(2));
  
  const totalCustomsDuty = Number((totalProductFob * (customsDutyPercent / 100)).toFixed(2));
  const vatBase = totalProductFob + totalCustomsDuty;
  const totalVat = Number((vatBase * (vatPercent / 100)).toFixed(2));

  const totalLandedCost = Number(
    (totalProductFob + chinaShippingCost + intlFreightCost + totalCustomsDuty + totalVat + otherFees).toFixed(2)
  );

  const landedCostPerUnit = Number((totalLandedCost / qty).toFixed(2));

  const safeTotal = Math.max(0.01, totalLandedCost);
  const dutySharePercent = Number(((totalCustomsDuty / safeTotal) * 100).toFixed(1));
  const freightSharePercent = Number((((chinaShippingCost + intlFreightCost) / safeTotal) * 100).toFixed(1));
  const productSharePercent = Number(((totalProductFob / safeTotal) * 100).toFixed(1));

  return {
    totalProductFob,
    totalCustomsDuty,
    totalVat,
    totalLandedCost,
    landedCostPerUnit,
    dutySharePercent,
    freightSharePercent,
    productSharePercent,
  };
}

/**
 * 4. Net Profit Margin & ROI Calculator
 */
export function calculateProfitMargin(inputs: ProfitMarginInputs): ProfitMarginResult {
  const { landedCostPerUnit, targetRetailPrice, platformFeePercent, marketingCostPerUnit } = inputs;

  const platformFeeAmount = targetRetailPrice * (platformFeePercent / 100);
  const totalCost = landedCostPerUnit + platformFeeAmount + marketingCostPerUnit;

  const netProfitPerUnit = Number((targetRetailPrice - totalCost).toFixed(2));
  
  const safeRetailPrice = Math.max(0.01, targetRetailPrice);
  const safeLandedCost = Math.max(0.01, landedCostPerUnit);

  const netMarginPercent = Number(((netProfitPerUnit / safeRetailPrice) * 100).toFixed(1));
  const roiPercent = Number(((netProfitPerUnit / safeLandedCost) * 100).toFixed(1));

  // Break Even Retail Price formula: (LandedCost + MarketingCost) / (1 - PlatformFee%)
  const feeDecimal = Math.min(0.95, platformFeePercent / 100);
  const breakEvenPrice = Number(((landedCostPerUnit + marketingCostPerUnit) / (1 - feeDecimal)).toFixed(2));

  let profitabilityStatus: ProfitMarginResult['profitabilityStatus'] = 'healthy';
  if (netMarginPercent < 0) {
    profitabilityStatus = 'unprofitable';
  } else if (netMarginPercent < 15) {
    profitabilityStatus = 'tight';
  }

  return {
    netProfitPerUnit,
    netMarginPercent,
    roiPercent,
    breakEvenPrice,
    profitabilityStatus,
  };
}
