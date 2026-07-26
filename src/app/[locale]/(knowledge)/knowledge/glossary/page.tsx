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
    title: isAr ? "قاموس المصطلحات — حسام مبروك" : "Trade Glossary — Hussam Mabrouk",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/knowledge/glossary` },
  };
}

export default async function GlossaryHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const terms = await knowledgeRepo.getGlossaryTerms(activeLocale);

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "قاموس المصطلحات" : "Trade Glossary"}
      description={
        isAr
          ? "تعريفات مصطلحات الاستيراد والتصدير بالعربية والإنجليزية."
          : "Import and export terminology defined in Arabic and English."
      }
      hubPath={`/${activeLocale}/knowledge/glossary`}
      cards={terms.map((t) => ({
        title: isAr ? t.term : t.termEn,
        description: t.definition.slice(0, 100) + (t.definition.length > 100 ? "…" : ""),
        href: `/${activeLocale}/knowledge/glossary/${t.slug}`,
      }))}
    />
  );
}
