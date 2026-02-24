import type { Translations } from "./types";

const en: Translations = {
  common: {
    backToServices: "← Back to IT Services",
    sendRequest: "Send Request",
    close: "Close",
    sending: "Sending…",
    sent: "Request sent! We'll be in touch shortly.",
    sentShort: "Message sent!",
    errorSend: "Send error. Please try again or contact us.",
    errorNetwork: "Network error. Please try again later.",
    orgName: "Organization name",
    email: "Email",
    phone: "Phone",
    users: "Number of users",
    usersOpt: "Number of users (optional)",
    message: "Message",
    subject: "Subject",
    seeMore: "View page →",
    openForm: "Open form",
    requestQuote: "Request a quote →",
    requestCall: "Request a call",
    langToggle: "FR",
    langLabel: "Français",
    footerText: "IT Services · Consortium",
    nav: {
      home: "Home",
      sauvegarde: "Backup 365",
      securite: "Security 365",
      guide: "Employee Guide",
      rmm: "IT Management",
      formation: "Training",
      conseil: "IT Advisory",
      survey: "Questionnaire",
    },
    law25: "Law 25",
    optional: "(optional)",
    notes: "Notes (optional)",
  },

  home: {
    title: "IT Services – Consortium",
    headerSubtitle: "IT Services",
    tagline: "Security • Modernization • Support",
    heroTitle: "A stable, secure and easy-to-manage IT ecosystem",
    heroDesc:
      "Explore our services and resources to protect Microsoft 365, strengthen your security posture and structure proactive IT management.",
    ctaExplore: "Explore services →",
    sectionTitle: "Services & resources",
    sectionDesc:
      "Choose a service to learn more — each page includes a clear description and a quote request.",
    featuredLabel: "Training & onboarding",
    featuredTitle: "Microsoft 365 & cybersecurity training",
    featuredTitleHighlight: " led by Miguel",
    featuredDesc:
      "New employee onboarding, M365 best practices, incident prevention and hands-on support tailored to your reality.",
    featuredTags: ["Onboarding", "Microsoft 365", "Cybersecurity", "Practical approach"],
    featuredCta: "Discover training →",
    surveyLabel: "Resource",
    surveyTitle: "IT Questionnaire",
    surveyDesc:
      "Get a quick overview of your IT environment to better target recommendations.",
    surveyCta: "Fill out questionnaire →",
    cards: [
      { title: "Microsoft 365 Backup", desc: "Complete protection for emails, files and Teams." },
      { title: "Proactive IT Management", desc: "24/7 monitoring, advanced protection and fast support to ensure stability, security and reduce costs." },
      { title: "Employee Practical Guide", desc: "Digital best practices: simple, clear, ready to share." },
      { title: "IT Advisory Service", desc: "Quote verification, consulting and recommendations (no direct interventions)." },
      { title: "Training & Onboarding", desc: "New employee onboarding + Microsoft 365 & cybersecurity training." },
    ],
    security: {
      title: "Microsoft 365 Security",
      desc: "Cybersecurity, best practices and M365 security posture.",
    },
  },

  backup: {
    title: "Microsoft 365 Cloud Backup – Consortium",
    headerSubtitle: "Backup & Continuity",
    heroTitle: "Microsoft 365 Cloud Backup",
    heroDesc: "Real backup for Microsoft 365.",
    heroDescLine2: "Recover your data in minutes — even after an incident.",
    ctaActivate: "Enable backup",
    ctaWhy: "Why it's essential",
    pills: ["Exchange", "OneDrive", "SharePoint", "Teams", "Data in Canada"],
    whyTitle: "Why an independent backup?",
    whySubtitle: "Because Microsoft 365 is not a recovery strategy.",
    marketingTitle: "Microsoft 365 protects your services… but it's not a backup.",
    marketingDesc:
      "When it happens, you want one thing: recover fast, without stress, without loss, without relying on a \"recovery chance\".",
    marketingBadge: "Granular, fast and independent recovery",
    risks: [
      { icon: "🗑️", title: "Accidental deletion", desc: "Files, emails, folders deleted too quickly." },
      { icon: "🦠", title: "Ransomware & compromise", desc: "OneDrive / SharePoint / Exchange are targets." },
      { icon: "📄", title: "Corrupted files", desc: "Silent alteration, sync issues, wrong versions." },
      { icon: "⏱️", title: "Limited recovery", desc: "Retention, delays, policies: not unlimited." },
      { icon: "👤", title: "Employee departures", desc: "Deleted accounts = lost emails & files." },
    ],
    benefitsTitle: "What you gain",
    benefitsDesc:
      "Operational peace of mind: quickly find what matters, without loss or extended downtime.",
    benefits: [
      { icon: "⚡", title: "Restore in minutes", desc: "(email, file, folder, library)" },
      { icon: "🧩", title: "Granular", desc: ": no need to restore everything to recover one item" },
      { icon: "🛡️", title: "Independent", desc: ": your copy remains accessible even after an incident" },
    ],
    protection: {
      title: "Protection against modern incidents",
      desc: "Backup is your recovery plan: simple, fast, and designed to recover even when everything goes wrong.",
    },
    restore: {
      title: "\"Hassle-free\" restoration",
      desc: "Find an email, document or specific version — quickly — without disrupting anything else.",
    },
    howTitle: "How it works",
    steps: [
      { title: "Connection", desc: "We connect the solution to your Microsoft 365 tenant (secure access, guided configuration)." },
      { title: "Automatic backups", desc: "Regular backups protect Exchange, OneDrive, SharePoint and Teams." },
      { title: "On-demand restoration", desc: "Need to recover? We restore quickly (file, email, folder, etc.)." },
    ],
    complianceTitle: "Compliance & continuity (Law 25)",
    complianceDesc:
      "Law 25 strengthens personal information protection obligations. An independent backup helps ensure continuity and recovery after an incident, while reducing operational impact.",
    includedTitle: "What's included",
    included: [
      { title: "Automatic backup", desc: "Exchange, OneDrive, SharePoint and Teams protected without intervention." },
      { title: "Fast restoration", desc: "Granular recovery: file, email, folder or library." },
      { title: "Hosting in Canada", desc: "An approach aligned with privacy and compliance needs." },
    ],
    whyDattoTitle: "Why Datto",
    whyDattoDesc:
      "Datto is a recognized platform for the robustness of its backups and the quality of its restores. With Consortium IT services, you get guided implementation, human support, and a solution that's simple to operate daily.",
    dattoPoints: [
      { title: "Implementation included", desc: "Initial configuration and backup validation." },
      { title: "Support & guidance", desc: "You're not alone during an incident." },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "\"We already have OneDrive / SharePoint, isn't that secure?\"",
        a: "Secure ≠ backed up. Sync also propagates errors (deletion, corruption). Independent backup lets you roll back quickly.",
      },
      {
        q: "\"Does it protect Teams?\"",
        a: "Yes: the underlying data (SharePoint/OneDrive/Exchange) that feeds Teams is included in the protection.",
      },
      {
        q: "\"How long does restoration take?\"",
        a: "It depends on volume, but the goal is fast, granular restoration (often minutes rather than hours/days).",
      },
      {
        q: "\"Why hosting in Canada?\"",
        a: "To better meet privacy expectations and compliance realities (especially in Quebec).",
      },
    ],
    pricingTitle: "Simple pricing",
    pricingDesc: "Enable independent backup for Microsoft 365, without complexity.",
    pricingAmount: "$3",
    pricingUnit: "/ user / month",
    pricingBullets: [
      "Initial configuration included",
      "36-month commitment",
      "Monthly maintenance included",
      "Exchange, OneDrive, SharePoint and Teams protection",
    ],
    activateBtn: "Enable backup",
    formTitle: "Activation request",
    formUsers: "Number of users",
    formSendBtn: "Send request",
  },

  security: {
    title: "Microsoft 365 Security – Consortium",
    heroTitle: "Make cybersecurity a daily habit.",
    heroSubtitle: "Security and digital resilience — Best practices and modernization with Microsoft 365.",
    hoverHint: "Hover over each point to see the details.",
    auditLabel: "Infrastructure and security",
    auditTitle: "Microsoft 365 Security Audit",
    auditDesc:
      "A quick and concrete overview of your security posture: MFA, admin accounts, external sharing, basic configurations and priority recommendations.",
    auditBtn: "Request audit",
    auditBullets: [
      "Analysis of key Microsoft 365 / Entra ID settings",
      "Prioritized recommendations (quick wins + structural actions)",
      "Clear executive summary",
      "Option: remediation plan (on request)",
      "Verification of the 14 points listed below",
    ],
    contactLabel: "Contact",
    contactTitle: "Tell us about your environment",
    contactDesc:
      "A question about your Microsoft 365 security, an audit ($99), or support? Send us a message.",
    contactBtn: "Open form",
    formTitle: "Contact form",
    subjectOptions: [
      { value: "Audit 365 - 99$", label: "Microsoft 365 Audit ($99)" },
      { value: "Amelioration securite Microsoft 365", label: "Microsoft 365 security improvement" },
      { value: "Soumission services geres", label: "Managed services quote" },
      { value: "Autre", label: "Other" },
    ],
    msgPlaceholder: "E.g.: MFA, admin accounts, external sharing, remote work, Law 25 obligations, etc.",
    points: [
      {
        t: "Modern antivirus protection (IMPORTANT UPDATE)",
        lead: [
          "Microsoft no longer offers the Business Premium license for free, which included a complete suite of security tools. This change opens the door to more powerful third-party security platforms, now available at a comparable cost.",
          "It is now possible to implement an integrated security solution, monitored 24/7, adapted to the needs and financial realities of home care organizations.",
          "Such a solution detects, blocks and corrects threats in real time. EDR (Endpoint Detection and Response) features ensure constant monitoring of abnormal behavior, and any compromised workstation can be automatically isolated to limit the spread of an attack.",
        ],
      },
      {
        t: "System inventory and obsolescence",
        lead: [
          "Using obsolete systems or equipment increases vulnerability risks. Integrating Microsoft Intune or a remote management solution (RMM) maintains a complete and up-to-date asset inventory while automating the detection and replacement of outdated systems.",
        ],
      },
      {
        t: "Vulnerability detection and patch management",
        lead: [
          "An automated update strategy via Windows Update and Intune or the integrated security platform ensures continuous protection against known vulnerabilities. Centralized management allows security patches to be applied quickly across all devices, including remote ones.",
        ],
      },
      {
        t: "Multi-factor authentication (MFA)",
        lead: [
          "Enabling multi-factor authentication through Entra ID significantly strengthens user account security. It prevents unauthorized access even if a password is compromised.",
        ],
      },
      {
        t: "Microsoft 365 data backup and recovery",
        lead: [
          "A Microsoft 365 backup solution covering Exchange, OneDrive, SharePoint and Teams is essential to prevent data loss. Periodic restoration testing and offsite storage ensure operational resilience.",
        ],
      },
      {
        t: "Securing electronic communications",
        lead: [
          "Confidential data exchanges must be protected by encryption and user awareness. Microsoft 365 offers integrated message encryption and data loss prevention (DLP) options.",
        ],
      },
      {
        t: "External vulnerability analysis",
        lead: [
          "Continuous monitoring of Internet-facing services identifies and corrects vulnerabilities quickly. Using Microsoft Defender External Attack Surface Management or an equivalent service enables this proactive monitoring.",
        ],
      },
      {
        t: "Logging and continuous monitoring",
        lead: [
          "Access logging and anomaly detection via Microsoft 365 Defender or the integrated security platform provide complete visibility into security events. Automated alert correlation reduces detection and incident response time.",
        ],
      },
      {
        t: "Account access and modification notifications",
        lead: [
          "Users must be notified of any changes to their account or unusual connections. An integrated security system allows automated alerts to be configured to reinforce transparency and security.",
        ],
      },
      {
        t: "Secure information transmission",
        lead: [
          "Sensitive data must be exchanged using secure and encrypted solutions, such as SharePoint or OneDrive with protected links, rather than unsecured email.",
        ],
      },
      {
        t: "Digital tool usage guidelines",
        lead: [
          "A clear policy on email, Internet and Microsoft 365 tool usage promotes secure and consistent behavior. Employees must know how to respond to a security incident.",
        ],
      },
      {
        t: "Access and privilege management",
        lead: [
          "Rigorous access management based on the least privilege principle must be applied. Entra ID and Intune allow automating the addition, review and revocation of access, including administrative roles.",
        ],
      },
      {
        t: "Security training and culture",
        lead: [
          "Ongoing employee awareness of digital threats — phishing, ransomware, social engineering — strengthens the first line of defense of any organization. Regular training and reminders integrated into Microsoft 365 promote a culture of vigilance.",
        ],
      },
      {
        t: "Security score",
        lead: [
          "Microsoft 365 provides a self-assessment tool for security level within the Defender Admin Center.",
          "This security score provides a clear picture of existing protection measures and those that need to be strengthened to ensure better platform resilience.",
          "However, many organizations still rely on the default Microsoft 365 configuration, which remains insufficient to achieve an optimal security level.",
        ],
      },
    ],
  },

  guide: {
    title: "Employee Practical Guide | Cybersecurity",
    headerSubtitle: "Employee guide",
    heroTitle: "Good digital habits for everyday work",
    heroDesc:
      "This guide helps you adopt simple but essential behaviors to protect your data, your devices and our entire organization.",
    pills: ["Passwords", "Emails", "Remote work", "Incident"],
    sections: [
      {
        title: "Protect your account and passwords",
        intro:
          "Your Microsoft 365 account gives access to your emails, documents and work tools. It must be protected like a vault.",
        tips: [
          { title: "1. A strong, unique password", text: "Use a password manager to ensure strong, different passwords." },
          { title: "2. Multi-factor authentication (MFA)", text: "Always validate MFA notifications. If a request appears without you trying to sign in, reject it immediately." },
        ],
        warning: { label: "Avoid:", text: "sharing or writing down your password." },
      },
      {
        title: "Emails, attachments and phishing",
        intro: "Email is the main attack vector. A single click can compromise an account.",
        tips: [
          { title: "1. Beware of urgent requests", text: "Fraudsters use pressure and urgency." },
          { title: "2. Verify the sender", text: "A name can be imitated — not an email domain." },
          { title: "3. Be careful with attachments", text: "Hover over links before clicking." },
        ],
        good: { label: "Good reflex:", text: "forward suspicious messages to the IT team." },
      },
      {
        title: "Remote work, devices and Wi‑Fi",
        intro: "Your devices must remain secure, up-to-date, and used in a trusted environment.",
        tips: [
          { title: "1. Lock your screen", text: "Always lock before leaving your workstation." },
          { title: "2. Avoid public Wi‑Fi", text: "Use a VPN when available." },
          { title: "3. Updates & antivirus", text: "Never disable EDR protections." },
          { title: "4. Personal data", text: "Do not sync professional data on personal accounts." },
        ],
      },
      {
        title: "In case of doubt or incident, act quickly",
        intro: "A quick reaction can prevent a compromise or the spread of an incident.",
        items: [
          "• Stop clicking and don't respond",
          "• Disconnect your device from the network if necessary",
          "• Contact the IT team immediately",
        ],
      },
    ],
  },

  rmm: {
    title: "Datto RMM, Datto EDR & Kaseya 365 – Consortium",
    headerSubtitle: "Monitoring & Cybersecurity",
    heroTitle: "Datto RMM, Datto EDR & Kaseya 365",
    heroDesc:
      "A proactive approach: monitor, fix, detect and respond — to reduce downtime and block modern threats.",
    ctaPlans: "View plans",
    ctaQuote: "Request a quote",
    pills: [
      { href: "#rmm", label: "Datto RMM" },
      { href: "#edr", label: "Datto EDR" },
      { href: "#k365", label: "Kaseya 365" },
      { href: "#comparatif", label: "Comparison" },
    ],
    introTitle: "A reliable IT infrastructure, no surprises",
    introDesc:
      "The goal: reduce incidents, accelerate support and limit the impact of cyber threats with a proactive approach.",
    introBullets: [
      "24/7 monitoring and alerts",
      "Automated patching and maintenance",
      "Advanced detection (ransomware, suspicious behavior)",
      "Fast incident response",
    ],
    introCards: [
      { icon: "🔍", title: "Full visibility", desc: "Fleet status, alerts, security posture." },
      { icon: "⚙️", title: "Automation", desc: "Patching, scripts, remediations." },
      { icon: "🛡️", title: "Modern protection", desc: "Behavioral detection & response." },
    ],
    rmm: {
      title: "Datto RMM",
      subtitle: "Proactive monitoring & maintenance",
      cards: [
        { title: "24/7 monitoring", desc: "Real-time alerts on workstation/server health." },
        { title: "Patching & maintenance", desc: "Automated patches and maintenance tasks, fewer incidents." },
        { title: "Automation", desc: "Scripts, remediations, inventory and continuous optimization." },
      ],
    },
    edr: {
      title: "Datto EDR",
      subtitle: "Detection & response (advanced threats)",
      cards: [
        { title: "Behavioral detection", desc: "Blocks even unknown attacks (ransomware, intrusions)." },
        { title: "Isolation & response", desc: "Limits spread and accelerates remediation." },
        { title: "Traceability", desc: "Better visibility to understand and document an incident." },
      ],
    },
    k365: {
      title: "Kaseya 365",
      subtitle: "Centralized security suite",
      cards: [
        { title: "Centralization", desc: "A comprehensive security overview and consistent control." },
        { title: "Automated response", desc: "Reduces reaction time and blind spots." },
        { title: "Security posture", desc: "Reports and metrics to drive your priorities." },
      ],
    },
    plansTitle: "Monthly plans",
    plansSubtitle: "Choose your coverage level — simple, clear, no surprises.",
    plans: [
      {
        title: "RMM + EDR",
        price: "$6",
        subtitle: "Monitoring + advanced protection",
        bullets: ["24/7 monitoring", "Automated patching", "EDR detection & response", "Support and remediation"],
      },
      {
        title: "Kaseya 365",
        price: "$8",
        subtitle: "Centralized suite",
        bullets: ["Centralized security management", "Security posture visibility", "Automated responses", "Reports & recommendations"],
      },
      {
        title: "All services",
        price: "$13",
        subtitle: "Maximum protection and automation",
        bullets: ["Datto RMM + Datto EDR", "Kaseya 365", "Priority support", "Security review & roadmap"],
      },
    ],
    priceNote: "* Price per user/month. Conditions may apply depending on the environment.",
    compTitle: "Comparison table",
    compHeaders: ["Feature", "RMM + EDR ($6)", "Kaseya 365 ($8)", "Combined ($13)"],
    compRows: [
      ["24/7 monitoring & alerts", "✅", "—", "✅"],
      ["Automated patching", "✅", "—", "✅"],
      ["Automation (scripts / remediation)", "✅", "—", "✅"],
      ["Fleet inventory / visibility", "✅", "—", "✅"],
      ["Behavioral detection (EDR)", "✅", "✅", "✅"],
      ["Incident isolation / response", "✅", "✅", "✅"],
      ["Centralized suite / governance", "—", "✅", "✅"],
      ["Priority support & roadmap", "—", "—", "✅"],
    ],
    quoteTitle: "Quote request",
    quoteDesc: "Indicate the number of users and desired services. We'll get back to you quickly.",
    quoteOpenBtn: "Open form",
    formTitle: "Information",
    formUsersLabel: "Number of users",
    formServicesLabel: "Desired services",
    formServices: [
      { name: "svc_rmm_edr", label: "RMM + EDR ($6)" },
      { name: "svc_k365", label: "Kaseya 365 ($8)" },
      { name: "svc_bundle", label: "All services ($13)" },
    ],
    formNotesLabel: "Notes (optional)",
    formNotesPh: "E.g.: remote work, servers, multiple sites, compliance requirements, etc.",
    compliance: {
      title: "Compliance & best practices",
      desc: "These services improve visibility, detection and incident response — a solid foundation to reduce risks, support requirements (e.g.: Law 25) and document security management.",
    },
  },

  formation: {
    title: "Training & Onboarding – Consortium",
    headerSubtitle: "IT Services",
    heroLabel: "Training & onboarding",
    heroTitle: "Welcome, train and empower quickly",
    heroDesc:
      "We help your new employees get off to a good start and your teams make better use of Microsoft 365 — with short, clear training adapted to your reality.",
    heroPills: ["New employees", "Microsoft 365", "Cybersecurity"],
    offresTitle: "Offerings",
    offresDesc:
      "Concrete and easy-to-understand interventions — no unnecessary jargon, with fast results.",
    offers: [
      {
        title: "New employee onboarding",
        desc: "IT welcome, workstation setup, Microsoft 365 access, best practices and a frictionless first week.",
        bullets: [
          "Arrival checklist (accounts, licenses, access, groups)",
          "M365 setup (Outlook/Teams/OneDrive) and device",
          "Demo of internal tools (SharePoint/Teams, procedures)",
          "Final validation + mini guide given to employee",
        ],
      },
      {
        title: "Microsoft 365 training",
        desc: "Short and practical workshops adapted to your reality (in-person or Teams).",
        bullets: [
          "Teams: channels, meetings, sharing, best practices",
          "SharePoint/OneDrive: structure, rights, external sharing",
          "Outlook: emails, calendar, delegation, rules",
          "Digital hygiene: phishing, MFA, passwords",
        ],
      },
      {
        title: "Cybersecurity training (practical)",
        desc: "Reduce incidents and strengthen reflexes: simple, clear, actionable.",
        bullets: [
          "Recognize fraudulent emails",
          "Password management and MFA",
          "Secure document sharing",
          "What to do in case of doubt / incident",
        ],
      },
    ],
    formatsTitle: "Formats",
    formatsDesc: "Choose the format based on your reality (time, team, objectives).",
    formats: [
      { title: "Express session", desc: "30 to 60 minutes (focused on one tool or need)" },
      { title: "Team workshop", desc: "60 to 90 minutes (with questions and real cases)" },
      { title: "Onboarding path", desc: "1–2 week sequence for new employees" },
      { title: "Capsules / guides", desc: "Mini PDF guides + procedures adapted to your context" },
    ],
    ctaTitle: "Need a \"turnkey\" onboarding path?",
    ctaDesc:
      "We can build a simple plan (1–2 weeks) + internal mini guides, adapted to your tools and Teams/SharePoint structure.",
    ctaBtn: "Request a quote →",
  },

  conseil: {
    title: "IT Advisory Service – Consortium",
    heroDesc:
      "An advisory service exclusively for Consortium members — From quote verification to strategic guidance, everything is specifically designed to address the technological challenges of social economy organizations.",
    heroTags: ["Informed decisions", "Risks & impacts", "Concrete recommendations"],
    ctaCall: "Request a call",
    ctaInclus: "See what's included",
    whyTitle: "Why an advisory service?",
    whyDesc:
      "When budgets are tight, the most costly thing isn't the best solution — it's the wrong decision. We help you clarify options, measure risks, and choose a realistic path.",
    whyCards: [
      { title: "Compare & decide", desc: "Quotes, scope, exclusions, guarantees, operational impacts." },
      { title: "Reduce risks", desc: "Architecture validation, basic cybersecurity, \"quick wins\"." },
      { title: "Move faster", desc: "A clear path, validated with management and stakeholders." },
    ],
    inclusTitle: "What's included",
    inclusDesc:
      "An advisory service means analysis, recommendations and decision support — not daily IT operations.",
    inclusTag: "Neutral advice • decision-oriented",
    inclus: [
      { title: "Quote verification", desc: "Comparative analysis (price, scope, exclusions, guarantees) and recommendations to choose the best option." },
      { title: "Strategic consulting", desc: "IT direction, governance, cybersecurity priorities, planning and cost optimization." },
      { title: "Neutral technical opinion", desc: "Architecture validation, solution selection (M365, backup, security, networks), impacts and risks." },
      { title: "Posture review & best practices", desc: "Basic recommendations (MFA, admin access, external sharing, policies) and \"quick wins\"." },
      { title: "Writing assistance", desc: "Terms of reference, requirement lists, evaluation criteria, supplier questions." },
      { title: "Decision support", desc: "Meetings with management / managers to clarify needs, options and direction." },
    ],
    nonInclusTitle: "What's not included",
    nonInclusDesc:
      "To avoid any ambiguity: these elements fall under managed services, support, or an implementation project.",
    nonInclus: [
      "Technical interventions (installation, configuration, user support, troubleshooting)",
      "Daily IT management (managed services, RMM/EDR, 24/7 operations)",
      "On-site work / travel",
      "Project implementations (migrations, deployments, production releases)",
      "Administrative access to your systems (except audit cases agreed separately)",
    ],
    howTitle: "How it works",
    howDesc: "Simple, fast, and results-oriented. We adapt to your reality.",
    steps: [
      { n: "1", t: "Scoping", d: "We clarify context, objectives, and constraints (budget, timeline, compliance)." },
      { n: "2", t: "Analysis", d: "We compare options, identify risks, and validate technical impacts." },
      { n: "3", t: "Recommendation", d: "You receive a clear recommendation + next steps (priorities, quick wins)." },
    ],
    law25Title: "Law 25 & best practices",
    law25Desc:
      "If your request touches confidentiality, backup, security or data sharing, we integrate the compliance angle (e.g.: admin access, MFA, external sharing, logging, policies).",
    law25Note: "Goal: reduce blind spots and clearly document decisions.",
    demandeTitle: "Request a consultation",
    demandeDesc:
      "Briefly describe your need. We'll get back to you quickly with a simple proposal (scope, deliverable, timeline).",
    demandeOpenBtn: "Open form",
    demandeReviewBtn: "Review inclusions",
    formTitle: "Request – IT Advisory Service",
    formCloseBtn: "Close",
    formOrgLabel: "Organization",
    formEmailLabel: "Email",
    formTelLabel: "Phone (optional)",
    formTypeLabel: "Request type",
    formTypes: [
      { value: "Soumission", label: "Quote / proposal" },
      { value: "Stratégie", label: "IT strategy" },
      { value: "Cybersécurité", label: "Cybersecurity" },
      { value: "Microsoft 365", label: "Microsoft 365" },
      { value: "Sauvegarde", label: "Backup" },
      { value: "Autre", label: "Other" },
    ],
    formMsgLabel: "Message",
    formSubmitBtn: "Send",
    formConsent: "By submitting, you agree that we may contact you regarding this request.",
  },

  survey: {
    title: "IT Questionnaire – Consortium",
    heroTitle: "IT Maturity Questionnaire",
    heroDesc:
      "Get a quick overview of your IT environment to better target recommendations.",
    submitBtn: "Submit questionnaire",
    resultTitle: "Your result",
    resultDesc: "Based on your answers",
    sliderLabels: [
      { text: "Yes",     score: 5 },
      { text: "Partially", score: 3 },
      { text: "Unknown", score: 1 },
      { text: "No",      score: 2 },
    ],
    maxScore: 105,
    scoreLabels: [
      { min: 0, max: 40, label: "Beginner level — several priorities to address", color: "text-red-400" },
      { min: 41, max: 70, label: "Intermediate level — good foundation, targeted improvements recommended", color: "text-yellow-400" },
      { min: 71, max: 105, label: "Advanced level — solid posture, maintain and refine", color: "text-green-400" },
    ],
  },
};

export default en;
