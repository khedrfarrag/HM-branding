"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CbmCalculator from "./CbmCalculator";
import VolumetricCalculator from "./VolumetricCalculator";
import LandedCostCalculator from "./LandedCostCalculator";
import ProfitMarginCalculator from "./ProfitMarginCalculator";
import FreightEstimator from "./FreightEstimator";
import type { ToolCategory, SummaryHandle } from "../types";
import type { Locale } from "@/domains/shared/value-objects";
import {
  Box,
  Scale,
  DollarSign,
  TrendingUp,
  Anchor,
  Sparkles,
  Share2,
  Check,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import type { getDictionary } from "@/features/i18n/get-dictionary";

interface ToolsHubLayoutProps {
  locale: Locale;
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export default function ToolsHubLayout({ locale, dict }: ToolsHubLayoutProps) {
  const isAr = locale === "ar";
  const [activeTab, setActiveTab] = useState<ToolCategory>("cbm");
  const [copied, setCopied] = useState(false);

  const cbmRef = useRef<SummaryHandle>(null);
  const volumetricRef = useRef<SummaryHandle>(null);
  const landedRef = useRef<SummaryHandle>(null);
  const profitRef = useRef<SummaryHandle>(null);
  const freightRef = useRef<SummaryHandle>(null);

  const t = dict?.tools || {
    badge: isAr ? "أدوات مجانية بدون تسجيل" : "Free Merchant Tools · No Signup Needed",
    title: isAr ? "حاسبات وأدوات التاجر الشاملة" : "Merchant Calculators Suite",
    subtitle: isAr
      ? "منظومة حاسبات مجانية 100% صُممت لمساعدة رواد الأعمال والتجار على حساب الأحجام، التكاليف الواصلة، والأرباح بلمسة واحدة."
      : "100% free trade calculators engineered to help merchants compute CBM, volumetric weight, landed cost & profit margins.",
    copySummary: isAr ? "نسخ ملخص الحسابات" : "Copy Calculation Summary",
    copiedSuccess: isAr ? "تم نسخ ملخص الحسابات بنجاح!" : "Calculation summary copied to clipboard!",
    ctaText: isAr ? "هل تحتاج مساعدة في مراجعة أسعار الموردين وفحص الشحنة؟" : "Need expert help auditing supplier quotes or inspecting production?",
    ctaBtn: isAr ? "احجز استشارة استيراد ←" : "Book Import Consultation ←",
  };

  const tabs = [
    { id: "cbm" as ToolCategory, titleAr: "حاسبة CBM والحاوية", titleEn: "CBM Calculator", icon: Box },
    { id: "volumetric" as ToolCategory, titleAr: "الوزن الحجمي", titleEn: "Volumetric Weight", icon: Scale },
    { id: "landed-cost" as ToolCategory, titleAr: "تكلفة الاستيراد الواصل", titleEn: "Landed Cost", icon: DollarSign },
    { id: "profit-margin" as ToolCategory, titleAr: "هامش الربح والـ ROI", titleEn: "Profit Margin & ROI", icon: TrendingUp },
    { id: "freight" as ToolCategory, titleAr: "مقدر الشحن", titleEn: "Freight Estimator", icon: Anchor },
  ];

  const handleCopySummary = () => {
    let summaryText = "";
    if (activeTab === "cbm" && cbmRef.current) {
      summaryText = cbmRef.current.getSummaryText(locale);
    } else if (activeTab === "volumetric" && volumetricRef.current) {
      summaryText = volumetricRef.current.getSummaryText(locale);
    } else if (activeTab === "landed-cost" && landedRef.current) {
      summaryText = landedRef.current.getSummaryText(locale);
    } else if (activeTab === "profit-margin" && profitRef.current) {
      summaryText = profitRef.current.getSummaryText(locale);
    } else if (activeTab === "freight" && freightRef.current) {
      summaryText = freightRef.current.getSummaryText(locale);
    } else {
      summaryText = isAr
        ? `حسابات حاسبة حسام مبروك للتجارة:\n- الأداة: ${tabs.find((t) => t.id === activeTab)?.titleAr}\n- الرابط: https://hossammabrouk.com/${locale}/tools`
        : `Hussam Mabrouk Trade Calculator Summary:\n- Tool: ${tabs.find((t) => t.id === activeTab)?.titleEn}\n- Link: https://hossammabrouk.com/${locale}/tools`;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summaryText)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch((err) => {
          console.error("Clipboard copy failed:", err);
          fallbackCopyText(summaryText);
        });
    } else {
      fallbackCopyText(summaryText);
    }
  };

  const fallbackCopyText = (text: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }
  };

  return (
    <div className="relative w-full max-w-[1360px] mx-auto px-sp-4 sm:px-sp-6 py-sp-8 md:px-sp-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-sp-3 mb-sp-8 sm:mb-sp-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/80 px-sp-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(199,161,92,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
            {t.badge}
          </span>
        </div>

        <h1 className="font-display text-fs-h1 font-bold tracking-tight text-gradient-gold-animated">
          {t.title}
        </h1>

        <p className="text-fs-small sm:text-fs-body font-light text-silver leading-lh-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Tab Navigation Controls */}
      <div className="flex overflow-x-auto pb-sp-3 mb-sp-6 scrollbar-hide snap-x border-b border-white/10">
        <div className="flex items-center gap-sp-2 min-w-max mx-auto px-sp-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`snap-center flex items-center gap-2 rounded-2xl border px-sp-4 py-3 transition-all duration-300 font-mono text-xs sm:text-sm cursor-pointer active:scale-95 ${
                  isActive
                    ? "border-gold bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/20 text-white font-bold shadow-[0_4px_25px_rgba(199,161,92,0.25)]"
                    : "border-glass bg-white/[0.03] text-silver hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-gold" : "text-silver"}`} />
                <span className="font-display font-semibold">{isAr ? tab.titleAr : tab.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator Body Stage */}
      <div className="rounded-[28px] border border-gold/30 bg-gradient-to-br from-[#181d28]/95 via-[#131723]/90 to-[#0c0e14]/98 p-sp-6 sm:p-sp-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "cbm" && <CbmCalculator ref={cbmRef} locale={locale} />}
            {activeTab === "volumetric" && <VolumetricCalculator ref={volumetricRef} locale={locale} />}
            {activeTab === "landed-cost" && <LandedCostCalculator ref={landedRef} locale={locale} />}
            {activeTab === "profit-margin" && <ProfitMarginCalculator ref={profitRef} locale={locale} />}
            {activeTab === "freight" && <FreightEstimator ref={freightRef} locale={locale} />}
          </motion.div>
        </AnimatePresence>

        {/* Global Action Bar (Copy Summary) */}
        <div className="mt-sp-8 pt-sp-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-sp-4">
          <div className="flex items-center gap-2 text-xs font-mono text-silver">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? "جميع الحسابات فورية وتتم بأمان داخل متصفحك دون الحاجة لتسجيل حساب" : "100% instant browser calculations without account registration"}</span>
          </div>

          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-2 h-11 px-sp-5 rounded-full border border-gold/40 bg-gold/10 text-gold font-mono text-xs font-bold hover:bg-gold hover:text-black transition-all cursor-pointer active:scale-95 shadow-md"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? t.copiedSuccess : t.copySummary}</span>
          </button>
        </div>
      </div>

      {/* Contextual Educational CTA Banner */}
      <div className="mt-sp-10 rounded-2xl border border-glass bg-gradient-to-r from-amber-500/10 via-gold/10 to-transparent p-sp-6 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-sp-4">
        <div className="flex items-center gap-sp-3 text-start">
          <div className="h-10 w-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-white font-medium">
            {t.ctaText}
          </p>
        </div>

        <Link
          href={`/${locale}/booking/consultation/general`}
          className="inline-flex items-center gap-2 h-11 px-sp-6 rounded-full bg-gradient-to-b from-gold-soft to-gold text-black font-bold text-xs shadow-gold hover:shadow-[0_10px_30px_rgba(199,161,92,0.35)] transition-all whitespace-nowrap"
        >
          <span>{t.ctaBtn}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
