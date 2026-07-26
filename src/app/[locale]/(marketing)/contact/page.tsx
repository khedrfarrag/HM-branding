import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "اتصل بنا — حسام مبروك" : "Contact — Hussam Mabrouk",
    description: isAr
      ? "تواصل مع مكتب حسام مبروك للاستشارات التجارية وتأمين صفقات الاستيراد والتصدير في الصين."
      : "Get in touch with Hussam Mabrouk's office for sourcing consultation and trade logistics.",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/contact` },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";

  const homeLabel = isAr ? "الرئيسية" : "Home";
  const contactLabel = isAr ? "تواصل معنا" : "Contact Us";

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: homeLabel, item: `/${locale}` },
    { name: contactLabel, item: `/${locale}/contact` },
  ]);

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl min-h-screen text-white">
      <JsonLd schema={breadcrumbSchema} />

      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="hover:text-white transition-colors">
          {homeLabel}
        </Link>
        <span>/</span>
        <span className="text-amber-500 font-semibold">{contactLabel}</span>
      </nav>

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-white via-gray-200 to-amber-500">
          {contactLabel}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          {isAr
            ? "نحن هنا لمساعدتك في بناء وتأمين سلاسل التوريد الخاصة بك من الصين. تواصل معنا لمناقشة متطلبات عملك."
            : "We are here to help you establish and secure your supply chains from China. Contact us to discuss your requirements."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-amber-500 mb-6">
              {isAr ? "مكتب الاستشارات" : "Consultation Office"}
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  {isAr ? "البريد الإلكتروني" : "Email"}
                </p>
                <p className="text-lg">office@meridian-co.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  {isAr ? "الهاتف" : "Phone"}
                </p>
                <p className="text-lg">+86 186 8888 8888</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  {isAr ? "مقر العمل الرئيسي" : "Main Office Address"}
                </p>
                <p className="text-lg">
                  {isAr
                    ? "برج مركز التجارة العالمي، قوانغتشو، الصين"
                    : "World Trade Center Tower, Guangzhou, China"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="border border-amber-500/20 bg-amber-500/[0.02] backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {isAr ? "هل تبحث عن حجز استشارة مباشرة؟" : "Looking for direct booking?"}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {isAr
                ? "يمكنك حجز استشارة خاصة مباشرة مع حسام مبروك لتحديد احتياجات مصانعك وشحناتك وتجنب المخاطر القانونية."
                : "You can book a private consultation directly with Hussam Mabrouk to scope your factory needs and avoid legal risks."}
            </p>
          </div>
          <Link
            href={`/${locale}/booking/consultation/book-consultation`}
            className="block text-center w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
          >
            {isAr ? "احجز استشارة الآن" : "Book Consultation Now"}
          </Link>
        </div>
      </div>
    </main>
  );
}
