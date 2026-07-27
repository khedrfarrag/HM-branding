"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingHeadlineProps {
  phrases: string[];
}

export default function TypingHeadline({ phrases }: TypingHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!phrases || phrases.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4500); // Switch phrase smoothly every 4.5s

    return () => clearInterval(timer);
  }, [phrases]);

  if (!phrases || phrases.length === 0) return null;

  return (
    <span className="relative block w-full text-start align-top min-h-[2.5em] sm:min-h-[2.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="block w-full"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
