'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/domains/shared/value-objects';
import { IChinaCommercialEntity } from '../types';
import {
  MapPin,
  Star,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SubdomainCardGridProps {
  locale: Locale;
  subdomain: string;
  entities: IChinaCommercialEntity[];
}

const ITEMS_PER_PAGE = 24;
const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80';

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || DEFAULT_FALLBACK_IMAGE);

  React.useEffect(() => {
    setImgSrc(src || DEFAULT_FALLBACK_IMAGE);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setImgSrc(DEFAULT_FALLBACK_IMAGE)}
    />
  );
}

export default function SubdomainCardGrid({
  locale,
  subdomain,
  entities,
}: SubdomainCardGridProps) {
  const isAr = locale === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Unique cities from entities
  const availableCities = useMemo(() => {
    const citiesSet = new Set<string>();
    entities.forEach((e) => {
      if (e.citySlug) citiesSet.add(e.citySlug);
    });
    return Array.from(citiesSet).slice(0, 35); // Top 35 cities
  }, [entities]);

  // Filtered entities
  const filteredEntities = useMemo(() => {
    return entities.filter((item) => {
      const matchesCity = selectedCity === 'all' || item.citySlug === selectedCity;
      const title = item.name[locale] || item.name.ar || item.name.en || '';
      const desc = item.description[locale] || item.description.ar || item.description.en || '';
      const zh = item.name.zh || '';
      const q = searchQuery.trim().toLowerCase();

      const matchesSearch =
        q === '' ||
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        zh.toLowerCase().includes(q) ||
        item.citySlug.toLowerCase().includes(q);

      return matchesCity && matchesSearch;
    });
  }, [entities, selectedCity, searchQuery, locale]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredEntities.length / ITEMS_PER_PAGE) || 1;
  const paginatedEntities = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEntities.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEntities, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const PrevIcon = isAr ? ChevronRight : ChevronLeft;
  const NextIcon = isAr ? ChevronLeft : ChevronRight;

  return (
    <div className="w-full space-y-8" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Search & City Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isAr ? 'right-3.5' : 'left-3.5'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={isAr ? 'ابحث بالاسم، المدينة، أو الصينية...' : 'Search by name, city, or Chinese...'}
            className={`w-full py-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500/80 transition-all ${
              isAr ? 'pr-10' : 'pl-10'
            }`}
          />
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              setSelectedCity('all');
              setCurrentPage(1);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              selectedCity === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
            }`}
          >
            {isAr ? 'جميع المدن' : 'All Cities'} ({entities.length})
          </button>
          {availableCities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                setSelectedCity(city);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap capitalize ${
                selectedCity === city
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {isAr
            ? `عرض ${paginatedEntities.length} من أصل ${filteredEntities.length} منشأة موثقة`
            : `Showing ${paginatedEntities.length} of ${filteredEntities.length} verified listings`}
        </span>
        <span>
          {isAr ? `صفحة ${currentPage} من ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
        </span>
      </div>

      {/* Grid of Entity Cards */}
      {filteredEntities.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <p className="text-slate-400 text-sm">
            {isAr ? 'لم يتم العثور على نتائج مطابقة لبحثك.' : 'No matching results found for your search.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedEntities.map((item) => {
            const isHossamAudited =
              item.curatorVerification.verifiedBy.ar?.includes('حسام مبروك') ||
              item.curatorVerification.verifiedBy.en?.includes('Hossam Mabrouk') ||
              item.curatorVerification.trustNotes.ar?.includes('حسام مبروك');

            return (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                {/* Cover Image with Badges */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                  <CardImage
                    src={item.coverImage}
                    alt={item.name[locale] || item.name.ar}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* City Badge & Rating Pill */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-slate-900/85 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                      {item.citySlug}
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-950/85 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Chinese Name Banner */}
                  <div className="absolute bottom-2 inset-x-3 text-right">
                    <span className="text-[11px] font-mono text-slate-300/80 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      {item.name.zh}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-500/90 tracking-wider">
                      {item.category[locale] || item.category.ar}
                    </span>
                    <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      {item.name[locale] || item.name.ar}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {item.description[locale] || item.description.ar}
                    </p>
                  </div>

                  {/* Key Attributes & Features */}
                  <div className="space-y-3 pt-3 border-t border-slate-800/80">
                    {/* Address Summary */}
                    <div className="flex items-start gap-2 text-[11px] text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.address[locale] || item.address.ar}</span>
                    </div>

                    {/* Verification Badge - Strictly differentiated */}
                    {isHossamAudited ? (
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{isAr ? '✓ تدقيق ميداني: حسام مبروك' : '✓ Field Audited by Hossam Mabrouk'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400/90 bg-emerald-950/30 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{isAr ? '✓ تم التحقق عبر مصادر موثوقة' : '✓ Source Verified Data'}</span>
                      </div>
                    )}

                    {/* Direct Action Button */}
                    <Link
                      href={`/${locale}/china/${subdomain}/${item.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-black text-xs transition-all duration-200"
                    >
                      <span>{isAr ? 'عرض التفاصيل والموقع' : 'View Details & Location'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            type="button"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
          >
            <PrevIcon className="w-4 h-4" />
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pNum = i + 1;
            if (totalPages > 5 && currentPage > 3) {
              pNum = currentPage - 3 + i;
              if (pNum + 4 > totalPages) {
                pNum = totalPages - 4 + i;
              }
            }
            if (pNum < 1) pNum = 1;
            if (pNum > totalPages) return null;

            return (
              <button
                key={pNum}
                type="button"
                onClick={() => handlePageChange(pNum)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                  currentPage === pNum
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {pNum}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
          >
            <NextIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
