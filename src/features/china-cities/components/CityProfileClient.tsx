'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, Store, Building2, Factory, Plane, Anchor, Train, 
  Calendar, Info, ArrowLeft, ArrowRight, ShieldCheck, 
  Sparkles, CheckCircle2, UserCheck, Layers, ExternalLink, Image as ImageIcon, Clock
} from 'lucide-react';
import { ICity } from '../types';
import { MarketCard } from './MarketCard';
import { SourcingProductCard } from './SourcingProductCard';

interface CityProfileClientProps {
  city: ICity;
  relatedCities: ICity[];
  dict?: Record<string, unknown>;
  locale: 'ar' | 'en';
}

export function CityProfileClient({ city, relatedCities, dict, locale }: CityProfileClientProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const t = (dict?.chinaCities as Record<string, string> | undefined) || {};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24">
      {/* City Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={city.skylineImage || city.heroImage}
            alt={city.name[locale]}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/china-cities`} className="hover:text-white transition-colors">
              {isAr ? 'دليل مدن الصين' : 'China Cities Guide'}
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">{city.name[locale]}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {city.province[locale]} • {city.region}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.commercialImportance || 'Trade Score'}: {city.commercialImportanceScore}/100
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  {city.name[locale]}
                </h1>
                <span className="text-xl md:text-2xl font-bold text-slate-400 font-mono">
                  ({city.name.zh})
                </span>
              </div>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
                {city.description[locale]}
              </p>

              {/* Primary Product Badges with Deep Link to Reverse Lookup */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400 font-medium">{isAr ? 'أهم التخصصات:' : 'Core Specialties:'}</span>
                {city.primaryProducts[locale]?.map((prod, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}/china-cities/products`}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-700 transition-all"
                  >
                    {prod}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Quick Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#markets"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs text-center transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4" />
                <span>{isAr ? 'تصفح أسواق الجملة' : 'Browse Wholesale Markets'}</span>
              </a>

              <a
                href="#business-guide"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center transition-all border border-slate-700 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'دليل المسافر التجاري' : 'Business Travel Guide'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-12 space-y-16">
        {/* "Best For" Target Buyers */}
        {city.bestFor && city.bestFor.length > 0 && (
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>{t.bestFor || (isAr ? 'هذه المدينة مناسبة لـ:' : 'Best For:')}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.bestFor.map((profile, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {profile}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Commercial Streets & Districts (US2 / Section §6) */}
        {city.districts && city.districts.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Building2 className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                {isAr ? 'أهم المناطق والشوارع التجارية' : 'Prominent Commercial Districts & Streets'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.districts.map(dist => (
                <div key={dist.id} className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">{dist.name[locale]}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {dist.tradeFocus}
                    </span>
                  </div>
                  <p className="text-xs text-amber-300 font-medium">{dist.activityType[locale]}</p>
                  
                  <div className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-800">
                    <div>{isAr ? 'أهم المنتجات:' : 'Main Products:'} <strong className="text-slate-200">{dist.mainProducts.join(', ')}</strong></div>
                    {dist.nearestMetro && (
                      <div className="flex items-center gap-1 text-blue-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{dist.nearestMetro}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Wholesale Markets Directory */}
        <section id="markets" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <Store className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                {t.wholesaleMarkets || (isAr ? 'أهم أسواق الجملة والمعارض' : 'Wholesale Markets Directory')}
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {city.wholesaleMarkets?.length || 0} {isAr ? 'سوق موثق' : 'Verified Markets'}
            </span>
          </div>

          {city.wholesaleMarkets && city.wholesaleMarkets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.wholesaleMarkets.map(market => (
                <MarketCard key={market.id} market={market} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.informationComingSoon || 'Information coming soon for wholesale markets.'}</span>
            </div>
          )}
        </section>

        {/* Manufacturing Zones & Clusters */}
        {city.industrialZones && city.industrialZones.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Factory className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                {t.industrialZones || (isAr ? 'المناطق والتجمعات الصناعية' : 'Industrial Zones & Factory Clusters')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.industrialZones.map(zone => (
                <div key={zone.id} className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">{zone.name[locale]}</h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {zone.specializationLevel} Specialization
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{zone.clusterSpecialization[locale]}</p>
                  <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                    {isAr ? 'المنتجات الرئيسية:' : 'Key Products:'} <strong className="text-slate-200">{zone.keyProducts.join(', ')}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Trade Fairs Section (US3 / Section §21) */}
        {city.tradeFairs && city.tradeFairs.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Calendar className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                {isAr ? 'المعارض التجارية المهمة' : 'Key Trade Fairs & Exhibitions'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.tradeFairs.map(fair => (
                <div key={fair.id} className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {fair.industry}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-2">{fair.name[locale]}</h4>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{fair.venue[locale]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{fair.occurrence[locale]}</span>
                    </div>
                  </div>

                  {fair.officialWebsite && (
                    <a
                      href={fair.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-2"
                    >
                      <span>{isAr ? 'الموقع الرسمي للمعرض' : 'Official Trade Fair Website'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                    ⚠️ {isAr ? 'بيانات المعارض قابلة للتغيير، يرجى التحقق من الموقع الرسمي قبل السفر.' : 'Fair dates may vary. Always verify on official website before travel.'}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* "What to Import" Sourcing Products Showcase */}
        {city.sourcingProducts && city.sourcingProducts.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                {t.whatToImport || (isAr ? `ماذا يمكنك أن تستورد من ${city.name[locale]}؟` : `What to import from ${city.name[locale]}?`)}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.sourcingProducts.map(prod => (
                <SourcingProductCard key={prod.id} product={prod} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* Logistics & Transportation Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <Anchor className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">
              {t.logisticsHubs || (isAr ? 'دليل الشحن واللوجستيات والمواصلات' : 'Shipping, Ports & Transport Logistics')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sea Ports */}
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Anchor className="w-4 h-4" />
                <span>{isAr ? 'الموانئ البحرية القريبة' : 'Nearest Sea Ports'}</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {city.logistics.seaPorts.map((port, idx) => (
                  <li key={idx}>{port}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                {city.logistics.seaFreightSuitability[locale]}
              </p>
            </div>

            {/* Airports */}
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <Plane className="w-4 h-4" />
                <span>{isAr ? 'المطارات القريبة' : 'Nearest Airports'}</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {city.logistics.nearestAirports.map((ap, idx) => (
                  <li key={idx}>{ap}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                {city.logistics.airFreightSuitability[locale]}
              </p>
            </div>

            {/* High-Speed Rail */}
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Train className="w-4 h-4" />
                <span>{isAr ? 'محطات القطار السريع' : 'High Speed Rail'}</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {city.logistics.highSpeedRailwayStations.map((st, idx) => (
                  <li key={idx}>{st}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Business Traveler Guide */}
        <section id="business-guide" className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <UserCheck className="w-6 h-6 text-amber-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {t.businessTravelerGuide || (isAr ? `دليل المسافر التجاري إلى ${city.name[locale]}` : `Business Traveler Guide to ${city.name[locale]}`)}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Best Visit Months */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <Calendar className="w-4 h-4" />
                <span>{isAr ? 'أفضل أشهر الزيارة:' : 'Best Visit Months:'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {city.businessTravelGuide.bestVisitMonths.map((m, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 font-semibold">
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 pt-1">{city.businessTravelGuide.weatherSummary[locale]}</p>
            </div>

            {/* Recommended Stay Areas */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-blue-400">
                <MapPin className="w-4 h-4" />
                <span>{isAr ? 'أفضل مناطق الإقامة والتنقل:' : 'Recommended Stay Areas:'}</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {city.businessTravelGuide.recommendedStayAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{area[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Hotels Subsection */}
          {city.businessTravelGuide.recommendedHotels && city.businessTravelGuide.recommendedHotels.length > 0 && (
            <div className="space-y-4 border-t border-slate-800/80 pt-6">
              <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{isAr ? 'الفنادق الموصى بها لرجال الأعمال' : 'Recommended Business Hotels'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {city.businessTravelGuide.recommendedHotels.map(hotel => (
                  <div key={hotel.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">{hotel.name[locale]}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {hotel.category[locale]}
                      </span>
                    </div>
                    <p className="text-slate-400"><strong className="text-slate-300">{isAr ? 'المنطقة:' : 'Area:'}</strong> {hotel.area[locale]}</p>
                    <p className="text-slate-300 text-[11px] bg-slate-950/60 p-2 rounded border border-slate-800/60">
                      💡 {hotel.highlights[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dining & Halal Restaurants Subsection */}
          {city.businessTravelGuide.recommendedRestaurants && city.businessTravelGuide.recommendedRestaurants.length > 0 && (
            <div className="space-y-4 border-t border-slate-800/80 pt-6">
              <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? 'أهم المطاعم والخيارات الحلال والعربية' : 'Top Dining & Halal Options'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {city.businessTravelGuide.recommendedRestaurants.map(rest => (
                  <div key={rest.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">{rest.name[locale]}</h4>
                      {rest.isHalal && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {isAr ? 'حلال 100%' : 'Halal Verified'}
                        </span>
                      )}
                    </div>
                    <p className="text-amber-300 font-medium">{rest.cuisineType[locale]}</p>
                    <p className="text-slate-400 text-[11px]">{rest.address[locale]}</p>
                    <p className="text-slate-300 text-[11px] pt-1 border-t border-slate-800">
                      👍 {rest.recommendedFor[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tourist Attractions Subsection */}
          {city.businessTravelGuide.touristAttractions && city.businessTravelGuide.touristAttractions.length > 0 && (
            <div className="space-y-4 border-t border-slate-800/80 pt-6">
              <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{isAr ? 'أبرز المعالم السياحية والثقافية' : 'Top Tourist Attractions & Landmarks'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {city.businessTravelGuide.touristAttractions.map(attraction => (
                  <div key={attraction.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">{attraction.name[locale]}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">
                        {attraction.category[locale]}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{attraction.description[locale]}</p>
                    {attraction.nearestMetro && (
                      <p className="text-blue-400 text-[10px] font-medium">🚇 {attraction.nearestMetro}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Essential Traveler Services Subsection */}
          {city.businessTravelGuide.essentialServices && city.businessTravelGuide.essentialServices.length > 0 && (
            <div className="space-y-4 border-t border-slate-800/80 pt-6">
              <h3 className="text-base font-bold text-blue-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{isAr ? 'خدمات المسافر الهامة (شرائح SIM، صرافة، مستشفيات)' : 'Essential Services (SIM, Forex, Hospitals)'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {city.businessTravelGuide.essentialServices.map(srv => (
                  <div key={srv.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {srv.serviceType[locale]}
                    </span>
                    <h4 className="font-bold text-white text-sm mt-1">{srv.title[locale]}</h4>
                    <p className="text-slate-300 text-[11px]">{srv.description[locale]}</p>
                    {srv.details && (
                      <p className="text-slate-400 text-[10px] pt-1 border-t border-slate-800">{srv.details[locale]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Multi-Image Gallery Section (US6 / Section §5) */}
        {city.gallery && city.gallery.length >= 2 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <ImageIcon className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                {isAr ? `معرض صور ${city.name[locale]}` : `${city.name[locale]} Media Gallery`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.gallery.map((imgUrl, idx) => (
                <div key={idx} className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-slate-800 group">
                  <Image
                    src={imgUrl}
                    alt={`${city.name[locale]} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                    <span className="text-xs text-white font-medium">{city.name[locale]} — {idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Cities Recommendations */}
        {relatedCities && relatedCities.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">
                {t.relatedCities || (isAr ? 'مدن تجارية ذات صلة قد تهمك' : 'Related Commercial Cities You May Interest')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedCities.map(rc => (
                <Link
                  key={rc.id}
                  href={`/${locale}/china-cities/${rc.slug}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{rc.name[locale]}</h4>
                    <span className="text-[11px] text-slate-400">{rc.province[locale]}</span>
                  </div>
                  <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer with lastUpdated display (T128) */}
        <footer className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400/70" />
            <span>{isAr ? 'آخر تحديث لبيانات المدينة:' : 'Last Updated:'} {city.lastUpdated}</span>
          </div>
          <span>China Cities Commercial Guide</span>
        </footer>
      </div>
    </div>
  );
}
