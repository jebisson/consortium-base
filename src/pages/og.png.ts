export const prerender = false;

import { ImageResponse } from "@vercel/og";

export const GET = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Services TI";
  const tenant = url.searchParams.get("tenant") || "consortium";

  const themes: Record<string, { bg: string; accent: string; text: string; sub: string }> = {
    consortium: { bg: "#121212", accent: "#E1A209", text: "#ffffff", sub: "rgba(255,255,255,0.65)" },
    eesad:      { bg: "#0C1641", accent: "#38bdf8", text: "#e5e7eb", sub: "rgba(229,231,235,0.60)" },
    fqcs:       { bg: "#f0e8f9", accent: "#6B3FA0", text: "#3d3580", sub: "rgba(61,53,128,0.60)" },
  };

  const t = themes[tenant] ?? themes.consortium;

  const tenantLabels: Record<string, string> = {
    consortium: "Consortium",
    eesad: "Réseau de coopération des EÉSAD",
    fqcs: "FQCS",
  };
  const tenantLabel = tenantLabels[tenant] ?? "Consortium";

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          background: t.bg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        },
        children: [
          // Glow blob top-left
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-120px",
                left: "-120px",
                width: "520px",
                height: "520px",
                borderRadius: "9999px",
                background: `radial-gradient(circle, ${t.accent}44, transparent 70%)`,
                filter: "blur(60px)",
              },
            },
          },
          // Glow blob bottom-right
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "-100px",
                right: "-100px",
                width: "400px",
                height: "400px",
                borderRadius: "9999px",
                background: `radial-gradient(circle, ${t.accent}33, transparent 70%)`,
                filter: "blur(80px)",
              },
            },
          },
          // Top: accent bar + tenant name
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: "16px", position: "relative" },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "48px",
                      height: "6px",
                      borderRadius: "999px",
                      background: t.accent,
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { fontSize: "22px", fontWeight: "600", color: t.sub },
                    children: tenantLabel,
                  },
                },
              ],
            },
          },
          // Middle: title
          {
            type: "div",
            props: {
              style: {
                fontSize: title.length > 40 ? "52px" : "62px",
                fontWeight: "800",
                color: t.text,
                lineHeight: "1.15",
                maxWidth: "900px",
                position: "relative",
              },
              children: title,
            },
          },
          // Bottom: "Services TI" badge
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: "12px", position: "relative" },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      background: `${t.accent}22`,
                      border: `1px solid ${t.accent}55`,
                      borderRadius: "8px",
                      padding: "8px 18px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: t.accent,
                    },
                    children: "Services TI",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
};
