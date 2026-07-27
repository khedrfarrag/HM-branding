import type { Metadata } from "next";
import { Beiruti, Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";

const beiruti = Beiruti({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
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
 * Note: html + body tags are provided by the ROOT src/app/layout.tsx.
 * This layout sets lang, dir, and fonts via suppressHydrationWarning on <html>.
 * We use the React trick of overriding html attributes via a custom element.
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
    ? `${beiruti.variable}`
    : `${bricolage.variable} ${inter.variable} ${jetbrains.variable}`;

  return (
    <div lang={locale} dir={dir} className={`${fontClasses} min-h-screen`}>
      <div className="noise" />
      <CursorGlow />
      {children}
    </div>
  );
}
