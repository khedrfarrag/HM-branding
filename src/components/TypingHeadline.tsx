"use client";

import HeroTypewriter from "@/features/home/components/HeroTypewriter";

interface TypingHeadlineProps {
  phrases: string[];
}

export default function TypingHeadline({ phrases }: TypingHeadlineProps) {
  if (!phrases || phrases.length === 0) return null;

  return (
    <div className="relative w-full min-h-[3.2em] sm:min-h-[2.8em] flex items-center justify-start">
      <HeroTypewriter
        phrases={phrases}
        typingSpeed={60}
        deleteSpeed={30}
        pauseDuration={2800}
        className="w-full text-start text-gradient-gold-animated leading-snug"
      />
    </div>
  );
}
