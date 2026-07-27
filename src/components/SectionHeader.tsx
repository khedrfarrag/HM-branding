import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "right" | "center" | "left";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "right",
  className,
}: SectionHeaderProps) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
      ? "text-left"
      : "text-right ml-auto";

  return (
    <div className={cn("mb-12 max-w-3xl space-y-3", alignmentClass, className)}>
      {badge && (
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-widest text-[#C7A15C] uppercase bg-[#C7A15C]/10 border border-[#C7A15C]/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-gold-animated leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
