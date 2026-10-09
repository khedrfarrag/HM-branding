"use client";

import React from "react";
import Link from "next/link";
import { Calendar, PhoneCall } from "lucide-react";

interface ChatCTAProps {
  locale: string;
}

export default function ChatCTA({ locale }: ChatCTAProps) {
  const isAr = locale === "ar";

  return (
    <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
      <Link
        href={`/${locale}#book`}
        className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-3 py-1.5 font-mono text-xs font-bold text-black hover:bg-gold-soft transition-colors"
      >
        <Calendar className="h-3.5 w-3.5" />
        <span>{isAr ? "احجز استشارة مباشرة" : "Book Executive Call"}</span>
      </Link>
      <a
        href="https://wa.me/201070707166"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1.5 font-mono text-xs font-bold text-gold hover:bg-gold/20 transition-colors"
      >
        <PhoneCall className="h-3.5 w-3.5" />
        <span>{isAr ? "تواصل عبر الواتساب" : "WhatsApp Inquiry"}</span>
      </a>
    </div>
  );
}
