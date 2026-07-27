"use client";

import type { Locale } from "@/features/i18n";
import type { HomeDictionary } from "../types";
import { cn } from "@/lib/utils";
import TypingHeadline from "@/components/TypingHeadline";
import FloatingSocials from "@/components/FloatingSocials";
import BookingSection from "./BookingSection";
import InteractiveGlobeMap from "./InteractiveGlobeMap";
import {
  RevealSection,
  StaggerReveal,
  StaggerItem,
  fadeUp,
  fadeIn,
  slideInLeft,
} from "@/components/ScrollReveal";
import { motion } from "framer-motion";

interface HomePageProps {
  locale: Locale;
  dict: HomeDictionary;
}

export default function HomePage({ locale, dict }: HomePageProps) {
  return (
    <div className="relative w-full">
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO SECTION — Lock height on mobile to prevent shaking
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-black via-[#0B0D11] to-black px-sp-5 pt-[120px] pb-sp-8 md:px-sp-8 lg:pt-sp-12 lg:pb-sp-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_60%_30%,black,transparent_75%)]" />
        
        {/* Animated Conic Light Beam */}
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[140%] w-[60%] animate-beam-rotate bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(199,161,92,0.05),transparent_30%)] filter blur-[40px]" />

        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-sp-6 lg:grid-cols-[1.15fr_0.85fr] w-full">

          {/* Hero Visual — shown FIRST on mobile, second on desktop */}
          <div className="relative flex items-center justify-center order-first lg:order-last h-[300px] sm:h-[360px] lg:h-[580px]">
            <FloatingSocials locale={locale} />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-start text-start order-last lg:order-first">
            <div className="badge mb-sp-4">
              <span className="dot" />
              {dict.hero.badge}
            </div>

            <h1 className="mt-sp-2 font-display text-fs-display font-bold leading-lh-tight tracking-tight text-white w-full">
              <TypingHeadline phrases={dict.hero.phrases} />
            </h1>

            <p className="mt-sp-4 max-w-[540px] text-fs-body font-light leading-lh-relaxed text-silver lg:text-fs-body-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-sp-6 flex flex-col w-full gap-sp-3 sm:flex-row sm:flex-wrap sm:gap-sp-4">
              <a
                href="#book"
                className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-sp-6 text-sm font-medium text-black shadow-gold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_14px_50px_rgba(199,161,92,0.32)]"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href="#global"
                className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center rounded-full border border-glass bg-glass px-sp-6 text-sm font-medium text-white backdrop-blur-[24px] transition-all duration-300 hover:bg-glass-strong hover:translate-y-[-2px]"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-sp-8 grid grid-cols-3 gap-sp-4 w-full sm:flex sm:gap-sp-8">
              {dict.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <b className="font-mono text-fs-h3 sm:text-fs-h2 font-medium text-white">{stat.value}</b>
                  <span className="mt-sp-1 text-[10px] sm:text-fs-micro tracking-wider text-silver-dim uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. ABOUT SECTION — fade up on scroll
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="bg-white px-sp-6 py-sp-10 text-black md:px-sp-8">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-sp-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left: text — slides in from left */}
          <RevealSection variants={slideInLeft}>
            <div className="flex flex-col items-start text-start">
              <span className="eyebrow text-blue-mid before:bg-blue-mid">{dict.about.eyebrow}</span>
              <h2 className="mt-sp-4 font-display text-fs-h2 font-semibold leading-lh-snug tracking-tight">
                {dict.about.title}
              </h2>
              <p className="mt-sp-5 text-fs-body-lg font-light leading-lh-relaxed text-ink-dim">
                {dict.about.lead}
              </p>
              <div className="mt-sp-6 border-l-2 border-gold pl-sp-5 text-lg font-normal leading-normal text-ink">
                &ldquo;{dict.about.quote}&rdquo;
                <span className="mt-sp-3 block font-mono text-fs-small text-ink-dim font-light">{dict.about.author}</span>
              </div>
            </div>
          </RevealSection>

          {/* Right: value cards + timeline — stagger */}
          <StaggerReveal className="flex flex-col gap-sp-5">
            <div className="grid grid-cols-1 gap-sp-5 sm:grid-cols-2">
              {dict.about.values.map((val, idx) => (
                <StaggerItem key={idx}>
                  <div
                    className={cn(
                      "rounded-lg p-sp-6 border border-black/5 bg-[#F1EFE9] transition-all hover:-translate-y-1 hover:shadow-md h-full",
                      idx === 1 && "bg-ink text-white"
                    )}
                  >
                    <div className="font-mono text-fs-micro text-gold">{val.num}</div>
                    <h4 className="mt-sp-3 font-display text-fs-h3 font-semibold">{val.title}</h4>
                    <p className={cn("mt-sp-2 text-fs-small leading-lh-relaxed text-ink-dim", idx === 1 && "text-silver")}>
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* Timeline Widget */}
            <StaggerItem>
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-ink to-blue-deep p-sp-6 text-white">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan/10 filter blur-3xl" />
                <h4 className="relative z-10 font-display text-fs-h3 font-semibold text-start">{dict.about.timelineTitle}</h4>
                <div className="mt-sp-5 grid grid-cols-1 gap-sp-5 sm:grid-cols-3">
                  {dict.about.timeline.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start text-start">
                      <b className="font-mono text-fs-small text-gold">{item.year}</b>
                      <p className="mt-sp-2 text-fs-micro leading-lh-relaxed text-silver">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. GLOBAL EXPERIENCE SECTION — Interactive Circular Radar Globe Map
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="global" className="border-y border-glass bg-graphite-900 px-sp-4 sm:px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full flex flex-col gap-sp-8">

          {/* Section Header */}
          <RevealSection variants={fadeUp}>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-sp-3">
              <span className="eyebrow">{dict.global.eyebrow}</span>
              <h2 className="font-display text-fs-h2 font-semibold tracking-tight text-white">
                {dict.global.title}
              </h2>
              <p className="text-fs-small sm:text-fs-body font-light text-silver leading-lh-relaxed">
                {dict.global.subtitle}
              </p>
            </div>
          </RevealSection>

          {/* Interactive Globe Map */}
          <RevealSection variants={fadeUp} amount={0.1}>
            <InteractiveGlobeMap
              locale={locale}
              mapTitle={dict.global.mapTitle}
              subtitle={dict.global.mapSyncing}
            />
          </RevealSection>

          {/* Global Metrics Cards Grid */}
          <StaggerReveal className="grid grid-cols-2 sm:grid-cols-4 gap-sp-4 w-full">
            {dict.global.metrics.map((metric, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col items-start text-start rounded-xl border border-glass bg-white/[0.03] p-sp-5 gap-sp-2 h-full">
                  <span className="font-mono text-[10px] sm:text-fs-micro text-silver-dim uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <div className="font-display text-fs-h2 sm:text-fs-h1 font-bold text-white">
                    {metric.value} <span className="font-mono text-xs text-gold">{metric.sub}</span>
                  </div>
                  <div className="relative mt-auto h-[4px] w-full rounded-full bg-graphite-700 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-cyan rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. INDUSTRIES SECTION (BENTO GRID)
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="industries" className="bg-black px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <RevealSection variants={fadeUp}>
            <div className="mb-sp-8 flex flex-wrap items-end justify-between gap-sp-4">
              <div className="flex flex-col items-start text-start">
                <span className="eyebrow">{dict.industries.eyebrow}</span>
                <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.industries.title}</h2>
              </div>
              <a href="#book" className="btn btn-glass">
                {dict.industries.cta}
              </a>
            </div>
          </RevealSection>

          <StaggerReveal className="grid grid-cols-1 gap-sp-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.industries.sectors.map((sector, idx) => {
              const bgGradients = [
                "from-graphite-700 to-black",
                "from-blue-deep to-black",
                "from-[#22262e] to-black",
                "from-[#181B20] to-[#0E1014]",
                "from-graphite-600 to-black",
              ];
              return (
                <StaggerItem key={idx}>
                  <div
                    className={cn(
                      "group relative flex flex-col justify-end overflow-hidden rounded-lg border border-glass bg-gradient-to-br p-sp-6 min-h-[220px] transition-transform hover:-translate-y-1.5 cursor-pointer h-full",
                      bgGradients[idx % bgGradients.length]
                    )}
                  >
                    <div className="absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full bg-gold/5 group-hover:bg-gold/10 filter blur-xl transition-all" />
                    <div className="relative z-10 flex flex-col items-start text-start">
                      <span className="font-mono text-fs-micro text-gold">{sector.idx}</span>
                      <h4 className="mt-sp-3 font-display text-fs-h3 font-semibold text-white leading-snug">
                        {sector.title}
                      </h4>
                      <p className="mt-sp-2 text-fs-small text-silver font-light leading-lh-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-sp-3">
                        {sector.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. SERVICES TRACK
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="services" className="bg-white px-sp-6 py-sp-10 text-black md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <RevealSection variants={fadeUp}>
            <div className="flex flex-wrap items-end justify-between gap-sp-4">
              <div className="flex flex-col items-start text-start">
                <span className="eyebrow text-blue-mid before:bg-blue-mid">{dict.services.eyebrow}</span>
                <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.services.title}</h2>
              </div>
              <div className="font-mono text-fs-micro text-ink-dim flex items-center gap-sp-1">
                {dict.services.hint} &rarr;
              </div>
            </div>
          </RevealSection>

          <StaggerReveal className="mt-sp-8 flex gap-sp-5 overflow-x-auto pb-sp-4 scrollbar-hide snap-x" amount={0.05}>
            {dict.services.items.map((svc, idx) => (
              <StaggerItem key={idx}>
                <div className="flex min-h-[380px] w-[320px] flex-shrink-0 snap-start flex-col justify-between rounded-lg bg-[#F1EFE9] border border-black/5 p-sp-6 transition-transform hover:-translate-y-1.5">
                  <div className="flex flex-col items-start text-start">
                    <span className="font-display text-fs-display font-light text-black/15">{svc.num}</span>
                    <h4 className="mt-sp-4 font-display text-fs-h3 font-semibold leading-snug">{svc.title}</h4>
                    <p className="mt-sp-3 text-fs-body font-light text-ink-dim leading-lh-relaxed">{svc.desc}</p>
                  </div>
                  <div className="mt-sp-5 flex flex-wrap gap-sp-2">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full bg-white/60 px-sp-3 py-1 font-mono text-[9px] uppercase tracking-wider text-blue-mid border border-black/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. JOURNEY (TIMELINE) — Fully optimized for mobile with proper spacing,
             interactive cards, and a beautiful vertical timeline bar!
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="journey" className="bg-graphite-900 px-sp-4 sm:px-sp-6 py-sp-12 md:py-sp-16 md:px-sp-8 pt-[80px]">
        <div className="mx-auto max-w-[1360px] w-full">
          <RevealSection variants={fadeUp}>
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-sp-2">
              <span className="eyebrow">{dict.journey.eyebrow}</span>
              <h2 className="font-display text-fs-h2 font-semibold tracking-tight text-white">
                {dict.journey.title}
              </h2>
            </div>
          </RevealSection>

          {/* Timeline Container with Spacing & Line */}
          <div className="relative mt-sp-10 flex flex-col gap-sp-6 sm:gap-sp-8">
            {/* Center Line for Desktop, Side Line for Mobile */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold/20 -translate-x-1/2" />

            {/* Each journey item staggers in individually */}
            <StaggerReveal amount={0.05} className="flex flex-col gap-sp-6 sm:gap-sp-8">
              {dict.journey.items.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <StaggerItem key={idx}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "relative flex flex-col md:flex-row items-start md:items-center pl-10 sm:pl-0",
                        isEven ? "md:justify-start" : "md:justify-end"
                      )}
                    >
                      {/* Timeline Bullet Node */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gold border-[4px] border-graphite-900 shadow-[0_0_15px_rgba(199,161,92,0.6)] z-10" />

                      {/* Card Container */}
                      <div
                        className={cn(
                          "w-full md:w-[46%] rounded-2xl border border-glass bg-gradient-to-br from-graphite-800/90 to-graphite-900 p-sp-6 backdrop-blur-md shadow-xl transition-all hover:border-gold/50 flex flex-col text-start gap-sp-2",
                          isEven ? "md:text-right md:items-end" : "md:text-left md:items-start"
                        )}
                      >
                        <div className="flex items-center gap-sp-2">
                          <span className="font-mono text-fs-small font-bold text-gold bg-gold/10 px-sp-3 py-1 rounded-full border border-gold/20">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-display text-fs-h3 font-bold text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-fs-small sm:text-fs-body leading-lh-relaxed text-silver font-light">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. TESTIMONIALS — stagger cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="testimonials" className="bg-[#0B0D11] px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <RevealSection variants={fadeUp}>
            <div className="mb-sp-8 flex flex-col items-start text-start">
              <span className="eyebrow">{dict.testimonials.eyebrow}</span>
              <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.testimonials.title}</h2>
            </div>
          </RevealSection>

          <StaggerReveal className="grid grid-cols-1 gap-sp-5 md:grid-cols-3">
            {dict.testimonials.items.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col justify-between min-h-[260px] rounded-lg border border-glass bg-graphite-900/50 p-sp-6 transition-transform hover:-translate-y-1 h-full">
                  <p className="font-display text-fs-body-lg leading-lh-relaxed text-white italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-sp-5 flex items-center gap-sp-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-blue-deep border border-glass" />
                    <div className="flex flex-col items-start text-start">
                      <b className="text-fs-small font-medium text-white">{item.author}</b>
                      <span className="font-mono text-fs-micro text-silver-dim mt-sp-1">{item.role}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. BOOKING SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <RevealSection variants={fadeIn} amount={0.05}>
        <BookingSection dict={dict} locale={locale} />
      </RevealSection>

      {/* ══════════════════════════════════════════════════════════════════════
          9. FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <RevealSection variants={fadeUp} amount={0.05}>
        <footer className="border-t border-glass bg-black px-sp-6 pt-sp-8 pb-sp-6 md:px-sp-8">
          <div className="mx-auto max-w-[1360px] w-full">
            <div className="grid grid-cols-1 gap-sp-8 pb-sp-6 md:grid-cols-2 lg:grid-cols-4 border-b border-glass">
              <div className="flex flex-col items-start text-start">
                <div className="font-display text-fs-h2 font-semibold text-white" dangerouslySetInnerHTML={{ __html: dict.footer.tagline }} />
                <p className="mt-sp-4 text-fs-micro font-light text-silver leading-lh-relaxed max-w-[280px]">
                  {dict.footer.desc}
                </p>
              </div>
              
              <div className="flex flex-col items-start text-start">
                <h5 className="font-mono text-fs-micro text-silver-dim uppercase tracking-wider mb-sp-4">
                  {dict.footer.quickLinks ?? "Quick Links"}
                </h5>
                {dict.nav.links.map((link, idx) => (
                  <a key={idx} href={link.href} className="text-fs-small text-silver hover:text-gold mb-sp-2.5 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col items-start text-start">
                <h5 className="font-mono text-fs-micro text-silver-dim uppercase tracking-wider mb-sp-4">
                  {dict.footer.contactDetails ?? "Contact Details"}
                </h5>
                <span className="text-fs-small text-silver mb-sp-2">mabrouk@meridian-co.com</span>
                <span className="text-fs-small text-silver mb-sp-2">+20 120 400 9000</span>
                <span className="text-fs-small text-silver">{dict.footer.locations ?? "Rotterdam · Dubai · Cairo"}</span>
              </div>

              <div className="flex flex-col items-start text-start">
                <h5 className="font-mono text-fs-micro text-silver-dim uppercase tracking-wider mb-sp-4">
                  {dict.footer.certification ?? "Certification"}
                </h5>
                <span className="text-fs-small text-silver mb-sp-2">ISO 9001:2015</span>
                <span className="text-fs-small text-silver">WCO Compliance Assured</span>
              </div>
            </div>

            <div className="mt-sp-5 flex flex-wrap justify-between items-center gap-sp-3">
              <span className="font-mono text-fs-micro text-silver-dim">{dict.footer.copy}</span>
              <div className="flex gap-sp-2">
                {["LinkedIn", "Twitter", "Email"].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="h-9 w-9 rounded-full border border-glass flex items-center justify-center font-mono text-fs-micro text-silver hover:bg-gold hover:text-black hover:border-gold hover:-translate-y-1 transition-all"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </RevealSection>
    </div>
  );
}