---
title: "Votre adjointe administrative quitte vendredi. Elle a tous les mots de passe."
url_slug: depart-employe-acces-mots-de-passe-cooperative
meta_description: "Le scénario du départ d'une employée qui détient tous les accès se produit chaque semaine au Québec. Voici comment l'éviter."
angle: "Scénarios de risque"
cta_principal: "/fr/rmm-edr-kaseya365"
cta_secondaire: "/fr/guide-employe"
mots: 950
lang: fr
date: "2026-04-27"
---

Le scénario revient pratiquement chaque semaine. Une coordonnatrice ou un adjoint administratif annonce son départ. Pendant cinq, dix ou quinze ans, cette personne a été l'interlocuteur informel de l'informatique : elle a créé les boîtes courriel, configuré les imprimantes, choisi les applications, géré les abonnements, partagé les mots de passe lorsqu'on en avait besoin. Personne d'autre dans l'organisation n'a jamais eu une vue d'ensemble.

Et là, vendredi, elle part.

Ce qui suit est rarement catastrophique tout de suite. C'est progressif. Trois mois plus tard, l'organisation découvre qu'elle n'a plus accès à l'abonnement du domaine web. Six mois plus tard, qu'une boîte courriel partagée pointe encore vers un téléphone qui n'existe plus. Un an plus tard, qu'une facture de logiciel continue d'être payée pour un outil que personne n'utilise.

Et puis un jour, il y a un vrai problème — une compromission, une demande Loi 25, une panne — et personne n'a les accès pour intervenir.

## Pourquoi c'est si fréquent dans les coops et OBNL

Trois facteurs structurels :

- Les petites organisations n'ont pas de poste dédié à l'informatique. La fonction se loge naturellement chez la personne la plus à l'aise techniquement, sans formalisation.
- Le partage de mots de passe entre collègues est culturellement accepté. « Envoie-moi le mot de passe Canva par courriel » est encore courant.
- Le départ d'une personne polyvalente est traité comme un départ administratif, pas comme un transfert de connaissances techniques.

Le résultat : la connaissance technique de l'organisation vit dans la tête d'une personne, parfois dans un fichier Excel non protégé, ou dans la mémoire d'un navigateur web sur un poste qui partira aussi.

## Ce qu'il faut mettre en place avant le prochain départ

L'objectif n'est pas de se prémunir contre une seule départ — c'est de structurer la gestion des accès pour que le départ de n'importe qui devienne un événement gérable, pas une crise.

### Comptes nominatifs, pas comptes partagés

Chaque personne devrait avoir son propre compte nominatif pour chaque service utilisé. Les comptes partagés du type *info@*, *direction@*, *admin@* devraient être limités à des boîtes courriel partagées (qui peuvent recevoir et envoyer en groupe) plutôt qu'à des comptes utilisateurs avec un mot de passe que tout le monde connaît.

Pourquoi : quand quelqu'un part, on désactive son compte nominatif et on a une trace de ses actions. Avec un compte partagé, on doit changer le mot de passe et le redistribuer à tout le monde — ce qui est rarement fait.

### Un gestionnaire de mots de passe organisationnel

Pas un fichier Excel. Pas un cahier dans un tiroir. Pas la mémoire du navigateur. Un vrai gestionnaire d'équipe — *1Password Business*, *Bitwarden Teams*, *Keeper Business* — où chaque mot de passe est rangé dans des coffres-forts par équipe ou par projet.

L'avantage opérationnel est évident : quand quelqu'un part, on retire son accès au coffre. Tous les mots de passe qu'il connaissait restent accessibles à l'équipe qui en a besoin, mais lui ne les a plus.

### MFA partout, sur des appareils traçables

L'authentification multifacteur (MFA) sur tous les comptes critiques est la seconde couche essentielle. Mais il faut la configurer intelligemment : la MFA d'une personne ne devrait pas dépendre exclusivement de son téléphone personnel. Si elle perd son téléphone le jour de son départ — ou si elle part en mauvais termes — vous voulez pouvoir récupérer le compte.

À mettre en place : application *Microsoft Authenticator* sur le téléphone, **plus** un numéro de téléphone de secours organisationnel, **plus** des codes de récupération imprimés et conservés dans un endroit sûr accessible à la direction.

### Une procédure de départ documentée (une page)

Une simple liste de vérification, à appliquer à chaque départ, suffit :

- Désactivation du compte Microsoft 365 (sans suppression immédiate — voir plus bas)
- Transfert ou archivage du contenu OneDrive et de la boîte courriel
- Retrait des accès aux coffres-forts du gestionnaire de mots de passe
- Récupération du matériel (portable, téléphone, clés physiques)
- Désactivation des accès à toutes les applications tierces (CRM, outil de gestion comptable, plateforme de dons)
- Mise à jour des permissions SharePoint et des groupes Teams
- Notification au fournisseur TI s'il y a lieu
- Changement des mots de passe de comptes partagés que la personne connaissait

Une page. Affichée. Pas un projet.

### Délai de grâce avant la suppression

Désactivez le compte le jour du départ, mais ne le supprimez pas tout de suite. Microsoft 365 conserve les données par défaut un certain temps (typiquement 30 jours), mais cette fenêtre est courte. Mettez en place un délai organisationnel de 90 jours minimum, durant lequel le contenu est transféré à un manager ou archivé sur un site SharePoint dédié aux ex-employés. Après quoi, le compte peut être supprimé proprement.

## Le cas du départ non planifié

Tout ce qui précède suppose un départ annoncé deux semaines à l'avance. Mais une partie des départs sont brutaux : maladie, conflit, démission immédiate. Sans préparation, ces situations sont les pires.

La règle qui fait la différence : **personne ne devrait jamais être seule à détenir un accès critique**. Tous les comptes administrateurs Microsoft 365, tous les abonnements aux services essentiels, tous les domaines web doivent avoir au moins deux personnes qui y ont accès — typiquement la direction et une autre personne désignée. Si la deuxième personne est externe (un partenaire TI), c'est encore mieux : elle ne partira pas en même temps qu'un conflit interne.

## Le moment idéal pour faire l'exercice

Aucune urgence n'oblige à faire le ménage des accès. C'est exactement pour ça que ça ne se fait pas. Les deux meilleurs déclencheurs naturels :

- **L'arrivée d'un nouvel employé** : c'est l'occasion de structurer les accès proprement dès le départ, plutôt que de continuer à improviser. Notre [guide pratique employé](/fr/guide-employe) détaille les bonnes pratiques d'intégration.
- **Un changement de fournisseur ou de plateforme** : profitez-en pour faire l'inventaire des comptes existants et redistribuer les accès selon une logique organisationnelle, pas historique.

Le coût d'avoir un système propre est faible. Le coût de découvrir qu'on n'en a pas, le jour où on en a besoin, est très élevé.

---

**Vous voulez auditer la situation des accès dans votre organisation ?** Notre service de [gestion TI proactive](/fr/rmm-edr-kaseya365) inclut un volet de gouvernance des comptes et des mots de passe. Pour discuter de votre cas spécifique, [demandez une soumission](/fr/contact).
