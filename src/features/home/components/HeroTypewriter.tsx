"use client";

import React, { useState, useEffect } from "react";

interface HeroTypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function HeroTypewriter({
  phrases,
  typingSpeed = 70,
  deleteSpeed = 35,
  pauseDuration = 2500,
  className = "",
}: HeroTypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentFullPhrase = phrases[phraseIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentFullPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullPhrase.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing full phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullPhrase.slice(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={`inline-block text-gradient-gold-animated min-h-[1.3em] ${className}`}>
      {displayedText}
      <span className="inline-block w-[3px] h-[0.9em] ml-1 mr-1 bg-[#C7A15C] animate-pulse align-baseline rounded-full" />
    </span>
  );
}
