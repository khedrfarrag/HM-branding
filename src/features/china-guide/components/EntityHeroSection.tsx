import React from 'react';
import Image from 'next/image';
import { Locale } from '@/domains/shared/value-objects';
import { IChinaCommercialEntity } from '../types';
import { Star, Building } from 'lucide-react';

interface EntityHeroSectionProps {
  locale: Locale;
  entity: IChinaCommercialEntity;
}

export default function EntityHeroSection({
  locale,
  entity,
}: EntityHeroSectionProps) {
  const isAr = locale === 'ar';

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Background Cover Image with Gradient Overlay */}
      <div className="relative h-72 sm:h-96 w-full">
        <Image
          src={entity.coverImage}
          alt={entity.name[locale] || entity.name.ar}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
      </div>

      {/* Floating Badges & Content */}
      <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end space-y-4">
        {/* Top Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Subdomain Pill */}
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20">
            {entity.subdomain}
          </span>

          {/* City Badge */}
          <span className="px-3 py-1 rounded-full text-xs font-black capitalize bg-slate-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <Building className="inline-block w-3.5 h-3.5 mr-1" />
            {entity.citySlug}
          </span>

          {/* Rating Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-slate-950/90 text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{entity.rating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal">({entity.reviewCount.toLocaleString()} {isAr ? 'تقييم موثق' : 'reviews'})</span>
          </div>
        </div>

        {/* Chinese Native Title */}
        <div>
          <span className="text-xs sm:text-sm font-mono text-amber-400/90 bg-slate-950/90 px-3 py-1 rounded-lg border border-amber-500/20 inline-block">
            {entity.name.zh}
          </span>
        </div>

        {/* Main Entity Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {entity.name[locale] || entity.name.ar}
        </h1>

        {/* Category Description Tag */}
        <p className="text-xs sm:text-sm text-slate-300 font-bold max-w-3xl">
          {entity.category[locale] || entity.category.ar}
        </p>
      </div>
    </div>
  );
}
