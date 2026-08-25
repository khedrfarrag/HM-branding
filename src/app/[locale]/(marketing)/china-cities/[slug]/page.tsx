import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, Locale } from '@/features/i18n';
import { CHINA_CITIES_DATA } from '@/features/china-cities/data/cities';
import { CityProfileClient } from '@/features/china-cities/components/CityProfileClient';
import { generateCitySchemaJsonLd } from '@/features/china-cities/utils/schemaGenerator';

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

const LOCALES: Locale[] = ['ar', 'en'];

export async function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];

  for (const locale of LOCALES) {
    for (const city of CHINA_CITIES_DATA) {
      params.push({ locale, slug: city.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = CHINA_CITIES_DATA.find(c => c.slug === slug);

  if (!city) {
    return { title: 'City Not Found | Hossam Mabrouk' };
  }

  const cityName = city.name[locale === 'ar' ? 'ar' : 'en'] || city.name.en;
  const seoTitle = city.seo.title[locale === 'ar' ? 'ar' : 'en'] || `${cityName} Trade & Sourcing Guide`;
  const seoDesc = city.seo.description[locale === 'ar' ? 'ar' : 'en'] || city.description[locale === 'ar' ? 'ar' : 'en'];

  return {
    title: seoTitle,
    description: seoDesc,
    openGraph: {
      title: `${cityName} - China Commercial Cities Guide`,
      description: seoDesc,
      images: [{ url: city.heroImage }]
    }
  };
}

export default async function CityProfilePage({ params }: Props) {
  const { locale, slug } = await params;
  const city = CHINA_CITIES_DATA.find(c => c.slug === slug);

  if (!city) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const jsonLdSchemas = generateCitySchemaJsonLd(city, locale);

  const relatedCities = CHINA_CITIES_DATA.filter(c => 
    city.relatedCitySlugs.includes(c.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <CityProfileClient
        city={city}
        relatedCities={relatedCities}
        dict={dict}
        locale={locale}
      />
    </>
  );
}
