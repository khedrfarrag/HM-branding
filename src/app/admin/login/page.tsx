import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import MagicLinkForm from "@/features/admin/components/MagicLinkForm";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";

export const metadata: Metadata = {
  title: "Admin Login — Hussam Mabrouk",
  description: "Secure admin login for booking management dashboard.",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.admin.login;

  return (
    <main className="min-h-screen bg-[#07090C] flex items-center justify-center px-4" id="admin-login-page" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <span className="text-[#C7A15C] font-bold text-xl tracking-wider">HM</span>
            <span className="text-gray-400 text-sm block mt-1">{t.title}</span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-gray-400 text-sm mb-8">
            {t.subtitle}
          </p>

          {/* Magic Link Form */}
          <MagicLinkForm dict={t} />
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          {t.footer}
        </p>
      </div>
    </main>
  );
}
