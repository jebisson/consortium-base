export const prerender = true;

import { tenant } from "../config/tenant";

const body = `User-agent: *
Allow: /

Sitemap: ${tenant.siteUrl}/sitemap.xml`;

export const GET = () =>
  new Response(body, { headers: { "Content-Type": "text/plain" } });
