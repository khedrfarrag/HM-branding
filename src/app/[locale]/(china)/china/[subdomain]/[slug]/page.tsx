import React from "react";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { LocalFsChinaRepository } from "@/repositories/local-fs/china";
import { CHINA_CITIES_DATA } from "@/features/china-cities/data/cities";
import { getEntityBySlug } from "@/features/china-guide/data";
import { Locale, ChinaSubdomain } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import EntityHeroSection from "@/features/china-guide/components/EntityHeroSection";
import GPSNavigationCard from "@/features/china-guide/components/GPSNavigationCard";
import AuthorityBadge from "@/features/china-guide/components/AuthorityBadge";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    locale: string;
    subdomain: string;
    slug: string;
  }>;
}

const chinaRepo = new LocalFsChinaRepository();

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  const paramsList: { locale: Locale; subdomain: string; slug: string }[] = [];

  for (const locale of locales) {
    try {
      const slugs = await chinaRepo.getAllSubdomainSlugs(locale);
      for (const item of slugs) {
        paramsList.push({ locale, subdomain: item.subdomain, slug: item.slug });
      }
    } catch {
      paramsList.push({ locale, subdomain: "cities", slug: "beijing" });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, subdomain, slug } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";

  if (subdomain === "cities") {
    const isCurated34City = CHINA_CITIES_DATA.some((c) => c.slug === slug);
    if (isCurated34City) {
      const city = await chinaRepo.getCityBySlug(activeLocale, slug);
      if (city) {
        return {
          title: `${city.name} | دليل مدن الصين — حسام مبروك`,
          description: city.seo.description,
          alternates: { canonical: `https://hussam-mabrouk.com/${locale}/china-cities/${slug}` },
        };
      }
    }
  }

  const sub = subdomain as ChinaSubdomain;
  const entity = getEntityBySlug(sub, slug);
  if (!entity) return {};

  const name = entity.name[activeLocale] || entity.name.ar;
  const title = isAr
    ? `${name} | دليل ${subdomain} في الصين — حسام مبروك`
    : `${name} | China ${subdomain} Sourcing Guide — Hussam Mabrouk`;

  const description = isAr
    ? `دليل شامل وتوثيق ميداني لـ ${name} في ${entity.citySlug}: العنوان بالصينية، إحداثيات GPS، التقييم، وتوصيات المستشار التجاري حسام مبروك.`
    : `Comprehensive guide and field verification for ${name} in ${entity.citySlug}: Chinese address, GPS navigation, ratings, and expert review by Hussam Mabrouk.`;

  return {
    title,
    description,
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/china/${subdomain}/${slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: entity.coverImage }],
    },
  };
}

export default async function ChinaSubdomainDetailPage({ params }: PageProps) {
  const { locale, subdomain, slug } = await params;

  // Redirect to full 34-city interactive profile if available
  if (subdomain === "cities") {
    const isCurated34City = CHINA_CITIES_DATA.some((c) => c.slug === slug);
    if (isCurated34City) {
      redirect(`/${locale}/china-cities/${slug}`);
    }
  }

  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const sub = subdomain as ChinaSubdomain;
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const entity = getEntityBySlug(sub, slug);
  if (!entity) notFound();

  // Breadcrumbs Schema
  const breadcrumbItems = [
    { name: isAr ? "الرئيسية" : "Home", item: `https://hussam-mabrouk.com/${locale}` },
    { name: isAr ? "دليل الصين" : "China Guide", item: `https://hussam-mabrouk.com/${locale}/china` },
    { name: isAr ? subdomain : subdomain, item: `https://hussam-mabrouk.com/${locale}/china/${subdomain}` },
    { name: entity.name[activeLocale] || entity.name.ar, item: `https://hussam-mabrouk.com/${locale}/china/${subdomain}/${slug}` },
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

  // Determine Schema.org Type
  let schemaType = "LocalBusiness";
  if (sub === "restaurants") schemaType = "Restaurant";
  else if (sub === "hotels") schemaType = "Hotel";
  else if (sub === "markets") schemaType = "WholesaleStore";
  else if (sub === "translators") schemaType = "ProfessionalService";
  else if (sub === "shipping-companies" || sub === "shipping-lines" || sub === "logistics") schemaType = "Organization";
  else if (sub === "ports" || sub === "airports") schemaType = "CivicStructure";
  else if (sub === "industrial-zones" || sub === "economic-zones") schemaType = "Place";
  else if (sub === "trade-fairs") schemaType = "EventVenue";
  else if (sub === "factories") schemaType = "Organization";
  else if (sub === "cities") schemaType = "City";

  const entityJsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: entity.name[activeLocale] || entity.name.ar,
    alternateName: entity.name.zh,
    description: entity.description[activeLocale] || entity.description.ar,
    image: entity.coverImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: entity.address[activeLocale] || entity.address.ar,
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: entity.coordinates.latitude,
      longitude: entity.coordinates.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: entity.rating,
      reviewCount: entity.reviewCount,
    },
    author: {
      "@type": "Person",
      name: "Hussam Mabrouk",
      jobTitle: "International Trade & Sourcing Consultant",
      url: "https://hussam-mabrouk.com",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Hussam Mabrouk",
      jobTitle: "International Trade & Sourcing Consultant",
      url: "https://hussam-mabrouk.com",
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8" dir={isAr ? "rtl" : "ltr"}>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={entityJsonLd} />

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href={`/${activeLocale}`} className="hover:text-amber-400 transition-colors">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5" />
          <Link href={`/${activeLocale}/china`} className="hover:text-amber-400 transition-colors">
            {isAr ? "دليل الصين" : "China Guide"}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5" />
          <Link href={`/${activeLocale}/china/${subdomain}`} className="hover:text-amber-400 transition-colors capitalize">
            {subdomain}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5" />
          <span className="text-amber-400 font-bold line-clamp-1">
            {entity.name[activeLocale] || entity.name.ar}
          </span>
        </nav>

        {/* Visual Hero Section */}
        <EntityHeroSection locale={activeLocale} entity={entity} />

        {/* Description & Overview */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-white">
            {isAr ? "نظرة عامة ومواصفات المنشأة" : "Overview & Operational Profile"}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {entity.description[activeLocale] || entity.description.ar}
          </p>
        </div>

        {/* Key Features & Advantages */}
        {entity.features && entity.features[activeLocale] && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-base font-black text-white">
              {isAr ? "أهم المزايا والخدمات المتوفرة" : "Key Features & Commercial Amenities"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {entity.features[activeLocale].map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GPS Navigation & Baidu / Google Maps Card */}
        <GPSNavigationCard
          locale={activeLocale}
          title={entity.name[activeLocale] || entity.name.ar}
          addressAr={entity.address.ar}
          addressEn={entity.address.en}
          addressZh={entity.address.zh}
          coordinates={entity.coordinates}
        />

        {/* Authority Verification Badge by Hussam Mabrouk */}
        <AuthorityBadge locale={activeLocale} verification={entity.curatorVerification} />

        {/* Back Link to Subdomain Hub */}
        <div className="pt-4 text-center">
          <Link
            href={`/${activeLocale}/china/${subdomain}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ChevronIcon className="w-3.5 h-3.5" />
            <span>{isAr ? `العودة إلى دليل ${subdomain} بالكامل` : `Back to all ${subdomain}`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
