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
    migration: string;
    rmm: string;
    formation: string;
    conseil: string;
    support: string;
    dell: string;
    automate: string;
    lexique: string;
    survey: string;
    contact: string;
  };
  law25: string;
  optional: string;
  notes: string;
  companyName: string;
  contactPerson: string;
  contactTitle: string;
  address: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  memberQuestion: string;
  federationQuestion: string;
  companyTypeQuestion: string;
  yes: string;
  no: string;
  dontKnow: string;
  heardAbout: string;
  cooperative: string;
  mutuelle: string;
  obnl: string;
  other: string;
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
  resourcesTitle: string;
  resourceItems: { title: string; desc: string; cta: string }[];
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
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
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
  heroSub: string;
  pills: string[];
  introTitle: string;
  introCards: { title: string; desc: string }[];
  sectionsTitle: string;
  sections: {
    num: string;
    title: string;
    intro: string;
    items: string[];
    note: string;
  }[];
  neverTitle: string;
  neverItems: string[];
  clickedTitle: string;
  clickedDesc: string;
  clickedSteps: { n: string; t: string; d: string }[];
  reportTitle: string;
  reportDesc: string;
  reportItems: string[];
  reportNote: string;
  summaryTitle: string;
  summaryItems: string[];
  summaryNote: string;
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
  plans: { title: string; price: string; subtitle: string; bullets: string[]; recommended?: boolean }[];
  priceNote: string;
  pricingUnit: string;
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
  heroTitle: string;
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
}

export interface MigrationTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  pills: string[];
  benefitsTitle: string;
  benefitsDesc: string;
  benefits: { icon: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  formTitle: string;
  formCloseBtn: string;
}

export interface SupportTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  heroTags: string[];
  featuresTitle: string;
  featuresDesc: string;
  features: { title: string; desc: string }[];
  plansTitle: string;
  plansDesc: string;
  plans: { title: string; hours: string; subtitle: string; bullets: string[] }[];
  priceNote: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaOpenBtn: string;
  formTitle: string;
  formCloseBtn: string;
  formOrgLabel: string;
  formEmailLabel: string;
  formTelLabel: string;
  formPlanLabel: string;
  formPlans: { value: string; label: string }[];
  formMsgLabel: string;
  formSubmitBtn: string;
}

export interface DellTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  heroTags: string[];
  badgeText: string;
  advantagesTitle: string;
  advantagesDesc: string;
  advantages: { title: string; desc: string }[];
  productsTitle: string;
  productsDesc: string;
  products: { title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaOpenBtn: string;
  formTitle: string;
  formCloseBtn: string;
  formOrgLabel: string;
  formEmailLabel: string;
  formTelLabel: string;
  formNeedLabel: string;
  formMsgLabel: string;
  formSubmitBtn: string;
}

export interface AutomateTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  heroTags: string[];
  benefitsTitle: string;
  benefitsDesc: string;
  benefits: { title: string; desc: string }[];
  usecasesTitle: string;
  usecasesDesc: string;
  usecases: { title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaOpenBtn: string;
  formTitle: string;
  formCloseBtn: string;
  formOrgLabel: string;
  formEmailLabel: string;
  formTelLabel: string;
  formMsgLabel: string;
  formSubmitBtn: string;
}

export interface LexiqueTranslations {
  title: string;
  headerSubtitle: string;
  heroTitle: string;
  heroDesc: string;
  searchPlaceholder: string;
  noResults: string;
  terms: { term: string; def: string }[];
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
  questions: string[];
}

export interface Translations {
  common: CommonTranslations;
  home: HomeTranslations;
  backup: BackupTranslations;
  security: SecurityTranslations;
  guide: GuideTranslations;
  migration: MigrationTranslations;
  rmm: RmmTranslations;
  formation: FormationTranslations;
  conseil: ConseilTranslations;
  support: SupportTranslations;
  dell: DellTranslations;
  automate: AutomateTranslations;
  lexique: LexiqueTranslations;
  survey: SurveyTranslations;
}
