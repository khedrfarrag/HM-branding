import { getDictionary, type Locale } from "@/features/i18n";
import { HomePage } from "@/features/home";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "حسام مبروك | خبير الاستيراد والتجارة الدولية — Meridian & Co."
    : "Hussam Mabrouk | Global Trade & Supply Chain Specialist — Meridian & Co.";

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
  return <HomePage locale={locale} dict={dict} />;
}
