import React from "react";
import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/features/i18n";
import ToolsHubLayout from "@/features/tools/components/ToolsHubLayout";

interface PageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "أدوات التاجر المجانية | حاسبة CBM، الشحن، التكلفة الواصلة وهامش الربح — حسام مبروك"
      : "Free Merchant Tools | CBM Calculator, Landed Cost & Profit Margin — Hussam Mabrouk",
    description: isAr
      ? "حاسبات تجارية مجانية 100% بدون تسجيل حساب: حساب CBM للحاوية، الوزن الحجمي للشحن الجوي والبحري، تكلفة الاستيراد الواصلة، وهامش الربح الصافي والـ ROI."
      : "100% free trade calculators with zero signup barrier: CBM container calculator, volumetric weight, total import landed cost, net margin & ROI.",
    keywords: [
      "حاسبة CBM",
      "حاسبة الشحن",
      "حاسبة تكلفة الاستيراد",
      "حساب الوزن الحجمي",
      "حاسبة هامش الربح",
      "CBM calculator",
      "Landed cost calculator",
      "Volumetric weight calculator",
      "China shipping rates",
    ],
    openGraph: {
      title: isAr
        ? "أدوات التاجر المجانية | حسام مبروك خبير التجارة والتصنيع من الصين"
        : "Free Merchant Tools | Hussam Mabrouk Import & Trade Expert",
      description: isAr
        ? "أدوات مجانية لحساب CBM، تكلفة الاستيراد، الوزن الحجمي والأرباح بلمسة واحدة."
        : "Free trade tools for computing CBM, import landed cost, volumetric weight & ROI.",
    },
  };
}

export default async function ToolsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Schema.org WebApplication structured data for SEO rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": locale === "ar" ? "أدوات التاجر المجانية — حسام مبروك" : "Free Merchant Tools — Hussam Mabrouk",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": locale === "ar"
      ? "حاسبات مجانية لحساب الحجم CBM والوزن الحجمي وتكلفة الاستيراد الواصلة وهامش الربح بدون تسجيل حساب."
      : "Free merchant calculators for CBM, volumetric weight, landed cost, and net margins.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black pt-sp-10 pb-sp-16">
        <ToolsHubLayout locale={locale} dict={dict} />
      </main>
    </>
  );
}
