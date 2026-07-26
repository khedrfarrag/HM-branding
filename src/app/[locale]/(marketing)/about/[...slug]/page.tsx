import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LocalFsAuthorRepository } from "@/repositories/local-fs/author";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}

const authorRepository = new LocalFsAuthorRepository();

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  const subPages = ["bio", "achievements", "certificates", "timeline"];
  const paramsList: { locale: Locale; slug: string[] }[] = [];

  for (const locale of locales) {
    for (const page of subPages) {
      paramsList.push({
        locale,
        slug: [page]
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const subPage = slug[0];
  const profile = await authorRepository.getProfile(locale as Locale);
  if (!profile) return {};

  const isAr = locale === "ar";
  let title = profile.seo.title;
  let description = profile.seo.description;

  if (subPage === "achievements") {
    title = isAr ? "إنجازات حسام مبروك في الصين" : "Hussam Mabrouk Sourcing Achievements";
    description = isAr ? "قائمة الإنجازات المهنية ومشاريع الاستيراد المؤمّنة" : "List of professional sourcing milestones and corporate success";
  } else if (subPage === "certificates") {
    title = isAr ? "الشهادات المهنية المعتمدة" : "Professional Trade Certificates";
    description = isAr ? "الشهادات والاعتمادات الرسمية لحسام مبروك في الصين" : "Official verification and quality control credentials";
  } else if (subPage === "timeline") {
    title = isAr ? "مسيرة حسام مبروك المهنية" : "Professional Career Timeline";
    description = isAr ? "الرحلة من البدايات إلى قيادة الاستيراد والتخليص اللوجستي" : "Sourcing journey and corporate development milestones";
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://hussam-mabrouk.com/${locale}/about/${subPage}`
    }
  };
}

export default async function AboutCatchAllPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const subPage = slug[0];
  const activeLocale = locale as Locale;
  const profile = await authorRepository.getProfile(activeLocale);

  if (!profile) {
    notFound();
  }

  const isAr = activeLocale === "ar";
  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "عن حسام مبروك" : "About Hussam", item: `/${activeLocale}/about/bio` },
    { name: subPage.toUpperCase(), item: `/${activeLocale}/about/${subPage}` }
  ]);

  return (
    <main className="container mx-auto px-4 py-8" id="about-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-800 pb-4 mb-8 overflow-x-auto gap-4">
          <a href={`/${locale}/about/bio`} className={`pb-2 px-1 font-semibold transition-colors shrink-0 ${subPage === "bio" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-white"}`}>
            {isAr ? "السيرة الذاتية" : "Biography"}
          </a>
          <a href={`/${locale}/about/achievements`} className={`pb-2 px-1 font-semibold transition-colors shrink-0 ${subPage === "achievements" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-white"}`}>
            {isAr ? "الإنجازات" : "Achievements"}
          </a>
          <a href={`/${locale}/about/certificates`} className={`pb-2 px-1 font-semibold transition-colors shrink-0 ${subPage === "certificates" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-white"}`}>
            {isAr ? "الشهادات" : "Certificates"}
          </a>
          <a href={`/${locale}/about/timeline`} className={`pb-2 px-1 font-semibold transition-colors shrink-0 ${subPage === "timeline" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-white"}`}>
            {isAr ? "مسيرة العمل" : "Timeline"}
          </a>
        </div>

        {subPage === "bio" && (
          <section>
            <h1 className="text-3xl font-bold text-white mb-4">{profile.name}</h1>
            <p className="text-amber-500 text-lg mb-6">{profile.title}</p>
            <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
              <p>{profile.bio}</p>
            </div>
          </section>
        )}

        {subPage === "achievements" && (
          <section>
            <h1 className="text-3xl font-bold text-white mb-6">
              {isAr ? "الإنجازات المهنية" : "Sourcing Achievements"}
            </h1>
            <div className="space-y-6">
              {(await authorRepository.getAchievements(activeLocale)).map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-400">{item.title}</h3>
                    <span className="text-gray-400 text-sm font-semibold bg-white/5 px-2 py-1 rounded">{item.year}</span>
                  </div>
                  <p className="text-gray-300">{item.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {subPage === "certificates" && (
          <section>
            <h1 className="text-3xl font-bold text-white mb-6">
              {isAr ? "الاعتمادات والشهادات" : "Certificates & Accreditations"}
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
              {(await authorRepository.getCertificates(activeLocale)).map((cert, idx) => (
                <div key={idx} className="border border-amber-500/20 bg-amber-500/5 rounded-lg p-6">
                  <h3 className="font-bold text-white text-lg mb-2">{cert.name}</h3>
                  <div className="text-gray-300 text-sm mb-4">{cert.issuer}</div>
                  <div className="text-gray-400 text-xs">
                    {isAr ? "تاريخ الإصدار:" : "Issued:"} {cert.issueDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {subPage === "timeline" && (
          <section>
            <h1 className="text-3xl font-bold text-white mb-6">
              {isAr ? "المسيرة المهنية في الصين" : "Professional Timeline"}
            </h1>
            <div className="relative border-l border-amber-500/30 ml-4 pl-6 space-y-8">
              {(await authorRepository.getTimelineEvents(activeLocale)).map((evt, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute left-[-31px] top-1 bg-amber-500 border border-black w-4 h-4 rounded-full" />
                  <span className="text-amber-400 font-bold text-lg block mb-1">{evt.date}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{evt.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{evt.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
