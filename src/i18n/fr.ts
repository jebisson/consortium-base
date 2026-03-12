import type { Translations } from "./types";

const fr: Translations = {
  common: {
    backToServices: "← Retour aux services TI",
    sendRequest: "Envoyer la demande",
    close: "Fermer",
    sending: "Envoi…",
    sent: "Demande envoyée! On vous contacte sous peu.",
    sentShort: "Message envoyé!",
    errorSend: "Erreur d'envoi. Réessayez ou contactez-nous.",
    errorNetwork: "Erreur réseau. Réessayez plus tard.",
    orgName: "Nom de l'organisation",
    email: "Courriel",
    phone: "Téléphone",
    users: "Nombre d'utilisateurs",
    usersOpt: "Nombre d'utilisateurs (optionnel)",
    message: "Message",
    subject: "Sujet",
    seeMore: "Voir la page →",
    openForm: "Ouvrir le formulaire",
    requestQuote: "Demander une soumission →",
    requestCall: "Demander un appel",
    langToggle: "EN",
    langLabel: "English",
    footerText: "Services TI · Consortium",
    nav: {
      home: "Accueil",
      sauvegarde: "Sauvegarde 365",
      securite: "Sécurité 365",
      guide: "Guide employé",
      rmm: "Gestion TI",
      formation: "Formations",
      conseil: "Service conseil",
      survey: "Questionnaire",
    },
    law25: "Loi 25",
    optional: "(optionnel)",
    notes: "Notes (optionnel)",
  },

  home: {
    title: "Services TI – Consortium",
    headerSubtitle: "Services TI",
    tagline: "Sécurité • Modernisation • Support",
    heroTitle: "Un écosystème TI stable, sécurisé et simple à gérer",
    heroDesc:
      "Découvrez nos services et ressources pour protéger Microsoft 365, renforcer la posture de sécurité et structurer une gestion TI proactive.",
    ctaExplore: "Explorer les services →",
    sectionTitle: "Services offerts et ressources",
    sectionDesc:
      "Choisissez un volet pour en savoir plus — chaque page contient une description claire et une demande de soumission.",
    featuredLabel: "Formations & intégration",
    featuredTitle: "Formations Microsoft 365 & cybersécurité",
    featuredTitleHighlight: " animées par Miguel",
    featuredDesc:
      "Intégration des nouveaux employés, bonnes pratiques M365, prévention des incidents et accompagnement concret adapté à votre réalité.",
    featuredTags: ["Intégration", "Microsoft 365", "Cybersécurité", "Approche pratique"],
    featuredCta: "Découvrir les formations →",
    surveyLabel: "Ressource",
    surveyTitle: "Questionnaire TI",
    surveyDesc:
      "Dressez un portrait rapide de votre environnement pour mieux cibler les recommandations.",
    surveyCta: "Remplir le questionnaire →",
    cards: [
      { title: "Sauvegarde Microsoft 365", desc: "Protection complète des courriels, fichiers et Teams." },
      { title: "Gestion TI proactive", desc: "Supervision 24/7, protection avancée et support rapide pour assurer la stabilité, la sécurité et réduire les coûts." },
      { title: "Guide pratique employé", desc: "Bonnes pratiques numériques : simple, clair, prêt à diffuser." },
      { title: "Service conseil TI", desc: "Vérification de soumissions, consultation et recommandations (sans interventions)." },
      { title: "Formations & intégration", desc: "Intégration des nouveaux employés + formations Microsoft 365 & cybersécurité." },
    ],
    security: {
      title: "Sécurité Microsoft 365",
      desc: "Cybersécurité, bonnes pratiques et posture de sécurité M365.",
    },
  },

  backup: {
    title: "Sauvegarde Cloud Microsoft 365 – Consortium",
    headerSubtitle: "Sauvegarde & Continuité",
    heroTitle: "Sauvegarde Cloud Microsoft 365",
    heroDesc: "Une vraie sauvegarde pour Microsoft 365.",
    heroDescLine2: "Récupérez vos données en minutes — même après un incident.",
    ctaActivate: "Activer la sauvegarde",
    ctaWhy: "Pourquoi c'est essentiel",
    pills: ["Exchange", "OneDrive", "SharePoint", "Teams", "Données au Canada"],
    whyTitle: "Pourquoi une sauvegarde indépendante?",
    whySubtitle: "Parce que Microsoft 365 n'est pas une stratégie de restauration.",
    marketingTitle: "Microsoft 365 protège vos services… mais ce n'est pas une sauvegarde.",
    marketingDesc:
      "Quand ça arrive, vous voulez une seule chose : récupérer vite, sans stress, sans perte, sans dépendre d'une \"chance\" de récupération.",
    marketingBadge: "Restauration granulaire, rapide et indépendante",
    risks: [
      { icon: "🗑️", title: "Suppression accidentelle", desc: "Fichiers, courriels, dossiers supprimés trop vite." },
      { icon: "🦠", title: "Ransomware & compromission", desc: "OneDrive / SharePoint / Exchange sont des cibles." },
      { icon: "📄", title: "Fichiers corrompus", desc: "Altération silencieuse, sync, mauvaises versions." },
      { icon: "⏱️", title: "Récupération limitée", desc: "Rétention, délais, politiques: pas illimité." },
      { icon: "👤", title: "Départ d'employés", desc: "Comptes supprimés = courriels & fichiers perdus." },
    ],
    benefitsTitle: "Ce que vous gagnez",
    benefitsDesc:
      "Une assurance opérationnelle : retrouver rapidement ce qui compte, sans pertes ni interruptions prolongées.",
    benefits: [
      { icon: "⚡", title: "Restauration en minutes", desc: "(courriel, fichier, dossier, bibliothèque)" },
      { icon: "🧩", title: "Granulaire", desc: ": pas besoin de tout restaurer pour récupérer un élément" },
      { icon: "🛡️", title: "Indépendante", desc: ": votre copie reste accessible même après incident" },
    ],
    protection: {
      title: "Protection contre les incidents modernes",
      desc: "La sauvegarde est votre plan de reprise : simple, rapide, et conçu pour récupérer même quand tout va mal.",
    },
    restore: {
      title: "Restauration \"sans casse-tête\"",
      desc: "Retrouver un mail, un document ou une version précise — rapidement — sans perturber le reste.",
    },
    howTitle: "Comment ça fonctionne",
    steps: [
      { title: "Connexion", desc: "On connecte la solution à votre tenant Microsoft 365 (accès sécurisé, configuration guidée)." },
      { title: "Sauvegardes automatiques", desc: "Des sauvegardes régulières protègent Exchange, OneDrive, SharePoint et Teams." },
      { title: "Restauration à la demande", desc: "Besoin de récupérer? On restaure rapidement (fichier, mail, dossier, etc.)." },
    ],
    complianceTitle: "Conformité & continuité (Loi 25)",
    complianceDesc:
      "La Loi 25 renforce les obligations de protection des renseignements personnels. Une sauvegarde indépendante aide à assurer la continuité et la restauration après un incident, tout en réduisant l'impact opérationnel.",
    includedTitle: "Ce qui est inclus",
    included: [
      { title: "Sauvegarde automatique", desc: "Exchange, OneDrive, SharePoint et Teams protégés sans intervention." },
      { title: "Restauration rapide", desc: "Récupération granulaire : fichier, courriel, dossier ou bibliothèque." },
      { title: "Hébergement au Canada", desc: "Une approche alignée avec les besoins de confidentialité et de conformité." },
    ],
    whyDattoTitle: "Pourquoi Datto",
    whyDattoDesc:
      "Datto est une plateforme reconnue pour la robustesse de ses sauvegardes et la qualité de ses restaurations. Avec les services TI des EÉSAD, vous obtenez une implantation guidée, un accompagnement humain, et une solution simple à opérer au quotidien.",
    dattoPoints: [
      { title: "Implantation incluse", desc: "Configuration initiale et validation de la sauvegarde." },
      { title: "Support & accompagnement", desc: "Vous n'êtes pas seul lors d'un incident." },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "\"On a déjà OneDrive / SharePoint, c'est sécurisé non?\"",
        a: "Sécurisé ≠ sauvegardé. La sync propage aussi les erreurs (suppression, corruption). La sauvegarde indépendante sert à revenir en arrière rapidement.",
      },
      {
        q: "\"Est-ce que ça protège Teams?\"",
        a: "Oui : les données sous-jacentes (SharePoint/OneDrive/Exchange) qui alimentent Teams sont incluses dans la protection.",
      },
      {
        q: "\"Combien de temps pour restaurer?\"",
        a: "Ça dépend du volume, mais l'objectif est la restauration rapide et granulaire (souvent minutes plutôt qu'heures/jours).",
      },
      {
        q: "\"Pourquoi hébergement au Canada?\"",
        a: "Pour mieux répondre aux attentes de confidentialité et aux réalités de conformité (notamment au Québec).",
      },
    ],
    pricingTitle: "Tarification simple",
    pricingDesc: "Activez une sauvegarde indépendante pour Microsoft 365, sans complexité.",
    pricingAmount: "$3",
    pricingUnit: "/ utilisateur / mois",
    pricingBullets: [
      "Configuration initiale incluse",
      "Engagement 36 mois",
      "Maintenance mensuelle incluse",
      "Protection Exchange, OneDrive, SharePoint et Teams",
    ],
    activateBtn: "Activer la sauvegarde",
    formTitle: "Demande d'activation",
    formUsers: "Nombre d'utilisateurs",
    formSendBtn: "Envoyer la demande",
  },

  security: {
    title: "Sécurité Microsoft 365 – Consortium",
    heroTitle: "Faites de la cybersécurité un réflexe quotidien.",
    heroSubtitle: "Sécurité et résilience numérique. Bonnes pratiques et modernisation avec Microsoft 365.",
    hoverHint: "Survolez chaque point pour voir le détail.",
    auditLabel: "Infrastructure et sécurité",
    auditTitle: "Audit de sécurité Microsoft 365",
    auditDesc:
      "Un portrait rapide et concret de votre posture de sécurité : MFA, comptes admin, partage externe, configurations de base et recommandations prioritaires.",
    auditBtn: "Demander l'audit",
    auditBullets: [
      "Analyse des réglages clés Microsoft 365 / Entra ID",
      "Recommandations priorisées (quick wins + actions structurantes)",
      "Résumé clair pour la direction",
      "Option : plan de remédiation (sur demande)",
      "Vérification des 14 points listés ci-dessous",
    ],
    contactLabel: "Contact",
    contactTitle: "Parlez-nous de votre environnement",
    contactDesc:
      "Une question sur votre sécurité Microsoft 365, un audit (99$), ou un accompagnement? Envoyez-nous un message.",
    contactBtn: "Ouvrir le formulaire",
    formTitle: "Formulaire de contact",
    subjectOptions: [
      { value: "Audit 365 - 99$", label: "Audit Microsoft 365 (99$)" },
      { value: "Amelioration securite Microsoft 365", label: "Amélioration sécurité Microsoft 365" },
      { value: "Soumission services geres", label: "Soumission services gérés" },
      { value: "Autre", label: "Autre" },
    ],
    msgPlaceholder: "Ex : MFA, comptes admin, partage externe, télétravail, obligations Loi 25, etc.",
    points: [
      {
        t: "Protection antivirus moderne (MISE À JOUR IMPORTANTE)",
        lead: [
          "Microsoft n'offre plus gratuitement la licence Business Premium, qui incluait une suite complète d'outils de sécurité. Cette évolution du modèle de licences ouvre la porte à l'utilisation de plateformes de sécurité tierces plus performantes, désormais offertes à un coût comparable.",
          "Ainsi, il est désormais possible de mettre en place une solution de sécurité intégrée, surveillée 24 heures sur 24, 7 jours sur 7, adaptée aux besoins et à la réalité financière des organismes d'aide a domicile.",
          "Une telle solution permet de détecter, bloquer et corriger les menaces en temps réel. Les fonctionnalités EDR (Endpoint Detection and Response) assurent une surveillance constante des comportements anormaux, et tout poste compromis peut être automatiquement isolé afin de limiter la propagation d'une attaque au reste de l'organisation.",
        ],
      },
      {
        t: "Inventaire et désuétude des systèmes",
        lead: [
          "L'utilisation de systèmes ou d'équipements désuets accroît les risques de vulnérabilité. L'intégration de Microsoft Intune ou d'une solution de gestion à distance (RMM) permet de maintenir un inventaire complet et à jour des actifs, tout en automatisant la détection et le remplacement des systèmes obsolètes.",
        ],
      },
      {
        t: "Détection des vulnérabilités et application des correctifs",
        lead: [
          "Une stratégie de mise à jour automatisée via Windows Update et Intune ou la plateforme de sécurité intégrée assure une protection continue contre les failles connues. La gestion centralisée permet d'appliquer rapidement les correctifs de sécurité sur tous les appareils, y compris ceux utilisés à distance.",
        ],
      },
      {
        t: "Authentification multi-facteurs (MFA)",
        lead: [
          "L'activation de l'authentification multi-facteurs à travers Entra ID renforce significativement la sécurité des comptes utilisateurs. Elle empêche l'accès non autorisé même en cas de compromission d'un mot de passe.",
        ],
      },
      {
        t: "Sauvegarde et reprise des données Microsoft 365",
        lead: [
          "Une solution de sauvegarde Microsoft 365 couvrant Exchange, OneDrive, SharePoint et Teams est essentielle pour prévenir la perte de données. La planification de tests de restauration périodiques et la conservation hors site garantissent la résilience opérationnelle.",
        ],
      },
      {
        t: "Sécurisation des communications électroniques",
        lead: [
          "Les échanges de données confidentielles doivent être protégés par le chiffrement et la sensibilisation des utilisateurs. Microsoft 365 offre des options intégrées de chiffrement de messages et de prévention de la perte de données (DLP).",
        ],
      },
      {
        t: "Analyse des vulnérabilités externes",
        lead: [
          "Une veille continue sur les services exposés à Internet permet d'identifier et de corriger les failles rapidement. L'utilisation de Microsoft Defender External Attack Surface Management ou d'un service équivalent permet cette surveillance proactive.",
        ],
      },
      {
        t: "Journalisation et surveillance continue",
        lead: [
          "La journalisation des accès et la détection des anomalies via Microsoft 365 Defender ou la plateforme de sécurité intégrée offrent une visibilité complète sur les événements de sécurité. La corrélation automatisée des alertes réduit le délai de détection et de réponse aux incidents.",
        ],
      },
      {
        t: "Notifications d'accès et de modifications de compte",
        lead: [
          "Les utilisateurs doivent être informés de tout changement à leur compte ou de toute connexion inhabituelle. Un système de sécurité intégré permet de configurer des alertes automatisées pour renforcer la transparence et la sécurité.",
        ],
      },
      {
        t: "Transmission sécurisée des informations",
        lead: [
          "Les données sensibles doivent être échangées à l'aide de solutions sécurisées et chiffrées, telles que SharePoint ou OneDrive avec liens protégés, plutôt que par courriel non sécurisé.",
        ],
      },
      {
        t: "Directives d'utilisation des outils numériques",
        lead: [
          "Une politique claire sur l'utilisation du courriel, d'Internet et des outils Microsoft 365 favorise des comportements sécuritaires et cohérents. Les employés doivent savoir comment réagir à un incident de sécurité.",
        ],
      },
      {
        t: "Gestion des accès et des privilèges",
        lead: [
          "Une gestion rigoureuse des accès selon le principe du moindre privilège doit être appliquée. Entra ID et Intune permettent d'automatiser l'ajout, la révision et la révocation des accès, incluant les rôles administratifs.",
        ],
      },
      {
        t: "Formation et culture de la sécurité",
        lead: [
          "La sensibilisation continue des employés aux menaces numériques – hameçonnage, rançongiciels, ingénierie sociale – renforce la première ligne de défense de toute organisation. Les formations régulières et les rappels intégrés à Microsoft 365 favorisent une culture de vigilance.",
        ],
      },
      {
        t: "Score de sécurité",
        lead: [
          "Microsoft 365 met à disposition un outil d'autoévaluation du niveau de sécurité au sein du Centre d'administration Defender.",
          "Ce score de sécurité permet d'obtenir un portrait clair des mesures de protection déjà en place et de celles qui doivent être renforcées pour assurer une meilleure résilience de la plateforme.",
          "Toutefois, de nombreuses organisations se fient encore à la configuration de base de Microsoft 365, laquelle demeure insuffisante pour atteindre un niveau de sécurité optimal.",
        ],
      },
    ],
  },

  guide: {
    title: "Guide pratique – Employé | Cybersécurité",
    headerSubtitle: "Guide pratique employé",
    heroTitle: "Les bons réflexes numériques au quotidien",
    heroDesc:
      "Ce guide vous aide à adopter des comportements simples mais essentiels pour protéger vos données, vos appareils et l'ensemble de notre organisation.",
    pills: ["Mots de passe", "Courriels", "Télétravail", "Incident"],
    sections: [
      {
        title: "Protégez votre compte et vos mots de passe",
        intro:
          "Votre compte Microsoft 365 donne accès à vos courriels, documents et outils de travail. Il doit être protégé comme un coffre-fort.",
        tips: [
          { title: "1. Un mot de passe fort et unique", text: "Utilisez un gestionnaire de mots de passe pour garantir des mots de passe forts et différents." },
          { title: "2. Authentification multifacteur (MFA)", text: "Validez toujours les notifications MFA. Si une demande apparaît sans que vous tentiez de vous connecter, refusez-la immédiatement." },
        ],
        warning: { label: "À éviter :", text: "partager ou écrire votre mot de passe." },
      },
      {
        title: "Courriels, pièces jointes et hameçonnage",
        intro: "Le courriel est le principal vecteur d'attaque. Un seul clic peut compromettre un compte.",
        tips: [
          { title: "1. Méfiez-vous des demandes urgentes", text: "Les fraudeurs utilisent la pression et l'urgence." },
          { title: "2. Vérifiez l'expéditeur", text: "Un nom peut être imité — pas un domaine courriel." },
          { title: "3. Attention aux pièces jointes", text: "Passez la souris sur les liens avant de cliquer." },
        ],
        good: { label: "Bon réflexe :", text: "transférez le message suspect à l'équipe TI." },
      },
      {
        title: "Télétravail, appareils et Wi‑Fi",
        intro: "Vos appareils doivent rester sécurisés, à jour, et utilisés dans un environnement fiable.",
        tips: [
          { title: "1. Verrouillez votre écran", text: "Toujours verrouiller avant de quitter votre poste." },
          { title: "2. Évitez le Wi‑Fi public", text: "Utilisez un VPN lorsque disponible." },
          { title: "3. Mises à jour & antivirus", text: "Ne désactivez jamais les protections EDR." },
          { title: "4. Données personnelles", text: "Ne synchronisez pas de données professionnelles sur des comptes privés." },
        ],
      },
      {
        title: "En cas de doute ou d'incident, agissez rapidement",
        intro: "Une réaction rapide peut éviter une compromission ou la propagation d'un incident.",
        items: [
          "• Ne cliquez plus et ne répondez pas",
          "• Déconnectez votre appareil du réseau si nécessaire",
          "• Contactez immédiatement l'équipe TI",
        ],
      },
    ],
  },

  rmm: {
    title: "Datto RMM, Datto EDR & Kaseya 365 – Consortium",
    headerSubtitle: "Supervision & Cybersécurité",
    heroTitle: "Datto RMM, Datto EDR & Kaseya 365",
    heroDesc:
      "Une approche proactive : surveiller, corriger, détecter et répondre pour réduire les pannes et bloquer les menaces modernes.",
    ctaPlans: "Voir les forfaits",
    ctaQuote: "Demande de soumission",
    pills: [
      { href: "#rmm", label: "Datto RMM" },
      { href: "#edr", label: "Datto EDR" },
      { href: "#k365", label: "Kaseya 365" },
      { href: "#comparatif", label: "Comparatif" },
    ],
    introTitle: "Une infrastructure TI fiable, sans surprises",
    introDesc:
      "Le but : réduire les incidents, accélérer le support et limiter l'impact des cybermenaces avec une approche proactive.",
    introBullets: [
      "Surveillance et alertes 24/7",
      "Correctifs et entretien automatisés",
      "Détection avancée (ransomware, comportements suspects)",
      "Réponse rapide en cas d'incident",
    ],
    introCards: [
      { icon: "🔍", title: "Visibilité complète", desc: "État du parc, alertes, posture sécurité." },
      { icon: "⚙️", title: "Automatisation", desc: "Patching, scripts, remédiations." },
      { icon: "🛡️", title: "Protection moderne", desc: "Détection comportementale & réponse." },
    ],
    rmm: {
      title: "Datto RMM",
      subtitle: "Supervision & maintenance proactive",
      cards: [
        { title: "Surveillance 24/7", desc: "Alertes en temps réel sur la santé des postes/serveurs." },
        { title: "Patching & maintenance", desc: "Correctifs et tâches d'entretien automatisés, moins d'incidents." },
        { title: "Automatisation", desc: "Scripts, remédiations, inventaire et optimisation continue." },
      ],
    },
    edr: {
      title: "Datto EDR",
      subtitle: "Détection & réponse (menaces avancées)",
      cards: [
        { title: "Détection comportementale", desc: "Bloque les attaques même inconnues (ransomware, intrusions)." },
        { title: "Isolation & réponse", desc: "Limite la propagation et accélère la remédiation." },
        { title: "Traçabilité", desc: "Meilleure visibilité pour comprendre et documenter un incident." },
      ],
    },
    k365: {
      title: "Kaseya 365",
      subtitle: "Suite sécurité centralisée",
      cards: [
        { title: "Centralisation", desc: "Une vue d'ensemble sécurité et contrôle cohérent." },
        { title: "Réponse automatisée", desc: "Réduit le temps de réaction et les angles morts." },
        { title: "Posture sécurité", desc: "Rapports et indicateurs pour piloter vos priorités." },
      ],
    },
    plansTitle: "Forfaits mensuels",
    plansSubtitle: "Choisisssez un niveau de couverture — simple, clair, sans surprise.",
    plans: [
      {
        title: "RMM + EDR",
        price: "$6",
        subtitle: "Supervision + protection avancée",
        bullets: ["Monitoring 24/7", "Patching automatisé", "Détection & réponse EDR", "Support et remédiation"],
      },
      {
        title: "Kaseya 365",
        price: "$8",
        subtitle: "Suite centralisée",
        bullets: ["Gestion sécurité centralisée", "Visibilité posture sécurité", "Réponses automatisées", "Rapports & recommandations"],
      },
      {
        title: "Tous les services",
        price: "$13",
        subtitle: "Protection et automatisation maximales",
        bullets: ["Datto RMM + Datto EDR", "Kaseya 365", "Support prioritaire", "Revue sécurité & roadmap"],
      },
    ],
    priceNote: "* Prix par usager/mois. Certaines conditions peuvent s'appliquer selon l'environnement.",
    pricingUnit: "/ usager / mois",
    compTitle: "Tableau comparatif",
    compHeaders: ["Fonction", "RMM + EDR (6$)", "Kaseya 365 (8$)", "Combiné (13$)"],
    compRows: [
      ["Surveillance 24/7 & alertes", "✅", "—", "✅"],
      ["Correctifs / patching automatisé", "✅", "—", "✅"],
      ["Automatisation (scripts / remédiation)", "✅", "—", "✅"],
      ["Inventaire / visibilité parc", "✅", "—", "✅"],
      ["Détection comportementale (EDR)", "✅", "✅", "✅"],
      ["Isolation / réponse incident", "✅", "✅", "✅"],
      ["Suite centralisée / gouvernance", "—", "✅", "✅"],
      ["Support prioritaire & roadmap", "—", "—", "✅"],
    ],
    quoteTitle: "Demande de soumission",
    quoteDesc: "Indiquer le nombre d'utilisateurs et les services souhaités. On vous revient rapidement.",
    quoteOpenBtn: "Ouvrir le formulaire",
    formTitle: "Informations",
    formUsersLabel: "Nombre d'utilisateurs",
    formServicesLabel: "Services souhaités",
    formServices: [
      { name: "svc_rmm_edr", label: "RMM + EDR (6$)" },
      { name: "svc_k365", label: "Kaseya 365 (8$)" },
      { name: "svc_bundle", label: "Tous les services (13$)" },
    ],
    formNotesLabel: "Notes (optionnel)",
    formNotesPh: "Ex : télétravail, serveurs, sites multiples, exigences conformité, etc.",
    compliance: {
      title: "Conformité & bonnes pratiques",
      desc: "Ces services améliorent la visibilité, la détection et la réponse aux incidents — une base solide pour réduire les risques, soutenir les exigences (ex : Loi 25) et documenter la gestion de la sécurité.",
    },
  },

  formation: {
    title: "Formations & intégration – Consortium",
    headerSubtitle: "Services TI",
    heroLabel: "Formations & intégration",
    heroTitle: "Accueillir, former et rendre autonome rapidement",
    heroDesc:
      "On aide vos nouveaux employés à démarrer du bon pied et vos équipes à mieux utiliser Microsoft 365 — avec des formations courtes, claires et adaptées à votre réalité.",
    heroPills: ["Nouveaux employés", "Microsoft 365", "Cybersécurité"],
    offresTitle: "Offres",
    offresDesc:
      "Des interventions concrètes et faciles à comprendre — sans jargon inutile, avec des résultats rapides.",
    offers: [
      {
        title: "Intégration des nouveaux employés",
        desc: "Accueil TI, configuration de poste, accès Microsoft 365, bonnes pratiques et première semaine sans friction.",
        bullets: [
          "Checklist d'arrivée (comptes, licences, accès, groupes)",
          "Configuration M365 (Outlook/Teams/OneDrive) et appareil",
          "Démo des outils internes (SharePoint/Teams, procédures)",
          "Validation finale + mini guide remis à l'employé",
        ],
      },
      {
        title: "Formations Microsoft 365",
        desc: "Ateliers courts et concrets adaptés à votre réalité (présentiel ou Teams).",
        bullets: [
          "Teams : canaux, réunions, partage, bonnes pratiques",
          "SharePoint/OneDrive : structure, droits, partage externe",
          "Outlook : courriels, calendrier, délégation, règles",
          "Hygiène numérique : phishing, MFA, mots de passe",
        ],
      },
      {
        title: "Formation cybersécurité (pratique)",
        desc: "Réduire les incidents et renforcer les réflexes : simple, clair, applicable.",
        bullets: [
          "Reconnaître les courriels frauduleux",
          "Gestion des mots de passe et MFA",
          "Partage sécuritaire de documents",
          "Que faire en cas de doute / incident",
        ],
      },
    ],
    formatsTitle: "Formats",
    formatsDesc: "Choisissez le format selon votre réalité (temps, équipe, objectifs).",
    formats: [
      { title: "Session express", desc: "30 à 60 minutes (ciblée sur un outil ou un besoin)" },
      { title: "Atelier équipe", desc: "60 à 90 minutes (avec questions et cas réels)" },
      { title: "Parcours d'intégration", desc: "Séquence sur 1–2 semaines pour nouveaux employés" },
      { title: "Capsules / guides", desc: "Mini guides PDF + procédures adaptées à votre contexte" },
    ],
    ctaTitle: "Besoin d'un parcours d'intégration \"clé en main\" ?",
    ctaDesc:
      "On peut bâtir un plan simple (1–2 semaines) + mini guides internes, adapté à vos outils et à votre structure Teams/SharePoint.",
    ctaBtn: "Demander une soumission →",
  },

  conseil: {
    title: "Service conseil TI – Le Consortium",
    heroTitle: "Une offre de services‑conseils exclusive aux membres.",
    heroDesc:
      "De la validation de soumissions à l'accompagnement stratégique, tout est spécifiquement pensé pour répondre aux enjeux technologiques des entreprises d'économie sociale.",
    heroTags: ["Décisions éclairées", "Risques & impacts", "Recommandations concrètes"],
    ctaCall: "Demander un appel",
    ctaInclus: "Voir ce qui est inclus",
    whyTitle: "Pourquoi un service conseil?",
    whyDesc:
      "Quand les budgets sont serrés, le plus coûteux ce n'est pas la meilleure solution — c'est la mauvaise décision. On vous aide à clarifier les options, mesurer les risques, et choisir une trajectoire réaliste.",
    whyCards: [
      { title: "Comparer & trancher", desc: "Soumissions, portée, exclusions, garanties, impacts opérationnels." },
      { title: "Réduire les risques", desc: "Validation d'architecture, cybersécurité de base, \"quick wins\"." },
      { title: "Aller plus vite", desc: "Une trajectoire claire, validée avec la direction et les parties prenantes." },
    ],
    inclusTitle: "Ce qui est inclus",
    inclusDesc:
      "Un service conseil, c'est de l'analyse, des recommandations et de l'accompagnement décisionnel, pas des opérations TI quotidiennes.",
    inclusTag: "Avis neutre • orienté décision",
    inclus: [
      { title: "Vérification de soumissions", desc: "Analyse comparative (prix, portée, exclusions, garanties) et recommandations pour choisir la meilleure option." },
      { title: "Consultation stratégique", desc: "Orientation TI, gouvernance, priorités cybersécurité, planification et optimisation des coûts." },
      { title: "Avis technique neutre", desc: "Validation d'architecture, choix de solutions (M365, sauvegarde, sécurité, réseaux), impacts et risques." },
      { title: "Revue de posture & bonnes pratiques", desc: "Recommandations de base (MFA, accès admin, partage externe, politiques) et \"quick wins\"." },
      { title: "Aide à la rédaction", desc: "Cahier des charges, listes d'exigences, critères d'évaluation, questions aux fournisseurs." },
      { title: "Accompagnement décisionnel", desc: "Réunions avec direction / gestionnaires pour clarifier besoins, options et trajectoire." },
    ],
    nonInclusTitle: "Ce qui n'est pas inclus",
    nonInclusDesc:
      "Pour éviter toute ambiguïté : ces éléments relèvent plutôt des services gérés, du support, ou d'un projet d'implantation.",
    nonInclus: [
      "Interventions techniques (installation, configuration, support utilisateurs, dépannage)",
      "Gestion quotidienne TI (services gérés, RMM/EDR, opérations 24/7)",
      "Travaux sur site / déplacements",
      "Implantations de projet (migrations, déploiements, mise en production)",
      "Accès administratif à vos systèmes (sauf cas d'audit convenu séparément)",
    ],
    howTitle: "Comment ça fonctionne",
    howDesc: "Simple, rapide, et orienté résultats. On s'adapte à votre réalité.",
    steps: [
      { n: "1", t: "Cadrage", d: "On clarifie le contexte, les objectifs, et les contraintes (budget, délais, conformité)." },
      { n: "2", t: "Analyse", d: "On compare les options, on identifie les risques, et on valide les impacts techniques." },
      { n: "3", t: "Recommandation", d: "Vous recevez une recommandation claire + prochaines étapes (priorités, quick wins)." },
    ],
    law25Title: "Loi 25 & bonnes pratiques",
    law25Desc:
      "Si votre demande touche la confidentialité, la sauvegarde, la sécurité ou le partage de données, on intègre l'angle conformité (ex.: accès admin, MFA, partage externe, journalisation, politiques).",
    law25Note: "Objectif : réduire les angles morts et documenter clairement les décisions.",
    demandeTitle: "Demander une consultation",
    demandeDesc:
      "Décrivez brièvement votre besoin. On vous revient rapidement avec une proposition simple (portée, livrable, échéancier).",
    demandeOpenBtn: "Ouvrir le formulaire",
    demandeReviewBtn: "Revoir les inclusions",
    formTitle: "Demande – Service conseil TI",
    formCloseBtn: "Fermer",
    formOrgLabel: "Organisation",
    formEmailLabel: "Courriel",
    formTelLabel: "Téléphone (optionnel)",
    formTypeLabel: "Type de demande",
    formTypes: [
      { value: "Soumission", label: "Soumission / devis" },
      { value: "Stratégie", label: "Stratégie TI" },
      { value: "Cybersécurité", label: "Cybersécurité" },
      { value: "Microsoft 365", label: "Microsoft 365" },
      { value: "Sauvegarde", label: "Sauvegarde" },
      { value: "Autre", label: "Autre" },
    ],
    formMsgLabel: "Message",
    formSubmitBtn: "Envoyer",
    formConsent: "En envoyant, vous acceptez que nous vous recontactions au sujet de cette demande.",
  },

  survey: {
    title: "Questionnaire TI – Consortium",
    heroTitle: "Questionnaire de maturité TI",
    heroDesc:
      "Dressez un portrait rapide de votre environnement pour mieux cibler les recommandations.",
    submitBtn: "Soumettre le questionnaire",
    resultTitle: "Votre résultat",
    resultDesc: "Basé sur vos réponses",
    sliderLabels: [
      { text: "Oui",            score: 5 },
      { text: "Partiellement",  score: 3 },
      { text: "Je ne sais pas", score: 1 },
      { text: "Non",            score: 2 },
    ],
    questions: [
      "Avez-vous une politique de sécurité informatique écrite ?",
      "Avez-vous désigné une personne responsable de la cybersécurité ?",
      "Faites-vous une évaluation des risques au moins une fois par année ?",
      "Avez-vous une politique de gestion des arrivées et départs d'employés ?",
      "Avez-vous une politique encadrant l'utilisation des outils numériques par les employés ?",
      "Utilisez-vous l'authentification multifactorielle (MFA) sur tous les logiciels ?",
      "Les mots de passe sont-ils complexes et changés régulièrement ?",
      "Limitez-vous l'accès aux données sensibles selon le rôle ?",
      "Vos données sont-elles sauvegardées régulièrement ?",
      "Avez-vous testé une restauration dans les 12 derniers mois ?",
      "Les sauvegardes sont-elles stockées dans un lieu sécurisé au Canada ?",
      "Donnez-vous une formation cybersécurité cette année ?",
      "Vos employés savent-ils reconnaître un courriel d'hameçonnage ?",
      "Avez-vous une procédure de réponse aux incidents ?",
      "Utilisez-vous un antivirus à jour sur tous les appareils ?",
      "Avez-vous un pare-feu ou une solution de filtrage réseau ?",
      "Avez-vous une solution de détection d'intrusion/comportements suspects ?",
      "OS et logiciels sont-ils mis à jour régulièrement ?",
      "La licence de votre pare-feu est-elle valide et à jour ?",
      "Disposez-vous d'un réseau Wi-Fi invité ?",
      "Le Wi-Fi invité est-il segmenté du réseau interne ?",
    ],
    maxScore: 105,
    scoreLabels: [
      { min: 0, max: 40, label: "Niveau débutant — plusieurs priorités à adresser", color: "text-red-400" },
      { min: 41, max: 70, label: "Niveau intermédiaire — bonnes bases, améliorations ciblées recommandées", color: "text-yellow-400" },
      { min: 71, max: 105, label: "Niveau avancé — posture solide, maintenir et raffiner", color: "text-green-400" },
    ],
  },
};

export default fr;
