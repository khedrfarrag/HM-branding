"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/features/i18n";
import { cn } from "@/lib/utils";

export interface CountryTradeData {
  id: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  category: "asia" | "mena" | "europe";
  typeAr: string;
  typeEn: string;
  portsAr: string[];
  portsEn: string[];
  topItemsAr: string[];
  topItemsEn: string[];
  // Coordinates relative to 300x300 circle (cx:150, cy:150, radius:130)
  angle: number; // degrees 0-360
  radiusPercent: number; // 0 to 100
  color: string;
  badgeAr: string;
  badgeEn: string;
}

const TRADE_COUNTRIES: CountryTradeData[] = [
  {
    id: "china",
    nameAr: "الصين",
    nameEn: "China",
    flag: "🇨🇳",
    category: "asia",
    typeAr: "الاستيراد الرئيسي والمصانع المعتمدة",
    typeEn: "Primary Sourcing & Manufacturing",
    portsAr: ["غوانغتشو (Guangzhou)", "نينغبو (Ningbo)", "شينزن (Shenzhen)", "يوي (Yiwu)"],
    portsEn: ["Guangzhou", "Ningbo", "Shenzhen", "Yiwu"],
    topItemsAr: ["إلكترونيات ومكونات", "خطوط إنتاج ومعدات", "منسوجات وتأثيث", "مواد بناء"],
    topItemsEn: ["Consumer Electronics", "Industrial Machinery", "Textiles & Home", "Building Materials"],
    angle: 35,
    radiusPercent: 85,
    color: "#EF4444", // Red
    badgeAr: "الأكثر طلباً",
    badgeEn: "Top Sourcing Hub",
  },
  {
    id: "uae",
    nameAr: "الإمارات (دبي)",
    nameEn: "UAE (Dubai)",
    flag: "🇦🇪",
    category: "mena",
    typeAr: "إعادة التصدير واللوجستيات الإقليمية",
    typeEn: "Regional Hub & Re-Export",
    portsAr: ["ميناء جبل علي", "مطار دبي اللوجستي", "أبوظبي"],
    portsEn: ["Jebel Ali Port", "Dubai South", "Abu Dhabi Port"],
    topItemsAr: ["تسهيلات جمركية", "إعادة تصدير", "تخزين وترانزيت"],
    topItemsEn: ["Customs Clearance", "Re-Export Logistics", "Bonded Warehousing"],
    angle: 110,
    radiusPercent: 70,
    color: "#38BDF8", // Cyan
    badgeAr: "مركز لوجستي",
    badgeEn: "Logistics Hub",
  },
  {
    id: "egypt",
    nameAr: "مصر",
    nameEn: "Egypt",
    flag: "🇪🇬",
    category: "mena",
    typeAr: "السوق الرئيسي والممر الأفريقي",
    typeEn: "Primary Market & North Africa Gateway",
    portsAr: ["ميناء الإسكندرية", "ميناء السخنة", "ميناء دمياط"],
    portsEn: ["Alexandria Port", "Sokhna Port", "Damietta Port"],
    topItemsAr: ["تخليص جمركي شمول", "توريدات مصانع", "استيراد وتوزيع"],
    topItemsEn: ["Full Customs Clearance", "Factory Supply Lines", "Import Distribution"],
    angle: 155,
    radiusPercent: 55,
    color: "#C7A15C", // Gold
    badgeAr: "المقر الرئيسي",
    badgeEn: "Main Operations",
  },
  {
    id: "germany",
    nameAr: "ألمانيا",
    nameEn: "Germany",
    flag: "🇩🇪",
    category: "europe",
    typeAr: "استيراد معدات وخطوط إنتاج متطورة",
    typeEn: "Advanced Machinery & Tech Import",
    portsAr: ["ميناء هامبورغ", "بريمن"],
    portsEn: ["Hamburg Port", "Bremen"],
    topItemsAr: ["معدات ثقيلة", "قطع غيار دقيقة", "أنظمة أتمتة"],
    topItemsEn: ["Heavy Machinery", "Precision Components", "Automation Systems"],
    angle: 290,
    radiusPercent: 88,
    color: "#F59E0B", // Amber
    badgeAr: "تكنولوجيا صناعية",
    badgeEn: "Industrial Tech",
  },
  {
    id: "turkey",
    nameAr: "تركيا",
    nameEn: "Turkey",
    flag: "🇹🇷",
    category: "europe",
    typeAr: "منسوجات ومحاصيل ومواد بناء",
    typeEn: "Textiles, Crops & Construction",
    portsAr: ["ميناء إسطنبول", "مرسين"],
    portsEn: ["Istanbul Port", "Mersin"],
    topItemsAr: ["منسوجات وأقمشة", "خطوط تغليف", "خامات وتعبئة"],
    topItemsEn: ["Textiles & Fabrics", "Packaging Lines", "Raw Materials"],
    angle: 230,
    radiusPercent: 78,
    color: "#EC4899", // Pink
    badgeAr: "مورد سريع",
    badgeEn: "Fast Supply Line",
  },
  {
    id: "saudi",
    nameAr: "السعودية",
    nameEn: "Saudi Arabia",
    flag: "🇸🇦",
    category: "mena",
    typeAr: "سلاسل توريد ومشاريع تنموية",
    typeEn: "Supply Chain & Projects",
    portsAr: ["ميناء الملك عبد الله", "ميناء جدة الإسلامي"],
    portsEn: ["King Abdullah Port", "Jeddah Islamic Port"],
    topItemsAr: ["توريدات مشاريع", "خدمات لوجستية"],
    topItemsEn: ["Project Sourcing", "Logistics Execution"],
    angle: 80,
    radiusPercent: 62,
    color: "#10B981", // Emerald
    badgeAr: "نمو سريع",
    badgeEn: "High Demand",
  },
  {
    id: "netherlands",
    nameAr: "هولندا",
    nameEn: "Netherlands",
    flag: "🇳🇱",
    category: "europe",
    typeAr: "بوابة الموانئ الأوروبية",
    typeEn: "European Gateway Port",
    portsAr: ["ميناء روتردام (Rotterdam)"],
    portsEn: ["Port of Rotterdam"],
    topItemsAr: ["ترانزيت أوروبي", "فحص وجودة"],
    topItemsEn: ["European Transit", "Quality Inspection"],
    angle: 325,
    radiusPercent: 75,
    color: "#6366F1", // Indigo
    badgeAr: "مركز الموانئ الأوروبية",
    badgeEn: "Euro Gateway",
  },
  {
    id: "india",
    nameAr: "الهند",
    nameEn: "India",
    flag: "🇮🇳",
    category: "asia",
    typeAr: "خامات وكيميائيات ومستلزمات",
    typeEn: "Raw Materials & Chemicals",
    portsAr: ["ميناء موندرا", "جواهر لال نهرو"],
    portsEn: ["Mundra Port", "JNPT Mumbai"],
    topItemsAr: ["كيميائيات صناعية", "برمجيات وأنسجة"],
    topItemsEn: ["Industrial Chemicals", "Yarns & Textiles"],
    angle: 15,
    radiusPercent: 65,
    color: "#F97316", // Orange
    badgeAr: "خامات أولية",
    badgeEn: "Raw Sourcing",
  },
  {
    id: "italy",
    nameAr: "إيطاليا",
    nameEn: "Italy",
    flag: "🇮🇹",
    category: "europe",
    typeAr: "تصميمات ومعدات وتأثيث فاخر",
    typeEn: "Machinery & Premium Sourcing",
    portsAr: ["ميناء جنوة", "ترييستي"],
    portsEn: ["Port of Genoa", "Trieste"],
    topItemsAr: ["خطوط إنتاج إيطالية", "رخام وتصاميم"],
    topItemsEn: ["Italian Production Lines", "Marble & Design"],
    angle: 260,
    radiusPercent: 82,
    color: "#A855F7", // Purple
    badgeAr: "معدات متخصصة",
    badgeEn: "Specialized Equipment",
  },
];

