import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LocalFsChinaRepository } from "@/repositories/local-fs/china";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

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
      paramsList.push({ locale, subdomain: "cities", slug: "guangzhou" });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, subdomain, slug } = await params;
  const activeLocale = locale as Locale;

  // Resolve metadata based on subdomain type
  if (subdomain === "cities") {
    const city = await chinaRepo.getCityBySlug(activeLocale, slug);
    if (!city) return {};
    return {
      title: city.seo.title,
      description: city.seo.description,
      alternates: { canonical: `https://hussam-mabrouk.com${city.seo.canonicalPath}` }
    };
  }

  if (subdomain === "markets") {
    const market = await chinaRepo.getMarketBySlug(activeLocale, slug);
    if (!market) return {};
    return {
      title: market.seo.title,
      description: market.seo.description,
      alternates: { canonical: `https://hussam-mabrouk.com${market.seo.canonicalPath}` }
    };
  }

  const item = await chinaRepo.getSubdomainItemBySlug(activeLocale, subdomain, slug);
  if (!item) return {};
  return {
    title: item.seo.title,
    description: item.seo.description,
    alternates: { canonical: `https://hussam-mabrouk.com${item.seo.canonicalPath}` }
  };
}

export default async function ChinaSubdomainDetailPage({ params }: PageProps) {
  const { locale, subdomain, slug } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";

  // Resolve content based on subdomain
  let description = "";
  let name = "";
  let region = "";
  let coverImage: string | null = null;

  if (subdomain === "cities") {
    const city = await chinaRepo.getCityBySlug(activeLocale, slug);
    if (!city) notFound();
    description = city!.seo.description;
    name = city!.name;
    region = city!.region;
    coverImage = city!.coverImage || null;
  } else if (subdomain === "markets") {
    const market = await chinaRepo.getMarketBySlug(activeLocale, slug);
    if (!market) notFound();
    description = market!.seo.description;
    name = market!.name;
    region = market!.citySlug;
  } else {
    const item = await chinaRepo.getSubdomainItemBySlug(activeLocale, subdomain, slug);
    if (!item) notFound();
    description = item!.seo.description;
    name = item!.name;
    region = item!.citySlug;
  }

  const breadcrumb = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "الصين" : "China", item: `/${activeLocale}/china` },
    { name: isAr ? subdomain : subdomain.replace(/-/g, " "), item: `/${activeLocale}/china/${subdomain}` },
    { name, item: `/${activeLocale}/china/${subdomain}/${slug}` }
  ]);

  const placeSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Place" as const,
    "name": name,
    "description": description,
    "containedInPlace": {
      "@type": "Country" as const,
      "name": "China"
    }
  };

  return (
    <main className="container mx-auto px-4 py-8" id="china-detail">
      <JsonLd schema={breadcrumb} />
      <JsonLd schema={placeSchema} />

      <article className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        {coverImage && (
          <div className="relative w-full h-[250px] md:h-[350px] mb-6 rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={coverImage}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <header className="mb-6 pb-6 border-b border-gray-800">
          <span className="text-amber-500 uppercase tracking-wider text-xs font-semibold">
            {isAr ? "الصين" : "China"} — {subdomain.replace(/-/g, " ")}
          </span>
          <h1 className="text-3xl font-bold text-white mt-2 mb-3">{name}</h1>
          {region && (
            <p className="text-gray-400 text-sm">📍 {region}</p>
          )}
        </header>

        <section className="text-gray-200 leading-relaxed text-lg">
          <p>{description}</p>
        </section>
      </article>
    </main>
  );
}
