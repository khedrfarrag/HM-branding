import { Metadata } from "next";
import { getDictionary, type Locale } from "@/features/i18n";
import IndustriesPageClient from "@/features/industries/components/IndustriesPageClient";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "القطاعات التجارية — حسام مبروك"
      : "Industry Sectors — Hussam Mabrouk",
    description: isAr
      ? "استكشف 30 قطاعاً تجارياً متخصصاً في التوريد المباشر، الشحن الدولي، وإدارة سلاسل الإمداد بين الصين والشرق الأوسط."
      : "Explore 30 specialized trade sectors engineered for cross-border sourcing, freight logistics, and supply chain management across China and the Middle East.",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/industries` },
  };
}

export default async function IndustriesPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const dict = await getDictionary(activeLocale);

  return <IndustriesPageClient locale={activeLocale} dict={dict} />;
}
