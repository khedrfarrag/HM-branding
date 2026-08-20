"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { useCalculatorStorage } from "../hooks/useCalculatorStorage";
import { calculateProfitMargin } from "../utils/calculators";
import type { ProfitMarginInputs, SummaryHandle } from "../types";
import type { Locale } from "@/domains/shared/value-objects";
import { TrendingUp, CheckCircle, AlertTriangle, XCircle, RotateCcw } from "lucide-react";

interface ProfitMarginCalculatorProps {
  locale: Locale;
}

const defaultInputs: ProfitMarginInputs = {
  landedCostPerUnit: 15.5,
  targetRetailPrice: 35.0,
  platformFeePercent: 15,
  marketingCostPerUnit: 3.0,
  currency: "USD",
};

const ProfitMarginCalculator = forwardRef<SummaryHandle, ProfitMarginCalculatorProps>(function ProfitMarginCalculator(
  { locale },
  ref
) {
  const isAr = locale === "ar";
  const [inputs, setInputs] = useCalculatorStorage<ProfitMarginInputs>("profit_v1", defaultInputs);

  const results = calculateProfitMargin(inputs);

  useImperativeHandle(ref, () => ({
    getSummaryText(loc) {
      const isArabic = loc === "ar";
      const header = isArabic
        ? `━━━━━━━━━━━━━━━━━━━━━━━━━━\n📈 حاسبة صافي الربح وهامش الربحية والـ ROI\nحاسبات حسام مبروك | hossammabrouk.com/ar/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`
        : `━━━━━━━━━━━━━━━━━━━━━━━━━━\n📈 Net Profit Margin & ROI Calculator\nHossam Mabrouk Tools | hossammabrouk.com/en/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        
      const inputsSection = isArabic
        ? `\n\n📥 المدخلات:\n• سعر البيع المستهدف: ${inputs.targetRetailPrice} ${inputs.currency}\n• تكلفة القطعة الواصلة (Landed): ${inputs.landedCostPerUnit} ${inputs.currency}\n• عمولة المنصة: ${inputs.platformFeePercent}%\n• تكلفة التسويق للقطعة: ${inputs.marketingCostPerUnit} ${inputs.currency}`
        : `\n\n📥 Inputs:\n• Target Retail Price: ${inputs.targetRetailPrice} ${inputs.currency}\n• Unit Landed Cost: ${inputs.landedCostPerUnit} ${inputs.currency}\n• Platform Fee: ${inputs.platformFeePercent}%\n• Ad/Marketing Cost per Unit: ${inputs.marketingCostPerUnit} ${inputs.currency}`;
        
      const statusText = results.profitabilityStatus === "healthy"
        ? (isArabic ? "ربحية ممتازة وهامش آمن" : "Healthy Margin & Profitability")
        : results.profitabilityStatus === "tight"
        ? (isArabic ? "هامش ضيق — ينصح بتعديل السعر" : "Tight Margin — Consider Adjusting")
        : (isArabic ? "خسارة — تكلفة أعلى من البيع" : "Unprofitable Product Scenario");

      const resultsSection = isArabic
        ? `\n\n📊 النتائج:\n• صافي الربح لكل قطعة: ${results.netProfitPerUnit} ${inputs.currency}\n• هامش الربح الصافي: ${results.netMarginPercent}%\n• العائد على الاستثمار (ROI): ${results.roiPercent}%\n• حالة الربحية: ${statusText}\n• سعر التعادل (أدنى حد للبيع بدون خسارة): ${results.breakEvenPrice} ${inputs.currency}`
        : `\n\n📊 Results:\n• Net Profit Per Unit: ${results.netProfitPerUnit} ${inputs.currency}\n• Net Profit Margin: ${results.netMarginPercent}%\n• Return on Investment (ROI): ${results.roiPercent}%\n• Profitability Status: ${statusText}\n• Break-even Retail Price: ${results.breakEvenPrice} ${inputs.currency}`;
        
      return `${header}${inputsSection}${resultsSection}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    }
  }));

  const handleChange = <K extends keyof ProfitMarginInputs>(field: K, val: ProfitMarginInputs[K]) => {
    setInputs((prev) => ({ ...prev, [field]: val }));
  };

  const handleReset = () => {
    setInputs(defaultInputs);
  };

  return (
    <div className="flex flex-col gap-sp-6 w-full">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-sp-3 pb-sp-4 border-b border-white/10">
        <div className="flex items-center gap-sp-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {isAr ? "حاسبة صافي الربح وهامش الربحية والـ ROI" : "Net Profit Margin & ROI Calculator"}
            </h3>
            <p className="text-xs text-silver font-light">
              {isAr
                ? "احسب صافي الربح، الهامش الربحي %، العائد على الاستثمار ROI، ونقطة التعادل."
                : "Calculate net profit per unit, margin %, ROI %, and break-even retail selling price."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Currency Selector */}
          <div className="flex items-center rounded-xl bg-black/60 border border-white/10 p-1">
            {["USD", "SAR", "AED", "EGP"].map((curr) => (
              <button
                key={curr}
                onClick={() => handleChange("currency", curr)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  inputs.currency === curr
                    ? "bg-emerald-400 text-black font-bold shadow-md"
                    : "text-silver hover:text-white"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="h-9 w-9 rounded-xl border border-glass bg-glass flex items-center justify-center text-silver hover:text-emerald-400 hover:border-emerald-400 transition-colors"
            title={isAr ? "إعادة ضبط" : "Reset"}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-sp-6 items-start">
        
        {/* Left Inputs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-sp-4 rounded-2xl border border-glass bg-graphite-900/60 p-sp-5 backdrop-blur-md">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
            {isAr ? "مدخلات التكلفة والبيع" : "Pricing & Cost Inputs"}
          </span>

          <div className="grid grid-cols-2 gap-sp-3">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "سعر البيع المستهدف" : "Target Retail Price"} ({inputs.currency})
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={inputs.targetRetailPrice}
                onChange={(e) => handleChange("targetRetailPrice", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "تكلفة القطعة الواصلة" : "Unit Landed Cost"} ({inputs.currency})
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={inputs.landedCostPerUnit}
                onChange={(e) => handleChange("landedCostPerUnit", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-sp-3">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "عمولة المنصة (%)" : "Platform Fee %"} (e.g. Amazon)
              </label>
              <input
                type="number"
                min="0"
                max="90"
                step="1"
                value={inputs.platformFeePercent}
                onChange={(e) => handleChange("platformFeePercent", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "تكلفة التسويق للقطعة" : "Ad / Marketing / Unit"} ({inputs.currency})
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={inputs.marketingCostPerUnit}
                onChange={(e) => handleChange("marketingCostPerUnit", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Right Output Dashboard (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-sp-4">
          
          <div className="grid grid-cols-3 gap-sp-3">
            {/* Net Profit */}
            <div className="flex flex-col items-start rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-graphite-900 to-black p-sp-4">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                {isAr ? "صافي الربح / قطعة" : "Net Profit / Unit"}
              </span>
              <div className="mt-1 font-mono text-2xl font-extrabold text-white">
                {results.netProfitPerUnit} <span className="text-xs text-emerald-400 font-sans">{inputs.currency}</span>
              </div>
            </div>

            {/* Net Margin % */}
            <div className="flex flex-col items-start rounded-2xl border border-white/10 bg-graphite-900/80 p-sp-4">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">
                {isAr ? "هامش الربح الصافي" : "Net Profit Margin"}
              </span>
              <div className="mt-1 font-mono text-2xl font-extrabold text-white">
                {results.netMarginPercent}%
              </div>
            </div>

            {/* ROI % */}
            <div className="flex flex-col items-start rounded-2xl border border-white/10 bg-graphite-900/80 p-sp-4">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">
                {isAr ? "العائد على الاستثمار" : "ROI"}
              </span>
              <div className="mt-1 font-mono text-2xl font-extrabold text-white">
                {results.roiPercent}%
              </div>
            </div>
          </div>

          {/* Status & Break Even Box */}
          <div className="rounded-2xl border border-glass bg-gradient-to-br from-graphite-900 via-graphite-800 to-black p-sp-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-sp-4">
            <div className="flex items-center gap-sp-3">
              {results.profitabilityStatus === "healthy" && (
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle className="w-5 h-5" />
                </div>
              )}
              {results.profitabilityStatus === "tight" && (
                <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              )}
              {results.profitabilityStatus === "unprofitable" && (
                <div className="h-10 w-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/40">
                  <XCircle className="w-5 h-5" />
                </div>
              )}

              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-white">
                  {results.profitabilityStatus === "healthy" && (isAr ? "ربحية ممتازة وهامش آمن" : "Healthy Margin & Profitability")}
                  {results.profitabilityStatus === "tight" && (isAr ? "هامش ضيق — ينصح بتعديل السعر" : "Tight Margin — Consider Adjusting")}
                  {results.profitabilityStatus === "unprofitable" && (isAr ? "خسارة — تكلفة أعلى من البيع" : "Unprofitable Product Scenario")}
                </span>
                <span className="text-[11px] text-silver font-light">
                  {isAr ? "سعر التعادل أدنى حد للبيع بدون خسارة:" : "Break-even retail selling price limit:"}
                </span>
              </div>
            </div>

            <div className="font-mono text-sm font-bold text-gold bg-gold/10 px-3 py-1.5 rounded-xl border border-gold/30">
              {results.breakEvenPrice} {inputs.currency}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
});

export default ProfitMarginCalculator;
