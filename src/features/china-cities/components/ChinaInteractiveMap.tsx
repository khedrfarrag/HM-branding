'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { ICity } from '../types';

interface ChinaInteractiveMapProps {
  cities: ICity[];
  locale: 'ar' | 'en';
}

export function ChinaInteractiveMap({ cities, locale }: ChinaInteractiveMapProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const [activeSlug, setActiveSlug] = useState<string | null>('guangzhou');

  const activeCity = cities.find(c => c.slug === activeSlug) || cities[0];

  // Map coordinates relative to 800x600 SVG viewport
  const cityCoordinatesMap: Record<string, { x: number; y: number }> = {
    guangzhou: { x: 550, y: 480 },
    shenzhen: { x: 575, y: 495 },
    foshan: { x: 535, y: 490 },
    dongguan: { x: 560, y: 485 },
    yiwu: { x: 670, y: 350 },
    ningbo: { x: 710, y: 340 }
  };

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
            <MapPin className="w-6 h-6 text-amber-400" />
            {isAr ? 'خريطة مراكز التجارة والتصنيع في الصين' : 'China Commercial Trade Hubs Map'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {isAr ? 'انقر على أي مدينة للتفاعل مع أهم الأسواق والمناطق الصناعية' : 'Click on any city marker to preview wholesale markets & industrial specs'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Interactive Map Area */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] bg-slate-950/80 rounded-2xl border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full text-slate-700 select-none"
            aria-label="China Map"
          >
            {/* China Outline Representation */}
            <path
              d="M 150 180 Q 250 120 400 100 Q 550 80 650 140 Q 750 200 720 350 Q 680 480 550 520 Q 450 540 350 480 Q 220 450 150 350 Z"
              fill="currentColor"
              className="text-slate-800/60 stroke-slate-700/80 stroke-2"
            />
            {/* Coastal & Regional Belts */}
            <circle cx="560" cy="485" r="70" className="fill-amber-500/10 stroke-amber-500/30 stroke-1 stroke-dasharray-2 animate-pulse" />
            <text x="490" y="555" className="text-[14px] fill-amber-400 font-semibold font-sans">
              {isAr ? 'حوض دلتا اللؤلؤ (GBA)' : 'Pearl River Delta'}
            </text>

            <circle cx="680" cy="345" r="50" className="fill-blue-500/10 stroke-blue-500/30 stroke-1" />
            <text x="630" y="300" className="text-[14px] fill-blue-400 font-semibold font-sans">
              {isAr ? 'دلتا نهر يانغتسي' : 'Yangtze River Delta'}
            </text>

            {/* City Pins */}
            {cities.map(city => {
              const coords = cityCoordinatesMap[city.slug] || { x: 400, y: 300 };
              const isSelected = activeSlug === city.slug;

              return (
                <g
                  key={city.id}
                  onClick={() => setActiveSlug(city.slug)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={coords.x}
                    cy={coords.y}
                    r={isSelected ? 10 : 7}
                    className={`transition-all duration-300 ${
                      isSelected
                        ? 'fill-amber-400 stroke-white stroke-2 shadow-lg scale-125'
                        : 'fill-slate-300 hover:fill-amber-300 stroke-slate-900 stroke-1'
                    }`}
                  />
                  <text
                    x={coords.x + 12}
                    y={coords.y + 4}
                    className={`text-[12px] font-bold font-sans transition-all ${
                      isSelected ? 'fill-amber-300 font-extrabold text-[14px]' : 'fill-slate-300 group-hover:fill-white'
                    }`}
                  >
                    {city.name[locale]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected City Preview Card */}
        {activeCity && (
          <div className="lg:col-span-5 bg-slate-950/90 rounded-2xl border border-amber-500/30 p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {activeCity.province[locale]} • {activeCity.region}
                </span>
                <span className="text-xs font-bold text-amber-400">
                  Score: {activeCity.commercialImportanceScore}/100
                </span>
              </div>

              <h4 className="text-2xl font-extrabold text-white mb-1">
                {activeCity.name[locale]} <span className="text-sm font-normal text-slate-400">({activeCity.name.zh})</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                {activeCity.description[locale]}
              </p>

              <div className="space-y-2 py-3 border-y border-slate-800 text-xs">
                <div>
                  <strong className="text-amber-400 block mb-1">{isAr ? 'أهم المنتجات:' : 'Primary Products:'}</strong>
                  <div className="flex flex-wrap gap-1">
                    {activeCity.primaryProducts[locale]?.map((p, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/china-cities/${activeCity.slug}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all shadow-lg"
            >
              <span>{isAr ? `تصفح دليل ${activeCity.name[locale]} بالكامل` : `View Full ${activeCity.name[locale]} Guide`}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
