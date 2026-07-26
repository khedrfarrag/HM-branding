import type { Locale } from "@/features/i18n";
import type { getDictionary } from "@/features/i18n/get-dictionary";

export type HomeDictionary = Awaited<ReturnType<typeof getDictionary>>;

export interface HomeSectionProps {
  locale: Locale;
  dict: HomeDictionary;
  isAr: boolean;
}
