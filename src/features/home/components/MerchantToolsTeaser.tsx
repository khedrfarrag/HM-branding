"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Scale, DollarSign, TrendingUp, Anchor, ArrowUpRight, Sparkles } from "lucide-react";
import type { Locale } from "@/domains/shared/value-objects";

interface MerchantToolsTeaserProps {
  locale: Locale;
}

const tools = [
  {
    id: "cbm",
    icon: Box,
    titleAr: "حاسبة CBM والحاوية",
    titleEn: "CBM Calculator",
    descAr: "حساب الحجم ونسبة استغلال سعة الحاوية فوريًا.",
    descEn: "Instant volume & container utilization calculation.",
    accentColor: "text-gold",
    borderColor: "border-gold/30",
    bgGradient: "from-gold/10 via-transparent",
    glowColor: "rgba(199,161,92,0.15)",
  },
  {
    id: "volumetric",
    icon: Scale,
    titleAr: "الوزن الحجمي",
    titleEn: "Volumetric Weight",
    descAr: "الوزن القابل للشحن للجوي والسريع والبحري.",
    descEn: "Chargeable weight for air, express & sea freight.",
    accentColor: "text-cyan",
    borderColor: "border-cyan/30",
    bgGradient: "from-cyan/10 via-transparent",
    glowColor: "rgba(0,200,230,0.12)",
  },
  {
    id: "landed-cost",
    icon: DollarSign,
    titleAr: "التكلفة الواصلة",
    titleEn: "Landed Cost",
    descAr: "التكلفة الكاملة للقطعة شاملة الجمارك والشحن.",
    descEn: "Full landed cost incl. customs, freight & VAT.",
    accentColor: "text-amber-400",
    borderColor: "border-amber-400/30",
    bgGradient: "from-amber-500/10 via-transparent",
    glowColor: "rgba(245,158,11,0.12)",
  },
  {
    id: "profit-margin",
    icon: TrendingUp,
    titleAr: "هامش الربح والـ ROI",
    titleEn: "Profit Margin & ROI",
    descAr: "صافي الربح، نسبة الهامش، ونقطة التعادل.",
    descEn: "Net margin %, ROI %, and break-even price.",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgGradient: "from-emerald-500/10 via-transparent",
    glowColor: "rgba(52,211,153,0.12)",
  },
  {
    id: "freight",
    icon: Anchor,
    titleAr: "مقدر الشحن",
    titleEn: "Freight Estimator",
    descAr: "تقديرات متوسطة لأسعار الشحن البحري والجوي.",
    descEn: "Ocean & air freight rate range estimates.",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgGradient: "from-purple-500/10 via-transparent",
    glowColor: "rgba(168,85,247,0.12)",
  },
];

export default function MerchantToolsTeaser({ locale }: MerchantToolsTeaserProps) {
  const isAr = locale === "ar";
  const href = `/${locale}/tools`;

  return (
    <section id="free-tools" className="relative w-full py-sp-16 sm:py-sp-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gold/5 blur-[120px] opacity-50" />
      </div>

      <div className="mx-auto max-w-[1360px] px-sp-4 sm:px-sp-6 md:px-sp-8 flex flex-col gap-sp-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-sp-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/80 px-sp-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(199,161,92,0.12)]">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
              {isAr ? "أدوات مجانية بدون تسجيل" : "Free Merchant Tools · No Signup"}
            </span>
          </div>

          <h2 className="font-display text-fs-h2 font-bold tracking-tight text-white max-w-2xl">
            {isAr
              ? "حاسبات التاجر — كل أدوات الاستيراد في مكان واحد"
              : "Merchant Calculators Suite — All Import Tools in One Place"}
          </h2>

          <p className="text-fs-body font-light text-silver leading-lh-relaxed max-w-xl">
            {isAr
              ? "منظومة حاسبات مجانية 100% بدون حساب أو تسجيل — احسب تكاليفك وأرباحك لحظيًا."
              : "100% free trade calculators. Zero signup barrier. Compute costs and margins instantly."}
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-sp-4">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={`${href}?tool=${tool.id}`}
                  className={`group flex flex-col items-start gap-sp-3 rounded-2xl border ${tool.borderColor} bg-gradient-to-br ${tool.bgGradient} to-graphite-900/80 p-sp-5 backdrop-blur-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer h-full`}
                  style={{
                    boxShadow: `0 4px 30px ${tool.glowColor}`,
                  }}
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${tool.accentColor} bg-white/5 border border-white/10 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className={`font-display text-sm font-bold ${tool.accentColor}`}>
                      {isAr ? tool.titleAr : tool.titleEn}
                    </span>
                    <span className="text-[11px] text-silver font-light leading-relaxed line-clamp-2">
                      {isAr ? tool.descAr : tool.descEn}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-sp-2">
          <Link
            href={href}
            className="group inline-flex items-center gap-2 h-13 px-sp-8 rounded-full bg-gradient-to-b from-gold-soft to-gold text-black font-display font-bold text-sm shadow-gold hover:shadow-[0_12px_40px_rgba(199,161,92,0.4)] transition-all active:scale-95"
          >
            <span>{isAr ? "استخدم جميع الأدوات المجانية ←" : "Open All Free Tools →"}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
