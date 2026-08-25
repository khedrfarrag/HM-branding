import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles, Layers, Building2 } from 'lucide-react';
import { Locale } from '@/features/i18n';
import { CHINA_INDUSTRIES_DATA } from '@/features/china-cities/data/industries';
import { CHINA_CITIES_DATA } from '@/features/china-cities/data/cities';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'دليل الاستيراد حسب المنتج والصناعة في الصين' : 'Sourcing by Product & Industry in China',
    description: isAr
      ? 'ابحث عن أفضل المدن والأسواق والتجمعات الصناعية في الصين حسب نوع المنتج (أثاث، إلكترونيات، أقمشة، آلات).'
      : 'Find the best Chinese manufacturing cities and wholesale markets by product category.',
    alternates: {
      canonical: `https://hussam-mabrouk.com/${locale}/china-cities/products`
    }
  };
}

export default async function SourcingProductsPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = (locale as Locale) || 'ar';
  const isAr = activeLocale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'البحث العكسي للمنتجات' : 'Reverse Product Sourcing'}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            {isAr ? 'دليل الاستيراد حسب نوع المنتج' : 'Find Best Cities by Product Category'}
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'اختر المنتج الذي ترغب باستيراده لتعرف أفضل المدن والأسواق والتجمعات الصناعية المخصصة له في الصين.'
              : 'Select your product category to discover top manufacturing cities, clusters, and wholesale markets.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHINA_INDUSTRIES_DATA.map(cat => {
            const topCities = CHINA_CITIES_DATA.filter(c => cat.topCitySlugs.includes(c.slug));

            return (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all space-y-4 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {cat.name[isAr ? 'ar' : 'en']}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">{cat.slug}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cat.description[isAr ? 'ar' : 'en']}
                </p>

                {/* Top Cities Tags */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    {isAr ? 'أفضل المدن المصنعة:' : 'Top Manufacturing Cities:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {topCities.map(c => (
                      <Link
                        key={c.id}
                        href={`/${activeLocale}/china-cities/${c.slug}`}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 border border-slate-700 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center gap-1"
                      >
                        <Building2 className="w-3 h-3" />
                        <span>{c.name[isAr ? 'ar' : 'en']}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Filter CTA */}
                <div className="pt-2">
                  <Link
                    href={`/${activeLocale}/china-cities?industry=${cat.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{isAr ? `تصفح مدن ${cat.name.ar}` : `Browse ${cat.name.en} Cities`}</span>
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
