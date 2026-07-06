import "server-only";

const dictionaries = {
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export type Locale = "ar" | "en";

export const getDictionary = async (locale: Locale) => {
  if (locale !== "ar" && locale !== "en") {
    return dictionaries.ar(); // Fallback to Arabic
  }
  return dictionaries[locale]();
};
