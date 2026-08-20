"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const numericMatch = value.match(/\d+(\.\d+)?/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.slice(0, value.indexOf(numericMatch?.[0] || ""));
  const suffix = value.slice(
    (value.indexOf(numericMatch?.[0] || "") + (numericMatch?.[0].length || 0))
  );

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds animation
    const steps = 45;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayCount(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? displayCount : 0}
      {suffix}
    </span>
  );
}
