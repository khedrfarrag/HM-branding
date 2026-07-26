import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsKnowledgeRepository } from "@/repositories/local-fs/knowledge";
import type { Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const knowledgeRepo = new LocalFsKnowledgeRepository();

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الأسئلة الشائعة — حسام مبروك" : "FAQ — Hussam Mabrouk",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/knowledge/faq` },
  };
}

export default async function FaqHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const faqs = await knowledgeRepo.getFAQs(activeLocale);

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
      description={
        isAr
          ? "إجابات على أكثر الأسئلة شيوعاً عن الاستيراد من الصين."
          : "Answers to the most common questions about importing from China."
      }
      hubPath={`/${activeLocale}/knowledge/faq`}
      cards={faqs.map((faq, idx) => ({
        title: faq.question,
        description: faq.answer.slice(0, 120) + (faq.answer.length > 120 ? "…" : ""),
        href: `/${activeLocale}/knowledge/faq#q-${idx}`,
        badge: faq.category,
      }))}
    />
  );
}
