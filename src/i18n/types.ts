export interface CommonTranslations {
  backToServices: string;
  sendRequest: string;
  close: string;
  sending: string;
  sent: string;
  sentShort: string;
  errorSend: string;
  errorNetwork: string;
  orgName: string;
  email: string;
  phone: string;
  users: string;
  usersOpt: string;
  message: string;
  subject: string;
  seeMore: string;
  openForm: string;
  requestQuote: string;
  requestCall: string;
  langToggle: string;
  langLabel: string;
  footerText: string;
  nav: {
    home: string;
    sauvegarde: string;
    securite: string;
    guide: string;
    rmm: string;
    formation: string;
    conseil: string;
    survey: string;
  };
  law25: string;
  optional: string;
  notes: string;
}

export interface HomeTranslations {
  title: string;
  headerSubtitle: string;
  tagline: string;
  heroTitle: string;
  heroDesc: string;
  ctaExplore: string;
  sectionTitle: string;
  sectionDesc: string;
  featuredLabel: string;
  featuredTitle: string;
  featuredTitleHighlight: string;
  featuredDesc: string;
  featuredTags: string[];
  featuredCta: string;
  surveyLabel: string;
  surveyTitle: string;
  surveyDesc: string;
  surveyCta: string;
  cards: { title: string; desc: string }[];
  security: { title: string; desc: string };
}

export interface BackupTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  heroDescLine2: string;
  ctaActivate: string;
  ctaWhy: string;
  pills: string[];
  whyTitle: string;
  whySubtitle: string;
  marketingTitle: string;
  marketingDesc: string;
  marketingBadge: string;
  risks: { icon: string; title: string; desc: string }[];
  benefitsTitle: string;
  benefitsDesc: string;
  benefits: { icon: string; title: string; desc: string }[];
  protection: { title: string; desc: string };
  restore: { title: string; desc: string };
  howTitle: string;
  steps: { title: string; desc: string }[];
  complianceTitle: string;
  complianceDesc: string;
  includedTitle: string;
  included: { title: string; desc: string }[];
  whyDattoTitle: string;
  whyDattoDesc: string;
  dattoPoints: { title: string; desc: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  pricingTitle: string;
  pricingDesc: string;
  pricingAmount: string;
  pricingUnit: string;
  pricingBullets: string[];
  activateBtn: string;
  formTitle: string;
  formUsers: string;
  formSendBtn: string;
}

export interface SecurityTranslations {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  hoverHint: string;
  auditLabel: string;
  auditTitle: string;
  auditDesc: string;
  auditBtn: string;
  auditBullets: string[];
  contactLabel: string;
  contactTitle: string;
  contactDesc: string;
  contactBtn: string;
  formTitle: string;
  subjectOptions: { value: string; label: string }[];
  msgPlaceholder: string;
  points: { t: string; lead: string[] }[];
}

export interface GuideTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  pills: string[];
  sections: {
    title: string;
    intro: string;
    tips?: { title: string; text: string }[];
    warning?: { label: string; text: string };
    good?: { label: string; text: string };
    items?: string[];
  }[];
}

export interface RmmTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  ctaPlans: string;
  ctaQuote: string;
  pills: { href: string; label: string }[];
  introTitle: string;
  introDesc: string;
  introBullets: string[];
  introCards: { icon: string; title: string; desc: string }[];
  rmm: { title: string; subtitle: string; cards: { title: string; desc: string }[] };
  edr: { title: string; subtitle: string; cards: { title: string; desc: string }[] };
  k365: { title: string; subtitle: string; cards: { title: string; desc: string }[] };
  plansTitle: string;
  plansSubtitle: string;
  plans: { title: string; price: string; subtitle: string; bullets: string[] }[];
  priceNote: string;
  compTitle: string;
  compHeaders: string[];
  compRows: [string, string, string, string][];
  quoteTitle: string;
  quoteDesc: string;
  quoteOpenBtn: string;
  formTitle: string;
  formUsersLabel: string;
  formServicesLabel: string;
  formServices: { name: string; label: string }[];
  formNotesLabel: string;
  formNotesPh: string;
  compliance: { title: string; desc: string };
}

export interface FormationTranslations {
  title: string;
  headerSubtitle: string;
  heroLabel: string;
  heroTitle: string;
  heroDesc: string;
  heroPills: string[];
  offresTitle: string;
  offresDesc: string;
  offers: { title: string; desc: string; bullets: string[] }[];
  formatsTitle: string;
  formatsDesc: string;
  formats: { title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

export interface ConseilTranslations {
  title: string;
  heroDesc: string;
  heroTags: string[];
  ctaCall: string;
  ctaInclus: string;
  whyTitle: string;
  whyDesc: string;
  whyCards: { title: string; desc: string }[];
  inclusTitle: string;
  inclusDesc: string;
  inclusTag: string;
  inclus: { title: string; desc: string }[];
  nonInclusTitle: string;
  nonInclusDesc: string;
  nonInclus: string[];
  howTitle: string;
  howDesc: string;
  steps: { n: string; t: string; d: string }[];
  law25Title: string;
  law25Desc: string;
  law25Note: string;
  demandeTitle: string;
  demandeDesc: string;
  demandeOpenBtn: string;
  demandeReviewBtn: string;
  formTitle: string;
  formCloseBtn: string;
  formOrgLabel: string;
  formEmailLabel: string;
  formTelLabel: string;
  formTypeLabel: string;
  formTypes: { value: string; label: string }[];
  formMsgLabel: string;
  formSubmitBtn: string;
  formConsent: string;
}

export interface SurveyTranslations {
  title: string;
  heroTitle: string;
  heroDesc: string;
  submitBtn: string;
  resultTitle: string;
  resultDesc: string;
  maxScore: number;
  scoreLabels: { min: number; max: number; label: string; color: string }[];
  sliderLabels: { text: string; score: number }[];
}

export interface Translations {
  common: CommonTranslations;
  home: HomeTranslations;
  backup: BackupTranslations;
  security: SecurityTranslations;
  guide: GuideTranslations;
  rmm: RmmTranslations;
  formation: FormationTranslations;
  conseil: ConseilTranslations;
  survey: SurveyTranslations;
}
