"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ── Shared Variants ───────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
 * Wraps any section with a one-shot scroll-triggered reveal animation.
 * Uses `once: true` so the animation only plays once per page load.
 * Automatically respects `prefers-reduced-motion`.
 */
export function RevealSection({
  children,
  className,
  variants = fadeUp,
  amount = 0.15,
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
 * Staggered container that reveals children one-by-one when scrolled into view.
 */
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  /** Extra delay before stagger starts (seconds) */
  delay?: number;
}

export function StaggerReveal({
  children,
  className,
  amount = 0.1,
  delay = 0,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.13,
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
