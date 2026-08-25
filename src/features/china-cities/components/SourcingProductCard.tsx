'use client';

import React from 'react';
import { PackageCheck, Factory, CheckCircle2 } from 'lucide-react';
import { ISourcingProduct } from '../types';

interface SourcingProductCardProps {
  product: ISourcingProduct;
  locale: 'ar' | 'en';
}

export function SourcingProductCard({ product, locale }: SourcingProductCardProps) {
  const isAr = locale === 'ar';

  return (
    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-amber-400" />
            {product.productName[locale]}
          </h4>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
            {product.industryCategory}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          <strong className="text-amber-400 font-semibold">{isAr ? 'لماذا هذه المدينة؟ ' : 'Why this city? '}</strong>
          {product.whyThisCity[locale]}
        </p>
      </div>

      <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Factory className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>{isAr ? 'منطقة التصنيع الرئيسية:' : 'Main Zone:'} <strong className="text-slate-200">{product.mainManufacturingArea[locale]}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{isAr ? 'وفرة الجملة:' : 'Wholesale Availability:'} <strong className="text-emerald-300">{product.wholesaleAvailability}</strong></span>
        </div>
      </div>
    </div>
  );
}
