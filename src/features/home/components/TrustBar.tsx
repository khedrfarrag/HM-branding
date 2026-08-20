"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrustBarProps {
  labels?: (string | { text: string })[];
  locale?: string;
  className?: string;
}

export default function TrustBar({ labels = [], locale = "ar", className }: TrustBarProps) {
  if (!labels || labels.length === 0) return null;

  const normalizedLabels = labels.map((label) =>
    typeof label === "string" ? label : label.text
  );

  // Duplicate list once (2 identical sets) for seamless 50% infinite loop
  const marqueeLabels = [...normalizedLabels, ...normalizedLabels];

  const isRtl = locale === "ar";

  return (
    <div
      className={cn(
        "w-full border-y border-white/10 bg-[#0B0D11] py-sp-6 sm:py-sp-8 overflow-hidden backdrop-blur-xl relative z-20 select-none",
        className
      )}
    >
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex flex-nowrap items-center gap-sp-4 sm:gap-sp-8 py-sp-2"
          animate={{ x: isRtl ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeLabels.map((label, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="flex-shrink-0 inline-flex items-center gap-sp-3 sm:gap-sp-4 rounded-xl sm:rounded-2xl border border-gold/30 bg-gradient-to-r from-[#14171f]/90 via-[#1a1e28]/90 to-[#14171f]/90 px-sp-6 py-sp-3.5 sm:px-sp-8 sm:py-sp-4 backdrop-blur-xl shadow-[0_6px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-gold hover:shadow-[0_0_35px_rgba(199,161,92,0.3)] cursor-pointer"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gold/10 border border-gold/40">
                <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_10px_#C7A15C] animate-pulse" />
              </div>
              <span className="font-display text-sm sm:text-base md:text-lg font-bold text-white tracking-wide whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
