import React from "react";
import Link from "next/link";
import { getNavigationConfig } from "@/config/navigation";
import type { Locale } from "@/domains/shared/value-objects";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const isAr = locale === "ar";
  const nav = getNavigationConfig(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/60 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Brand row */}
        <div className="mb-10 pb-8 border-b border-white/5">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 font-mono text-xs font-bold text-black">
              HM
            </span>
            <span className="font-bold text-white text-lg">
              {isAr ? "حسام مبروك" : "Hussam Mabrouk"}
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            {isAr
              ? "مستشار الاستيراد من الصين — مؤسس شركة دلتا للاستيراد والتصدير."
              : "China Import Consultant — Founder of Delta Import & Export."}
          </p>
          <div className="flex gap-3 mt-5">
            {nav.footer.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-gray-400 hover:text-amber-400 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300"
              >
                {s.platform}
              </a>
            ))}
          </div>
        </div>

        {/* 5 footer columns per navigation contract */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {nav.footer.columns.map((column) => (
            <div key={column.label}>
              <h3 className="text-white font-semibold text-sm mb-4">{column.label}</h3>
              <ul className="space-y-2">
                {column.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>
            © {currentYear} {isAr ? "حسام مبروك — جميع الحقوق محفوظة" : "Hussam Mabrouk — All rights reserved."}
          </span>
          <div className="flex flex-wrap gap-4 justify-center">
            {nav.footer.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
