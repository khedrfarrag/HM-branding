"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

interface SuggestionPillsProps {
  onSelectPrompt: (prompt: string) => void;
  locale: string;
}

export default function SuggestionPills({ onSelectPrompt, locale }: SuggestionPillsProps) {
  const isAr = locale === "ar";

  const suggestions = isAr
    ? [
        { label: "🇨🇳 كيف أتحقق من مصنع في الصين؟", prompt: "كيف أتحقق من مصنع في الصين وأتجنب النصب؟" },
        { label: "📦 ما الفرق بين FOB و CIF؟", prompt: "ما الفرق بين مصطلحات الشحن FOB و CIF؟" },
        { label: "📞 كيف أحجز استشارة مباشرة؟", prompt: "كيف أحجز استشارة استيراد مباشرة مع حسام مبروك؟" },
        { label: "🔍 ما خطوات فحص الشحنات والجودة؟", prompt: "ما هي خطوات فحص الشحنات وضبط الجودة قبل الشحن؟" },
      ]
    : [
        { label: "🇨🇳 How to verify China factories?", prompt: "How to audit China factories and avoid scams?" },
        { label: "📦 FOB vs CIF shipping terms?", prompt: "What is the difference between FOB and CIF?" },
        { label: "📞 Book executive consultation?", prompt: "How do I book a direct sourcing call with Hussam Mabrouk?" },
        { label: "🔍 Quality control inspection steps?", prompt: "What are the pre-shipment quality inspection steps?" },
      ];

  return (
    <div className="flex flex-wrap gap-2 py-2">
      {suggestions.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onSelectPrompt(item.prompt)}
          className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-black/60 px-3 py-1.5 text-xs text-silver hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-200 cursor-pointer active:scale-95 text-start"
        >
          <HelpCircle className="h-3.5 w-3.5 text-gold shrink-0" />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
