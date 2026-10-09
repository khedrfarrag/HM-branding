import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { LocalFsServiceRepository } from "@/repositories/local-fs/services";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck, 
  TrendingUp
} from "lucide-react";

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
        paramsList.push({ locale, slug: item.slug });
      }
    } catch {
      paramsList.push({ locale, slug: "sourcing" });
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
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Query linked success story / case study
  const successStories = await serviceRepository.getSuccessStories(activeLocale);
  const relatedStory = successStories.find(s => s.serviceSlug === service.slug);

  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "الخدمات" : "Services", item: `/${activeLocale}/services` },
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
    <main className="relative min-h-screen py-12 px-4 overflow-hidden" id="service-detail">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={serviceSchema} />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Main Glassmorphic Hero Container */}
        <article className="relative bg-zinc-950/70 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 md:p-10 shadow-2xl shadow-amber-500/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-amber-500 via-amber-300 to-transparent" />

          {/* Badge & Title */}
          <header className="mb-8 pb-8 border-b border-zinc-800/80">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm shadow-amber-500/10">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>{isAr ? "خدمة متميزة معتمدة" : "Verified Premium Service"}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-200 mb-4 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed">
              {service.shortDescription}
            </p>
          </header>

          {/* Full Description Box */}
          <section className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/80">
            <p className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <span>{service.fullDescription}</span>
            </p>
          </section>

          {/* Interactive Connected Workflow Timeline */}
          {service.processSteps && service.processSteps.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-7 bg-amber-500 rounded-full inline-block shadow-md shadow-amber-500/50" />
                {isAr ? "مراحل تنفيذ الخدمة" : "Service Workflow Process"}
              </h2>

              <div className={`relative space-y-6 ${isAr ? "border-r-2 border-dashed border-amber-500/30 mr-4 pr-6" : "border-l-2 border-dashed border-amber-500/30 ml-4 pl-6"}`}>
                {service.processSteps.map((step) => (
                  <div 
                    key={step.step} 
                    className="relative group bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-5 md:p-6 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {/* Glowing Number Node on Line */}
                    <div className={`absolute top-6 bg-zinc-950 text-amber-400 font-bold border-2 border-amber-500 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all ${isAr ? "-right-[27px]" : "-left-[27px]"}`}>
                      {step.step}
                    </div>

                    <div>
                      <h3 className="font-bold text-white text-lg md:text-xl mb-2 flex items-center gap-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Social Proof Case Study */}
          {relatedStory && (
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/25 rounded-xl p-6 mb-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>{isAr ? "قصة نجاح حقيقية" : "Verified Case Study"}</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{relatedStory.clientName}</h4>
              <p className="text-zinc-300 text-sm mb-3 italic">&quot;{relatedStory.testimonialQuote}&quot;</p>
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-semibold bg-amber-500/20 px-3 py-1.5 rounded-lg border border-amber-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{relatedStory.result}</span>
              </div>
            </div>
          )}
        </article>

        {/* High-Converting Call to Action Section */}
        <section className="bg-gradient-to-br from-amber-500/20 via-zinc-900 to-zinc-950 border border-amber-500/40 rounded-2xl p-6 md:p-8 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            {isAr ? "جاهز لبدء تأمين صفقتك من الصين؟" : "Ready to Secure Your Product Sourcing?"}
          </h3>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm md:text-base">
            {isAr 
              ? "تواصل مع حسام مبروك مباشرة لمناقشة متطلبات منتجك، أو احجز جلسة استشارية متخصصة لتحديد أفضل المصانع."
              : "Connect directly with Hussam Mabrouk to discuss your sourcing needs or book an executive consultation."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/${activeLocale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>{isAr ? "احجز مكالمة استشارية" : "Book Consultation"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/201070707166?text=${encodeURIComponent(isAr ? `مرحباً أستاذ حسام، أود الاستفسار عن خدمة: ${service.title}` : `Hello Mr. Hussam, I would like to inquire about the service: ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-7 py-3.5 rounded-xl border border-zinc-700 transition-all"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>{isAr ? "استفسار سريع عبر الواتساب" : "WhatsApp Inquiry"}</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
