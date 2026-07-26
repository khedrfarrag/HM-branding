import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Locale } from "@/domains/shared/value-objects";

interface MarketingLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MarketingLayout({ children, params }: MarketingLayoutProps) {
  const { locale } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <Header locale={locale} />
      <div className="flex-1 pt-20">{children}</div>
      <Footer locale={locale as Locale} />
    </div>
  );
}
