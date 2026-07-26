import TypingHeadline from "@/components/TypingHeadline";
import FloatingSocials from "@/components/FloatingSocials";
import Link from "next/link";
import type { HomeSectionProps } from "../../types";

export function HeroSection({ locale, dict }: HomeSectionProps) {
  const bookingHref = `/${locale}/booking/consultation/general`;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-black via-[#0B0D11] to-black px-sp-5 pt-[110px] pb-sp-8 md:px-sp-8 lg:pt-sp-12 lg:pb-sp-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_60%_30%,black,transparent_75%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[140%] w-[60%] animate-beam-rotate bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(199,161,92,0.05),transparent_30%)] filter blur-[40px]" />

      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-sp-6 lg:grid-cols-[1.15fr_0.85fr] w-full">
        <div className="relative flex items-center justify-center order-first lg:order-last h-[300px] sm:h-[360px] lg:h-[580px]">
          <FloatingSocials locale={locale} />
        </div>

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
            <Link
              href={bookingHref}
              className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-sp-6 text-sm font-medium text-black shadow-gold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_14px_50px_rgba(199,161,92,0.32)]"
            >
              {dict.hero.ctaPrimary}
            </Link>
            <a
              href="#global"
              className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center rounded-full border border-glass bg-glass px-sp-6 text-sm font-medium text-white backdrop-blur-[24px] transition-all duration-300 hover:bg-glass-strong hover:translate-y-[-2px]"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

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
  );
}
