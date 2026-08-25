'use client';

import React from 'react';
import { Store, MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { IWholesaleMarket } from '../types';

interface MarketCardProps {
  market: IWholesaleMarket;
  locale: 'ar' | 'en';
}

export function MarketCard({ market, locale }: MarketCardProps) {
  const isAr = locale === 'ar';

  return (
    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-3">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Store className="w-4 h-4 text-amber-400 shrink-0" />
              {market.name[locale] || market.name.en}
            </h4>
            <span className="text-xs text-slate-400 font-mono">({market.name.zh})</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 shrink-0">
            {market.category}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          {market.description[locale]}
        </p>
      </div>

      <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-start gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <span>{market.address[locale]}</span>
        </div>

        {market.nearestMetro && (
          <div className="flex items-center gap-1.5 text-slate-300">
            <Navigation className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>{isAr ? 'أقرب محطة مترو:' : 'Nearest Metro:'} <strong className="text-white">{market.nearestMetro}</strong></span>
          </div>
        )}

        {market.operatingHours && (
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{isAr ? 'ساعات العمل:' : 'Hours:'} {market.operatingHours}</span>
          </div>
        )}

        {market.moqLevel && (
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>{isAr ? 'مستوى MOQ:' : 'MOQ Level:'} <strong className="text-amber-300">{market.moqLevel}</strong></span>
          </div>
        )}
      </div>
    </div>
  );
}
