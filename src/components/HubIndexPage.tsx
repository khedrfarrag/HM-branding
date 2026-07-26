import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import type { Locale } from "@/domains/shared/value-objects";

export interface HubCardItem {
  title: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface HubSection {
  title: string;
  cards: HubCardItem[];
}

interface HubIndexPageProps {
  locale: Locale;
  title: string;
  description: string;
  hubPath: string;
  cards: HubCardItem[];
  sections?: HubSection[];
}

export default function HubIndexPage({
  locale,
  title,
  description,
  hubPath,
  cards,
  sections,
}: HubIndexPageProps) {
  const isAr = locale === "ar";
  const homeLabel = isAr ? "الرئيسية" : "Home";

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: homeLabel, item: `/${locale}` },
    { name: title, item: hubPath },
  ]);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <JsonLd schema={breadcrumbSchema} />

      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="hover:text-white transition-colors">
          {homeLabel}
        </Link>
        <span>/</span>
        <span className="text-amber-500 font-semibold">{title}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">{description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300"
          >
            {card.badge && (
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 block">
                {card.badge}
              </span>
            )}
            <h2 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
              {card.title}
            </h2>
            {card.description && (
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{card.description}</p>
            )}
          </Link>
        ))}
      </div>

      {sections?.map((section) => (
        <section key={section.title} className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-5 border-b border-white/10 pb-3">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-lg border border-white/10 bg-black/40 p-4 hover:border-amber-500/30 transition-colors"
              >
                <h3 className="font-medium text-white">{card.title}</h3>
                {card.description && (
                  <p className="mt-1 text-sm text-gray-400">{card.description}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
