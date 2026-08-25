"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";
import type { Locale } from "@/features/i18n";

const SECTOR_IMAGE_MAP: Record<string, string> = {
  "electronics": "/images/sectors/electronics.png",
  "machinery": "/images/sectors/machinery.png",
  "construction": "/images/sectors/construction.png",
  "automotive": "/images/sectors/automotive.png",
  "electrical": "/images/sectors/electrical.png",
  "hardware-tools": "/images/sectors/hardware-tools.png",
  "iron-steel": "/images/sectors/iron-steel.png",
  "plastics-rubber": "/images/sectors/plastics-rubber.png",
  "solar-renewables": "/images/sectors/solar-renewables.png",
  "ev-batteries": "/images/sectors/ev-batteries.png",
  "chemicals": "/images/sectors/chemicals.png",
  "lighting-led": "/images/sectors/lighting-led.png",
  "agriculture": "/images/sectors/agriculture.png",
  "processed-food": "/images/sectors/processed-food.png",
  "cold-chain": "/images/sectors/cold-chain.png",
  "spices-tea": "/images/sectors/spices-tea.png",
  "textiles": "/images/sectors/textiles.png",
  "apparel": "/images/sectors/apparel.png",
  "footwear-leather": "/images/sectors/footwear-leather.png",
  "home-textiles": "/images/sectors/home-textiles.png",
  "furniture": "/images/sectors/furniture.png",
  "household-appliances": "/images/sectors/household-appliances.png",
  "gifts-decor": "/images/sectors/gifts-decor.png",
  "kitchenware": "/images/sectors/kitchenware.png",
  "beauty-cosmetics": "/images/sectors/beauty-cosmetics.png",
  "medical-devices": "/images/sectors/medical-devices.png",
  "packaging-printing": "/images/sectors/packaging-printing.png",
  "sports-recreation": "/images/sectors/sports-recreation.png",
  "office-supplies": "/images/sectors/office-supplies.png",
  "pet-products": "/images/sectors/pet-products.png",
};

interface SectorItem {
  idx: string;
  title: string;
  desc: string;
  slug?: string;
  category?: string;
}

interface CategoryItem {
  key: string;
  label: string;
}

interface IndustriesDict {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: string;
  page?: string;
  of?: string;
  prev?: string;
  next?: string;
  showing?: string;
  to?: string;
  ofTotal?: string;
  customSectorTitle?: string;
  customSectorDesc?: string;
  customSectorCta?: string;
  categories?: CategoryItem[];
  sectors?: SectorItem[];
}

interface IndustriesPageClientProps {
  locale: Locale;
  dict: {
    industries: IndustriesDict;
  };
}

const ITEMS_PER_PAGE = 10;

