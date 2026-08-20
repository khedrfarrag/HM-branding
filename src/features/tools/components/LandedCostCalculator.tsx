"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { useCalculatorStorage } from "../hooks/useCalculatorStorage";
import { calculateLandedCost } from "../utils/calculators";
import type { LandedCostInputs, SummaryHandle } from "../types";
import type { Locale } from "@/domains/shared/value-objects";
import { DollarSign, PieChart, RotateCcw } from "lucide-react";

interface LandedCostCalculatorProps {
  locale: Locale;
}

const defaultInputs: LandedCostInputs = {
  unitFobPrice: 10,
  orderQuantity: 1000,
  chinaShippingCost: 150,
  intlFreightCost: 1800,
  customsDutyPercent: 10,
  vatPercent: 14,
  otherFees: 200,
  currency: "USD",
};

const LandedCostCalculator = forwardRef<SummaryHandle, LandedCostCalculatorProps>(function LandedCostCalculator(
  { locale },
  ref
) {
  const isAr = locale === "ar";
  const [inputs, setInputs] = useCalculatorStorage<LandedCostInputs>("landed_v1", defaultInputs);

  const results = calculateLandedCost(inputs);

  useImperativeHandle(ref, () => ({
    getSummaryText(loc) {
      const isArabic = loc === "ar";
      const header = isArabic
        ? `━━━━━━━━━━━━━━━━━━━━━━━━━━\n💵 حاسبة تكلفة الاستيراد والقطعة الواصلة (Landed Cost)\nحاسبات حسام مبروك | hossammabrouk.com/ar/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`
        : `━━━━━━━━━━━━━━━━━━━━━━━━━━\n💵 Total Import Landed Cost Calculator\nHossam Mabrouk Tools | hossammabrouk.com/en/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        
      const inputsSection = isArabic
        ? `\n\n📥 المدخلات:\n• سعر القطعة المصنع (FOB): ${inputs.unitFobPrice} ${inputs.currency}\n• كمية الشحنة (القطع): ${inputs.orderQuantity}\n• الشحن الداخلي بالصين: ${inputs.chinaShippingCost} ${inputs.currency}\n• الشحن الدولي (بحري/جوي): ${inputs.intlFreightCost} ${inputs.currency}\n• نسبة الجمرك: ${inputs.customsDutyPercent}%\n• ضريبة القيمة المضافة: ${inputs.vatPercent}%\n• رسوم التخليص والفحص: ${inputs.otherFees} ${inputs.currency}`
        : `\n\n📥 Inputs:\n• Unit Product FOB: ${inputs.unitFobPrice} ${inputs.currency}\n• Order Quantity: ${inputs.orderQuantity}\n• China Inland Freight: ${inputs.chinaShippingCost} ${inputs.currency}\n• Intl Shipping Freight: ${inputs.intlFreightCost} ${inputs.currency}\n• Customs Duty: ${inputs.customsDutyPercent}%\n• VAT: ${inputs.vatPercent}%\n• Clearance & Inspection Fees: ${inputs.otherFees} ${inputs.currency}`;
        
      const resultsSection = isArabic
        ? `\n\n📊 النتائج:\n• التكلفة النهائية للقطعة الواصلة: ${results.landedCostPerUnit} ${inputs.currency}\n• إجمالي الاستثمار (التكلفة الكلية): ${results.totalLandedCost.toLocaleString()} ${inputs.currency}\n• قيمة البضائع بالمصنع (FOB): ${results.totalProductFob.toLocaleString()} ${inputs.currency} (${results.productSharePercent}%)\n• الجمارك والضرائب (Duty & VAT): ${(results.totalCustomsDuty + results.totalVat).toLocaleString()} ${inputs.currency} (${results.dutySharePercent}%)\n• الشحن والتخليص اللوجستي: ${(inputs.chinaShippingCost + inputs.intlFreightCost + inputs.otherFees).toLocaleString()} ${inputs.currency} (${results.freightSharePercent}%)`
        : `\n\n📊 Results:\n• Landed Cost Per Unit: ${results.landedCostPerUnit} ${inputs.currency}\n• Total Investment: ${results.totalLandedCost.toLocaleString()} ${inputs.currency}\n• Product FOB Total: ${results.totalProductFob.toLocaleString()} ${inputs.currency} (${results.productSharePercent}%)\n• Customs & VAT: ${(results.totalCustomsDuty + results.totalVat).toLocaleString()} ${inputs.currency} (${results.dutySharePercent}%)\n• Freight & Logistics: ${(inputs.chinaShippingCost + inputs.intlFreightCost + inputs.otherFees).toLocaleString()} ${inputs.currency} (${results.freightSharePercent}%)`;
        
      return `${header}${inputsSection}${resultsSection}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    }
  }));

  const handleChange = <K extends keyof LandedCostInputs>(field: K, val: LandedCostInputs[K]) => {
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
          <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {isAr ? "حاسبة تكلفة الاستيراد والقطعة الواصلة (Landed Cost)" : "Total Import Landed Cost Calculator"}
            </h3>
            <p className="text-xs text-silver font-light">
              {isAr
                ? "حساب التكلفة النهائية والكاملة للقطعة الواصلة للمخزن شاملة الجمارك، الشحن، والضرائب."
                : "Itemize product unit price, freight, duty, VAT & clearance into final per-unit landed cost."}
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
                    ? "bg-amber-400 text-black font-bold shadow-md"
                    : "text-silver hover:text-white"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="h-9 w-9 rounded-xl border border-glass bg-glass flex items-center justify-center text-silver hover:text-amber-400 hover:border-amber-400 transition-colors"
            title={isAr ? "إعادة ضبط" : "Reset"}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-sp-6 items-start">
        
        {/* Itemized Input Fields (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-sp-4 rounded-2xl border border-glass bg-graphite-900/60 p-sp-5 backdrop-blur-md">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
            {isAr ? "عناصر التكلفة والشحن والجمارك" : "Cost Breakdown Inputs"}
          </span>

          <div className="grid grid-cols-2 gap-sp-3">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "سعر القطعة المصنع (FOB)" : "Unit Product FOB"} ({inputs.currency})
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={inputs.unitFobPrice}
                onChange={(e) => handleChange("unitFobPrice", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "كمية الشحنة (القطع)" : "Order Quantity"}
              </label>
              <input
                type="number"
                min="1"
                value={inputs.orderQuantity}
                onChange={(e) => handleChange("orderQuantity", parseInt(e.target.value) || 1)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-sp-3">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "الشحن الداخلي بالصين" : "China Inland Freight"} ({inputs.currency})
              </label>
              <input
                type="number"
                min="0"
                value={inputs.chinaShippingCost}
                onChange={(e) => handleChange("chinaShippingCost", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "الشحن الدولي (بحري/جوي)" : "Intl Shipping Freight"} ({inputs.currency})
              </label>
              <input
                type="number"
                min="0"
                value={inputs.intlFreightCost}
                onChange={(e) => handleChange("intlFreightCost", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-sp-3">
            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "نسبة الجمرك (%)" : "Customs Duty %"}
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={inputs.customsDutyPercent}
                onChange={(e) => handleChange("customsDutyPercent", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "ضريبة القيمة المضافة (%)" : "VAT %"}
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={inputs.vatPercent}
                onChange={(e) => handleChange("vatPercent", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver mb-1">
                {isAr ? "رسوم التخليص والفحص" : "Clearance & Inspection"}
              </label>
              <input
                type="number"
                min="0"
                value={inputs.otherFees}
                onChange={(e) => handleChange("otherFees", parseFloat(e.target.value) || 0)}
                className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Output Calculation Breakdown (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-sp-4">
          
          {/* Highlighted Landed Cost Per Unit Box */}
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/25 via-graphite-800 to-black p-sp-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-sp-4 shadow-xl">
            <div className="flex flex-col items-start">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider">
                {isAr ? "التكلفة النهائية للقطعة الواصلة (Landed Cost / Unit)" : "Landed Cost Per Unit"}
              </span>
              <div className="mt-1 font-mono text-4xl font-black text-white">
                {results.landedCostPerUnit} <span className="text-lg text-gold font-sans">{inputs.currency}</span>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end text-xs font-mono">
              <span className="text-silver-dim">{isAr ? "إجمالي الاستثمار" : "Total Investment"}</span>
              <span className="font-bold text-white text-base mt-0.5">
                {results.totalLandedCost.toLocaleString()} {inputs.currency}
              </span>
            </div>
          </div>

          {/* Itemized Distribution Table */}
          <div className="rounded-2xl border border-glass bg-gradient-to-br from-graphite-900 via-graphite-800 to-black p-sp-5 flex flex-col gap-sp-3">
            <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-2">
              <PieChart className="w-4 h-4 text-amber-400" />
              {isAr ? "توزيع بنود التكلفة الإجمالية" : "Cost Share Distribution"}
            </span>

            <div className="flex flex-col gap-sp-2 text-xs font-mono">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-silver">{isAr ? "قيمة البضائع بالمصنع (FOB)" : "Product FOB Total"}</span>
                <span className="text-white font-bold">{results.totalProductFob.toLocaleString()} {inputs.currency} ({results.productSharePercent}%)</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-silver">{isAr ? "الجمارك والضرائب (Duty & VAT)" : "Customs & VAT"}</span>
                <span className="text-amber-400 font-bold">{(results.totalCustomsDuty + results.totalVat).toLocaleString()} {inputs.currency} ({results.dutySharePercent}%)</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-silver">{isAr ? "الشحن والتخليص اللوجستي" : "Freight & Logistics"}</span>
                <span className="text-cyan font-bold">{(inputs.chinaShippingCost + inputs.intlFreightCost + inputs.otherFees).toLocaleString()} {inputs.currency} ({results.freightSharePercent}%)</span>
              </div>
            </div>

            {/* Visual Stacked Bar */}
            <div className="h-3 w-full rounded-full bg-black/80 overflow-hidden border border-white/10 flex mt-1">
              <div style={{ width: `${results.productSharePercent}%` }} className="h-full bg-gold" title="Product" />
              <div style={{ width: `${results.dutySharePercent}%` }} className="h-full bg-amber-400" title="Customs" />
              <div style={{ width: `${results.freightSharePercent}%` }} className="h-full bg-cyan" title="Freight" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
});

export default LandedCostCalculator;
