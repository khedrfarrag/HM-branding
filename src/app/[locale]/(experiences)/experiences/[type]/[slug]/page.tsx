import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { Locale, ExperienceType } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{
    locale: string;
    type: string;
    slug: string;
  }>;
}

const experienceRepository = new SupabaseExperienceRepository();

export async function generateStaticParams() {
  const paramsList: { locale: Locale; type: string; slug: string }[] = [];
  const locales: Locale[] = ["ar", "en"];
  
  for (const locale of locales) {
    try {
      const slugs = await experienceRepository.getAllSlugs(locale);
      for (const item of slugs) {
        paramsList.push({
          locale,
          type: item.type,
          slug: item.slug
        });
      }
    } catch {
      // Fallback fallback parameters
      paramsList.push({
        locale,
        type: "canton-fair-programs",
        slug: "canton-fair-business-experience"
      });
    }
  }
  
  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, type, slug } = await params;
  const experience = await experienceRepository.getExperienceBySlug(locale as Locale, type as ExperienceType, slug);
  if (!experience) return {};

  return {
    title: experience.seo.title,
    description: experience.seo.description,
    alternates: {
      canonical: `https://hussam-mabrouk.com${experience.seo.canonicalPath}`
    }
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { locale, type, slug } = await params;
  const expType = type as ExperienceType;
  const activeLocale = locale as Locale;
  const experience = await experienceRepository.getExperienceBySlug(activeLocale, expType, slug);

  if (!experience) {
    notFound();
  }

  // Schema structured data
  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: activeLocale === "ar" ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: activeLocale === "ar" ? "الخبرات الميدانية" : "Experiences", item: `/${activeLocale}/experiences` },
    { name: experience.title, item: experience.seo.canonicalPath }
  ]);

  const courseSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Course" as const,
    "@id": `https://hussam-mabrouk.com${experience.seo.canonicalPath}#course`,
    "name": experience.title,
    "description": experience.shortDescription,
    "provider": {
      "@type": "Organization" as const,
      "@id": "https://hussam-mabrouk.com/#organization"
    }
  };

  const isAr = locale === "ar";
  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="container mx-auto px-4 py-8" id="experience-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={courseSchema} />

      <article className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        {experience.coverImage && (
          <div className="relative w-full h-[250px] md:h-[350px] mb-6 rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={experience.coverImage}
              alt={experience.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <header className="mb-6">
          <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
            {experience.type.replace("-", " ")}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {experience.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {experience.shortDescription}
          </p>
        </header>

        {experience.price && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-8 flex justify-between items-center">
            <span className="text-gray-300">{isAr ? "تكلفة البرنامج الاستثمارية" : "Program Investment Cost"}</span>
            <span className="text-2xl font-bold text-amber-400">
              {experience.price} {experience.currency}
            </span>
          </div>
        )}

        <section className="prose prose-invert max-w-none mb-8 text-gray-200">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
            {isAr ? "تفاصيل البرنامج الكاملة" : "Full Program Details"}
          </h2>
          <p>{experience.fullDescription}</p>
        </section>

        {experience.itinerary && experience.itinerary.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              {isAr ? "الجدول الزمني الميداني" : "Field Itinerary Schedule"}
            </h2>
            <div className="space-y-4">
              {experience.itinerary.map((day) => (
                <div key={day.day} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-amber-400 mb-2">
                    {isAr ? `اليوم ${day.day}: ` : `Day ${day.day}: `}{day.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {day.activities.map((act: string, idx: number) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {experience.dates && experience.dates.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              {isAr ? "المواعيد المتاحة والتسجيل" : "Available Dates & Registration"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {experience.dates.map((date) => {
                const isFull = date.spotsRemaining === 0;
                const isClosed =
                  Boolean(date.enrollmentDeadline) && date.enrollmentDeadline! < today;
                const cardKey = date.id ?? `${date.startDate}-${date.endDate}`;

                return (
                  <div
                    key={cardKey}
                    className="border border-amber-500/20 bg-amber-500/5 rounded-lg p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-gray-300 text-sm mb-1">
                        {isAr ? "تاريخ الرحلة" : "Trip Date"}
                      </div>
                      <div className="text-white font-bold mb-3">
                        {date.startDate} {isAr ? "إلى" : "to"} {date.endDate}
                      </div>
                      <div className="space-y-2 text-sm text-gray-400 mb-4">
                        <div className="flex justify-between gap-2">
                          <span>
                            {isAr ? "آخر موعد للتسجيل:" : "Deadline:"}{" "}
                            {date.enrollmentDeadline}
                          </span>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span>
                            {isAr ? "السعة الكلية:" : "Total capacity:"}{" "}
                            {date.availableSeats}
                          </span>
                          <span className="text-amber-400 font-semibold">
                            {isAr
                              ? `المقاعد المتبقية: ${date.spotsRemaining}`
                              : `Spots left: ${date.spotsRemaining}`}
                          </span>
                        </div>
                        {date.price != null && (
                          <div className="text-white font-semibold">
                            {isAr ? "السعر:" : "Price:"}{" "}
                            {date.price} {date.currency ?? experience.currency}
                          </div>
                        )}
                      </div>
                    </div>

                    {isFull ? (
                      <div className="w-full text-center py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm font-semibold mt-2">
                        {isAr ? "مكتمل الحجز" : "Fully Booked"}
                      </div>
                    ) : isClosed ? (
                      <div className="w-full text-center py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm font-semibold mt-2">
                        {isAr ? "التسجيل مغلق" : "Registration Closed"}
                      </div>
                    ) : (
                      <Link
                        href={
                          date.id
                            ? `/${locale}/booking/experience/${slug}?scheduleId=${date.id}`
                            : `/${locale}/booking/experience/${slug}`
                        }
                        className="w-full text-center py-2.5 rounded-lg bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black text-sm font-semibold transition-all mt-2"
                      >
                        {isAr ? "احجز الآن" : "Book Now"}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {experience.testimonials && experience.testimonials.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              {isAr ? "آراء المشتركين السابقين" : "Testimonials"}
            </h2>
            <div className="space-y-4">
              {experience.testimonials.map((test, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-4 italic text-gray-300">
                  <p className="mb-3">&quot;{test.quote}&quot;</p>
                  <div className="text-right text-sm">
                    <span className="text-white font-semibold">{test.clientName}</span> - <span className="text-amber-500">{test.clientTitle}</span>
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
