---
title: "Comment une coopérative d'habitation de 8 personnes a divisé ses incidents TI par 4"
url_slug: cas-cooperative-habitation-incidents-ti-divises
meta_description: "Une coop d'habitation appelait pour un problème informatique chaque semaine. Six mois plus tard, presque plus rien. Voici ce qui a changé."
angle: "Études de cas"
cta_principal: "/fr/contact"
cta_secondaire: "/fr/rmm-edr-kaseya365"
mots: 970
lang: fr
date: "2026-04-27"
---

*Le cas qui suit est inspiré de situations réelles rencontrées chez plusieurs coopératives membres. Les détails sont composés et anonymisés pour préserver la confidentialité, mais les chiffres et la séquence d'interventions reflètent ce qui se passe concrètement.*

## La situation au départ

Une coopérative d'habitation de la grande région de Montréal, huit employés permanents, environ 200 logements gérés. La coordination est assurée par une directrice générale, deux personnes au service aux membres, un comptable à temps partiel, et le reste de l'équipe en entretien et soutien.

Quand nous sommes intervenus, voici ce que la directrice générale décrivait au téléphone : « On a au moins un problème informatique par semaine. Outlook qui plante, l'imprimante qui ne se connecte plus, un fichier qu'on n'arrive plus à ouvrir, quelqu'un qui n'a plus accès à un dossier. Je passe des heures là-dessus chaque semaine et je n'ai pas la formation pour. »

L'historique sur six mois confirmait l'impression :

- 28 incidents informatiques signalés à la direction
- 4 boîtes courriel partagées avec mots de passe communs à toute l'équipe
- 0 authentification multifacteur active
- 1 sauvegarde automatique configurée (fichiers comptables seulement)
- Plusieurs licences Microsoft 365 en double, et une licence inutilisée depuis le départ d'un employé 14 mois plus tôt

L'environnement n'était pas catastrophique — c'était un environnement typique d'organisation qui s'est constitué par accumulation, sans stratégie d'ensemble.

## Le diagnostic initial

Avant de proposer quoi que ce soit, nous avons fait un audit court d'une demi-journée. Trois constats ressortent :

**Premier constat : la majorité des « incidents » n'étaient pas des incidents techniques.** C'étaient des questions de configuration, de droits d'accès mal alignés avec les rôles, et de procédures jamais documentées. Quand l'imprimante « ne se connecte plus », c'est presque toujours qu'elle n'a jamais été configurée correctement et que personne ne l'a vraiment réinstallée — chaque fois, on bricolait.

**Deuxième constat : aucune ligne de défense n'était en place pour les vrais risques.** Pas de MFA, pas de surveillance des connexions, pas de protection contre l'hameçonnage active, pas de plan de réponse à un incident. Une seule attaque réussie aurait causé des dommages sérieux.

**Troisième constat : la directrice consacrait environ 4 à 6 heures par semaine à des questions informatiques.** À son taux horaire chargé, ça représentait l'équivalent annuel d'environ 12 000 $ — pour un travail qu'elle ne voulait pas faire, qu'elle ne se sentait pas qualifiée pour faire, et qui l'empêchait de faire celui pour lequel elle avait été embauchée.

## Les quatre mois suivants

L'intervention s'est étalée sur 16 semaines, par étapes pour ne pas perturber l'opération.

### Mois 1 — Stabilisation et hygiène de base

- Authentification multifacteur activée pour tous les comptes (déploiement progressif sur deux semaines, avec accompagnement)
- Mise en place d'un gestionnaire de mots de passe d'équipe (Bitwarden Teams)
- Élimination des comptes partagés au profit de comptes nominatifs avec boîtes courriel partagées
- Désinstallation des doublons logiciels et libération des licences inutilisées (économie immédiate : environ 1 800 $ par année)

### Mois 2 — Sécurité Microsoft 365

- Application des sept réglages de sécurité Microsoft 365 standard (voir notre [article dédié](/fr/blog/7-reglages-microsoft-365-cooperative-obnl))
- Configuration des règles anti-hameçonnage avec protection des cadres (DG et comptable)
- Mise en place des alertes de connexion suspecte
- Restriction du partage externe SharePoint au strict nécessaire

### Mois 3 — Sauvegardes et continuité

- Mise en place d'une vraie sauvegarde Microsoft 365 (courriels, OneDrive, Teams, SharePoint) avec rétention de 365 jours
- Test de restauration documenté
- Plan de continuité court (deux pages) pour les scénarios courants : compte compromis, fichier supprimé par erreur, panne Microsoft 365 prolongée

### Mois 4 — Gestion proactive et formation

- Mise sous gestion proactive de tous les postes (supervision continue, mises à jour automatiques, EDR)
- Formation de deux heures pour l'équipe sur la reconnaissance des courriels frauduleux et les bonnes pratiques de mots de passe
- Documentation des procédures (10 pages, gardées sur SharePoint, mises à jour à chaque changement)
- Désignation formelle de la responsable de la protection des renseignements personnels (Loi 25), publication des coordonnées sur le site

## Les résultats à six mois

Les chiffres comparés aux six mois précédents :

| Indicateur | Avant | Après |
|---|---|---|
| Incidents informatiques signalés | 28 | 7 |
| Heures hebdomadaires de la DG sur l'IT | 4 à 6 h | 30 min à 1 h |
| Sauvegardes fonctionnelles | 1 (partielle) | Complète |
| Comptes avec MFA | 0 | 8 / 8 |
| Conformité Loi 25 (éléments fondamentaux) | 0 / 6 | 6 / 6 |

Plus difficile à chiffrer, mais cité par la directrice dans nos points périodiques : un changement net dans la culture interne. L'équipe ne traite plus les outils comme des menaces qui peuvent planter à tout moment. Les nouveaux employés sont intégrés en suivant une procédure plutôt qu'en improvisant.

## Le coût et le rendement

Le service de gestion TI proactive représente pour cette coopérative un peu moins de 7 000 $ par année.

En face, les économies et gains identifiables :

- Licences libérées et abonnements rationalisés : ~1 800 $/an
- Temps de la DG récupéré (4 h/semaine × 50 semaines × 50 $/h) : ~10 000 $/an équivalent
- Risque incident annualisé évité : difficile à chiffrer, mais réel

Sans même compter les incidents évités, le retour est positif dès la première année. Et la posture de sécurité ne ressemble plus du tout à ce qu'elle était.

## Ce qui rend ce cas reproductible

Aucune des interventions décrites ici n'est sophistiquée. Elles sont toutes accessibles à toute organisation comparable. Ce qui les rend efficaces, c'est qu'elles sont **systématiques** — appliquées dans un ordre logique, avec un suivi, plutôt qu'au coup par coup quand un problème survient.

C'est aussi la principale différence entre faire l'IT « à l'interne » et un service géré : ce n'est pas une question de compétence individuelle, c'est une question de systématisation.

---

**Votre situation ressemble à celle décrite ici ?** Nous proposons un diagnostic initial sans engagement pour les organisations membres du Consortium. [Demandez une soumission](/fr/contact) ou explorez notre [service de gestion TI proactive](/fr/rmm-edr-kaseya365).
