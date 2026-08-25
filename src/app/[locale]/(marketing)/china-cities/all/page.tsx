import { Metadata } from 'next';
import { getDictionary, Locale } from '@/features/i18n';
import { CHINA_CITIES_DATA } from '@/features/china-cities/data/cities';
import { AllCitiesClient } from '@/features/china-cities/components/AllCitiesClient';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'جميع مدن الصين التجارية والصناعية | دليل الاستيراد الشامل' : 'All Chinese Commercial & Manufacturing Cities | Complete Guide',
    description: isAr
      ? 'استعرض جميع مدن الصين التجارية والصناعية البالغ عددها 30+ مدينة موثقة مع تفاصيل الأسواق والمنتجات واللوجستيات.'
      : 'Browse all 30+ verified Chinese commercial cities with wholesale markets, manufacturing zones, and logistics.',
    alternates: {
      canonical: `https://hussam-mabrouk.com/${locale}/china-cities/all`
    }
  };
}

export default async function AllCitiesPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = (locale as Locale) || 'ar';
  const dict = await getDictionary(activeLocale);

  return (
    <AllCitiesClient
      cities={CHINA_CITIES_DATA}
      dict={dict}
      locale={activeLocale}
    />
  );
}
