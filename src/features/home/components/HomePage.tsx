import type { Locale } from "@/features/i18n";
import type { HomeDictionary } from "../types";
import { cn } from "@/lib/utils";
import TypingHeadline from "@/components/TypingHeadline";
import FloatingSocials from "@/components/FloatingSocials";

interface HomePageProps {
  locale: Locale;
  dict: HomeDictionary;
}

export default function HomePage({ locale, dict }: HomePageProps) {
  return (
    <div className="relative w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-black via-[#0B0D11] to-black px-sp-5 pt-[110px] pb-sp-8 md:px-sp-8 lg:pt-sp-12 lg:pb-sp-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_60%_30%,black,transparent_75%)]" />
        
        {/* Animated Conic Light Beam */}
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[140%] w-[60%] animate-beam-rotate bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(199,161,92,0.05),transparent_30%)] filter blur-[40px]" />

        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-sp-6 lg:grid-cols-[1.15fr_0.85fr] w-full">

          {/* Hero Visual ظ¤ shown FIRST on mobile, second on desktop */}
          <div className="relative flex items-center justify-center order-first lg:order-last h-[300px] sm:h-[360px] lg:h-[580px]">
            <FloatingSocials locale={locale} />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-start text-start order-last lg:order-first">
            <div className="badge mb-sp-4">
              <span className="dot" />
              {dict.hero.badge}
            </div>

            <h1 className="mt-sp-2 font-display text-fs-display font-bold leading-lh-tight tracking-tight text-white w-full min-h-[80px] sm:min-h-[100px] lg:min-h-[180px]">
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

      {/* 2. ABOUT SECTION */}
      <section id="about" className="bg-white px-sp-6 py-sp-10 text-black md:px-sp-8">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-sp-8 lg:grid-cols-[0.9fr_1.1fr]">
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

          <div className="flex flex-col gap-sp-5">
            <div className="grid grid-cols-1 gap-sp-5 sm:grid-cols-2">
              {dict.about.values.map((val, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-lg p-sp-6 border border-black/5 bg-[#F1EFE9] transition-all hover:-translate-y-1 hover:shadow-md",
                    idx === 1 && "bg-ink text-white"
                  )}
                >
                  <div className="font-mono text-fs-micro text-gold">{val.num}</div>
                  <h4 className="mt-sp-3 font-display text-fs-h3 font-semibold">{val.title}</h4>
                  <p className={cn("mt-sp-2 text-fs-small leading-lh-relaxed text-ink-dim", idx === 1 && "text-silver")}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline Widget */}
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
          </div>
        </div>
      </section>

      {/* 3. GLOBAL EXPERIENCE SECTION */}
      <section id="global" className="border-y border-glass bg-graphite-900 px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <div className="flex flex-wrap items-end justify-between gap-sp-5">
            <div className="flex flex-col items-start text-start">
              <span className="eyebrow">{dict.global.eyebrow}</span>
              <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.global.title}</h2>
            </div>
            <p className="max-w-[380px] text-start text-fs-small font-light text-silver">
              {dict.global.subtitle}
            </p>
          </div>

          <div className="mt-sp-8 grid grid-cols-1 items-stretch overflow-hidden rounded-xl border border-glass bg-gradient-to-b from-graphite-800 to-graphite-900 lg:grid-cols-[1fr_320px]">
            {/* Map Placeholder */}
            <div className="relative flex min-h-[400px] items-center justify-center p-sp-6 bg-black/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_50%_50%,rgba(199,161,92,0.06),transparent_80%)]" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="font-mono text-fs-micro text-gold uppercase tracking-wider">
                  {dict.global.mapTitle ?? "Live Logistics Map"}
                </div>
                <div className="mt-sp-4 flex h-[240px] w-[240px] items-center justify-center rounded-full border border-glass/40 bg-glass/10 backdrop-blur-md">
                  <span className="animate-pulse font-mono text-[10px] text-cyan">
                    {dict.global.mapSyncing ?? "Syncing active channels..."}
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="flex flex-col gap-sp-5 border-t border-glass bg-white/5 p-sp-6 lg:border-t-0 lg:border-l">
              {dict.global.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start text-start border-b border-glass pb-sp-4 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-fs-micro text-silver-dim uppercase tracking-wider">{metric.label}</span>
                  <div className="mt-sp-1 font-display text-fs-h1 font-semibold text-white">
                    {metric.value} <span className="font-mono text-xs text-gold">{metric.sub}</span>
                  </div>
                  <div className="relative mt-sp-3 h-[4px] w-full rounded-full bg-graphite-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-cyan rounded-full transition-all duration-1000"
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SECTION (BENTO GRID) */}
      <section id="industries" className="bg-black px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <div className="mb-sp-8 flex flex-wrap items-end justify-between gap-sp-4">
            <div className="flex flex-col items-start text-start">
              <span className="eyebrow">{dict.industries.eyebrow}</span>
              <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.industries.title}</h2>
            </div>
            <a href="#book" className="btn btn-glass">
              {dict.industries.cta}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-sp-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.industries.sectors.map((sector, idx) => {
              const bgGradients = [
                "from-graphite-700 to-black",
                "from-blue-deep to-black",
                "from-[#22262e] to-black",
                "from-[#181B20] to-[#0E1014]",
                "from-graphite-600 to-black"
              ];
              return (
                <div
                  key={idx}
                  className={cn(
                    "group relative flex flex-col justify-end overflow-hidden rounded-lg border border-glass bg-gradient-to-br p-sp-6 min-h-[220px] transition-transform hover:-translate-y-1.5 cursor-pointer",
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SERVICES TRACK */}
      <section id="services" className="bg-white px-sp-6 py-sp-10 text-black md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <div className="flex flex-wrap items-end justify-between gap-sp-4">
            <div className="flex flex-col items-start text-start">
              <span className="eyebrow text-blue-mid before:bg-blue-mid">{dict.services.eyebrow}</span>
              <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.services.title}</h2>
            </div>
            <div className="font-mono text-fs-micro text-ink-dim flex items-center gap-sp-1">
              {dict.services.hint} &rarr;
            </div>
          </div>

          <div className="mt-sp-8 flex gap-sp-5 overflow-x-auto pb-sp-4 scrollbar-hide snap-x">
            {dict.services.items.map((svc, idx) => (
              <div
                key={idx}
                className="flex min-h-[380px] w-[320px] flex-shrink-0 snap-start flex-col justify-between rounded-lg bg-[#F1EFE9] border border-black/5 p-sp-6 transition-transform hover:-translate-y-1.5"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* 6. JOURNEY (TIMELINE) */}
      <section id="journey" className="bg-graphite-900 px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <div className="text-center max-w-xl mx-auto flex flex-col items-center">
            <span className="eyebrow">{dict.journey.eyebrow}</span>
            <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight text-white">{dict.journey.title}</h2>
          </div>

          <div className="relative mt-sp-8 flex flex-col">
            {/* Timeline Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-graphite-700 via-gold to-graphite-700 -translate-x-1/2 hidden md:block" />

            {dict.journey.items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center mb-sp-6 last:mb-0",
                    isEven ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Bullet Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-[4px] border-graphite-900 shadow-[0_0_0_6px_rgba(199,161,92,0.12)] hidden md:block" />
                  
                  {/* Card Container */}
                  <div
                    className={cn(
                      "w-full md:w-[45%] rounded-lg border border-glass bg-graphite-800 p-sp-5 flex flex-col text-start",
                      isEven ? "md:text-right md:items-end" : "md:text-left md:items-start"
                    )}
                  >
                    <span className="font-mono text-fs-micro text-gold">{item.year}</span>
                    <h4 className="mt-sp-2 font-display text-fs-h3 font-semibold text-white leading-snug">{item.title}</h4>
                    <p className="mt-sp-3 text-fs-small leading-lh-relaxed text-silver font-light">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section id="testimonials" className="bg-[#0B0D11] px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <div className="mb-sp-8 flex flex-col items-start text-start">
            <span className="eyebrow">{dict.testimonials.eyebrow}</span>
            <h2 className="mt-sp-3 font-display text-fs-h2 font-semibold tracking-tight">{dict.testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-sp-5 md:grid-cols-3">
            {dict.testimonials.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between min-h-[260px] rounded-lg border border-glass bg-graphite-900/50 p-sp-6 transition-transform hover:-translate-y-1"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOK MEETING SECTION */}
      <section id="book" className="bg-black px-sp-6 py-sp-10 md:px-sp-8">
        <div className="mx-auto max-w-[1360px] w-full">
          <div className="overflow-hidden rounded-2xl border border-glass bg-gradient-to-br from-blue-deep via-black to-[#0C0E12] grid grid-cols-1 lg:grid-cols-2 relative">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/5 filter blur-3xl" />
            
            <div className="p-sp-6 md:p-sp-8 flex flex-col items-start text-start relative z-10">
              <span className="eyebrow">{dict.book.eyebrow}</span>
              <h3 className="mt-sp-3 font-display text-fs-h2 font-semibold leading-tight text-white">
                {dict.book.title}
              </h3>
              <p className="mt-sp-5 text-fs-body font-light leading-lh-relaxed text-silver">
                {dict.book.desc}
              </p>

              {/* Consultation Details Card */}
              <div className="mt-sp-6 w-full max-w-[420px] rounded-lg border border-glass bg-glass p-sp-5 backdrop-blur-[24px]">
                <div className="flex justify-between border-b border-glass pb-sp-2.5 font-mono text-fs-micro text-silver-dim tracking-wider uppercase">
                  <span>{dict.book.details.duration}</span>
                </div>
                <div className="flex justify-between border-b border-glass py-sp-2.5 font-mono text-fs-micro text-silver-dim tracking-wider uppercase">
                  <span>{dict.book.details.location}</span>
                </div>
                <div className="flex justify-between pt-sp-2.5 font-mono text-fs-micro text-silver-dim tracking-wider uppercase">
                  <span>{dict.book.details.timezone}</span>
                </div>
              </div>
            </div>

            {/* Time Slot Scheduler Mock */}
            <div className="p-sp-6 md:p-sp-8 flex flex-col justify-center relative z-10 lg:border-l lg:border-glass bg-white/[0.01]">
              <span className="slot-label text-start mb-sp-3">{dict.book.slots.label}</span>
              <div className="grid grid-cols-3 gap-sp-2">
                {["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"].map((time, idx) => (
                  <div key={idx} className={cn("slot", idx === 1 && "active")}>
                    {time}
                  </div>
                ))}
              </div>
              <button className="mt-sp-6 w-full h-[52px] rounded-full bg-gradient-to-b from-gold-soft to-gold text-sm font-semibold text-black hover:-translate-y-0.5 hover:shadow-md transition-all">
                {dict.book.slots.confirm}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
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
    </div>
  );
}