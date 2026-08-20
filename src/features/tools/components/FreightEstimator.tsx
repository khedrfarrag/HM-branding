"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import type { Locale } from "@/domains/shared/value-objects";
import { Ship, Plane, Anchor, Info } from "lucide-react";
import type { SummaryHandle } from "../types";

interface FreightEstimatorProps {
  locale: Locale;
}

const FreightEstimator = forwardRef<SummaryHandle, FreightEstimatorProps>(function FreightEstimator(
  { locale },
  ref
) {
  const isAr = locale === "ar";
  const [destination, setDestination] = useState("gcc");
  const [mode, setMode] = useState<"sea_fcl" | "sea_lcl" | "air">("sea_fcl");

  const freightData = {
    gcc: {
      labelAr: "الخليج العربي (دبي، الرياض، جدة، الكويـت)",
      labelEn: "GCC (Dubai, Riyadh, Jeddah, Kuwait)",
      sea_fcl: { range: "$1,800 – $2,600", noteAr: "حاوية 20ft / 40HQ من كوانزو/الموانئ الرئيسية", noteEn: "20ft/40HQ container from Guangzhou ports" },
      sea_lcl: { range: "$45 – $75 / CBM", noteAr: "شحن جزئي للمتر المكعب شامل التجميع", noteEn: "Per CBM for consolidated sea freight" },
      air: { range: "$4.50 – $7.20 / kg", noteAr: "شحن جوي سريع (3-5 أيام عمل)", noteEn: "Express air cargo (3-5 business days)" },
    },
    north_africa: {
      labelAr: "شمال أفريقيا (مصر، المغرب، الجزائر)",
      labelEn: "North Africa (Egypt, Morocco, Algeria)",
      sea_fcl: { range: "$2,200 – $3,400", noteAr: "حاوية من الصين لموانئ الإسكندرية / كازابلانكا", noteEn: "Container to Alexandria / Casablanca ports" },
      sea_lcl: { range: "$60 – $95 / CBM", noteAr: "شحن جزئي LCL للشحنات المتوسطة", noteEn: "Per CBM LCL freight range" },
      air: { range: "$5.80 – $8.90 / kg", noteAr: "شحن جوي لمطارات القاهرة / كازابلانكا", noteEn: "Air freight to Cairo / Casablanca airports" },
    },
    europe: {
      labelAr: "أوروبا (روتردام، هامبورغ، فليكستو)",
      labelEn: "Europe (Rotterdam, Hamburg, Felixstowe)",
      sea_fcl: { range: "$2,800 – $4,200", noteAr: "حاوية كاملة FCL لموانئ شمال أوروبا", noteEn: "Full FCL container to North Europe" },
      sea_lcl: { range: "$70 – $110 / CBM", noteAr: "شحن جزئي للموانئ الأوروبية", noteEn: "Per CBM for European ports" },
      air: { range: "$6.20 – $9.50 / kg", noteAr: "شحن جوي سريع للمطارات الأوروبية", noteEn: "Express air freight to EU airports" },
    },
  };

  const currentData = freightData[destination as keyof typeof freightData];
  const currentEst = currentData[mode];

  useImperativeHandle(ref, () => ({
    getSummaryText(loc) {
      const isArabic = loc === "ar";
      const header = isArabic
        ? `━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚢 مقدر متوسط تكاليف الشحن من الصين\nحاسبات حسام مبروك | hossammabrouk.com/ar/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`
        : `━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚢 China Freight Rate Estimator\nHossam Mabrouk Tools | hossammabrouk.com/en/tools\n${new Date().toLocaleString("en-US", { hour12: false })}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      
      const destinationLabel = isArabic ? currentData.labelAr : currentData.labelEn;
      const modeLabel = mode === "sea_fcl" ? "Sea FCL" : mode === "sea_lcl" ? "Sea LCL" : "Air Freight";
      const noteLabel = isArabic ? currentEst.noteAr : currentEst.noteEn;

      const inputsSection = isArabic
        ? `\n\n📥 المدخلات:\n• وجهة الوصول: ${destinationLabel}\n• وسيلة الشحن: ${modeLabel}`
        : `\n\n📥 Inputs:\n• Destination Region: ${destinationLabel}\n• Shipping Mode: ${modeLabel}`;

      const resultsSection = isArabic
        ? `\n\n📊 النتائج:\n• تكلفة الشحن المتوقعة: ${currentEst.range}\n• ملاحظات: ${noteLabel}\n\n* تنويه: الأسعار تقديرية استرشادية وتتغير أسبوعياً.`
        : `\n\n📊 Results:\n• Estimated Rate Range: ${currentEst.range}\n• Details: ${noteLabel}\n\n* Disclaimer: Rates are indicative benchmarks fluctuating weekly.`;

      return `${header}${inputsSection}${resultsSection}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    }
  }));

  return (
    <div className="flex flex-col gap-sp-6 w-full">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-sp-3 pb-sp-4 border-b border-white/10">
        <div className="flex items-center gap-sp-3">
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {isAr ? "مقدر متوسط تكاليف الشحن من الصين" : "China Freight Rate Estimator"}
            </h3>
            <p className="text-xs text-silver font-light">
              {isAr
                ? "تقديرات استرشادية لمتوسط أسعار الشحن البحري والجوي للموانئ العربية والدولية."
                : "Indicative rate ranges for ocean & air freight from primary China ports."}
            </p>
          </div>
        </div>
      </div>

      {/* Inputs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-sp-6 items-start">
        
        <div className="lg:col-span-5 flex flex-col gap-sp-4 rounded-2xl border border-glass bg-graphite-900/60 p-sp-5 backdrop-blur-md">
          <div>
            <label className="block text-xs font-mono text-purple-300 mb-2">
              {isAr ? "وجهة الوصول" : "Destination Region"}
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full h-11 rounded-xl border border-white/10 bg-black/80 px-3 text-sm font-mono text-white focus:border-purple-400 focus:outline-none"
            >
              <option value="gcc">{isAr ? "الخليج العربي (الإمارات، السعودية، الكويت)" : "GCC (UAE, KSA, Kuwait)"}</option>
              <option value="north_africa">{isAr ? "شمال أفريقيا (مصر، المغرب، الجزائر)" : "North Africa (Egypt, Morocco)"}</option>
              <option value="europe">{isAr ? "أوروبا (روتردام، هامبورغ)" : "Europe (Rotterdam, Hamburg)"}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-purple-300 mb-2">
              {isAr ? "وسيلة الشحن" : "Shipping Mode"}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setMode("sea_fcl")}
                className={`p-2.5 rounded-xl border font-mono text-xs flex flex-col items-center gap-1 transition-all ${
                  mode === "sea_fcl"
                    ? "border-purple-400 bg-purple-500/20 text-white font-bold"
                    : "border-white/10 bg-black/40 text-silver hover:text-white"
                }`}
              >
                <Ship className="w-4 h-4" />
                <span>Sea FCL</span>
              </button>

              <button
                onClick={() => setMode("sea_lcl")}
                className={`p-2.5 rounded-xl border font-mono text-xs flex flex-col items-center gap-1 transition-all ${
                  mode === "sea_lcl"
                    ? "border-purple-400 bg-purple-500/20 text-white font-bold"
                    : "border-white/10 bg-black/40 text-silver hover:text-white"
                }`}
              >
                <Anchor className="w-4 h-4" />
                <span>Sea LCL</span>
              </button>

              <button
                onClick={() => setMode("air")}
                className={`p-2.5 rounded-xl border font-mono text-xs flex flex-col items-center gap-1 transition-all ${
                  mode === "air"
                    ? "border-purple-400 bg-purple-500/20 text-white font-bold"
                    : "border-white/10 bg-black/40 text-silver hover:text-white"
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>Air Freight</span>
              </button>
            </div>
          </div>
        </div>

        {/* Estimated Rate Box */}
        <div className="lg:col-span-7 flex flex-col gap-sp-4">
          <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/15 via-graphite-900 to-black p-sp-6 flex flex-col items-start gap-sp-3">
            <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
              {isAr ? "متوسط تكلفة الشحن المتوقعة" : "Estimated Shipping Rate Range"}
            </span>

            <div className="font-mono text-4xl font-black text-white">
              {currentEst.range}
            </div>

            <p className="text-xs text-silver leading-relaxed font-light">
              {isAr ? currentEst.noteAr : currentEst.noteEn}
            </p>

            <div className="mt-sp-2 p-sp-3 rounded-xl border border-white/10 bg-black/40 flex items-start gap-2 text-[11px] text-silver-dim">
              <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>
                {isAr
                  ? "الأسعار تقديرية استرشادية وتتغير أسبوعيًا حسب مواسم الذروة وأسعار الوقود الدولية."
                  : "Rates are indicative benchmarks fluctuating weekly based on peak season & fuel surcharges."}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default FreightEstimator;
