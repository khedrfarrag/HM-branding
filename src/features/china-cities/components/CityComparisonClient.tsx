'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scale, ArrowRight, ArrowLeft } from 'lucide-react';
import { ICity } from '../types';

interface CityComparisonClientProps {
  cities: ICity[];
  dict?: Record<string, unknown>;
  locale: 'ar' | 'en';
}

export function CityComparisonClient({ cities, locale }: CityComparisonClientProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [city1Slug, setCity1Slug] = useState<string>('guangzhou');
  const [city2Slug, setCity2Slug] = useState<string>('shenzhen');

  const city1 = cities.find(c => c.slug === city1Slug) || cities[0];
  const city2 = cities.find(c => c.slug === city2Slug) || cities[1] || cities[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 pt-28">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href={`/${locale}`} className="hover:text-white transition-colors">
            {isAr ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/china-cities`} className="hover:text-white transition-colors">
            {isAr ? 'دليل مدن الصين' : 'China Cities Guide'}
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{isAr ? 'مقارنة المدن' : 'Compare Cities'}</span>
        </nav>

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold">
            <Scale className="w-4 h-4" />
            <span>{isAr ? 'أداة التحليل والمقارنة التجارية' : 'Commercial City Comparison Matrix'}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white">
            {isAr ? 'مقارنة المدن التجارية الصينية' : 'Compare Chinese Commercial Cities'}
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {isAr ? 'اختر مدينتين للمقارنة المباشرة بين الأسواق، التخصصات الصناعية، الموانئ، والتناسب التجاري.' : 'Select two cities for direct side-by-side comparison across wholesale markets, industries, and logistics.'}
          </p>
        </div>

        {/* City Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl">
          {/* City 1 Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-400 block">
              {isAr ? 'المدينة الأولى:' : 'First City:'}
            </label>
            <select
              value={city1Slug}
              onChange={(e) => setCity1Slug(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {cities.map(c => (
                <option key={c.id} value={c.slug} disabled={c.slug === city2Slug}>
                  {c.name[locale]} ({c.name.zh})
                </option>
              ))}
            </select>
          </div>

          {/* City 2 Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-400 block">
              {isAr ? 'المدينة الثانية:' : 'Second City:'}
            </label>
            <select
              value={city2Slug}
              onChange={(e) => setCity2Slug(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {cities.map(c => (
                <option key={c.id} value={c.slug} disabled={c.slug === city1Slug}>
                  {c.name[locale]} ({c.name.zh})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl">
          <table className="w-full text-left rtl:text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 md:p-6 text-xs md:text-sm font-bold text-amber-400 w-1/3">
                  {isAr ? 'المعيار التجاري' : 'Comparison Criteria'}
                </th>
                <th className="p-4 md:p-6 text-sm md:text-base font-bold text-white w-1/3 border-x border-slate-800">
                  {city1.name[locale]}
                </th>
                <th className="p-4 md:p-6 text-sm md:text-base font-bold text-white w-1/3">
                  {city2.name[locale]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs md:text-sm">
              {/* Province & Region */}
              <tr>
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'المقاطعة والإقليم' : 'Province & Region'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-slate-200">
                  {city1.province[locale]} ({city1.region})
                </td>
                <td className="p-4 md:p-6 text-slate-200">
                  {city2.province[locale]} ({city2.region})
                </td>
              </tr>

              {/* Trade Score */}
              <tr className="bg-slate-950/30">
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'مؤشر الأهمية التجارية' : 'Trade Importance Score'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-amber-400 font-bold">
                  {city1.commercialImportanceScore} / 100
                </td>
                <td className="p-4 md:p-6 text-amber-400 font-bold">
                  {city2.commercialImportanceScore} / 100
                </td>
              </tr>

              {/* Core Industries */}
              <tr>
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'أهم التخصصات والصناعات' : 'Core Industries'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-slate-200">
                  {city1.primaryProducts[locale]?.join(', ')}
                </td>
                <td className="p-4 md:p-6 text-slate-200">
                  {city2.primaryProducts[locale]?.join(', ')}
                </td>
              </tr>

              {/* Wholesale Markets Count */}
              <tr className="bg-slate-950/30">
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'أسواق الجملة الرئيسية' : 'Wholesale Markets Count'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-slate-200 font-semibold">
                  {city1.wholesaleMarkets?.length || 0} {isAr ? 'أسواق موثقة' : 'Markets'}
                </td>
                <td className="p-4 md:p-6 text-slate-200 font-semibold">
                  {city2.wholesaleMarkets?.length || 0} {isAr ? 'أسواق موثقة' : 'Markets'}
                </td>
              </tr>

              {/* Ports & Logistics */}
              <tr>
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'الموانئ البحرية المباشرة' : 'Sea Ports Access'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-slate-200">
                  {city1.logistics.seaPorts.join(', ')}
                </td>
                <td className="p-4 md:p-6 text-slate-200">
                  {city2.logistics.seaPorts.join(', ')}
                </td>
              </tr>

              {/* Airports */}
              <tr className="bg-slate-950/30">
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'المطارات المباشرة والقريبة' : 'Airports Gateway'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-slate-200">
                  {city1.logistics.nearestAirports.join(', ')}
                </td>
                <td className="p-4 md:p-6 text-slate-200">
                  {city2.logistics.nearestAirports.join(', ')}
                </td>
              </tr>

              {/* Best For Profiles */}
              <tr>
                <td className="p-4 md:p-6 font-semibold text-slate-300">
                  {isAr ? 'أفضل فئات التجار والمستوردين' : 'Best Suited For'}
                </td>
                <td className="p-4 md:p-6 border-x border-slate-800 text-slate-200">
                  {city1.bestFor.join(', ')}
                </td>
                <td className="p-4 md:p-6 text-slate-200">
                  {city2.bestFor.join(', ')}
                </td>
              </tr>

              {/* Action Buttons */}
              <tr className="bg-slate-950">
                <td className="p-4 md:p-6"></td>
                <td className="p-4 md:p-6 border-x border-slate-800">
                  <Link
                    href={`/${locale}/china-cities/${city1.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
                  >
                    <span>{isAr ? `دليل ${city1.name[locale]}` : `Explore ${city1.name[locale]}`}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </td>
                <td className="p-4 md:p-6">
                  <Link
                    href={`/${locale}/china-cities/${city2.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
                  >
                    <span>{isAr ? `دليل ${city2.name[locale]}` : `Explore ${city2.name[locale]}`}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
