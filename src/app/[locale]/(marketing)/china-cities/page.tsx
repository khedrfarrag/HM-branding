import React from 'react';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/features/i18n';
import { CHINA_CITIES_DATA } from '@/features/china-cities/data/cities';
import { ChinaCitiesHubClient } from '@/features/china-cities/components/ChinaCitiesHubClient';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return {
    title: isAr 
      ? 'دليل مدن الصين التجاري الشامل | الأسواق والمصانع والموانئ'
      : 'Comprehensive China Cities Sourcing Guide | Wholesale Markets & Ports',
    description: isAr
      ? 'دليل عملي للمستوردين والتجار: استكشف المدن التجارية والصناعية في الصين (جوانزو، شينزن، إيوا، فوشان)، أسواق الجملة، الشحن، والمصانع.'
      : 'Practical guide for global traders: Explore top Chinese commercial cities (Guangzhou, Shenzhen, Yiwu, Foshan), wholesale markets & logistics.',
    openGraph: {
      title: isAr ? 'دليل مدن الصين التجاري | حسام مبروك' : 'China Commercial Cities Guide | Hossam Mabrouk',
      description: isAr ? 'دليل الاستيراد والتوريد والأسواق في الصين' : 'Sourcing, Wholesale Markets & Factory Guide to China'
    }
  };
}

export default async function ChinaCitiesHubPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <ChinaCitiesHubClient
      initialCities={CHINA_CITIES_DATA}
      dict={dict}
      locale={locale}
    />
  );
}
