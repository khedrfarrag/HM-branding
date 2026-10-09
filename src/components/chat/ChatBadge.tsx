"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MessageSquare, X } from "lucide-react";

interface ChatBadgeProps {
  isOpen: boolean;
  onClick: () => void;
  locale: string;
}

export default function ChatBadge({ isOpen, onClick, locale }: ChatBadgeProps) {
  const isAr = locale === "ar";

  return (
    <button
      onClick={onClick}
      aria-label={isAr ? "مساعد حسام مبروك الذكي" : "Hossam AI Assistant"}
      className="group relative flex items-center gap-3 rounded-full border border-gold/40 bg-gradient-to-r from-black via-graphite-900 to-black p-2 pr-4 shadow-[0_0_25px_rgba(245,158,11,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] active:scale-95 z-50 cursor-pointer"
    >
      {/* Profile Image Frame with Pulsing Status Ring */}
      <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-gold/60">
        <Image
          src="/images/WhatsApp Image 2026-08-12 at 6.58.46 PM.jpeg"
          alt="Hossam Mabrouk AI"
          fill
          className="object-cover object-top"
        />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black animate-pulse" />
      </div>

      {/* Label Text */}
      <div className="text-start hidden sm:block">
        <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-gold">
          <Sparkles className="h-3 w-3 text-gold animate-spin-slow" />
          {isAr ? "مساعد الذكاء الاصطناعي" : "AI Consultant"}
        </span>
        <span className="font-display text-xs font-bold text-white group-hover:text-gold transition-colors block">
          {isOpen
            ? isAr
              ? "إغلاق المحادثة"
              : "Close Chat"
            : isAr
            ? "استشر حسام مبروك"
            : "Ask Hussam AI"}
        </span>
      </div>

      {/* Toggle Icon */}
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/30 shrink-0 group-hover:bg-gold group-hover:text-black transition-colors">
        {isOpen ? <X className="h-3.5 w-3.5" /> : <MessageSquare className="h-3.5 w-3.5" />}
      </div>
    </button>
  );
}
