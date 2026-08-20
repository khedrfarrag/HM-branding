"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { useCalculatorStorage } from "../hooks/useCalculatorStorage";
import { calculateVolumetric } from "../utils/calculators";
import type { VolumetricInputs, SummaryHandle } from "../types";
import type { Locale } from "@/domains/shared/value-objects";
import { Scale, Plane, Ship, Zap, RotateCcw } from "lucide-react";

interface VolumetricCalculatorProps {
  locale: Locale;
}

const defaultInputs: VolumetricInputs = {
  length: 50,
  width: 40,
  height: 30,
  quantity: 10,
  actualWeight: 12,
  mode: "air",
  unitSystem: "metric",
};

const VolumetricCalculator = forwardRef<SummaryHandle, VolumetricCalculatorProps>(function VolumetricCalculator(
  { locale },
  ref
) {
  const isAr = locale === "ar";
  const [inputs, setInputs] = useCalculatorStorage<VolumetricInputs>("volumetric_v1", defaultInputs);

  const results = calculateVolumetric(inputs);

  useImperativeHandle(ref, () => ({
    getSummaryText(loc) {
      const isArabic = loc === "ar";
      const header = isArabic
        ? `━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚖️ حاسبة الوزن الحجمي والوزن الخاضع للرسوم\nحاسبات حسام مبروك | hossammabrouk.com/ar/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`
        : `━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚖️ Volumetric & Chargeable Weight Calculator\nHossam Mabrouk Tools | hossammabrouk.com/en/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        
      const modeLabels = {
        express: isArabic ? "شحن سريع (1:5000)" : "Express (1:5000)",
        air: isArabic ? "شحن جوي (1:6000)" : "Air Freight (1:6000)",
        sea: isArabic ? "شحن بحري LCL" : "Sea LCL",
      };
      
      const inputsSection = isArabic
        ? `\n\n📥 المدخلات:\n• معامل الشحن: ${modeLabels[inputs.mode]}\n• الطول: ${inputs.length} ${inputs.unitSystem === "metric" ? "سم" : "بوصة"}\n• العرض: ${inputs.width} ${inputs.unitSystem === "metric" ? "سم" : "بوصة"}\n• الارتفاع: ${inputs.height} ${inputs.unitSystem === "metric" ? "سم" : "بوصة"}\n• الكمية: ${inputs.quantity}\n• الوزن الفعلي القائم: ${inputs.actualWeight} ${inputs.unitSystem === "metric" ? "كجم" : "رطل"}`
        : `\n\n📥 Inputs:\n• Shipping Factor: ${modeLabels[inputs.mode]}\n• Length: ${inputs.length} ${inputs.unitSystem === "metric" ? "cm" : "in"}\n• Width: ${inputs.width} ${inputs.unitSystem === "metric" ? "cm" : "in"}\n• Height: ${inputs.height} ${inputs.unitSystem === "metric" ? "cm" : "in"}\n• Quantity: ${inputs.quantity}\n• Actual Weight: ${inputs.actualWeight} ${inputs.unitSystem === "metric" ? "kg" : "lbs"}`;
        
      const basisText = results.billingBasis === "volumetric"
        ? (isArabic ? "الوزن الحجمي أعلى" : "Volumetric Weight is higher")
        : (isArabic ? "الوزن الفعلي أعلى" : "Actual Gross Weight is higher");
        
      const resultsSection = isArabic
        ? `\n\n📊 النتائج:\n• إجمالي الوزن الفعلي: ${results.actualWeightKg} كجم\n• إجمالي الوزن الحجمي: ${results.volumetricWeightKg} كجم\n• الوزن الخاضع للاحتساب: ${results.chargeableWeightKg} كجم\n• أساس الاحتساب: ${basisText} (${results.volumeRatioRatio})`
        : `\n\n📊 Results:\n• Total Actual Weight: ${results.actualWeightKg} kg\n• Total Volumetric Weight: ${results.volumetricWeightKg} kg\n• Chargeable Weight: ${results.chargeableWeightKg} kg\n• Billing Basis: ${basisText} (${results.volumeRatioRatio})`;
        
      return `${header}${inputsSection}${resultsSection}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    }
  }));

  const handleChange = <K extends keyof VolumetricInputs>(field: K, val: VolumetricInputs[K]) => {
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
          <div className="h-10 w-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {isAr ? "حاسبة الوزن الحجمي والوزن الخاضع للرسوم" : "Volumetric & Chargeable Weight Calculator"}
            </h3>
            <p className="text-xs text-silver font-light">
              {isAr
                ? "احسب الوزن القابل للشحن مقارنة بالوزن الفعلي للشحن الجوي والسريع والبحري."
                : "Determine chargeable billing weight vs gross actual weight for air & sea freight."}
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
                  ? "bg-cyan text-black font-bold shadow-md"
                  : "text-silver hover:text-white"
              }`}
            >
              Metric (cm/kg)
            </button>
            <button
              onClick={() => handleChange("unitSystem", "imperial")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                inputs.unitSystem === "imperial"
                  ? "bg-cyan text-black font-bold shadow-md"
                  : "text-silver hover:text-white"
              }`}
            >
              Imperial (in/lbs)
            </button>
          </div>

          <button
            onClick={handleReset}
            className="h-9 w-9 rounded-xl border border-glass bg-glass flex items-center justify-center text-silver hover:text-cyan hover:border-cyan transition-colors"
            title={isAr ? "إعادة ضبط" : "Reset"}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-sp-6 items-start">
        
        {/* Left Inputs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-sp-4 rounded-2xl border border-glass bg-graphite-900/60 p-sp-5 backdrop-blur-md">
          <span className="font-mono text-xs text-cyan uppercase tracking-wider font-semibold">
            {isAr ? "معامل الشحن والأبعاد" : "Freight Mode & Dimensions"}
          </span>

          {/* Mode Selector Tabs */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleChange("mode", "express")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs transition-all ${
                inputs.mode === "express"
                  ? "border-amber-400 bg-amber-500/15 text-amber-300 font-bold"
                  : "border-white/10 bg-black/40 text-silver hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4 mb-1" />
              <span>Express (1:5000)</span>
            </button>

            <button
              onClick={() => handleChange("mode", "air")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs transition-all ${
                inputs.mode === "air"
                  ? "border-cyan bg-cyan/15 text-cyan font-bold"
                  : "border-white/10 bg-black/40 text-silver hover:text-white"
              }`}
            >
              <Plane className="w-4 h-4 mb-1" />
              <span>Air (1:6000)</span>
            </button>

            <button
              onClick={() => handleChange("mode", "sea")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs transition-all ${
                inputs.mode === "sea"
                  ? "border-blue-400 bg-blue-500/15 text-blue-300 font-bold"
                  : "border-white/10 bg-black/40 text-silver hover:text-white"
              }`}
            >
              <Ship className="w-4 h-4 mb-1" />
              <span>Sea LCL</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-sp-3 mt-sp-2">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "الطول" : "Length"} ({inputs.unitSystem === "metric" ? "cm" : "in"})
              </label>
              <input
                type="number"
                min="1"
                value={inputs.length}
                onChange={(e) => handleChange("length", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-cyan focus:outline-none transition-colors"
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
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-cyan focus:outline-none transition-colors"
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
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-cyan focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-sp-3 mt-sp-1">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "عدد القطع/الكراتين" : "Quantity"}
              </label>
              <input
                type="number"
                min="1"
                value={inputs.quantity}
                onChange={(e) => handleChange("quantity", parseInt(e.target.value) || 1)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-cyan focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "الوزن الفعلي" : "Actual Gross Weight"} ({inputs.unitSystem === "metric" ? "kg" : "lbs"})
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={inputs.actualWeight}
                onChange={(e) => handleChange("actualWeight", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-cyan focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Right Output Cards (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-sp-4">
          
          <div className="grid grid-cols-2 gap-sp-4">
            <div className="flex flex-col items-start rounded-2xl border border-white/10 bg-graphite-900/80 p-sp-5">
              <span className="text-xs font-mono text-silver uppercase tracking-wider">
                {isAr ? "الوزن الفعلي" : "Actual Gross Weight"}
              </span>
              <div className="mt-2 font-mono text-3xl font-extrabold text-white">
                {results.actualWeightKg} <span className="text-sm text-silver font-sans">kg</span>
              </div>
            </div>

            <div className="flex flex-col items-start rounded-2xl border border-cyan/40 bg-gradient-to-br from-cyan/15 via-graphite-900 to-black p-sp-5">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider">
                {isAr ? "الوزن الحجمي" : "Volumetric Weight"}
              </span>
              <div className="mt-2 font-mono text-3xl font-extrabold text-white">
                {results.volumetricWeightKg} <span className="text-sm text-cyan font-sans">kg</span>
              </div>
            </div>
          </div>

          {/* Highlighted Chargeable Weight Box */}
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/20 via-graphite-800 to-black p-sp-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-sp-4">
            <div className="flex flex-col items-start">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider">
                {isAr ? "الوزن الخاضع للرسوم والشحن (Chargeable Weight)" : "Chargeable Billing Weight"}
              </span>
              <div className="mt-1 font-mono text-4xl font-black text-white">
                {results.chargeableWeightKg} <span className="text-lg text-gold font-sans">kg</span>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end text-xs font-mono">
              <span className="px-3 py-1 rounded-full border border-gold/40 bg-black/60 text-gold font-semibold mb-1">
                {results.billingBasis === "volumetric" ? (isAr ? "المكلف: الوزن الحجمي أعلى" : "Billing Basis: Volumetric") : (isAr ? "المكلف: الوزن الفعلي أعلى" : "Billing Basis: Actual Weight")}
              </span>
              <span className="text-silver-dim">{results.volumeRatioRatio}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
});

export default VolumetricCalculator;
