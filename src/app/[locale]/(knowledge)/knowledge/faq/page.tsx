import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import type { Locale } from "@/domains/shared/value-objects";
import { FAQS_DATA } from "@/data/faqs";
import JsonLd from "@/components/JsonLd";
import { buildFAQPageSchema } from "@/lib/schema/faq";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الأسئلة الشائعة — حسام مبروك" : "FAQ — Hussam Mabrouk",
    description: isAr
      ? "إجابات استشارية موثقة على أكثر من 400 سؤال حول الاستيراد والتوريد من الصين والتجارة الدولية."
      : "Verified advisory answers to 400 questions on China sourcing, trade operations, and supply chains.",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/knowledge/faq` },
  };
}

export default async function FaqHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const faqSchema = buildFAQPageSchema(FAQS_DATA, activeLocale);
  const cards = FAQS_DATA.map((faq) => ({
    title: isAr ? faq.questionAr : faq.questionEn,
    description: (isAr ? faq.answerAr : faq.answerEn).slice(0, 140) + "…",
    href: `/${activeLocale}/about/faq`,
    badge: faq.category,
  }));

  return (
    <>
      <JsonLd schema={faqSchema} />
      <HubIndexPage
        locale={activeLocale}
        title={isAr ? "الأسئلة الشائعة وقاعدة المعرفة" : "Frequently Asked Questions & Knowledge Base"}
        description={
          isAr
            ? "إجابات استشارية موثقة على أكثر من 400 سؤال حول الاستيراد والتوريد من الصين والتجارة الدولية."
            : "Verified advisory answers to 400 questions on China sourcing, trade operations, and supply chains."
        }
        hubPath={`/${activeLocale}/knowledge/faq`}
        cards={cards}
      />
    </>
  );
}
