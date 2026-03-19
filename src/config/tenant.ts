/**
 * Tenant configuration loader.
 * Set TENANT=consortium or TENANT=eesad in your .env file.
 * Defaults to "consortium".
 */

export interface TenantConfig {
  id: string;
  name: string;
  logoSrc: string;
  faviconSrc: string;
  siteUrl: string;
  consent: { fr: string; en: string };
  colors: {
    background: string;
    text: string;
    accent: string;
    border: string;
    bandBackground: string;
    glowColor: string;
    cardBackground: string;
  };
}

const tenants: Record<string, TenantConfig> = {
  consortium: {
    id: "consortium",
    name: "Consortium",
    logoSrc: "/logo_consortium.png",
    faviconSrc: "/favicon-consortium.svg",
    siteUrl: "https://consortium-base.vercel.app",
    consent: {
      fr: "J'accepte, après avoir cliqué sur le bouton « Envoyer », que le Consortium utilise l'information fournie ci-dessus pour me contacter par message électronique ou par le téléphone au sujet de cette demande ainsi que ponctuellement au sujet des services du Consortium. Il est possible de se désinscrire des communications du Consortium à tout moment en écrivant à l'adresse communications@ressources.coop.",
      en: "I agree, after clicking the \"Send\" button, that the Consortium may use the information provided above to contact me by email or by phone regarding this request and occasionally regarding the Consortium's services. You may unsubscribe from Consortium communications at any time by writing to communications@ressources.coop.",
    },
    colors: {
      background: "rgb(18, 18, 18)",
      text: "#ffffff",
      accent: "rgb(225, 162, 9)",
      border: "rgba(225,162,9,0.30)",
      bandBackground: "rgb(245, 245, 245)",
      glowColor: "rgba(225,162,9,0.22)",
      cardBackground: "rgb(18, 18, 18)",
    },
  },
  eesad: {
    id: "eesad",
    name: "le réseau des EESAD",
    logoSrc: "/eesad-logo.png",
    faviconSrc: "/favicon-eesad.svg",
    siteUrl: "https://eesad.vercel.app",
    consent: {
      fr: "J'accepte, après avoir cliqué sur le bouton « Envoyer », que le réseau des EESAD utilise l'information fournie ci-dessus pour me contacter par message électronique ou par le téléphone au sujet de cette demande ainsi que ponctuellement au sujet des services du réseau des EESAD. Il est possible de se désinscrire des communications du réseau des EESAD à tout moment en écrivant à l'adresse communications@ressources.coop.",
      en: "I agree, after clicking the \"Send\" button, that the Réseau des EESAD may use the information provided above to contact me by email or by phone regarding this request and occasionally regarding the Réseau des EESAD's services. You may unsubscribe from Réseau des EESAD communications at any time by writing to communications@ressources.coop.",
    },
    colors: {
      background: "rgb(12, 22, 65)",
      text: "#e5e7eb",
      accent: "#38bdf8",
      border: "rgba(56,189,248,0.30)",
      bandBackground: "#cce0f5",
      glowColor: "rgba(96, 165, 250, 0.40)",
      cardBackground: "rgb(23, 45, 90)",
    },
  },
};

function getActiveTenant(): TenantConfig {
  const tenantId = import.meta.env.TENANT ?? "consortium";
  return tenants[tenantId] ?? tenants["consortium"];
}

export const tenant = getActiveTenant();
export default tenant;
