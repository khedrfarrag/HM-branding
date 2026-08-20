"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RevealSection, fadeUp } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Factory,
  Package,
  Ship,
  Briefcase,
  Bot,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import type { Locale } from "@/domains/shared/value-objects";

interface WhatYouWillFindSectionProps {
  locale: Locale;
}

export default function WhatYouWillFindSection({ locale }: WhatYouWillFindSectionProps) {
  const isAr = locale === "ar";
  const [activeIdx, setActiveIdx] = useState(0);
  const mobileTabRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      id: "china",
      num: "01",
      flag: "🇨🇳",
      icon: Globe,
      title: isAr ? "دليل الصين والأسواق" : "China & Markets Guide",
      subtitle: isAr ? "دليل المدن الصناعية، الأسواق الكبرى والمصانع" : "Cities, industrial markets, factories & commercial hubs",
      desc: isAr
        ? "تغطية ميدانية شاملة لأهم العواصم الصناعية في الصين مثل كوانزو، إيو، شنزن، وفوشان. يقدم الدليل خرائط دقيقة للأسواق، طرق الوصول للموردين الموثوقين، وتغطية المعارض التجارية مثل معرض كانتون."
        : "Complete field coverage of China's primary industrial hubs including Guangzhou, Yiwu, Shenzhen & Foshan. Features verified market maps, supplier directories, and trade fair guides.",
      features: isAr
        ? [
            "خارطة أسواق كوانزو وإيو التخصصية",
            "دليل المصانع والشركاء المعتمدين",
            "استراتيجيات زيارة المعارض التجارية",
            "فرص الاستثمار والتوريد المباشر",
          ]
        : [
            "Guangzhou & Yiwu Specialized Market Maps",
            "Verified Factory & Supplier Directory",
            "Trade Fair & Canton Fair Strategies",
            "Direct Sourcing & Investment Opportunities",
          ],
      badge: isAr ? "دليل الميدان" : "Field Guide",
      href: `/${locale}/china`,
      glowColor: "rgba(199, 161, 92, 0.15)",
      accentBorder: "border-gold/40",
      accentText: "text-gold",
      accentBg: "bg-gold/10",
      metric: isAr ? "+400 مصنع وسوق" : "+400 Factories & Markets",
    },
    {
      id: "manufacturing",
      num: "02",
      icon: Factory,
      title: isAr ? "التصنيع وتطوير المنتجات" : "Manufacturing & OEM",
      subtitle: isAr ? "من الفكرة والتصميم إلى خطوط الإنتاج والمنتج النهائي" : "From concept & design to mass production & delivery",
      desc: isAr
        ? "منظومة عمل متكاملة لتصنيع المنتجات وتطويرها لحسابك الخاص (OEM & ODM). تشمل الشروط الفنية، اختيار خطوط الإنتاج، تصميم النماذج الأولى (Prototypes)، ومراقبة معايير الجودة العالمية."
        : "End-to-end manufacturing workflow for OEM & ODM private labeling. Covers technical specs, line selection, prototyping, and ISO quality standards.",
      features: isAr
        ? [
            "تصميم وتطوير العلامات التجارية OEM/ODM",
            "اختيار وتفاوض خطوط الإنتاج",
            "فحص العينات وتصنيع النماذج الأولى",
            "معايير الجودة ومراقبة الإنتاج الكمي",
          ]
        : [
            "OEM/ODM Private Labeling & Specs",
            "Production Line Auditing & Selection",
            "Sample Evaluation & Prototyping",
            "Quality Control & Mass Production Oversight",
          ],
      badge: isAr ? "خطوط الإنتاج" : "Production",
      href: `/${locale}/experiences/factory-tours`,
      glowColor: "rgba(232, 210, 160, 0.15)",
      accentBorder: "border-amber-400/40",
      accentText: "text-amber-300",
      accentBg: "bg-amber-400/10",
      metric: isAr ? "100% مطابقة مواصفات" : "100% Spec Compliance",
    },
    {
      id: "importing",
      num: "03",
      icon: Package,
      title: isAr ? "الاستيراد والتفاوض" : "Import & Sourcing",
      subtitle: isAr ? "اختيار المنتجات، فحص الموردين والتفاوض الاحترافي" : "Product selection, supplier verification & master negotiation",
      desc: isAr
        ? "خطوات عملية مدروسة لاختيار المنتجات الأكثر ربحية، التحقق من الموردين والشركات الصينية قانونيًا وميدانيًا، وصياغة العقود التجارية التي تضمن حقوقك وتمنع الغش والتأخير."
        : "Practical blueprints for selecting high-margin products, performing background verification on Chinese suppliers, and drafting binding trade contracts.",
      features: isAr
        ? [
            "التحقق من الرخص والتصاريح الحكومية",
            "تقنيات التفاوض للحصول على أفضل سعر",
            "صياغة العقود وشروط الدفع الآمنة",
            "فحص الجودة قبل الشحن (PSI)",
          ]
        : [
            "Government License & Business Registration Audit",
            "Price Negotiation & Payment Terms",
            "Binding International Trade Contracts",
            "Pre-Shipment Inspection (PSI)",
          ],
      badge: isAr ? "منظومة الشراء" : "Procurement",
      href: `/${locale}/services/sourcing`,
      glowColor: "rgba(231, 166, 126, 0.15)",
      accentBorder: "border-orange-400/40",
      accentText: "text-orange-300",
      accentBg: "bg-orange-400/10",
      metric: isAr ? "صفر مخاطر توريد" : "Zero Sourcing Risk",
    },
    {
      id: "shipping",
      num: "04",
      icon: Ship,
      title: isAr ? "الشحن وسلاسل الإمداد" : "Logistics & Supply Chain",
      subtitle: isAr ? "الشحن البحري والجوي والتخليص الجمركي الواصل" : "Ocean & air freight, customs clearance & landed cost",
      desc: isAr
        ? "استراتيجيات الشحن الدولي وتخطيط اللوجستيات. يغطي الشحن الحاوي والجزئي (FCL & LCL)، التخليص الجمركي، التكويد والمواصفات، وحساب التكلفة الإجمالية الواصلة للمخازن (Landed Cost)."
        : "International freight logistics & customs execution. Covers FCL/LCL shipping, customs tariff coding, port operations, and total landed cost calculations.",
      features: isAr
        ? [
            "الشحن البحري والجوي وحجز الحاويات",
            "إجراءات وتوثيق التخليص الجمركي",
            "حساب التكلفة الواصلة للمخزن (Landed Cost)",
            "تأمين وتتبع الشحنات بين الموانئ",
          ]
        : [
            "Ocean FCL/LCL & Air Freight Booking",
            "Customs Clearance Documentation",
            "Total Landed Cost Formula",
            "Port Cargo Insurance & Tracking",
          ],
      badge: isAr ? "اللوجستيات الدولية" : "Logistics",
      href: `/${locale}/trade-intelligence/shipping-news`,
      glowColor: "rgba(127, 227, 220, 0.15)",
      accentBorder: "border-cyan/40",
      accentText: "text-cyan",
      accentBg: "bg-cyan/10",
      metric: isAr ? "تغطية 24 ميناء" : "24 Global Ports",
    },
    {
      id: "trade",
      num: "05",
      icon: Briefcase,
      title: isAr ? "استراتيجيات التجارة" : "Global Trade Strategy",
      subtitle: isAr ? "تطوير الأعمال، الهوامش الربحية وإدارة التوسع" : "Business development, profit margins & scaling models",
      desc: isAr
        ? "منظومة لتطوير الأعمال وتوسيع نطاق التجارة الدولية. تشمل تحليل الهوامش الربحية، إدارة مخاطر تقلبات العملة، التسعير المنافس، والتحول من التاجر التقليدي إلى صاحب براند مستدام."
        : "Strategic framework for global business scaling. Covers margin optimization, currency risk management, competitive pricing, and brand building.",
      features: isAr
        ? [
            "حساب وتطوير هامش الربح الصافي",
            "إدارة مخاطر العملة وسلاسل الإمداد",
            "استراتيجيات التسعير والتوزيع",
            "بناء البراند والتوسع الإقليمي",
          ]
        : [
            "Net Profit Margin Optimization",
            "Currency & FX Risk Mitigation",
            "Pricing & Distribution Models",
            "Brand Building & Market Expansion",
          ],
      badge: isAr ? "ذكاء الأعمال" : "Strategy",
      href: `/${locale}/trade-intelligence`,
      glowColor: "rgba(34, 50, 87, 0.3)",
      accentBorder: "border-blue-mid",
      accentText: "text-white",
      accentBg: "bg-blue-mid/40",
      metric: isAr ? "نمو وأرباح مستدامة" : "Sustainable Growth",
    },
    {
      id: "ai",
      num: "06",
      icon: Bot,
      title: isAr ? "الذكاء الاصطناعي للأعمال" : "AI & Trade Automation",
      subtitle: isAr ? "توظيف التقنية الحديثة لأتمتة التوريد وتحليل الأسواق" : "Leveraging modern AI to automate sourcing & analytics",
      desc: isAr
        ? "دمج أدوات الذكاء الاصطناعي المتقدمة في أعمال التوريد والتجارة. يشمل أتمتة البحث عن المنتجات، تحليل اتجاهات السوق، صياغة المراسلات الصينية الذكية، وسرعة اتخاذ القرارات التجارية."
        : "Integrating advanced AI tools into global trade operations. Automate product research, analyze market trends, communicate with suppliers, and make data-backed decisions.",
      features: isAr
        ? [
            "أدوات الذكاء الاصطناعي لاكتشاف المنتجات",
            "أتمتة البحث عن الموردين في الصين",
            "تحليل البيانات والتنبؤ بالاتجاهات",
            "ترجمة وصياغة المراسلات التجارية بالذكاء الاصطناعي",
          ]
        : [
            "AI Tools for Product Discovery",
            "Automated China Supplier Discovery",
            "Data Analytics & Trend Forecasting",
            "AI Trade Translation & Negotiations",
          ],
      badge: isAr ? "مستقبل التجارة" : "Next-Gen Tech",
      href: `/${locale}/knowledge`,
      glowColor: "rgba(168, 85, 247, 0.2)",
      accentBorder: "border-purple-500/40",
      accentText: "text-purple-300",
      accentBg: "bg-purple-500/10",
      metric: isAr ? "+10x سرعة اتخاذ القرار" : "10x Faster Decisions",
    },
  ];

  // Auto scroll active tab into view on mobile
  useEffect(() => {
    if (mobileTabRef.current) {
      const activeTabEl = mobileTabRef.current.children[activeIdx] as HTMLElement;
      if (activeTabEl) {
        activeTabEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeIdx]);

  const handleSelectTab = (idx: number) => {
    setActiveIdx(idx);
    // On mobile screens, scroll stage smoothly into view if tab was pressed
    if (window.innerWidth < 1024 && stageRef.current) {
      stageRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const currentPillar = pillars[activeIdx];
  const CurrentIcon = currentPillar.icon;
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  return (
    <section
      id="what-you-will-find"
      className="relative overflow-hidden bg-black px-sp-4 sm:px-sp-6 py-sp-12 md:py-sp-16 md:px-sp-8 border-t border-glass"
    >
      {/* Background Tech Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black,transparent_85%)] pointer-events-none" />

      {/* Dynamic Ambient Background Glow */}
      <motion.div
        key={currentPillar.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: currentPillar.glowColor }}
      />

      <div className="relative mx-auto max-w-[1360px] w-full z-10">
        {/* Section Header */}
        <RevealSection variants={fadeUp}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-sp-4 mb-sp-8 sm:mb-sp-12 border-b border-white/10 pb-sp-6">
            <div className="flex flex-col items-start text-start gap-sp-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/80 px-sp-4 py-1 backdrop-blur-xl">
                <Layers className="w-3.5 h-3.5 text-gold" />
                <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                  {isAr ? "منظومة المحتوى والمعرفة" : "Ecosystem Blueprint"}
                </span>
              </div>
              <h2 className="font-display text-fs-h2 font-bold tracking-tight text-gradient-gold-animated">
                {isAr ? "ماذا ستجد في هذه المنظومة؟" : "What Will You Find Here?"}
              </h2>
              <p className="text-fs-small sm:text-fs-body font-light text-silver leading-lh-relaxed">
                {isAr
                  ? "6 محاور استراتيجية تغطي التجارة والتصنيع مع الصين بالكامل — اختر المحور لترَى محتواه مباشرة."
                  : "6 strategic pillars covering end-to-end trade & manufacturing with China — select a pillar below."}
              </p>
            </div>

            {/* Pillar Counter & Arrow Controls */}
            <div className="flex items-center justify-between md:justify-end gap-sp-3 w-full md:w-auto">
              <span className="font-mono text-sm text-silver font-medium">
                <span className="text-gold font-bold">{currentPillar.num}</span> / 06
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSelectTab(activeIdx > 0 ? activeIdx - 1 : pillars.length - 1)}
                  className="h-10 w-10 rounded-xl border border-glass bg-glass flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 cursor-pointer active:scale-95"
                  aria-label="Previous Pillar"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSelectTab(activeIdx < pillars.length - 1 ? activeIdx + 1 : 0)}
                  className="h-10 w-10 rounded-xl border border-glass bg-glass flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 cursor-pointer active:scale-95"
                  aria-label="Next Pillar"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 📱 MOBILE HORIZONTAL CAROUSEL BAR (Shown on Mobile & Tablet < lg) */}
        <div className="flex lg:hidden mb-sp-5 overflow-x-auto pb-sp-3 scrollbar-hide snap-x" ref={mobileTabRef}>
          <div className="flex items-center gap-sp-2 min-w-max px-sp-1">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`snap-center flex items-center gap-2 rounded-2xl border px-sp-4 py-2.5 transition-all duration-300 font-mono text-xs cursor-pointer active:scale-95 ${
                    isActive
                      ? "border-gold bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/20 text-white font-bold shadow-[0_4px_20px_rgba(199,161,92,0.25)]"
                      : "border-glass bg-white/[0.03] text-silver hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="text-gold font-bold">{pillar.num}</span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-gold" : "text-silver"}`} />
                  <span className="font-display font-semibold text-sm whitespace-nowrap">{pillar.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ULTRA-MODERN SPLIT CANVAS (Desktop 2 Columns / Mobile Stage First Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-sp-6 lg:gap-sp-8 items-stretch">
          
          {/* 💻 DESKTOP MENU SIDE (Hidden on mobile < lg, shown on lg screens - 5 cols) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-sp-2 justify-between">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = idx === activeIdx;

              return (
                <button
                  key={pillar.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`group relative flex items-center justify-between w-full p-sp-4 sm:p-sp-5 rounded-2xl border transition-all duration-300 text-start cursor-pointer backdrop-blur-xl ${
                    isActive
                      ? "border-gold/50 bg-gradient-to-r from-[#1b1f2b] via-[#141720] to-[#101219] shadow-[0_8px_30px_rgba(199,161,92,0.15)]"
                      : "border-glass bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                  }`}
                >
                  {/* Left Active Progress Bar Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarIndicator"
                      className="absolute right-0 top-0 bottom-0 w-1.5 rounded-r-full bg-gradient-to-b from-gold-soft via-gold to-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-sp-4">
                    <div
                      className={`h-11 w-11 rounded-xl flex items-center justify-center border font-mono text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-gold text-black border-gold font-bold shadow-gold"
                          : "bg-black/60 text-silver border-white/10 group-hover:border-gold/40 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-gold/80 font-bold">{pillar.num}</span>
                        <span className={`font-display text-base sm:text-lg font-bold transition-colors ${isActive ? "text-white" : "text-silver group-hover:text-white"}`}>
                          {pillar.title}
                        </span>
                      </div>
                      <span className="text-xs text-silver-dim font-light line-clamp-1 mt-0.5">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {pillar.flag && <span className="text-sm">{pillar.flag}</span>}
                    <ChevronIcon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-gold translate-x-[-4px]" : "text-silver-dim group-hover:text-white"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* SHOWCASE STAGE (Holographic Preview Stage Column - 7 cols desktop / full width mobile right under tabs) */}
          <div className="lg:col-span-7 flex flex-col" ref={stageRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col justify-between h-full rounded-[28px] border border-gold/30 bg-gradient-to-br from-[#181d28]/95 via-[#131723]/90 to-[#0c0e14]/98 p-sp-5 sm:p-sp-8 md:p-sp-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Big Background Watermark Index Number */}
                <div className="pointer-events-none absolute left-4 sm:left-6 bottom-2 sm:bottom-4 font-mono text-[110px] sm:text-[180px] font-black text-white/[0.03] leading-none select-none">
                  {currentPillar.num}
                </div>

                {/* Top Badge & Metric */}
                <div className="relative z-10 flex items-center justify-between w-full mb-sp-5 pb-sp-4 border-b border-white/10">
                  <div className="flex items-center gap-sp-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${currentPillar.accentBorder} ${currentPillar.accentText} ${currentPillar.accentBg}`}>
                      {currentPillar.flag && <span>{currentPillar.flag}</span>}
                      {currentPillar.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-medium text-gold bg-gold/10 px-2.5 sm:px-3 py-1 rounded-lg border border-gold/20 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentPillar.metric}
                  </span>
                </div>

                {/* Main Content Showcase */}
                <div className="relative z-10 flex flex-col items-start text-start my-auto">
                  <div className="flex items-center gap-sp-3 mb-sp-2">
                    <div className={`h-11 sm:h-12 w-11 sm:w-12 rounded-2xl border flex items-center justify-center ${currentPillar.accentBg} ${currentPillar.accentBorder} ${currentPillar.accentText}`}>
                      <CurrentIcon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-semibold text-gold tracking-widest uppercase">
                        Pillar {currentPillar.num}
                      </span>
                      <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                        {currentPillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-sp-3 text-fs-small sm:text-fs-body-lg text-silver font-light leading-lh-relaxed">
                    {currentPillar.desc}
                  </p>

                  {/* 4 Feature Checklist Items */}
                  <div className="mt-sp-5 sm:mt-sp-6 grid grid-cols-1 sm:grid-cols-2 gap-sp-2.5 sm:gap-sp-3 w-full">
                    {currentPillar.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-sp-2.5 rounded-xl border border-white/10 bg-black/40 p-sp-3 backdrop-blur-md"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-fs-small text-white-dim font-medium leading-lh-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="relative z-10 mt-sp-6 sm:mt-sp-8 pt-sp-4 sm:pt-sp-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-sp-4 w-full">
                  <span className="text-xs font-mono text-silver-dim text-center sm:text-start hidden sm:inline">
                    {isAr ? "دليل شامل ومحتوى مفصل متاح الآن" : "Detailed blueprint and resources ready"}
                  </span>

                  <Link
                    href={currentPillar.href}
                    className="inline-flex h-[46px] sm:h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-gold px-sp-6 text-sm font-bold text-black shadow-gold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(199,161,92,0.35)] active:scale-98"
                  >
                    <span>{isAr ? "انتقل إلى الدليل الكامل" : "Explore Full Guide"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
