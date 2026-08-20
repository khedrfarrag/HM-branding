"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { useCalculatorStorage } from "../hooks/useCalculatorStorage";
import { calculateCbm } from "../utils/calculators";
import type { CbmInputs, SummaryHandle } from "../types";
import type { Locale } from "@/domains/shared/value-objects";
import { Box, Container as LucideContainer, RotateCcw } from "lucide-react";

interface CbmCalculatorProps {
  locale: Locale;
}

const defaultInputs: CbmInputs = {
  length: 60,
  width: 40,
  height: 40,
  quantity: 20,
  unitWeight: 15,
  unitSystem: "metric",
};

const CbmCalculator = forwardRef<SummaryHandle, CbmCalculatorProps>(function CbmCalculator(
  { locale },
  ref
) {
  const isAr = locale === "ar";
  const [inputs, setInputs] = useCalculatorStorage<CbmInputs>("cbm_v1", defaultInputs);

  const results = calculateCbm(inputs);

  useImperativeHandle(ref, () => ({
    getSummaryText(loc) {
      const isArabic = loc === "ar";
      const header = isArabic
        ? `━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 حاسبة الحجم CBM ونسبة استغلال الحاوية\nحاسبات حسام مبروك | hossammabrouk.com/ar/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`
        : `━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 CBM & Container Volume Calculator\nHossam Mabrouk Tools | hossammabrouk.com/en/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        
      const inputsSection = isArabic
        ? `\n\n📥 المدخلات:\n• الطول: ${inputs.length} ${inputs.unitSystem === "metric" ? "سم" : "بوصة"}\n• العرض: ${inputs.width} ${inputs.unitSystem === "metric" ? "سم" : "بوصة"}\n• الارتفاع: ${inputs.height} ${inputs.unitSystem === "metric" ? "سم" : "بوصة"}\n• عدد الكراتين: ${inputs.quantity}\n• وزن الكرتونة: ${inputs.unitWeight} ${inputs.unitSystem === "metric" ? "كجم" : "رطل"}`
        : `\n\n📥 Inputs:\n• Length: ${inputs.length} ${inputs.unitSystem === "metric" ? "cm" : "in"}\n• Width: ${inputs.width} ${inputs.unitSystem === "metric" ? "cm" : "in"}\n• Height: ${inputs.height} ${inputs.unitSystem === "metric" ? "cm" : "in"}\n• Total Cartons: ${inputs.quantity}\n• Weight / Box: ${inputs.unitWeight} ${inputs.unitSystem === "metric" ? "kg" : "lbs"}`;
        
      const containerModeText = results.suggestedContainer === "lcl"
        ? (isArabic ? "جزئي LCL" : "LCL Shared")
        : (isArabic ? `حاوية ${results.suggestedContainer}` : `${results.suggestedContainer} FCL`);
        
      const resultsSection = isArabic
        ? `\n\n📊 النتائج:\n• إجمالي الحجم CBM: ${results.totalCbm} م³ (${results.totalCft} قدم مكعب)\n• الوزن الإجمالي: ${results.totalGrossWeightKg} كجم (${(results.totalGrossWeightKg * 2.20462).toFixed(1)} رطل)\n• نوع الشحن المقترح: ${containerModeText}\n• استغلال حاوية 20ft GP: ${results.container20FillPercent}%\n• استغلال حاوية 40ft GP: ${results.container40FillPercent}%\n• استغلال حاوية 40ft HQ: ${results.container40HqFillPercent}%`
        : `\n\n📊 Results:\n• Total CBM: ${results.totalCbm} m³ (${results.totalCft} ft³)\n• Gross Weight: ${results.totalGrossWeightKg} kg (${(results.totalGrossWeightKg * 2.20462).toFixed(1)} lbs)\n• Suggested Shipping Mode: ${containerModeText}\n• 20ft GP Container Fill: ${results.container20FillPercent}%\n• 40ft GP Container Fill: ${results.container40FillPercent}%\n• 40ft HQ Container Fill: ${results.container40HqFillPercent}%`;
        
      return `${header}${inputsSection}${resultsSection}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    }
  }));

  const handleChange = <K extends keyof CbmInputs>(field: K, val: CbmInputs[K]) => {
    setInputs((prev) => ({ ...prev, [field]: val }));
  };

  const handleReset = () => {
    setInputs(defaultInputs);
  };

  return (
    <div className="flex flex-col gap-sp-6 w-full">
      {/* Top Header & Unit Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-sp-3 pb-sp-4 border-b border-white/10">
        <div className="flex items-center gap-sp-3">
          <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {isAr ? "حاسبة الحجم CBM ونسبة استغلال الحاوية" : "CBM & Container Volume Calculator"}
            </h3>
            <p className="text-xs text-silver font-light">
              {isAr
                ? "احسب إجمالي الحجم بالمتر المكعب، الوزن الإجمالي، ونسبة استغلال سعة الحاوية فوريًا."
                : "Calculate total cubic volume, gross weight & container utilization instantly."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Unit Toggle Pill */}
          <div className="flex items-center rounded-xl bg-black/60 border border-white/10 p-1">
            <button
              onClick={() => handleChange("unitSystem", "metric")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                inputs.unitSystem === "metric"
                  ? "bg-gold text-black font-bold shadow-md"
                  : "text-silver hover:text-white"
              }`}
            >
              Metric (cm/kg)
            </button>
            <button
              onClick={() => handleChange("unitSystem", "imperial")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                inputs.unitSystem === "imperial"
                  ? "bg-gold text-black font-bold shadow-md"
                  : "text-silver hover:text-white"
              }`}
            >
              Imperial (in/lbs)
            </button>
          </div>

          <button
            onClick={handleReset}
            className="h-9 w-9 rounded-xl border border-glass bg-glass flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors"
            title={isAr ? "إعادة ضبط" : "Reset"}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs Left, Output Cards Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-sp-6 items-start">
        
        {/* Input Fields (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-sp-4 rounded-2xl border border-glass bg-graphite-900/60 p-sp-5 backdrop-blur-md">
          <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
            {isAr ? "أبعاد الكرتونة والكمية" : "Box Dimensions & Quantity"}
          </span>

          <div className="grid grid-cols-3 gap-sp-3">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "الطول" : "Length"} ({inputs.unitSystem === "metric" ? "cm" : "in"})
              </label>
              <input
                type="number"
                min="1"
                value={inputs.length}
                onChange={(e) => handleChange("length", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "العرض" : "Width"} ({inputs.unitSystem === "metric" ? "cm" : "in"})
              </label>
              <input
                type="number"
                min="1"
                value={inputs.width}
                onChange={(e) => handleChange("width", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "الارتفاع" : "Height"} ({inputs.unitSystem === "metric" ? "cm" : "in"})
              </label>
              <input
                type="number"
                min="1"
                value={inputs.height}
                onChange={(e) => handleChange("height", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-sp-3 mt-sp-1">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "عدد الكراتين" : "Total Cartons"}
              </label>
              <input
                type="number"
                min="1"
                value={inputs.quantity}
                onChange={(e) => handleChange("quantity", parseInt(e.target.value) || 1)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "وزن الكرتونة" : "Weight / Box"} ({inputs.unitSystem === "metric" ? "kg" : "lbs"})
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={inputs.unitWeight}
                onChange={(e) => handleChange("unitWeight", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Output Metrics & Container Progress Bars (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-sp-4">
          
          {/* 3 Metric Summary Boxes */}
          <div className="grid grid-cols-3 gap-sp-3">
            <div className="flex flex-col items-start rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 via-graphite-900 to-black p-sp-4">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider">
                {isAr ? "الحجم الإجمالي" : "Total CBM"}
              </span>
              <div className="mt-1 font-mono text-2xl font-extrabold text-white">
                {results.totalCbm} <span className="text-xs font-sans text-gold">m³</span>
              </div>
              <span className="text-[10px] font-mono text-silver-dim mt-0.5">
                {results.totalCft} ft³
              </span>
            </div>

            <div className="flex flex-col items-start rounded-2xl border border-white/10 bg-graphite-900/80 p-sp-4">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">
                {isAr ? "الوزن القائم" : "Gross Weight"}
              </span>
              <div className="mt-1 font-mono text-2xl font-extrabold text-white">
                {results.totalGrossWeightKg} <span className="text-xs font-sans text-silver">kg</span>
              </div>
              <span className="text-[10px] font-mono text-silver-dim mt-0.5">
                {(results.totalGrossWeightKg * 2.20462).toFixed(1)} lbs
              </span>
            </div>

            <div className="flex flex-col items-start rounded-2xl border border-white/10 bg-graphite-900/80 p-sp-4">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">
                {isAr ? "نوع الشحن" : "Shipping Mode"}
              </span>
              <div className="mt-1 font-display text-lg font-bold text-cyan uppercase">
                {results.suggestedContainer === "lcl" ? (isAr ? "جزئي LCL" : "LCL Shared") : (isAr ? `حاوية ${results.suggestedContainer}` : `${results.suggestedContainer} FCL`)}
              </div>
              <span className="text-[10px] font-mono text-silver-dim mt-0.5">
                {isAr ? "توصية الاستغلال" : "Recommended Payload"}
              </span>
            </div>
          </div>

          {/* Container Utilization Bars */}
          <div className="rounded-2xl border border-glass bg-gradient-to-br from-graphite-900 via-graphite-800 to-black p-sp-5 flex flex-col gap-sp-3">
            <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold flex items-center gap-2">
              <LucideContainer className="w-4 h-4 text-gold" />
              {isAr ? "نسبة استغلال سعة الحاوية" : "Container Volume Utilization"}
            </span>

            {/* 20ft Container */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white font-medium">20ft GP (28 m³)</span>
                <span className="text-gold font-bold">{results.container20FillPercent}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-black/80 overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-gold to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${results.container20FillPercent}%` }}
                />
              </div>
            </div>

            {/* 40ft Container */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white font-medium">40ft GP (58 m³)</span>
                <span className="text-gold font-bold">{results.container40FillPercent}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-black/80 overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-cyan to-blue-400 rounded-full transition-all duration-500"
                  style={{ width: `${results.container40FillPercent}%` }}
                />
              </div>
            </div>

            {/* 40ft HQ Container */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white font-medium">40ft HQ (68 m³)</span>
                <span className="text-gold font-bold">{results.container40HqFillPercent}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-black/80 overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${results.container40HqFillPercent}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
});

export default CbmCalculator;
