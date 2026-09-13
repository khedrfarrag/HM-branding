"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Ship,
  Factory,
  Globe,
  TrendingUp,
  Package,
  Cpu,
  Handshake,
  Star,
  MapPin,
} from "lucide-react";

interface TrustBarProps {
  labels?: (string | { text: string })[];
  locale?: string;
  className?: string;
}

// Assign an icon to each label by index (cycles if more labels than icons)
const ICONS = [Globe, Factory, Ship, Briefcase, TrendingUp, Package, Cpu, Handshake, Star, MapPin];

// Two complementary accent color sets that alternate between rows
const ROW_ACCENTS = [
  { border: "border-gold/25", glow: "hover:shadow-[0_0_28px_rgba(199,161,92,0.3)]", dot: "bg-gold", dotGlow: "shadow-[0_0_8px_#C7A15C]", iconColor: "text-gold" },
  { border: "border-amber-400/20", glow: "hover:shadow-[0_0_28px_rgba(251,191,36,0.25)]", dot: "bg-amber-400", dotGlow: "shadow-[0_0_8px_rgba(251,191,36,0.8)]", iconColor: "text-amber-300" },
];

export default function TrustBar({ labels = [], locale = "ar", className }: TrustBarProps) {
  if (!labels || labels.length === 0) return null;

  const normalizedLabels = labels.map((label) =>
    typeof label === "string" ? label : label.text
  );

  const isRtl = locale === "ar";

  // Create two rows with offset duplication for seamless loop
  const row1 = [...normalizedLabels, ...normalizedLabels, ...normalizedLabels];
  const row2 = [...normalizedLabels.slice(2), ...normalizedLabels, ...normalizedLabels, ...normalizedLabels.slice(0, 2)];

  const Pill = ({
    label,
    idx,
    accentIdx,
  }: {
    label: string;
    idx: number;
    accentIdx: number;
  }) => {
    const Icon = ICONS[idx % ICONS.length];
    const accent = ROW_ACCENTS[accentIdx];

    return (
      <motion.div
        whileHover={{ scale: 1.06, y: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "flex-shrink-0 inline-flex items-center gap-2.5 rounded-2xl border px-4 py-2 sm:px-5 sm:py-2.5",
          "bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent",
          "backdrop-blur-xl cursor-pointer select-none",
          "transition-all duration-300",
          "hover:border-gold/60 hover:bg-white/[0.07]",
          accent.border,
          accent.glow,
          "shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Icon */}
        <div className={cn(
          "flex h-6 w-6 items-center justify-center rounded-lg",
          "bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20"
        )}>
          <Icon className={cn("w-3 h-3", accent.iconColor)} strokeWidth={2.5} />
        </div>

        {/* Label */}
        <span className="font-display text-xs sm:text-sm font-semibold text-white/90 tracking-wide whitespace-nowrap leading-none">
          {label}
        </span>

        {/* Animated status dot */}
        <span className={cn(
          "h-1.5 w-1.5 rounded-full animate-pulse flex-shrink-0",
          accent.dot,
          accent.dotGlow
        )} />
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden relative z-20 select-none",
        "bg-gradient-to-b from-[#090B0F] via-[#0B0D11] to-[#090B0F]",
        "border-y border-white/[0.06]",
        "py-4 sm:py-5",
        className
      )}
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#090B0F] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#090B0F] to-transparent" />

      {/* Row 1 — scrolls in primary direction */}
      <div className="w-full overflow-hidden mb-2.5 sm:mb-3">
        <motion.div
          className="flex flex-nowrap items-center gap-2.5 sm:gap-3"
          animate={{ x: isRtl ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {row1.map((label, idx) => (
            <Pill key={`r1-${idx}`} label={label} idx={idx} accentIdx={0} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls in opposite direction, slightly faster */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex flex-nowrap items-center gap-2.5 sm:gap-3"
          animate={{ x: isRtl ? ["-33.33%", "0%"] : ["33.33%", "0%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          {row2.map((label, idx) => (
            <Pill key={`r2-${idx}`} label={label} idx={idx + 2} accentIdx={1} />
          ))}
        </motion.div>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </div>
  );
}
