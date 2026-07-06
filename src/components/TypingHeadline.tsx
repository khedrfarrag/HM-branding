"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingHeadlineProps {
  phrases: string[];
}

export default function TypingHeadline({ phrases }: TypingHeadlineProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    let timer: NodeJS.Timeout;
    const fullText = phrases[currentPhraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(30); // delete faster
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        setTypingSpeed(80); // standard typing speed
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      setTypingSpeed(250); // Pause before next word
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <span className="relative">
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block w-[3px] h-[1em] bg-gold-soft ml-1"
        style={{ verticalAlign: "middle", marginTop: "-0.15em" }}
      />
    </span>
  );
}
