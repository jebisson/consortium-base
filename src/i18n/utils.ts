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

// Brand-name display label per tenant, used to swap literal "Consortium"
// mentions baked into the shared i18n copy for other tenants.
export function getTenantLabel(tenantId: string): string {
  if (tenantId === "consortium") return "Consortium";
  if (tenantId === "eesad") return "EÉSAD";
  return tenantId.toUpperCase();
}

// Swap a literal "Le Consortium" / "Consortium" mention in shared copy for
// the active tenant's label. Use this on any string rendered directly in a
// page body or JSON-LD block — SiteLayout already does the equivalent swap
// for <title>/<meta description>, but that doesn't cover raw body text.
//
// No-op for the Consortium tenant itself: the copy is authored for
// Consortium (including cases like "Le Consortium aide..." where the
// article matters), so there's nothing to swap there — only other tenants
// need the brand token replaced.
export function brandify(text: string, tenantId: string): string {
  if (tenantId === "consortium") return text;
  return text.replace(/Le Consortium|Consortium/g, getTenantLabel(tenantId));
}
