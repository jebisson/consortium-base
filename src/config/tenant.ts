/**
 * Tenant configuration loader.
 * Set TENANT=consortium or TENANT=eesad in your .env file.
 * Defaults to "consortium".
 */

export interface TenantConfig {
  id: string;
  name: string;
  logoSrc: string;
  colors: {
    background: string;
    text: string;
    accent: string;
    border: string;
    bandBackground: string;
    glowColor: string;
  };
}

const tenants: Record<string, TenantConfig> = {
  consortium: {
    id: "consortium",
    name: "Consortium",
    logoSrc: "/logo_consortium.png",
    colors: {
      background: "rgb(18, 18, 18)",
      text: "#ffffff",
      accent: "rgb(225, 162, 9)",
      border: "rgba(225,162,9,0.30)",
      bandBackground: "rgb(245, 245, 245)",
      glowColor: "rgba(225,162,9,0.22)",
    },
  },
  eesad: {
    id: "eesad",
    name: "EÉSAD",
    logoSrc: "/eesad-logo.png",
    colors: {
      background: "rgb(12, 22, 65)",
      text: "#e5e7eb",
      accent: "#38bdf8",
      border: "rgba(56,189,248,0.30)",
      bandBackground: "#183055",
      glowColor: "rgba(96, 165, 250, 0.40)",
    },
  },
};

function getActiveTenant(): TenantConfig {
  const tenantId = import.meta.env.TENANT ?? "consortium";
  return tenants[tenantId] ?? tenants["consortium"];
}

export const tenant = getActiveTenant();
export default tenant;
