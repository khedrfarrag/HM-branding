import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsServiceRepository } from "@/repositories/local-fs/services";
import type { Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const serviceRepo = new LocalFsServiceRepository();

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الخدمات — حسام مبروك" : "Services — Hussam Mabrouk",
    description: isAr
      ? "مصادر المنتجات، فحص الجودة، والتحقق من الموردين في الصين"
      : "Product sourcing, quality control, and supplier verification in China",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/services` },
  };
}

export default async function ServicesHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const services = await serviceRepo.getServices(activeLocale);

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "الخدمات" : "Services"}
      description={
        isAr
          ? "خدمات استشارية وتنفيذية للمستوردين — من البحث عن المصانع إلى ضمان الجودة."
          : "Consulting and execution services for importers — from factory search to quality assurance."
      }
      hubPath={`/${activeLocale}/services`}
      cards={services.map((s) => ({
        title: s.title,
        description: s.shortDescription,
        href: `/${activeLocale}/services/${s.slug}`,
      }))}
    />
  );
}