interface InteractiveGlobeMapProps {
  locale: Locale;
  mapTitle?: string;
  subtitle?: string;
}

export default function InteractiveGlobeMap({
  locale,
  mapTitle,
  subtitle,
}: InteractiveGlobeMapProps) {
  const isAr = locale === "ar";
  const [selectedCountry, setSelectedCountry] = useState<CountryTradeData>(TRADE_COUNTRIES[0]);
  const [filterCategory, setFilterCategory] = useState<"all" | "asia" | "mena" | "europe">("all");

  const filteredCountries = TRADE_COUNTRIES.filter((c) =>
    filterCategory === "all" ? true : c.category === filterCategory
  );

  return (
    <div className="w-full flex flex-col items-center gap-sp-6">
      {/* Dynamic Subtitle / Title badge if passed */}
      {(mapTitle || subtitle) && (
        <div className="text-center flex flex-col items-center gap-1 mb-sp-2">
          {mapTitle && <span className="font-mono text-fs-micro text-gold uppercase tracking-wider">{mapTitle}</span>}
          {subtitle && <p className="text-fs-small text-silver max-w-[500px] leading-relaxed">{subtitle}</p>}
        </div>
      )}

      {/* Filters Header */}
      <div className="flex flex-wrap justify-center items-center gap-sp-2 sm:gap-sp-3">
        {[
          { id: "all" as const, labelAr: "🌐 جميع الدول (9)", labelEn: "🌐 All Countries (9)" },
          { id: "asia" as const, labelAr: "🇨🇳 آسيا والصين", labelEn: "🇨🇳 Asia & China" },
          { id: "mena" as const, labelAr: "🇦🇪 الشرق الأوسط والخليج", labelEn: "🇦🇪 Middle East & MENA" },
          { id: "europe" as const, labelAr: "🇪🇺 أوروبا والعالم", labelEn: "🇪🇺 Europe & Global" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterCategory(tab.id)}
            className={cn(
              "px-sp-4 py-2 rounded-full font-mono text-fs-micro transition-all cursor-pointer border border-glass",
              filterCategory === tab.id
                ? "bg-gold text-black border-gold font-semibold shadow-[0_0_20px_rgba(199,161,92,0.3)]"
                : "bg-graphite-800 text-silver hover:text-white hover:border-gold/40"
            )}
          >
            {isAr ? tab.labelAr : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Main Interactive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-sp-8 w-full rounded-2xl border border-glass bg-gradient-to-b from-graphite-800/90 via-graphite-900 to-black p-sp-5 sm:p-sp-8 overflow-hidden shadow-2xl relative">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,161,92,0.06),transparent_70%)] pointer-events-none" />

        {/* LEFT: Circular Radar/Globe Canvas */}
        <div className="relative flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px] w-full">
          {/* Radar Circles SVG Background */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            {/* Outer Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-gold/25"
            />
            {/* Middle Orbit Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-glass/40"
            />
            {/* Inner Orbit Ring */}
            <div className="absolute inset-16 rounded-full border border-cyan/20 bg-cyan/5" />

            {/* Central Globe Core */}
            <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-gold bg-black/80 backdrop-blur-md shadow-[0_0_40px_rgba(199,161,92,0.25)] text-center p-2">
              <span className="text-2xl sm:text-3xl mb-1 animate-pulse">{selectedCountry.flag}</span>
              <span className="font-display text-fs-small font-bold text-white leading-tight">
                {isAr ? selectedCountry.nameAr : selectedCountry.nameEn}
              </span>
              <span className="font-mono text-[9px] text-gold uppercase mt-0.5 tracking-wider">
                {isAr ? selectedCountry.badgeAr : selectedCountry.badgeEn}
              </span>
            </div>

            {/* Render Country Nodes around the circle */}
            {TRADE_COUNTRIES.map((country) => {
              const isSelected = selectedCountry.id === country.id;
              const isFilteredOut = filterCategory !== "all" && country.category !== filterCategory;

              // Calculate (x, y) coordinates on SVG circle
              const radius = 145; // radius in px
              const rad = (country.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <motion.button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className={cn(
                    "absolute z-20 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border transition-all cursor-pointer shadow-lg",
                    isFilteredOut && "opacity-25 grayscale hover:opacity-100 hover:grayscale-0",
                    isSelected
                      ? "border-gold bg-gold text-black shadow-[0_0_25px_rgba(199,161,92,0.8)] scale-110 z-30"
                      : "border-glass bg-graphite-800/90 text-white hover:border-gold hover:bg-black"
                  )}
                  title={isAr ? country.nameAr : country.nameEn}
                >
                  <span className="text-sm sm:text-base">{country.flag}</span>

                  {/* Connecting Line to Core if selected */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeLine"
                      className="absolute inset-0 rounded-full border-2 border-gold animate-ping pointer-events-none opacity-40"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <p className="mt-sp-4 font-mono text-fs-micro text-silver-dim text-center">
            {isAr
              ? "💡 انقر على أي دولة على الخريطة الدائرية لاستعراض تفاصيل الموانئ والمنتجات"
              : "💡 Click on any country node to inspect port and product details"}
          </p>
        </div>

        {/* RIGHT: Detailed Active Country Card */}
        <div className="flex flex-col gap-sp-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-glass bg-white/[0.04] p-sp-6 backdrop-blur-md flex flex-col gap-sp-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-glass pb-sp-3">
                <div className="flex items-center gap-sp-3">
                  <span className="text-3xl">{selectedCountry.flag}</span>
                  <div className="flex flex-col text-start">
                    <h3 className="font-display text-fs-h3 font-bold text-white">
                      {isAr ? selectedCountry.nameAr : selectedCountry.nameEn}
                    </h3>
                    <span className="font-mono text-fs-micro text-gold">
                      {isAr ? selectedCountry.typeAr : selectedCountry.typeEn}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-gold/15 border border-gold/30 px-sp-3 py-1 font-mono text-[10px] text-gold font-semibold uppercase">
                  {isAr ? selectedCountry.badgeAr : selectedCountry.badgeEn}
                </span>
              </div>

              {/* Ports & Terminals */}
              <div className="flex flex-col items-start text-start gap-sp-1.5">
                <span className="font-mono text-fs-micro text-silver-dim uppercase tracking-wider">
                  ⚓ {isAr ? "أهم الموانئ والمجالات اللوجستية:" : "Key Ports & Logistics Terminals:"}
                </span>
                <div className="flex flex-wrap gap-sp-2">
                  {(isAr ? selectedCountry.portsAr : selectedCountry.portsEn).map((port, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-glass bg-black/40 px-sp-3 py-1 font-mono text-fs-micro text-cyan"
                    >
                      {port}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Demanded Goods */}
              <div className="flex flex-col items-start text-start gap-sp-1.5">
                <span className="font-mono text-fs-micro text-silver-dim uppercase tracking-wider">
                  📦 {isAr ? "الأكثر طلباً في الاستيراد والتصدير:" : "Most Demanded Commodities:"}
                </span>
                <div className="grid grid-cols-2 gap-sp-2 w-full">
                  {(isAr ? selectedCountry.topItemsAr : selectedCountry.topItemsEn).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-sp-2 rounded-md border border-white/5 bg-white/[0.02] p-sp-2 text-start"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      <span className="text-fs-small text-silver font-light leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-sp-2 border-t border-glass flex justify-between items-center">
                <span className="font-mono text-[10px] text-silver-dim">
                  {isAr ? "تغطية وعمليات نشطة 24/7" : "Active 24/7 coverage & execution"}
                </span>
                <a
                  href="#book"
                  className="inline-flex items-center gap-1.5 font-mono text-fs-micro text-gold hover:underline"
                >
                  {isAr ? "طلب استشارة لهذه الدولة ←" : "Book consultation for this route →"}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Grid Quick Selector for all countries */}
          <div className="grid grid-cols-3 gap-sp-2 w-full">
            {filteredCountries.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCountry(c)}
                className={cn(
                  "flex items-center gap-sp-2 rounded-lg border p-2 text-start transition-all cursor-pointer",
                  selectedCountry.id === c.id
                    ? "border-gold bg-gold/15 text-white"
                    : "border-glass bg-black/20 text-silver hover:bg-white/5"
                )}
              >
                <span className="text-base">{c.flag}</span>
                <span className="font-display text-fs-micro truncate font-medium">
                  {isAr ? c.nameAr : c.nameEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
