"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { FAQ_CATEGORIES, FAQS_DATA } from "@/data/faqs";
import { Search, UserCheck, ChevronDown, ChevronUp } from "lucide-react";

interface FAQExplorerProps {
  locale: string;
}

export default function FAQExplorer({ locale }: FAQExplorerProps) {
  const isAr = locale === "ar";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // Open first by default

  const ITEMS_PER_PAGE = 20;

  // Filter logic
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const q = isAr ? item.questionAr : item.questionEn;
      const a = isAr ? item.answerAr : item.answerEn;
      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        query === "" ||
        q.toLowerCase().includes(query) ||
        a.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, isAr]);

  // Pagination logic
  const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE) || 1;
  const paginatedFaqs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFaqs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredFaqs, currentPage]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleAccordion = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="flex flex-col items-start text-start gap-sp-6 w-full">
      {/* Author Credit Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full p-sp-4 rounded-2xl border border-gold/30 bg-gold/5 backdrop-blur-md">
        <div className="flex items-center gap-sp-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black font-bold shrink-0">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-wider block">
              {isAr ? "إجابات مثبتة ورسمية" : "Verified Official Reference"}
            </span>
            <p className="text-xs sm:text-sm text-white font-medium">
              {isAr
                ? "بقلم: حسام مبروك — خبير التجارة الدولية والتوريد والتصنيع من الصين"
                : "By: Hossam Mabrouk — International Trade & China Sourcing Specialist"}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/about/bio`}
          className="text-xs font-bold text-gold hover:underline shrink-0"
        >
          {isAr ? "تصفح السيرة الذاتية ←" : "View Biography ←"}
        </Link>
      </div>

      {/* Header Title */}
      <div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          {isAr
            ? "الأسئلة الشائعة وقاعدة المعرفة التجارية (400 سؤالاً)"
            : "Frequently Asked Questions & Trade Knowledge Base (400 Q&As)"}
        </h2>
        <p className="text-silver text-xs sm:text-sm mt-1 leading-lh-relaxed">
          {isAr
            ? "إجابات استشارية واضحة وموثقة حول حسام مبروك، منهجيات التوريد، أسرار التصنيع في الصين، وتأسيس وتطوير الأعمال التجارية وإدارة سلاسل الإمداد."
            : "Comprehensive reference answers covering Hossam Mabrouk's advisory, China sourcing, factory audits, import operations, and business scaling."}
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full">
        <Search className="absolute right-4 top-3.5 h-4 w-4 text-silver-dim pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={
            isAr
              ? "ابحث في 400 سؤالاً وإجابة (مثال: الصين، التوريد، الشحن، الموردين...)"
              : "Search 400 Q&As (e.g. Sourcing, Freight, Factories, Customs...)"
          }
          className="w-full rounded-2xl border border-glass bg-black/60 pr-11 pl-4 py-3 text-xs sm:text-sm text-white placeholder:text-silver-dim focus:border-gold focus:outline-none transition-colors"
        />
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-sp-2 overflow-x-auto w-full pb-sp-2">
        {FAQ_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 border ${
                isActive
                  ? "bg-gold text-black border-gold font-bold shadow-[0_4px_15px_rgba(199,161,92,0.3)]"
                  : "bg-black/40 text-silver border-white/10 hover:border-gold/40 hover:text-white"
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          );
        })}
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-sp-3 w-full">
        {paginatedFaqs.length === 0 ? (
          <div className="p-8 text-center text-silver text-sm border border-glass rounded-2xl bg-black/40">
            {isAr
              ? "لم يتم العثور على نتائج تطابق بحثك."
              : "No matching questions found."}
          </div>
        ) : (
          paginatedFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            const q = isAr ? faq.questionAr : faq.questionEn;
            const a = isAr ? faq.answerAr : faq.answerEn;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-gold/50 bg-black/80 shadow-[0_4px_20px_rgba(199,161,92,0.1)]"
                    : "border-glass bg-black/40 hover:border-gold/30"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-sp-5 text-start flex items-center justify-between gap-sp-4 focus:outline-none"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-white flex items-start gap-sp-3">
                    <span className="font-mono text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/30 shrink-0 mt-0.5">
                      #{faq.id}
                    </span>
                    {q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-silver-dim shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-sp-5 pb-sp-5 pt-0 border-t border-white/5 mt-sp-2">
                    <p className="text-silver text-xs sm:text-sm font-light leading-lh-relaxed mt-sp-3">
                      {a}
                    </p>

                    {/* Credibility Line and Internal Link CTA */}
                    <div className="mt-sp-4 pt-sp-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-gold/90">
                        {isAr
                          ? (faq.credibilityLineAr || "إجابة استشارية مقدّمة من حسام مبروك — التجارة الدولية والتوريد من الصين")
                          : "Advisory Guidance by Hossam Mabrouk — International Trade & Sourcing"}
                      </span>
                      {faq.internalLink && (
                        <Link
                          href={`/${locale}${faq.internalLink.href}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline shrink-0"
                        >
                          {isAr
                            ? faq.internalLink.labelAr
                            : faq.internalLink.labelEn}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls (20 items per page limit) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between w-full pt-sp-4 border-t border-white/10">
          <span className="text-xs font-mono text-silver">
            {isAr
              ? `عرض ${paginatedFaqs.length} من أصل ${filteredFaqs.length} سؤال`
              : `Showing ${paginatedFaqs.length} of ${filteredFaqs.length} questions`}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold"
            >
              {isAr ? "السابق" : "Previous"}
            </button>

            <span className="font-mono text-xs font-bold text-gold px-2">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold"
            >
              {isAr ? "التالي" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
