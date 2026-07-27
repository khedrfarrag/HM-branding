import type { Metadata } from "next";
import { Cairo, Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";

/**
 * ==============================================================================
 * ARABIC FONT CONFIGURATION (تكوين الخط العربي)
 * ==============================================================================
 * To change or customize the Arabic font for the entire website:
 * 1. Import your preferred font from "next/font/google" (e.g. Cairo, Tajawal, IBM_Plex_Sans_Arabic, Almarai).
 * 2. Configure weights and variable name below.
 * 3. The variable "--font-arabic" will automatically apply across all Arabic elements.
 * ==============================================================================
 */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteTitle = "حسام مبروك | خبير الاستيراد والتجارة الدولية — Meridian & Co.";
const siteDescription = "شريكك المستمر لتأمين سلاسل التوريد، حلول الاستيراد المباشر من الصين، وتنفيذ الصفقات التجارية بأعلى معايير الجودة والأمان.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hossammabrouk.com"),
  title: {
    default: siteTitle,
    template: "%s | حسام مبروك",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Hussam Mabrouk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "حسام مبروك — خبير التجارة الدولية وسلاسل التوريد",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

/**
 * Locale nested layout.
 * Applies `--font-arabic` (Cairo) when locale is "ar".
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const fontClasses = isAr
    ? `${cairo.variable} font-sans`
    : `${bricolage.variable} ${inter.variable} ${jetbrains.variable} font-sans`;

  return (
    <div lang={locale} dir={dir} className={`${fontClasses} min-h-screen font-sans`}>
      <div className="noise" />
      <CursorGlow />
      {children}
    </div>
  );
}
