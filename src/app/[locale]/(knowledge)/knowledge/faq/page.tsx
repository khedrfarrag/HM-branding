import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import type { Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const FAQS = {
  ar: [
    {
      question: "ما هي أقل كمية للطلب (MOQ) عند الاستيراد؟",
      answer: "أقل كمية للطلب يحددها المصنع لتغطية تكاليف الإنتاج، وتختلف من منتج لآخر ويمكن التفاوض عليها.",
      category: "sourcing",
    },
    {
      question: "كيف أتحقق من موثوقية المورد في الصين؟",
      answer: "يمكنك التحقق عبر منصة Alibaba وطلب شهادات الجودة وإجراء زيارة ميدانية أو تكليف شركة فحص.",
      category: "verification",
    },
    {
      question: "ما الفرق بين FOB وCIF في الشحن؟",
      answer: "FOB يعني أن البائع يتحمل التكاليف حتى ميناء الشحن بينما CIF يشمل التأمين وتكلفة الشحن حتى ميناء الوصول.",
      category: "shipping",
    },
  ],
  en: [
    {
      question: "What is the Minimum Order Quantity (MOQ)?",
      answer: "The minimum quantity a supplier requires you to purchase. It varies and can be negotiated based on the product.",
      category: "sourcing",
    },
    {
      question: "How do I verify a supplier in China?",
      answer: "Use Alibaba verification, request quality certifications, visit in person, or hire a third-party inspection company.",
      category: "verification",
    },
    {
      question: "What is the difference between FOB and CIF?",
      answer: "FOB means the seller covers costs until the port of shipment; CIF includes insurance and freight to the destination port.",
      category: "shipping",
    },
  ],
};

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
  const faqs = FAQS[activeLocale] ?? FAQS.en;

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
