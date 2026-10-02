import { getDictionary, type Locale } from "@/features/i18n";
import { HomePage } from "@/features/home";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildEntityGraph } from "@/lib/schema/entity-graph";

// Force real-time dynamic rendering on production (Netlify) for instant consultation slot updates
export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "حسام مبروك | خبير التجارة والتوريد والتصنيع"
    : "Hussam Mabrouk | Global Trade, Sourcing & Manufacturing Specialist";

  const description = isAr
    ? "عقدان من الخبرة في تأمين سلاسل التوريد والاستيراد المباشر من الصين لخدمة المستثمرين والمصنعين عبر 40+ دولة."
    : "Two decades of expertise in direct sourcing from China and securing global supply chains across 40+ countries.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          url: "/images/hossam-mabrouk-hero.jpg",
          width: 1000,
          height: 1000,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const entityGraph = buildEntityGraph(locale);

  return (
    <>
      <JsonLd schema={entityGraph} />
      <HomePage locale={locale} dict={dict} />
    </>
  );
}
