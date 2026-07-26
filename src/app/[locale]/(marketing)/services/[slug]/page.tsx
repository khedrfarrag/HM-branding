import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LocalFsServiceRepository } from "@/repositories/local-fs/services";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

const serviceRepository = new LocalFsServiceRepository();

export async function generateStaticParams() {
  const paramsList: { locale: Locale; slug: string }[] = [];
  const locales: Locale[] = ["ar", "en"];

  for (const locale of locales) {
    try {
      const services = await serviceRepository.getServices(locale);
      for (const item of services) {
        paramsList.push({
          locale,
          slug: item.slug
        });
      }
    } catch {
      paramsList.push({
        locale,
        slug: "sourcing"
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = await serviceRepository.getServiceBySlug(locale as Locale, slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: `https://hussam-mabrouk.com${service.seo.canonicalPath}`
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const activeLocale = locale as Locale;
  const service = await serviceRepository.getServiceBySlug(activeLocale, slug);

  if (!service) {
    notFound();
  }

  const isAr = activeLocale === "ar";
  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "الخدمات" : "Services", item: `/${activeLocale}/services/sourcing` },
    { name: service.title, item: service.seo.canonicalPath }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Service" as const,
    "@id": `https://hussam-mabrouk.com${service.seo.canonicalPath}#service`,
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "Organization" as const,
      "@id": "https://hussam-mabrouk.com/#organization"
    }
  };

  return (
    <main className="container mx-auto px-4 py-8" id="service-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={serviceSchema} />

      <article className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        <header className="mb-6 pb-6 border-b border-gray-800">
          <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
            {isAr ? "خدمة متميزة" : "Premium Service"}
          </span>
          <h1 className="text-3xl font-bold text-white mt-2 mb-4">{service.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed">{service.shortDescription}</p>
        </header>

        <section className="prose prose-invert max-w-none text-gray-200 leading-relaxed mb-8">
          <p>{service.fullDescription}</p>
        </section>

        {service.processSteps && service.processSteps.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {isAr ? "مراحل تنفيذ الخدمة" : "Service Flow Process"}
            </h2>
            <div className="space-y-4">
              {service.processSteps.map((step) => (
                <div key={step.step} className="bg-white/5 border border-white/10 rounded-lg p-5 flex gap-4">
                  <div className="bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
