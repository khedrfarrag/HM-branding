'use client';

import React, { useState } from 'react';
import { Locale } from '@/domains/shared/value-objects';
import { MapPin, Copy, Check, Navigation, ExternalLink } from 'lucide-react';

interface GPSNavigationCardProps {
  locale: Locale;
  title: string;
  addressAr: string;
  addressEn: string;
  addressZh: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export default function GPSNavigationCard({
  locale,
  title,
  addressAr,
  addressEn,
  addressZh,
  coordinates,
}: GPSNavigationCardProps) {
  const isAr = locale === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopyChineseAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressZh);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`;
  const baiduMapsUrl = `https://api.map.baidu.com/marker?location=${coordinates.latitude},${coordinates.longitude}&title=${encodeURIComponent(
    title
  )}&content=${encodeURIComponent(addressZh)}&output=html`;
  const appleMapsUrl = `https://maps.apple.com/?q=${coordinates.latitude},${coordinates.longitude}`;

  return (
    <div
      className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-6 backdrop-blur-md"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">
              {isAr ? 'الموقع والملاحة الجغرافية (GPS)' : 'GPS & Navigation Location'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr ? 'إحداثيات دقيقة وتوجيه فوري للخرائط' : 'Accurate coordinates & instant map routing'}
            </p>
          </div>
        </div>

        {/* GPS Coordinates Badge */}
        <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700/80 font-mono text-[11px] text-amber-400">
          <span>{coordinates.latitude.toFixed(4)}°N</span>
          <span>,</span>
          <span>{coordinates.longitude.toFixed(4)}°E</span>
        </div>
      </div>

      {/* Address Boxes */}
      <div className="space-y-3">
        {/* Localized Address */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/70">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span className="text-xs text-slate-300 leading-relaxed">
            {isAr ? addressAr : addressEn}
          </span>
        </div>

        {/* Native Chinese Address with One-Click Copy */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
              {isAr ? 'العنوان باللغة الصينية لسائقي التاكسي وديدي (Didi)' : 'Native Chinese Address for Taxi / Didi'}
            </span>
            <button
              type="button"
              onClick={handleCopyChineseAddress}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-950" />
                  <span>{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-950" />
                  <span>{isAr ? 'نسخ العنوان' : 'Copy Address'}</span>
                </>
              )}
            </button>
          </div>
          <p className="text-sm font-bold font-mono text-white select-all leading-relaxed" dir="ltr">
            {addressZh}
          </p>
        </div>
      </div>

      {/* Navigation External Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* Google Maps Button */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs border border-slate-700/60 transition-all group"
        >
          <span>{isAr ? 'خرائط Google Maps' : 'Google Maps'}</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:text-amber-400 transition-colors" />
        </a>

        {/* Baidu Maps Button (Native in China) */}
        <a
          href={baiduMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md shadow-amber-500/10"
        >
          <span>{isAr ? 'خرائط بايدو (داخل الصين)' : 'Baidu Maps (China)'}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Apple Maps Button */}
        <a
          href={appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs border border-slate-700/60 transition-all group"
        >
          <span>{isAr ? 'خرائط Apple Maps' : 'Apple Maps'}</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:text-amber-400 transition-colors" />
        </a>
      </div>
    </div>
  );
}
