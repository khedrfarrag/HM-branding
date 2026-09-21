import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import type { Locale } from "@/domains/shared/value-objects";
import { FAQS_DATA } from "@/data/faqs";

interface PageProps {
  params: Promise<{ locale: string }>;
}

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
  const cards = FAQS_DATA.slice(0, 50).map((faq) => ({
    title: isAr ? faq.questionAr : faq.questionEn,
    description: (isAr ? faq.answerAr : faq.answerEn).slice(0, 140) + "…",
    href: `/${activeLocale}/about/faq`,
    badge: faq.category,
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "الأسئلة الشائعة وقاعدة المعرفة" : "Frequently Asked Questions & Knowledge Base"}
      description={
        isAr
          ? "إجابات استشارية موثقة على أكثر من 200 سؤال حول الاستيراد والتوريد من الصين والتجارة الدولية."
          : "Verified advisory answers to 200 questions on China sourcing, trade operations, and supply chains."
      }
      hubPath={`/${activeLocale}/knowledge/faq`}
      cards={cards}
    />
  );
}
