'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, Scale, Sparkles, RefreshCw, Building2, Layers, ArrowLeft, ArrowRight } from 'lucide-react';
import { ICity } from '../types';
import { CityCard } from './CityCard';
import { ChinaInteractiveMap } from './ChinaInteractiveMap';
import { searchCities } from '../utils/citySearch';
import { CHINA_INDUSTRIES_DATA } from '../data/industries';

interface ChinaCitiesHubClientProps {
  initialCities: ICity[];
  dict?: Record<string, unknown>;
  locale: 'ar' | 'en';
}

function HubContent({ initialCities, dict, locale }: ChinaCitiesHubClientProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const t = dict?.chinaCities || {};
  const searchParams = useSearchParams();
  const industryParam = searchParams.get('industry');

  const [query, setQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  useEffect(() => {
    if (industryParam) {
      setSelectedIndustry(industryParam);
    }
  }, [industryParam]);

  const filteredCities = useMemo(() => {
    return searchCities(initialCities, {
      query,
      tier: selectedTier,
      industry: selectedIndustry
    });
  }, [initialCities, query, selectedTier, selectedIndustry]);

  const tier1Count = useMemo(() => initialCities.filter(c => c.tier === 'tier-1').length, [initialCities]);
  const tier2Count = useMemo(() => initialCities.filter(c => c.tier === 'tier-2').length, [initialCities]);

  const activeIndustryObj = useMemo(() => {
    return CHINA_INDUSTRIES_DATA.find(i => i.slug === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.heroBadge || (isAr ? 'دليل مدن الصين التجاري الشامل' : 'China Commercial Cities Guide')}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {t.title || (isAr ? 'دليل مدن الصين التجاري الشامل' : 'Comprehensive China Commercial Cities Guide')}
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.subtitle || (isAr ? 'اكتشف المدن والأسواق والمناطق الصناعية والموانئ في الصين للمستوردين والتجار' : 'Discover major Chinese commercial hubs, wholesale markets, manufacturing zones, and ports for traders.')}
          </p>

          {/* Sourcing Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              href={`/${locale}/china-cities/products`}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-amber-300 hover:text-white hover:border-amber-500 transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'تصفح حسب نوع المنتج ←' : 'Browse by Product Category →'}</span>
            </Link>

            <Link
              href={`/${locale}/china-cities/all`}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-amber-500 transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>{isAr ? `تصفح جميع المدن (${initialCities.length}) ←` : `Browse All ${initialCities.length} Cities →`}</span>
            </Link>
          </div>

          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl focus-within:border-amber-500 transition-all p-2">
              <Search className="w-5 h-5 text-amber-400 mx-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder || (isAr ? 'ابحث عن مدينة، منتج، سوق جملة، أو منطقة صناعية...' : 'Search city, product, market, or industrial zone...')}
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none py-2"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="px-3 py-1 text-xs text-slate-400 hover:text-white"
                >
                  {isAr ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 pt-12 space-y-12">
        {/* Comparison CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-white">
                {isAr ? 'أداة مقارنة المدن التجارية' : 'Commercial City Comparison Matrix'}
              </h3>
              <p className="text-xs text-slate-300">
                {isAr ? 'قارن بين مدينتين جنباً لجنب في الصناعات، الأسواق، تكلفة الشحن، والخدمات اللوجستية.' : 'Compare two cities side-by-side on wholesale ratio, manufacturing, and port logistics.'}
              </p>
            </div>
          </div>

          <Link
            href={`/${locale}/china-cities/compare`}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shrink-0"
          >
            {t.compareCities || (isAr ? 'فتح أداة المقارنة ←' : 'Open Comparison Tool →')}
          </Link>
        </div>

        {/* Active Industry Banner (if filtered by product) */}
        {activeIndustryObj && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                {isAr ? `تعرض الآن أفضل المدن المصنعة لـ: ` : `Showing top manufacturing cities for: `}
                <strong className="text-white">{activeIndustryObj.name[locale]}</strong>
              </span>
            </div>
            <button
              onClick={() => setSelectedIndustry('all')}
              className="text-xs font-bold text-amber-400 underline hover:text-white"
            >
              {isAr ? 'إلغاء الفلتر' : 'Clear Filter'}
            </button>
          </div>
        )}

        {/* Tier & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          {/* Tier Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTier === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {t.allCities || (isAr ? 'جميع المدن' : 'All Cities')} ({initialCities.length})
            </button>

            <button
              onClick={() => setSelectedTier('tier-1')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTier === 'tier-1'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {t.tier1 || (isAr ? 'Tier 1 الرئيسية' : 'Tier 1 Primary')} ({tier1Count})
            </button>

            <button
              onClick={() => setSelectedTier('tier-2')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTier === 'tier-2'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {t.tier2 || (isAr ? 'Tier 2 المتخصصة' : 'Tier 2 Specialized')} ({tier2Count})
            </button>
          </div>

          {/* Reset Filters */}
          {(selectedTier !== 'all' || selectedIndustry !== 'all' || query !== '') && (
            <button
              onClick={() => {
                setQuery('');
                setSelectedTier('all');
                setSelectedIndustry('all');
              }}
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isAr ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}</span>
            </button>
          )}
        </div>

        {/* Industry Category Selector */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'التصنيف حسب التخصص الصناعي:' : 'Filter by Industry Specialization:'}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedIndustry === 'all'
                  ? 'bg-slate-800 text-amber-400 border border-amber-500/40'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {isAr ? 'الكل' : 'All Industries'}
            </button>
            {CHINA_INDUSTRIES_DATA.map(ind => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedIndustry === ind.slug
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/40'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {ind.name[locale]}
              </button>
            ))}
          </div>
        </div>

        {/* Cities Grid */}
        {filteredCities.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map(city => (
                <CityCard key={city.id} city={city} locale={locale} />
              ))}
            </div>

            {/* View All Cities Button (T122) */}
            <div className="text-center pt-4">
              <Link
                href={`/${locale}/china-cities/all`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 hover:border-amber-500/50 transition-all shadow-lg group"
              >
                <span>{isAr ? `تصفح وقارن جميع الـ ${initialCities.length} مدينة في قاعدة البيانات` : `Browse & Compare All ${initialCities.length} Cities`}</span>
                <ArrowIcon className="w-4 h-4 text-amber-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
            <p className="text-base text-slate-300 font-semibold mb-2">
              {isAr ? 'لم نجد أي مدينة مطابقة لخيارات البحث.' : 'No commercial cities matched your search criteria.'}
            </p>
            <p className="text-xs text-slate-400 mb-4">
              {isAr ? 'جرب البحث باسم منتج آخر مثل أثاث، إلكترونيات، أو اختر جميع المدن.' : 'Try searching for another product term like furniture, electronics, or reset filters.'}
            </p>
            <button
              onClick={() => {
                setQuery('');
                setSelectedTier('all');
                setSelectedIndustry('all');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              {isAr ? 'عرض جميع المدن' : 'Show All Cities'}
            </button>
          </div>
        )}

        {/* Interactive SVG Map Section */}
        <div className="pt-8">
          <ChinaInteractiveMap cities={initialCities} locale={locale} />
        </div>
      </div>
    </div>
  );
}

export function ChinaCitiesHubClient(props: ChinaCitiesHubClientProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-slate-100 pt-32 text-center text-xs text-slate-400">Loading...</div>}>
      <HubContent {...props} />
    </Suspense>
  );
}
