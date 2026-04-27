---
title: "Combien coûte vraiment de « gérer l'informatique soi-même » dans une coop ?"
url_slug: cout-reel-gestion-informatique-interne-cooperative
meta_description: "Le « zéro budget IT » coûte presque toujours plus cher qu'un service géré. Le coût est juste invisible parce qu'il est noyé dans les heures du personnel."
angle: "Coût / Budget"
cta_principal: "/fr/rmm-edr-kaseya365"
cta_secondaire: "/fr/contact"
mots: 1020
lang: fr
date: "2026-04-27"
---

Une coopérative ou un OBNL qui n'a pas de budget informatique formel n'a généralement pas conscience de ce que l'informatique lui coûte vraiment. Ce n'est pas qu'il n'y a pas de coût — c'est qu'il est dilué dans les heures du personnel, dans les pertes de productivité, dans les achats faits en panique, et dans les incidents qu'on minimise.

L'exercice qui suit n'est pas un argument de vente. C'est une grille pour qu'une direction puisse mettre des chiffres réels en face de l'expression « on gère ça à l'interne ». Une fois les chiffres faits, chaque organisation prendra la décision qui lui convient. Mais elle la prendra en connaissance de cause.

## Les quatre coûts invisibles de l'IT « interne »

### 1. Le temps du personnel polyvalent

Dans une coop typique de quinze personnes sans poste TI dédié, plusieurs employés consacrent du temps à des tâches informatiques sans que ce soit reconnu :

