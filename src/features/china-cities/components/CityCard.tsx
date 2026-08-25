'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Building2, Store, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { ICity } from '../types';

interface CityCardProps {
  city: ICity;
  locale: 'ar' | 'en';
}

export function CityCard({ city, locale }: CityCardProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const tierBadgeClass = 
    city.tier === 'tier-1' 
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      : city.tier === 'tier-2'
      ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

  const tierText = 
    city.tier === 'tier-1'
      ? (isAr ? 'Tier 1 رئيسية' : 'Tier 1 Primary')
      : city.tier === 'tier-2'
      ? (isAr ? 'Tier 2 متخصصة' : 'Tier 2 Specialized')
      : (isAr ? 'Tier 3 واعدة' : 'Tier 3 Emerging');

  return (
    <div className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/10">
      {/* Background Image Header */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={city.heroImage}
          alt={city.name[locale] || city.name.en}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        {/* Tier Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${tierBadgeClass}`}>
            {tierText}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            {city.commercialImportanceScore}/100
          </span>
        </div>

        {/* City Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {city.name[locale]}
            </h3>
            <span className="text-xs font-medium text-slate-400">
              ({city.name.zh})
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-300 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>{city.province[locale]} • {city.region}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
          {city.description[locale]}
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-800/80 text-slate-400">
          <div className="flex items-center gap-1.5">
            <Store className="w-4 h-4 text-amber-400/80" />
            <span>{city.wholesaleMarkets?.length || 0} {isAr ? 'أسواق جملة' : 'Markets'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-blue-400/80" />
            <span>{city.districts?.length || 0} {isAr ? 'مناطق تجارية' : 'Districts'}</span>
          </div>
        </div>

        {/* Top Product Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {city.primaryProducts[locale]?.slice(0, 3).map((prod, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
            >
              {prod}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <Link
          href={`/${locale}/china-cities/${city.slug}`}
          className="inline-flex items-center justify-between w-full mt-3 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all duration-300 group/btn"
        >
          <span>{isAr ? 'استكشف المدينة والأسواق' : 'Explore City & Markets'}</span>
          <ArrowIcon className="w-4 h-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
