import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hossammabrouk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "حسام مبروك | خبير الاستيراد والتجارة الدولية",
    template: "%s | حسام مبروك",
  },
  description: "شريكك المستمر لتأمين سلاسل التوريد، حلول الاستيراد المباشر من الصين، وتنفيذ الصفقات التجارية بأعلى معايير الجودة والأمان.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root layout that wraps ALL routes including (admin).
 * Locale-specific routes (/[locale]/*) have their own nested layout.tsx
 * that overrides <html lang> and <dir> per locale.
 *
 * The (admin) route group has no locale prefix, so it falls back here.
 * Next.js requires exactly ONE html+body pair in the tree.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="antialiased bg-[#07090C] text-white">
        {children}
      </body>
    </html>
  );
}