- La direction ou la coordination passe en moyenne 2 à 5 heures par semaine sur des questions techniques (problèmes courriel, partage de fichiers, support à un collègue, recherche d'une solution à un blocage).
- Une ou deux personnes « plus à l'aise » dans l'équipe sont régulièrement sollicitées : 1 à 3 heures par semaine, en interruptions courtes.
- Les utilisateurs eux-mêmes perdent du temps à essayer de résoudre leurs propres problèmes avant de demander de l'aide : estimé à 30 à 60 minutes par personne par semaine.

**Calcul indicatif pour une équipe de 15 personnes** (taux horaire chargé moyen de 50 $) :
- Direction/coordination : 3 h × 50 $ × 50 semaines = 7 500 $
- Personne ressource interne : 2 h × 50 $ × 50 semaines = 5 000 $
- Pertes utilisateurs : 0,5 h × 13 personnes × 50 $ × 50 semaines = 16 250 $

**Total annuel estimé : 28 750 $**

Ce chiffre ne paraît jamais dans aucun budget. Il existe quand même.

### 2. Les achats non négociés et les abonnements oubliés

Sans gouvernance IT centralisée, les achats se font typiquement de trois façons :

- **Achat panique** : un portable tombe en panne, on en commande un neuf le lendemain au prix affiché chez le premier détaillant, sans comparaison ni négociation, souvent sur-spécifié ou sous-spécifié pour le besoin réel.
- **Achat doublé** : deux personnes différentes souscrivent à deux outils similaires (deux abonnements Canva, deux abonnements à un convertisseur PDF, deux outils de signature électronique) parce qu'elles ne savaient pas qu'il y en avait déjà un.
- **Abonnement oublié** : un service est souscrit pour un projet ponctuel, le projet finit, l'abonnement continue à se renouveler des années.

Une révision des abonnements logiciels dans une organisation de 20 personnes révèle régulièrement entre 1 500 $ et 4 000 $ de dépenses annuelles récupérables — soit en éliminant les doublons, soit en regroupant sur un plan organisationnel, soit en renégociant.

### 3. Les coûts d'erreur de configuration

Sans personne dont c'est le métier, les configurations sont rarement optimales. Quelques exemples vécus régulièrement :

- Microsoft 365 configuré sans MFA, ce qui mène un jour à une compromission de boîte courriel (coût direct : entre 5 000 $ et 30 000 $ en gestion de crise, notification, perte de confiance des membres, et possiblement détournement de paiement).
- Sauvegardes mal configurées qui ne sauvegardaient pas ce qu'on pensait (coût : variable, mais une perte de données sans sauvegarde dans un OBNL équivaut typiquement à 2 à 4 semaines de productivité gaspillées à reconstituer).
- Plan Microsoft 365 sur-licencié (un plan E3 par personne quand un Business Premium suffirait) : différence d'environ 200 $ par personne par année.

L'absence de surveillance fait que ces erreurs ne sont pas détectées tant qu'elles ne causent pas de problème visible. Et quand elles en causent, c'est souvent trop tard pour limiter les dégâts.

### 4. Le coût d'un incident

Un seul incident sérieux par décennie suffit à inverser le calcul économique. Les fourchettes typiques pour une organisation de 10 à 30 personnes au Québec :

- **Compromission de boîte courriel avec détournement de paiement** : 8 000 $ à 50 000 $ selon la sophistication de l'attaque, sans compter le temps de gestion.
- **Rançongiciel** : 15 000 $ à 100 000 $ tout compris (gestion de crise, restauration, perte de productivité, parfois rançon, frais juridiques, déclaration Loi 25).
- **Perte de données sans sauvegarde fonctionnelle** : difficile à chiffrer, mais souvent 3 à 6 semaines de productivité perdues à reconstituer ce qui peut l'être.

Ces incidents ne sont pas hypothétiques. Le Centre canadien pour la cybersécurité documente une augmentation continue des attaques contre les petites organisations, précisément parce qu'elles sont moins protégées que les grandes.

## Le coût d'un service géré, mis en face

Pour une organisation de 10 à 20 personnes, un service de gestion TI proactif typique au Québec se situe dans la fourchette de 10 000 $ à 18 000 $ par année, incluant :

- Supervision continue des postes et serveurs
- Protection avancée (EDR plutôt qu'antivirus traditionnel)
- Gestion des correctifs de sécurité automatisée
- Support utilisateur encadré, avec délais de réponse définis
- Inventaire des actifs et licences
- Gouvernance des accès et de la sécurité

Si on met les deux colonnes côte à côte pour notre coopérative-exemple de 15 personnes :

| Poste de coût | IT « interne » | Service géré |
|---|---|---|
| Temps du personnel détourné | 28 750 $ | 5 000 $ (résiduel) |
| Achats et abonnements non optimisés | 2 500 $ | Inclus |
| Service externe | 0 $ | 14 000 $ |
| Risque incident annualisé* | 5 000 $ | 1 000 $ |
| **Total** | **36 250 $** | **20 000 $** |

*Risque annualisé = probabilité × coût moyen. Calculé prudemment ici.

Le service géré est moins cher **et** plus sûr. La direction récupère du temps. L'équipe est moins interrompue. Les achats sont rationalisés. La conformité Loi 25 progresse au lieu de stagner.

## Pourquoi alors la majorité des petites coops continuent à « gérer en interne »

Pour des raisons qui n'ont pas grand-chose à voir avec le calcul économique :

- **Visibilité** : le coût interne est invisible (pas de facture), le coût externe est visible (une facture). Le cerveau humain réagit beaucoup plus fortement à un chèque qu'à des heures perdues.
- **Identité** : « on s'arrange entre nous » est cohérent avec la culture coopérative. Externaliser une fonction est parfois ressenti comme une trahison de cette culture.
- **Méfiance** : plusieurs organisations ont eu de mauvaises expériences avec des fournisseurs TI génériques qui ne comprenaient pas leur réalité.

Aucune de ces raisons n'est mauvaise. Mais elles méritent d'être confrontées aux chiffres, plutôt que d'agir comme des automatismes.

## L'exercice à faire en équipe

Avant toute décision, le calcul vaut la peine d'être fait avec les vraies données de l'organisation : combien d'heures réellement passées sur l'IT par les personnes concernées, combien d'abonnements logiciels actuels, quel a été l'incident le plus coûteux des cinq dernières années. La réponse ne sera pas la même dans une organisation de 5 personnes que dans une de 30. Mais avoir le chiffre devant soi change la conversation.

---

**Vous voulez un portrait chiffré de votre situation actuelle ?** Notre [questionnaire TI](/fr/survey) inclut un volet d'évaluation des coûts. Pour une analyse approfondie ou une soumission comparative, [contactez-nous](/fr/contact) ou consultez notre service de [gestion TI proactive](/fr/rmm-edr-kaseya365).
