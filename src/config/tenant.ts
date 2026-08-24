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
  /**
   * Optional direct-email address for a "prefer email?" quick-contact link,
   * shown alongside the contact form. Omit to show the form only.
   */
  contactEmail?: string;
  /**
   * Optional per-page SEO overrides. When set, these take priority over the
   * shared i18n copy for that page/lang — used to give a tenant a more
   * keyword-forward title/description than the shared template provides,
   * without touching the copy the other tenants render.
   */
  seo?: {
    home?: { fr?: { title: string; description: string }; en?: { title: string; description: string } };
  };
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
    siteUrl: "https://ti.leconsortium.coop",
    contactEmail: "ti@leconsortium.coop",
    consent: {
      fr: "J'accepte, après avoir cliqué sur le bouton « Envoyer », que le Consortium utilise l'information fournie ci-dessus pour me contacter par message électronique ou par le téléphone au sujet de cette demande ainsi que ponctuellement au sujet des services du Consortium. Il est possible de se désinscrire des communications du Consortium à tout moment en écrivant à l'adresse communications@ressources.coop.",
      en: "I agree, after clicking the \"Send\" button, that the Consortium may use the information provided above to contact me by email or by phone regarding this request and occasionally regarding the Consortium's services. You may unsubscribe from Consortium communications at any time by writing to communications@ressources.coop.",
    },
    seo: {
      home: {
        fr: {
          title: "Services TI pour OBNL et coopératives au Québec | Consortium – Microsoft 365, cybersécurité",
          description: "Services TI pour OBNL, coopératives et mutuelles au Québec : sécurité Microsoft 365, sauvegarde, support géré et gestion TI proactive au juste coût, avec le Consortium.",
        },
        en: {
          title: "IT Services for Nonprofits and Cooperatives in Quebec | Consortium – Microsoft 365, Cybersecurity",
          description: "IT services for nonprofits, cooperatives and mutuals in Quebec: Microsoft 365 security, backup, managed support and proactive IT management at fair cost, with the Consortium.",
        },
      },
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
    name: "le Réseau de coopération des EÉSAD",
    logoSrc: "/eesad-logo.webp",
    faviconSrc: "/favicon-eesad.svg",
    siteUrl: "https://ti.eesad.org",
    consent: {
      fr: "J'accepte, après avoir cliqué sur le bouton « Envoyer », que le Réseau de coopération des EÉSAD utilise l'information fournie ci-dessus pour me contacter par message électronique ou par le téléphone au sujet de cette demande ainsi que ponctuellement au sujet des services du Réseau de coopération des EÉSAD. Il est possible de se désinscrire des communications du Réseau de coopération des EÉSAD à tout moment en écrivant à l'adresse communications@ressources.coop.",
      en: "I agree, after clicking the \"Send\" button, that the Réseau de coopération des EÉSAD may use the information provided above to contact me by email or by phone regarding this request and occasionally regarding the Réseau de coopération des EÉSAD's services. You may unsubscribe from Réseau de coopération des EÉSAD communications at any time by writing to communications@ressources.coop.",
    },
    colors: {
      background: "rgb(20, 38, 95)",
      text: "#e5e7eb",
      accent: "#38bdf8",
      border: "rgba(56,189,248,0.30)",
      bandBackground: "#cce0f5",
      glowColor: "rgba(96, 165, 250, 0.40)",
      cardBackground: "rgb(23, 45, 90)",
    },
  },
  fqcs: {
    id: "fqcs",
    name: "la FQCS",
    logoSrc: "/Logo_FQCS.png",
    faviconSrc: "/favicon-fqcs.svg",
    siteUrl: "https://fqcs.vercel.app",
    consent: {
      fr: "J'accepte, après avoir cliqué sur le bouton « Envoyer », que la FQCS utilise l'information fournie ci-dessus pour me contacter par message électronique ou par le téléphone au sujet de cette demande ainsi que ponctuellement au sujet des services de la FQCS. Il est possible de se désinscrire des communications de la FQCS à tout moment en écrivant à l'adresse communications@ressources.coop.",
      en: "I agree, after clicking the \"Send\" button, that FQCS may use the information provided above to contact me by email or by phone regarding this request and occasionally regarding FQCS's services. You may unsubscribe from FQCS communications at any time by writing to communications@ressources.coop.",
    },
    colors: {
      background: "#f0e8f9",
      text: "#3d3580",
      accent: "#6B3FA0",
      border: "rgba(107, 63, 160, 0.30)",
      bandBackground: "#ffffff",
      glowColor: "rgba(107, 63, 160, 0.22)",
      cardBackground: "#f0e8f9",
    },
  },
};

function getActiveTenant(): TenantConfig {
  const tenantId = import.meta.env.TENANT ?? "consortium";
  return tenants[tenantId] ?? tenants["consortium"];
}

export const tenant = getActiveTenant();
export default tenant;
