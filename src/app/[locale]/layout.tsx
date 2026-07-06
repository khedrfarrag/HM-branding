import type { Metadata } from "next";
import { Beiruti, Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import CursorGlow from "@/components/CursorGlow";
import "../globals.css";

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

  // Set typography variables based on the locale
  const fontClasses = isAr
    ? `${beiruti.variable}`
    : `${bricolage.variable} ${inter.variable} ${jetbrains.variable}`;

  return (
    <html lang={locale} dir={dir} className={fontClasses}>
      <body className="antialiased">
        <div className="noise" />
        <CursorGlow />
        <Header locale={locale} />
        <main>{children}</main>
      </body>
    </html>
  );
}
