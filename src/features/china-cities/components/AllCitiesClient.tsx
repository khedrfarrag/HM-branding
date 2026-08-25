'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Search, Building2 } from 'lucide-react';
import { ICity } from '../types';
import { CityCard } from './CityCard';

interface AllCitiesClientProps {
  cities: ICity[];
  dict?: Record<string, unknown>;
  locale: 'ar' | 'en';
}

const PAGE_SIZE = 10;

export function AllCitiesClient({ cities, locale }: AllCitiesClientProps) {
  const isAr = locale === 'ar';
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredCities = useMemo(() => {
    return cities.filter(c => {
      if (selectedTier !== 'all' && c.tier !== selectedTier) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = c.name.ar.toLowerCase().includes(q) || c.name.en.toLowerCase().includes(q) || c.name.zh.toLowerCase().includes(q);
        const matchProv = c.province.ar.toLowerCase().includes(q) || c.province.en.toLowerCase().includes(q);
        return matchName || matchProv;
      }
      return true;
    });
  }, [cities, searchQuery, selectedTier]);

  const totalPages = Math.ceil(filteredCities.length / PAGE_SIZE) || 1;
  const paginatedCities = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredCities.slice(start, start + PAGE_SIZE);
  }, [filteredCities, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'دليل المدن الشامل' : 'Complete Cities Directory'}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            {isAr ? 'جميع مدن الصين التجارية والصناعية' : 'All Chinese Commercial & Manufacturing Cities'}
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? `قاعدة بيانات موثقة تضم ${cities.length} مدينة تجارية وصناعية مقسمة حسب الأهمية الاستيرادية.`
              : `Directory of ${cities.length} verified commercial cities organized by trade priority.`}
          </p>

          {/* Search & Tier Filter Bar */}
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-3 pt-4">
            <div className="relative flex-1 w-full flex items-center rounded-xl bg-slate-900 border border-slate-700/80 p-2">
              <Search className="w-4 h-4 text-amber-400 mx-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder={isAr ? 'ابحث باسم المدينة أو المقاطعة...' : 'Search city or province...'}
                className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => { setSelectedTier('all'); setCurrentPage(1); }}
                className={`flex-1 md:flex-none px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedTier === 'all'
                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {isAr ? 'الكل' : 'All'}
              </button>
              <button
                onClick={() => { setSelectedTier('tier-1'); setCurrentPage(1); }}
                className={`flex-1 md:flex-none px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedTier === 'tier-1'
                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {isAr ? 'الرئيسية (Tier 1)' : 'Tier 1'}
              </button>
              <button
                onClick={() => { setSelectedTier('tier-2'); setCurrentPage(1); }}
                className={`flex-1 md:flex-none px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedTier === 'tier-2'
                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {isAr ? 'متخصصة (Tier 2)' : 'Tier 2'}
              </button>
            </div>
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 border-b border-slate-800/80 pb-3">
          <span>
            {isAr
              ? `عرض ${Math.min((currentPage - 1) * PAGE_SIZE + 1, filteredCities.length)}-${Math.min(currentPage * PAGE_SIZE, filteredCities.length)} من إجمالي ${filteredCities.length} مدينة`
              : `Showing ${Math.min((currentPage - 1) * PAGE_SIZE + 1, filteredCities.length)}-${Math.min(currentPage * PAGE_SIZE, filteredCities.length)} of ${filteredCities.length} cities`}
          </span>
          <span>
            {isAr ? `صفحة ${currentPage} من ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedCities.map(city => (
            <CityCard key={city.id} city={city} locale={locale} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:border-amber-500/40 text-xs font-semibold text-white flex items-center gap-1"
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              <span>{isAr ? 'السابقة' : 'Previous'}</span>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                    currentPage === p
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:border-amber-500/40 text-xs font-semibold text-white flex items-center gap-1"
            >
              <span>{isAr ? 'التالية' : 'Next'}</span>
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
