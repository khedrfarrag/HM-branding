"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  locale: string;
}

const navLinks = {
  ar: [
    { label: "عن المؤسس", href: "#about" },
    { label: "الوصول العالمي", href: "#global" },
    { label: "القطاعات", href: "#industries" },
    { label: "الخدمات", href: "#services" },
    { label: "المسيرة", href: "#journey" },
    { label: "الشركاء", href: "#testimonials" }
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Global Reach", href: "#global" },
    { label: "Industries", href: "#industries" },
    { label: "Services", href: "#services" },
    { label: "Journey", href: "#journey" },
    { label: "Clients", href: "#testimonials" }
  ]
};

const ctaText = {
  ar: "احجز مكالمة",
  en: "Book a Call"
};

const logoText = {
  ar: "حسام مبروك",
  en: "Hussam Mabrouk"
};

export default function Header({ locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAr = locale === "ar";
  const links = navLinks[isAr ? "ar" : "en"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-sp-5 transition-all duration-500 ease-[var(--ease)]",
          (scrolled || menuOpen) && "border-b border-glass bg-black/80 py-sp-3 backdrop-blur-[18px]"
        )}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-sp-5 md:px-sp-8">
          {/* Logo */}
          <a href="#hero" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 font-display text-[1.1rem] sm:text-[1.15rem] font-semibold tracking-tight text-white select-none">
            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[9px] bg-gradient-to-br from-gold-soft via-gold to-blue-mid font-mono text-[11px] font-bold text-black">
              HM
            </span>
            <span className="hidden sm:inline whitespace-nowrap">{logoText[isAr ? "ar" : "en"]}</span>
            <span className="inline sm:hidden whitespace-nowrap">{isAr ? "حسام" : "Hussam"}</span>
          </a>

          {/* Nav links — Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-xs text-silver transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-500 after:ease-[var(--ease)] hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Language Switcher & Burger Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <LanguageSwitcher activeLocale={locale} />
            
            {/* Book a Call — responsive text/icon */}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-[36px] w-[36px] sm:w-auto sm:px-5 items-center justify-center rounded-full border border-glass bg-glass text-white backdrop-blur-[24px] transition-all duration-500 ease-[var(--ease)] hover:bg-glass-strong hover:-translate-y-0.5"
              title={ctaText[isAr ? "ar" : "en"]}
            >
              <Calendar className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline text-[11px] font-medium whitespace-nowrap">{ctaText[isAr ? "ar" : "en"]}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-glass bg-glass text-white backdrop-blur-[24px] md:hidden hover:bg-glass-strong cursor-pointer active:scale-95 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/98 pt-[90px] px-sp-6 pb-sp-8 md:hidden flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-sp-4 mt-sp-4">
              {links.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-fs-h3 text-silver font-light hover:text-white transition-colors duration-300 border-b border-glass/40 pb-sp-3 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gold-soft font-mono text-sm opacity-55">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>
            
            <div className="flex flex-col gap-sp-4 pb-sp-4">
              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="flex h-[50px] w-full items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold text-sm font-medium text-black active:scale-98 transition-all duration-300"
              >
                {ctaText[isAr ? "ar" : "en"]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
