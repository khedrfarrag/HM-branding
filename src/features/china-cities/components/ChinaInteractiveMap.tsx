'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ArrowLeft, Layers, Compass, Building2, Sparkles } from 'lucide-react';
import { ICity } from '../types';
import {
  CHINA_CITY_MAP_COORDINATES,
  IndustrialRegionKey
} from '../data/map/chinaMapCoordinates';
import {
  CHINA_MAP_MAINLAND_PATH,
  HAINAN_ISLAND_PATH,
  TAIWAN_ISLAND_PATH,
  YANGTZE_RIVER_PATH,
  YELLOW_RIVER_PATH
} from '../data/map/chinaMapPaths';
import { INDUSTRIAL_BELTS } from '../data/map/industrialBelts';

interface ChinaInteractiveMapProps {
  cities: ICity[];
  locale: 'ar' | 'en';
}

export function ChinaInteractiveMap({ cities, locale }: ChinaInteractiveMapProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Active city & region states
  const [activeSlug, setActiveSlug] = useState<string>('guangzhou');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<IndustrialRegionKey>('all');

  // Currently selected active city
  const activeCity = useMemo(() => {
    return cities.find(c => c.slug === activeSlug) || cities[0];
  }, [cities, activeSlug]);

  // Current hovered city
  const hoveredCity = useMemo(() => {
    if (!hoveredSlug) return null;
    return cities.find(c => c.slug === hoveredSlug) || null;
  }, [cities, hoveredSlug]);

  // Active industrial belt configuration
  const currentBelt = useMemo(() => {
    return INDUSTRIAL_BELTS.find(b => b.id === activeRegion) || INDUSTRIAL_BELTS[0];
  }, [activeRegion]);

  // Check if a city belongs to the active region filter
  const isCityInActiveRegion = (citySlug: string) => {
    if (activeRegion === 'all') return true;
    return currentBelt.citySlugs.includes(citySlug);
  };

  return (
    <div className="rounded-3xl bg-slate-950 border border-slate-800/80 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>{isAr ? 'الخريطة التفاعلية الجغرافية 2.0' : 'Interactive Trade Hubs Map 2.0'}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2.5">
            <MapPin className="w-7 h-7 text-amber-400 shrink-0" />
            {isAr ? 'خريطة مراكز التجارة والتصنيع في الصين' : 'China Commercial & Manufacturing Hubs Map'}
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1.5 max-w-2xl">
            {isAr
              ? 'استكشف جغرافية الصين الصناعية عبر 34 عاصمة تجارية متخصصة. انقر على أي منطقة صناعية لتصفية المراكز أو انقر على المدينة لمعاينة أسواقها.'
              : 'Explore China industrial geography across 34 specialized commercial hubs. Filter by regional manufacturing belts or click any city pin to preview.'}
          </p>
        </div>

        {/* Total Hubs Badge */}
        <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-2xl shrink-0 self-start lg:self-center">
          <Building2 className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-xs text-slate-400">{isAr ? 'المدن الموثقة' : 'Verified Hubs'}</div>
            <div className="text-lg font-black text-white">
              {cities.length} <span className="text-xs text-amber-400 font-bold">{isAr ? 'مدينة صناعية' : 'Capitals'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Belts Filter Pills */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2.5 text-xs text-slate-400 font-semibold">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>{isAr ? 'تصفية حسب الحوض الصناعي الرئيسي:' : 'Filter by Major Industrial Belt:'}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {INDUSTRIAL_BELTS.map(belt => {
            const isSelected = activeRegion === belt.id;
            return (
              <button
                key={belt.id}
                onClick={() => {
                  setActiveRegion(belt.id);
                  // Automatically focus on the first city in the belt if current city is not in it
                  if (belt.id !== 'all' && !belt.citySlugs.includes(activeSlug) && belt.citySlugs.length > 0) {
                    setActiveSlug(belt.citySlugs[0]);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white'
                }`}
              >
                <span>{belt.name[locale]}</span>
                {belt.id !== 'all' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {belt.citySlugs.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: SVG Map on Left/Top + Active City Card on Right/Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SVG Map Container */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] bg-slate-950/90 rounded-2xl border border-slate-800/90 p-3 md:p-5 flex items-center justify-center overflow-hidden shadow-inner">
          {/* Active Belt Description Banner */}
          <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between bg-slate-900/85 backdrop-blur-md border border-slate-800/80 px-3 py-2 rounded-xl text-[11px] text-slate-300">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {currentBelt.name[locale]}
            </span>
            <span className="text-slate-400 hidden sm:inline">{currentBelt.description[locale]}</span>
          </div>

          <svg
            viewBox="0 0 900 680"
            className="w-full h-full select-none"
            aria-label="Interactive Map of China Commercial Cities"
          >
            <defs>
              {/* Radial gradient for selected city pulse */}
              <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>

              {/* Grid Pattern */}
              <pattern id="grid" width="45" height="45" patternUnits="userSpaceOnUse">
                <path d="M 45 0 L 0 0 0 45" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Subtle Coordinate Grid */}
            <rect width="900" height="680" fill="url(#grid)" />

            {/* China Geographic Mainland Boundary */}
            <path
              d={CHINA_MAP_MAINLAND_PATH}
              className="fill-slate-900/90 stroke-slate-700/70 stroke-[2] transition-colors duration-300 hover:stroke-slate-600"
            />

            {/* Hainan Island */}
            <path
              d={HAINAN_ISLAND_PATH}
              className="fill-slate-900/90 stroke-slate-700/70 stroke-[1.5]"
            />

            {/* Taiwan Island */}
            <path
              d={TAIWAN_ISLAND_PATH}
              className="fill-slate-900/80 stroke-slate-800 stroke-[1.5]"
            />

            {/* Yangtze River Line Accent */}
            <path
              d={YANGTZE_RIVER_PATH}
              fill="none"
              className="stroke-cyan-500/25 stroke-[1.5] stroke-dasharray-4 pointer-events-none"
            />

            {/* Yellow River Line Accent */}
            <path
              d={YELLOW_RIVER_PATH}
              fill="none"
              className="stroke-amber-500/20 stroke-[1.5] stroke-dasharray-4 pointer-events-none"
            />

            {/* Watermark Label for Geographical Context */}
            <text x="760" y="470" className="text-[12px] fill-slate-700/60 font-mono select-none pointer-events-none">
              EAST CHINA SEA
            </text>
            <text x="630" y="630" className="text-[12px] fill-slate-700/60 font-mono select-none pointer-events-none">
              SOUTH CHINA SEA
            </text>

            {/* City Markers */}
            {cities.map(city => {
              const coords = CHINA_CITY_MAP_COORDINATES[city.slug] || { x: 450, y: 340, regionKey: 'central' };
              const isSelected = activeSlug === city.slug;
              const isHovered = hoveredSlug === city.slug;
              const isInBelt = isCityInActiveRegion(city.slug);

              // Dim non-selected belt markers if a specific belt is active
              const opacityClass = isInBelt ? 'opacity-100' : 'opacity-25 hover:opacity-80';

              return (
                <g
                  key={city.id}
                  onClick={() => setActiveSlug(city.slug)}
                  onMouseEnter={() => setHoveredSlug(city.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className={`cursor-pointer transition-opacity duration-300 ${opacityClass}`}
                >
                  {/* Selected / Hover Pulsing Glow */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r={isSelected ? 22 : 16}
                      fill="url(#pinGlow)"
                      className="animate-pulse pointer-events-none"
                    />
                  )}

                  {/* Outer Ring */}
                  <circle
                    cx={coords.x}
                    cy={coords.y}
                    r={isSelected ? 9 : 5}
                    className={`transition-all duration-200 ${
                      isSelected
                        ? 'fill-amber-400 stroke-white stroke-[2.5]'
                        : isHovered
                        ? 'fill-amber-300 stroke-slate-900 stroke-[1.5]'
                        : 'fill-slate-300 stroke-slate-950 stroke-[1]'
                    }`}
                  />

                  {/* Inner Pin Center */}
                  {isSelected && (
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r={3}
                      className="fill-slate-950"
                    />
                  )}

                  {/* Landmark Anchor Label (Only shown for prominent hub cities to prevent clutter) */}
                  {coords.isAnchorCity && (
                    <text
                      x={coords.x + 11}
                      y={coords.y + 4}
                      className={`text-[11px] font-bold font-sans select-none pointer-events-none transition-colors ${
                        isSelected
                          ? 'fill-amber-300 font-extrabold text-[13px]'
                          : isHovered
                          ? 'fill-white font-bold'
                          : 'fill-slate-400/80'
                      }`}
                    >
                      {city.name[locale]?.split(' ')[0]}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Dynamic Floating Tooltip on Hover */}
            {hoveredCity && (
              <g
                transform={`translate(${
                  (CHINA_CITY_MAP_COORDINATES[hoveredCity.slug]?.x || 450) + 14
                }, ${(CHINA_CITY_MAP_COORDINATES[hoveredCity.slug]?.y || 340) - 26})`}
                className="pointer-events-none transition-all duration-150"
              >
                <rect
                  x="0"
                  y="0"
                  width="160"
                  height="44"
                  rx="8"
                  className="fill-slate-900/95 stroke-amber-500/50 stroke-[1] shadow-2xl"
                />
                <text x="10" y="18" className="text-[11px] font-bold fill-white">
                  {hoveredCity.name[locale]?.split(' ')[0]} ({hoveredCity.name.zh})
                </text>
                <text x="10" y="34" className="text-[9px] fill-amber-400 font-medium">
                  {hoveredCity.primaryProducts[locale]?.[0] || hoveredCity.province[locale]}
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Selected City Preview Card */}
        {activeCity && (
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/95 to-slate-950/95 rounded-2xl border border-amber-500/30 p-6 flex flex-col justify-between space-y-4 shadow-2xl relative">
            <div>
              {/* Province & Region & Score Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {activeCity.province[locale]} • {activeCity.region}
                </span>
                <span className="text-xs font-bold text-amber-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                  Score: {activeCity.commercialImportanceScore}/100
                </span>
              </div>

              {/* City Title */}
              <h4 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                {activeCity.name[locale]}{' '}
                <span className="text-sm font-normal text-amber-400/90 font-mono">({activeCity.name.zh})</span>
              </h4>

              {/* City Description */}
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4 mt-2">
                {activeCity.description[locale]}
              </p>

              {/* Key Industries / Primary Products */}
              <div className="space-y-2 py-3 border-y border-slate-800/80 text-xs">
                <div>
                  <strong className="text-amber-400 block mb-1.5 font-bold">
                    {isAr ? 'أهم التخصصات والمنتجات التصنيعية:' : 'Key Sourcing Products:'}
                  </strong>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCity.primaryProducts[locale]?.slice(0, 5).map((prod, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/60 text-[11px]"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Wholesale Markets & Districts Summary */}
                <div className="pt-2 flex items-center justify-between text-slate-400 text-[11px]">
                  <span>
                    {isAr
                      ? `${activeCity.wholesaleMarkets?.length || 0} أسواق جملة رئيسية`
                      : `${activeCity.wholesaleMarkets?.length || 0} Wholesale Markets`}
                  </span>
                  <span>
                    {isAr
                      ? `${activeCity.districts?.length || 0} مقاطعات صناعية`
                      : `${activeCity.districts?.length || 0} Industrial Districts`}
                  </span>
                </div>
              </div>
            </div>

            {/* Full Guide CTA Button */}
            <Link
              href={`/${locale}/china-cities/${activeCity.slug}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs transition-all shadow-lg hover:shadow-amber-500/25 active:scale-98"
            >
              <span>{isAr ? `تصفح دليل ${activeCity.name[locale].split(' ')[0]} بالكامل` : `Explore Full ${activeCity.name[locale]} Guide`}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
