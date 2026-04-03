export const prerender = true;

import { tenant } from "../config/tenant";

const base = tenant.siteUrl;

const pages = [
  "",
  "/securite365",
  "/sauvegarde365",
  "/rmm-edr-kaseya365",
  "/formation-integration",
  "/service-conseil",
  "/migration-sharepoint",
  "/support-ti",
  "/dell",
  "/power-automate",
  "/survey",
  "/contact",
  "/lexique-ti",
  "/guide-employe",
];

const urls = pages.flatMap((p) => [
  { loc: `${base}/fr${p}`, lang: "fr" },
  { loc: `${base}/en${p}`, lang: "en" },
]);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ loc, lang }) => {
  const otherLang = lang === "fr" ? "en" : "fr";
  const otherLoc = loc.replace(`/${lang}/`, `/${otherLang}/`).replace(`/${lang}`, `/${otherLang}`);
  return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="${otherLang}" href="${otherLoc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc.replace(`/${lang}`, "/fr")}"/>
    <changefreq>monthly</changefreq>
    <priority>${lang === "fr" && loc.endsWith(base + "/fr") ? "1.0" : "0.8"}</priority>
  </url>`;
}).join("\n")}
</urlset>`;

export const GET = () =>
  new Response(xml, { headers: { "Content-Type": "application/xml" } });
