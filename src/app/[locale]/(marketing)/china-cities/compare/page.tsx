import React from 'react';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/features/i18n';
import { CHINA_CITIES_DATA } from '@/features/china-cities/data/cities';
import { CityComparisonClient } from '@/features/china-cities/components/CityComparisonClient';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return {
    title: isAr
      ? 'مقارنة مدن الصين التجارية | أسواق ومصانع ولوجستيات الشحن'
      : 'Compare Chinese Commercial Cities | Markets, Factories & Logistics',
    description: isAr
      ? 'أداة تحليل ومقارنة سريعة بين مدن الصين التجارية للمستوردين (جوانزو، شينزن، إيوا، فوشان) لمساعدتك في اتخاذ قرار التوريد والسفر التجاري.'
      : 'Side-by-side comparison matrix for importers evaluating Chinese commercial cities (Guangzhou, Shenzhen, Yiwu, Foshan).',
    openGraph: {
      title: isAr ? 'مقارنة المدن التجارية في الصين' : 'China Commercial Cities Comparison',
      description: isAr ? 'قارن بين أسواق وموانئ ومصانع مدن الصين' : 'Compare Chinese markets, ports & factories side-by-side'
    }
  };
}

export default async function CityComparisonPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <CityComparisonClient
      cities={CHINA_CITIES_DATA}
      dict={dict}
      locale={locale}
    />
  );
}