export default function IndustriesPageClient({ locale, dict }: IndustriesPageClientProps) {
  const isAr = locale === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const categories = dict.industries?.categories || [];
  const allSectors = dict.industries?.sectors || [];

  const filteredSectors = activeCategory === "all"
    ? allSectors
    : allSectors.filter((s) => s.category === activeCategory);

  const totalPages = Math.ceil(filteredSectors.length / ITEMS_PER_PAGE) || 1;
  const validCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredSectors.length);
  const paginatedSectors = filteredSectors.slice(startIndex, endIndex);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const PrevIcon = isAr ? ChevronRight : ChevronLeft;
  const NextIcon = isAr ? ChevronLeft : ChevronRight;
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="relative w-full min-h-screen bg-black text-white px-sp-5 py-sp-10 md:px-sp-8">
      <div className="mx-auto max-w-[1360px] w-full" ref={gridTopRef}>
        
        {/* Page Hero Header */}
        <div className="mb-sp-10 text-start">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C7A15C] uppercase bg-[#C7A15C]/10 border border-[#C7A15C]/30 px-3 py-1 rounded-full">
            {dict.industries?.eyebrow || (isAr ? "القطاعات" : "Industries")}
          </span>
          <h1 className="mt-sp-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-gradient-gold-animated">
            {dict.industries?.title || (isAr ? "خبرة قطاعية، مهيأة للتوسع والنمو." : "Sector expertise, engineered for scale.")}
          </h1>
          <p className="mt-sp-4 max-w-3xl text-base sm:text-lg text-silver leading-relaxed font-light">
            {dict.industries?.subtitle ||
              (isAr
                ? "استكشف 30 قطاعاً تجارياً متخصصاً في التوريد المباشر، الشحن الدولي، وإدارة سلاسل الإمداد بين الصين والشرق الأوسط."
                : "Discover 30 specialized trade sectors engineered for cross-border sourcing, freight logistics, and supply chain management across China and the Middle East.")}
          </p>
        </div>

        {/* Category Filter Tabs */}
        {categories.length > 0 && (
          <div className="mb-sp-8 flex flex-wrap gap-2 justify-start border-b border-white/10 pb-sp-5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border",
                    isActive
                      ? "bg-[#C7A15C] text-black border-[#C7A15C] font-semibold shadow-[0_0_20px_rgba(199,161,92,0.35)]"
                      : "bg-white/5 text-silver border-white/10 hover:border-gold/40 hover:text-white hover:bg-white/10"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Results Counter Summary */}
        <div className="mb-sp-6 flex items-center justify-between text-xs sm:text-sm text-silver font-mono">
          <div>
            {dict.industries?.showing || (isAr ? "عرض" : "Showing")}{" "}
            <span className="font-semibold text-white">{filteredSectors.length > 0 ? startIndex + 1 : 0}</span>{" "}
            {dict.industries?.to || (isAr ? "إلى" : "to")}{" "}
            <span className="font-semibold text-white">{endIndex}</span>{" "}
            {dict.industries?.ofTotal || (isAr ? "من أصل" : "of")}{" "}
            <span className="font-semibold text-[#C7A15C]">{filteredSectors.length}</span>{" "}
            {isAr ? "قطاع تجاري" : "sectors"}
          </div>
          <div>
            {dict.industries?.page || (isAr ? "صفحة" : "Page")}{" "}
            <span className="font-semibold text-white">{validCurrentPage}</span>{" "}
            {dict.industries?.of || (isAr ? "من" : "of")}{" "}
            <span className="font-semibold text-white">{totalPages}</span>
          </div>
        </div>

        {/* Sector Grid (10 Items Per Page Limit) */}
        <div className="grid grid-cols-1 gap-sp-5 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedSectors.map((sector, idx) => {
            const bgImg = (sector.slug && SECTOR_IMAGE_MAP[sector.slug]) || "/images/sectors/electronics.png";

            return (
              <div
                key={sector.slug || idx}
                className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-white/10 p-sp-6 min-h-[280px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(199,161,92,0.25)] hover:border-gold/50 cursor-pointer h-full"
              >
                {/* Background Image */}
                <img
                  src={bgImg}
                  alt={sector.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-85"
                />
                {/* Dark Gradient Overlay for High Contrast Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-all duration-500" />

                <div className="relative z-10 flex flex-col items-start text-start">
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#C7A15C] uppercase bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C7A15C]/30 mb-3">
                    {sector.idx}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-md">
                    {sector.title}
                  </h3>
                  <p className="mt-sp-2 text-fs-small text-silver font-light leading-lh-relaxed transition-all duration-300 opacity-90 group-hover:opacity-100">
                    {sector.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls (Limit 10 per page) */}
        {totalPages > 1 && (
          <div className="mt-sp-10 flex flex-wrap items-center justify-center gap-2 border-t border-white/10 pt-sp-8">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(validCurrentPage - 1)}
              disabled={validCurrentPage === 1}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer",
                validCurrentPage === 1
                  ? "bg-white/5 text-white/30 border-white/5 cursor-not-allowed"
                  : "bg-white/5 text-white border-white/10 hover:border-[#C7A15C] hover:bg-[#C7A15C]/10"
              )}
            >
              <PrevIcon className="h-4 w-4" />
              <span>{dict.industries?.prev || (isAr ? "السابق" : "Previous")}</span>
            </button>

            {/* Numeric Page Buttons */}
            <div className="flex items-center gap-1.5 mx-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === validCurrentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={cn(
                      "h-9 w-9 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center border",
                      isActive
                        ? "bg-[#C7A15C] text-black border-[#C7A15C] font-bold shadow-[0_0_15px_rgba(199,161,92,0.4)]"
                        : "bg-white/5 text-silver border-white/10 hover:border-gold/40 hover:text-white"
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(validCurrentPage + 1)}
              disabled={validCurrentPage === totalPages}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer",
                validCurrentPage === totalPages
                  ? "bg-white/5 text-white/30 border-white/5 cursor-not-allowed"
                  : "bg-white/5 text-white border-white/10 hover:border-[#C7A15C] hover:bg-[#C7A15C]/10"
              )}
            >
              <span>{dict.industries?.next || (isAr ? "التالي" : "Next")}</span>
              <NextIcon className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Custom Sector Consultation Banner */}
        <div className="mt-sp-16 rounded-2xl border border-[#C7A15C]/30 bg-gradient-to-r from-black via-[#0B0D11] to-black p-sp-8 sm:p-sp-10 text-center relative overflow-hidden shadow-[0_0_40px_rgba(199,161,92,0.1)]">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold-animated">
              {dict.industries?.customSectorTitle || (isAr ? "لم تجد قطاعك المحدد؟" : "Didn't find your specific sector?")}
            </h3>
            <p className="mt-sp-3 text-silver text-sm sm:text-base font-light">
              {dict.industries?.customSectorDesc ||
                (isAr
                  ? "نقدم خدمات توريد وتخليص مخصصة لجميع القطاعات التجارية والصناعية الأخرى حسب طلبك."
                  : "We handle custom sourcing and specialized procurement across unlisted industries according to your needs.")}
            </p>
            <Link
              href={`/${locale}#book`}
              className="mt-sp-6 inline-flex items-center gap-sp-3 rounded-full bg-gradient-to-r from-[#C7A15C] to-[#E5C17C] px-8 py-3.5 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(199,161,92,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(199,161,92,0.5)]"
            >
              <span>{dict.industries?.customSectorCta || (isAr ? "ناقش التوريد المخصص" : "Discuss Custom Sourcing")}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
