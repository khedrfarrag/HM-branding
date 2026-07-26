import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "HM Admin",
  robots: { index: false, follow: false },
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
