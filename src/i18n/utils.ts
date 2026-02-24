import type { Translations } from "./types";

// Lazy-load translations to avoid circular imports
const modules: Record<string, () => Promise<{ default: Translations }>> = {
  fr: () => import("./fr"),
  en: () => import("./en"),
};

const cache: Partial<Record<string, Translations>> = {};

export async function getTranslations(lang: string): Promise<Translations> {
  const locale = lang === "en" ? "en" : "fr";
  if (cache[locale]) return cache[locale]!;
  const mod = await modules[locale]();
  cache[locale] = mod.default;
  return mod.default;
}

// Synchronous version using static imports — used in .astro frontmatter
import fr from "./fr";
import en from "./en";

const translationsMap: Record<string, Translations> = { fr, en };

export function t(lang: string): Translations {
  return translationsMap[lang] ?? translationsMap["fr"];
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  return lang === "en" ? "en" : "fr";
}

export function getOtherLang(lang: string): string {
  return lang === "fr" ? "en" : "fr";
}

export function localePath(lang: string, path: string): string {
  return `/${lang}${path}`;
}
