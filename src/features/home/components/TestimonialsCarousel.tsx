"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

interface TestimonialsCarouselProps {
  items: TestimonialItem[];
  locale?: string;
}

export default function TestimonialsCarousel({ items, locale = "ar" }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isRtl = locale === "ar";

  // Calculate items per view based on viewport (default to 3 on desktop)
  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay timer
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden py-sp-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Controls & Slide Index Header */}
      <div className="mb-sp-6 flex items-center justify-between">
        <div className="flex items-center gap-sp-2">
          <span className="font-mono text-fs-micro text-gold">
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalItems).padStart(2, "0")}
          </span>
          <span className="text-fs-micro text-silver-dim">• 15 شهادة شريك نجاح</span>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-sp-3">
          <button
            onClick={isRtl ? nextSlide : prevSlide}
            aria-label="Previous review"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-glass bg-graphite-900/80 text-white transition-all hover:border-gold hover:bg-gold/10 active:scale-95"
          >
            {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
          <button
            onClick={isRtl ? prevSlide : nextSlide}
            aria-label="Next review"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-glass bg-graphite-900/80 text-white transition-all hover:border-gold hover:bg-gold/10 active:scale-95"
          >
            {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Testimonials Slider Track */}
      <div className="grid grid-cols-1 gap-sp-5 md:grid-cols-3">
        {[0, 1, 2].map((offset) => {
          const itemIndex = (currentIndex + offset) % totalItems;
          const item = items[itemIndex];
          const rating = item.rating || 5;

          return (
            <motion.div
              key={`${itemIndex}-${item.author}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`flex flex-col justify-between rounded-xl border border-glass bg-graphite-900/50 p-sp-6 backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:-translate-y-1 hover:shadow-gold-glow min-h-[280px] ${
                offset > 0 ? "hidden md:flex" : "flex"
              }`}
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-sp-4">
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-gold/30" />
                </div>

                {/* Review Text */}
                <p className="font-display text-fs-body leading-lh-relaxed text-silver-light italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-sp-6 flex items-center gap-sp-3 pt-sp-4 border-t border-glass/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-blue-deep/60 border border-gold/40 font-mono text-fs-small font-bold text-gold">
                  {item.author.slice(0, 1)}
                </div>
                <div className="flex flex-col items-start text-start overflow-hidden">
                  <b className="text-fs-small font-medium text-white truncate w-full">{item.author}</b>
                  <span className="font-mono text-fs-micro text-silver-dim truncate w-full mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="mt-sp-8 flex items-center justify-center gap-sp-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to review ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-gold"
                : "w-2 bg-graphite-700 hover:bg-silver-dim"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
