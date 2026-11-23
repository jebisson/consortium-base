/**
 * Static knowledge base for the IT assistant, compiled from the site's own
 * published content (i18n copy + page-level FAQ blocks). This is the V1
 * grounding source — a dedicated knowledge base (likely a proper retrieval
 * layer) is planned to replace or augment this later; keep this function as
 * the single swap point when that happens.
 */
export function getItKnowledgeBase(): string {
  return `# Base de connaissances — Services TI du Consortium de coopération des entreprises collectives

## À propos
Le Consortium de coopération des entreprises collectives est le centre de services partagés du Québec pour les coopératives, mutuelles et OBNL (organismes à but non lucratif). Les services TI sont exclusifs aux membres, à coûts négociés et avec un accompagnement adapté à la réalité budgétaire de l'économie sociale.
- Devenir membre : https://leconsortium.coop/devenir-membre/ (adhésion requise pour accéder aux services TI tarifés)
- Site principal du Consortium (tous les services, pas seulement TI) : https://leconsortium.coop
- Contact TI direct : ti@leconsortium.coop, ou formulaire sur /fr/contact
- Toute organisation qui n'est pas une coopérative, mutuelle, OBNL ou instance municipale doit écrire à communications@ressources.coop plutôt que d'utiliser les services TI.

## Les 9 services TI

### 1. Sécurité Microsoft 365 — /fr/securite365
Audit de sécurité Microsoft 365 (politiques d'accès, MFA, partage de fichiers, score Defender), activation du MFA, conformité Loi 25, bonnes pratiques. 44 % des organisations canadiennes ont subi une cyberattaque dans les 12 derniers mois (CIRA, 2024).
FAQ :
- Qu'est-ce qu'un audit de sécurité Microsoft 365 ? → Évalue la configuration du tenant (politiques d'accès, MFA, partage, score Defender), identifie les lacunes et priorise les correctifs.
- Business Standard est-il suffisant pour la sécurité ? → Non, il manque les outils avancés (Defender for Business, protection anti-liens malveillants, détection d'identités compromises). Business Premium est recommandé.
- Qu'exige la Loi 25 ? → Documenter les pratiques de gestion des renseignements personnels, nommer un responsable de la protection, évaluer les risques. Microsoft 365 bien configuré (journaux d'audit, chiffrement, politiques d'accès) y contribue.
- Le MFA est-il vraiment nécessaire ? → Oui, il bloque plus de 99 % des attaques sur comptes compromis selon Microsoft.
- Durée d'un audit ? → Quelques heures à quelques jours selon la taille de l'organisation.
Pas de prix public fixe affiché pour l'audit — orienter vers une demande de soumission via /fr/securite365 ou /fr/contact.

### 2. Sauvegarde Microsoft 365 — /fr/sauvegarde365
Sauvegarde indépendante d'Exchange, OneDrive, SharePoint et Teams, hébergée au Canada, avec Datto SaaS Protection. Microsoft 365 protège les services mais n'est pas une stratégie de sauvegarde/restauration — la sync propage aussi les erreurs (suppression, corruption). 60 % des PME qui subissent une perte majeure de données ne s'en remettent jamais (CrashPlan, 2024).
Inclus : sauvegarde automatique (Exchange/OneDrive/SharePoint/Teams), restauration rapide et granulaire (fichier, courriel, dossier, bibliothèque), hébergement au Canada, implantation et accompagnement humain inclus.
Prix : 3 $ / utilisateur / mois, engagement 36 mois, configuration initiale et maintenance mensuelle incluses.
FAQ :
- On a déjà OneDrive/SharePoint, c'est sécurisé non ? → Sécurisé ≠ sauvegardé. La sync propage aussi les erreurs; la sauvegarde indépendante permet de revenir en arrière rapidement.
- Ça protège Teams ? → Oui, les données sous-jacentes (SharePoint/OneDrive/Exchange) qui alimentent Teams sont incluses.
- Temps de restauration ? → Objectif : rapide et granulaire, souvent en minutes.
- Pourquoi hébergement au Canada ? → Pour les attentes de confidentialité et la conformité (Loi 25 notamment).

### 3. Gestion TI proactive — RMM / EDR / Kaseya 365 — /fr/rmm-edr-kaseya365
Supervision et protection des postes/serveurs : surveillance 24/7, correctifs automatisés, détection avancée des menaces (ransomware, comportements suspects), réponse rapide aux incidents. Les organisations qui adoptent une gestion TI proactive réduisent leurs dépenses tech de 25 à 45 % (Techaisle, 2024).
Trois forfaits mensuels (prix par usager/mois) :
- RMM + EDR — 6 $ : monitoring 24/7, patching automatisé, détection & réponse EDR, support et remédiation.
- Kaseya 365 — 8 $ : gestion sécurité centralisée, visibilité posture sécurité, réponses automatisées, rapports.
- Suite complète (recommandée) — 14 $ : Datto RMM + Datto EDR + Kaseya 365, support prioritaire, revue sécurité & roadmap, une seule facture.
Seule la Suite complète inclut tout : filtrage courriel, protection Dark Web, formation hameçonnage, sauvegarde 100 Go par licence.
FAQ :
- Pourquoi la gestion TI proactive est importante pour un OBNL ? → Réduit les coûts imprévus, améliore la stabilité, renforce la sécurité en intervenant avant que les problèmes causent des interruptions.
- Différence RMM vs EDR ? → RMM = surveillance/maintenance à distance des postes (patching, alertes, automatisation). EDR = détection et réponse aux menaces avancées (ransomware, intrusions). Complémentaires.
- Kaseya 365 remplace-t-il l'antivirus actuel ? → Il va bien au-delà (détection comportementale, réponse automatisée, gestion centralisée) — complète ou remplace selon la configuration.
- Convient aux organisations multisites ? → Oui, gestion centralisée de tous les postes depuis un tableau de bord unique.
- En cas d'incident ? → Datto EDR détecte en temps réel, isole les postes compromis, déclenche une réponse automatisée; l'équipe intervient immédiatement.

### 4. Migration SharePoint et Teams — /fr/migration-sharepoint
Migration de serveur de fichiers vers SharePoint, structuration documentaire, permissions, gouvernance, intégration Teams, automatisation avec Power Automate, formation des utilisateurs incluse.
FAQ :
- SharePoint peut-il remplacer un serveur de fichiers ? → Oui : accès en ligne, synchronisation, versionnage, permissions granulaires, intégration Teams. La migration inclut structure de dossiers, permissions et formation.
- Durée d'une migration ? → Quelques semaines à quelques mois pour une organisation de 10 à 50 personnes, selon planification/migration/formation.
- Formation incluse après migration ? → Oui, incluse dans l'accompagnement.
- Gestion des permissions ? → Par site, bibliothèque, dossier ou fichier, avec gouvernance adaptée à l'organisation.
- Power Automate avec SharePoint ? → Oui, nativement, pour approbations, notifications, workflows documentaires.

### 5. Formation et intégration employés — /fr/formation-integration
Trois volets : (1) Intégration des nouveaux employés (checklist d'arrivée, configuration M365, démo des outils, mini guide remis à l'employé); (2) Formations Microsoft 365 (Teams, SharePoint/OneDrive, Outlook, hygiène numérique — phishing/MFA/mots de passe); (3) Formation cybersécurité pratique (reconnaître les courriels frauduleux, gestion MFA, partage sécuritaire, que faire en cas de doute).
Formats : session express (30-60 min), atelier équipe (60-90 min), parcours d'intégration (1-2 semaines), capsules/guides PDF.

### 6. Service conseil TI — /fr/service-conseil
Offre exclusive aux membres, orientée décision (pas des opérations TI quotidiennes) : vérification de soumissions, consultation stratégique, avis technique neutre, revue de posture et bonnes pratiques, aide à la rédaction de cahiers des charges, accompagnement décisionnel avec la direction.
N'est PAS inclus : interventions techniques, gestion quotidienne TI, travaux sur site, implantations de projet, accès administratif direct (sauf audit convenu séparément) — ces besoins relèvent des autres services (support TI, RMM/EDR, migration).
Démarche en 3 étapes : cadrage → analyse → recommandation claire avec prochaines étapes.

### 7. Support TI et helpdesk géré — /fr/support-ti
Banques d'heures flexibles, sans abonnement complexe, support à distance et sur site.
- Banque 10h : très petite équipe (1 à 3 employés), incidents ponctuels, téléassistance incluse.
- Banque 20h : jusqu'à 10 employés, incidents courants, suivi des heures.
- Banque 40h : transfert depuis une autre firme TI, audit de l'environnement existant, mise à niveau, rapport de prise en charge complet.
Interventions sur site non disponibles dans toutes les régions du Québec.
FAQ :
- Comment fonctionnent les banques d'heures ? → Achetées à l'avance, utilisées à votre rythme, suivi clair de l'utilisation.
- Couverture au Québec ? → Support à distance partout au Québec; sur site selon la localisation (à confirmer).
- Types de problèmes couverts ? → Courriel, connexion, postes de travail, imprimantes, Microsoft 365, accès, configurations, dépannage.
- Délai de réponse ? → Rapide pour les urgences, généralement dans les heures suivant la demande; incidents critiques priorisés.
- Convient aux petites organisations ? → Oui, conçu spécifiquement pour les OBNL/coopératives sans département TI interne à temps plein.

### 8. Matériel Dell — /fr/dell
Revendeur Dell autorisé : portables, postes de travail, serveurs (PowerEdge), écrans et périphériques, à prix membres. Accompagnement de la sélection à la mise en service, configuration préalable possible (nom, domaine, logiciels) avant livraison.

### 9. Power Automate — /fr/power-automate
Automatisation des workflows Microsoft 365 sans code complexe : flux d'approbation (congés, documents), notifications intelligentes (Teams, courriel), intégration native avec SharePoint/Teams/Outlook/Excel/OneDrive, centaines de connecteurs multi-systèmes.
Exemples concrets : approbation de documents déposés dans SharePoint, notification automatique à l'arrivée d'un nouvel employé, alertes sur indicateurs Excel, rapports automatiques périodiques.

## Ressources

### Guide pratique de cybersécurité pour employés — /fr/guide-employe
Guide à distribuer aux employés : mots de passe et authentification (MFA), reconnaissance du hameçonnage, télétravail sécuritaire, sécurité au bureau, réaction en cas d'incident. 68 % des brèches de données impliquent une erreur humaine (Verizon DBIR, 2024).

### Lexique TI — /fr/lexique-ti
Glossaire de termes TI et Microsoft 365 expliqués simplement. Extrait des termes les plus utiles :
- MFA (authentification multifacteur) : vérification supplémentaire au mot de passe (SMS, app comme Microsoft Authenticator).
- SSO (authentification unique) : se connecter une fois pour accéder à plusieurs applications.
- EDR (Endpoint Detection & Response) : surveillance en temps réel des appareils, détection de comportements suspects, réponse automatique — va au-delà d'un antivirus classique.
- RMM (Remote Monitoring & Management) : surveillance et gestion à distance des appareils par l'équipe TI.
- Ransomware (rançongiciel) : logiciel malveillant qui chiffre les fichiers et exige une rançon.
- Phishing (hameçonnage) : fraude par courriel/message imitant une source fiable pour voler des identifiants.
- Loi 25 : loi québécoise sur la protection des renseignements personnels (confidentialité, déclaration d'incidents, gouvernance des données).
- SharePoint : plateforme Microsoft pour stocker, organiser et partager des documents en équipe.
- Entra ID : service Microsoft de gestion des identités et des accès.
- Zero Trust : aucun utilisateur ni appareil n'est considéré fiable par défaut, même à l'intérieur du réseau.
(Le lexique complet contient environ 50 termes — rediriger vers /fr/lexique-ti pour une recherche complète si le terme demandé n'est pas ci-dessus.)

### Questionnaire de maturité TI — /fr/survey
Auto-évaluation rapide (quelques minutes) de la maturité numérique d'une organisation : portrait de l'environnement TI actuel pour cibler les priorités.

## Contact et prise de rendez-vous
Pour toute demande précise (soumission, audit, activation d'un service), orienter vers le formulaire de la page du service concerné, vers /fr/contact, ou vers ti@leconsortium.coop. Les demandes de services sont traitées par des humains — l'assistant ne peut pas activer un service ni garantir un prix final.
`;
}
