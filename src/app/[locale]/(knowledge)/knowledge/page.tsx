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
    title: isAr ? "مركز المعرفة — حسام مبروك" : "Knowledge Hub — Hussam Mabrouk",
    description: isAr
      ? "مقالات، قاموس مصطلحات، وأسئلة شائعة عن الاستيراد من الصين"
      : "Articles, glossary, and FAQs on importing from China",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/knowledge` },
  };
}

export default async function KnowledgeHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const articles = await knowledgeRepo.getArticles(activeLocale);

  const articleCards = articles.map((a) => ({
    title: a.title,
    description: a.excerpt,
    href: `/${activeLocale}/knowledge/${a.category}/${a.slug}`,
    badge: a.category,
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "مركز المعرفة" : "Knowledge Hub"}
      description={
        isAr
          ? "دليلك العربي الشامل لفهم الاستيراد، التفاوض، فحص الجودة، والشحن الدولي."
          : "Your comprehensive guide to importing, negotiation, quality control, and international shipping."
      }
      hubPath={`/${activeLocale}/knowledge`}
      cards={[
        {
          title: isAr ? "قاموس المصطلحات" : "Trade Glossary",
          description: isAr ? "تعريفات مصطلحات الاستيراد والتصدير" : "Import/export terminology definitions",
          href: `/${activeLocale}/knowledge/glossary`,
        },
        {
          title: isAr ? "الأسئلة الشائعة" : "FAQ",
          description: isAr ? "إجابات على أكثر الأسئلة تكراراً" : "Answers to frequently asked questions",
          href: `/${activeLocale}/knowledge/faq`,
        },
        ...articleCards,
      ]}
    />
  );
}
