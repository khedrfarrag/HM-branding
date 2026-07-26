import React from "react";
import { Metadata } from "next";
import { LocalFsServiceRepository } from "@/repositories/local-fs/services";
import { Locale } from "@/domains/shared/value-objects";
import HubIndexPage from "@/components/HubIndexPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const serviceRepository = new LocalFsServiceRepository();

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "قصص النجاح — حسام مبروك" : "Success Stories — Hussam Mabrouk",
    description: isAr
      ? "تصفح حالات النجاح ومشاريع الاستيراد المؤمّنة لمختلف الشركات والمطورين العقاريين."
      : "Read about our client success stories and secured sourcing achievements.",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/success-stories` },
  };
}

export default async function SuccessStoriesPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const stories = await serviceRepository.getSuccessStories(activeLocale);

  const storyCards = stories.map((story) => ({
    title: story.clientName,
    description: `${isAr ? "الصناعة" : "Industry"}: ${story.industry}\n\n${isAr ? "التحدي" : "Challenge"}: ${story.challenge}\n\n${isAr ? "الحل" : "Solution"}: ${story.solution}\n\n${isAr ? "النتيجة" : "Result"}: ${story.result}`,
    href: `/${activeLocale}/services/${story.serviceSlug}`,
    badge: isAr ? "قصة نجاح" : "Success Story",
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "قصص النجاح" : "Success Stories"}
      description={
        isAr
          ? "كيف ساعدنا الشركات على تحقيق وفورات وتأمين سلاسل التوريد الخاصة بها من الصين."
          : "How we helped enterprises optimize their supply chains and source securely from China."
      }
      hubPath={`/${activeLocale}/success-stories`}
      cards={storyCards}
    />
  );
}
