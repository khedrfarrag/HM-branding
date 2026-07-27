"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ── Ultra-Smooth, Lightweight Variants (No Jumpiness) ─────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

// ── Reusable Reveal Section Wrapper ───────────────────────────────────────────

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Amount of element that must be visible to trigger (0–1) */
  amount?: number;
}

/**
 * Wraps any section with an ultra-fast, smooth reveal animation that triggers
 * instantly when entering the viewport without delaying or jumping layout.
 */
export function RevealSection({
  children,
  className,
  variants = fadeUp,
  amount = 0.01,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container that reveals children quickly when scrolled into view.
 */
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  delay?: number;
}

export function StaggerReveal({
  children,
  className,
  amount = 0.01,
  delay = 0,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger child — wrap list items with this.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
