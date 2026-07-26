import React from "react";
import Link from "next/link";
import { Locale } from "@/domains/shared/value-objects";

interface SourcingCTAProps {
  locale: Locale;
}

export default function SourcingCTA({ locale }: SourcingCTAProps) {
  const isAr = locale === "ar";

  return (
    <section className="mt-12 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-black/80 via-[#0E1116] to-[#080A0E] p-8 text-center relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Background glow */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-500/5 filter blur-2xl" />
      <div className="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-cyan-500/5 filter blur-2xl" />

      <div className="relative z-10 max-w-xl mx-auto space-y-4">
        <span className="text-amber-500 font-mono text-xs uppercase tracking-wider">
          {isAr ? "استشارة استراتيجية" : "Strategic Consultation"}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {isAr ? "جاهز لتأمين وتوسيع تجارتك من الصين؟" : "Ready to Secure & Scale Your Sourcing From China?"}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {isAr
            ? "احجز مكالمة استشارية مجانية مدتها 30 دقيقة مع حسام مبروك لمناقشة أهداف الاستيراد، المفاوضات، وتأمين سلاسل الإمداد لمؤسستك."
            : "Book a free 30-minute consultation call with Hussam Mabrouk to discuss your import goals, negotiations, and supply chain security."}
        </p>
        <div className="pt-2">
          <Link
            href={`/${locale}/booking/consultation/book-consultation`}
            className="inline-block rounded-full bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black px-8 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            {isAr ? "احجز استشارتك الآن" : "Schedule Your Call Now"}
          </Link>
        </div>
      </div>
    </section>
  );
}
