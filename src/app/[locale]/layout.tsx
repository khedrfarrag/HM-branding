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

export const metadata: Metadata = {
  title: "Hussam Mabrouk — Meridian & Co.",
  description: "Moving the world's goods, quietly building trust. Two decades of import, export and sourcing across 40+ countries.",
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
