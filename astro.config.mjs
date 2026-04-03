import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

const tenantUrls = {
  consortium: "https://consortium-base.vercel.app",
  eesad: "https://eesad.vercel.app",
  fqcs: "https://consortium-base-fqcs.vercel.app",
};

const siteUrl = tenantUrls[process.env.TENANT] ?? tenantUrls.consortium;

export default defineConfig({
  site: siteUrl,
  output: "hybrid",
  adapter: vercel(),
  integrations: [sitemap()],
});
