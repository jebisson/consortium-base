---
title: "Pourquoi nous ne recommandons plus l'antivirus traditionnel aux coopératives"
url_slug: antivirus-vs-edr-cooperative-obnl
meta_description: "L'antivirus a été utile pendant 20 ans. En 2026, il ne protège plus contre l'essentiel des menaces. Voici ce qui l'a remplacé et pourquoi."
angle: "Curiosité / Prise de position"
cta_principal: "/fr/rmm-edr-kaseya365"
cta_secondaire: "/fr/securite365"
mots: 920
lang: fr
date: "2026-04-27"
---

Le réflexe est encore profondément ancré : on parle de sécurité informatique, et la première chose qu'on demande, c'est « est-ce qu'il y a un antivirus ? » La réponse est presque toujours oui — Microsoft Defender intégré à Windows, ou un produit acheté il y a dix ans qui se renouvelle automatiquement chaque année.

Pourtant, depuis plusieurs années, c'est rarement la bonne question. L'antivirus tel qu'il a existé pendant deux décennies — un logiciel qui scanne les fichiers à la recherche de signatures connues de virus — n'est plus l'outil approprié contre la majorité des menaces modernes. Il continue d'avoir un rôle, mais ce n'est plus le pivot de la sécurité d'une organisation. Cet article explique ce qui a changé et ce qui le remplace.

## Ce que faisait l'antivirus traditionnel

Le principe historique de l'antivirus est simple : on maintient une base de données de « signatures » de logiciels malveillants connus, et on compare les fichiers du système à cette base. Si un fichier correspond, on le bloque ou on le supprime.

Ce modèle a bien fonctionné tant que :

- Les attaques étaient majoritairement basées sur des fichiers exécutables connus.
- Les attaquants modifiaient peu leur code.
- Le délai entre l'apparition d'un virus et sa diffusion était assez long pour qu'une signature soit créée à temps.

Aucun de ces trois points n'est encore vrai en 2026.

## Ce qui a changé

### Les attaques ne reposent plus principalement sur des fichiers

Une part croissante des attaques modernes n'utilise pas de fichier malveillant détectable. Les techniques dites *living off the land* exploitent des outils légitimes déjà présents sur le système (PowerShell, scripts d'administration, outils de connexion distante) pour exécuter des actions malveillantes. Aucun fichier suspect n'est jamais écrit sur le disque. Aucun antivirus à signatures ne détecte cela.

### Les rançongiciels modernes contournent les signatures

Les groupes de rançongiciels actuels génèrent des variantes uniques de leur code à chaque attaque, parfois personnalisées par cible. Le temps qu'une signature soit créée et distribuée par un éditeur d'antivirus, l'attaque est terminée depuis longtemps. Le code utilisé pour chiffrer les fichiers d'une coop québécoise hier ne sera jamais réutilisé tel quel ailleurs.

### Le vol de session a remplacé le vol de mot de passe

Une grande partie des compromissions actuelles n'implique aucun logiciel malveillant exécuté sur le poste de la victime. Un courriel d'hameçonnage convainc l'utilisateur de saisir son mot de passe sur une fausse page. Le jeton de session Microsoft 365 est volé. Tout se passe entre le navigateur et le cloud. L'antivirus du poste n'a rien à analyser.

## Ce qui le remplace : l'EDR (et au-delà)

L'**EDR** — *Endpoint Detection and Response* — est devenu le standard pour les organisations qui prennent leur sécurité au sérieux, y compris les petites. Plutôt que de comparer des fichiers à une base de signatures, un EDR observe en continu le **comportement** du poste : quels processus se lancent, quels fichiers sont modifiés, quelles connexions réseau sont établies, quelles séquences d'actions se produisent.

La différence pratique :

- Un antivirus dit : « ce fichier ressemble à un virus connu, je le bloque ».
- Un EDR dit : « le processus Word vient de lancer PowerShell, qui télécharge un script depuis un serveur en Russie et tente de chiffrer 200 fichiers en deux minutes. Je l'arrête, j'isole le poste du réseau, et j'envoie une alerte. »

Le second cas correspond à 90 % des attaques modernes. Le premier, à une fraction décroissante.

L'EDR détecte aussi les comportements *living off the land* (PowerShell utilisé de façon anormale), il enregistre l'activité pour qu'on puisse comprendre après coup ce qui s'est passé, et il permet une réponse coordonnée — isoler le poste, tuer le processus, restaurer l'état antérieur.

## L'objection qui revient toujours : « C'est pour les grandes entreprises »

C'était vrai il y a dix ans. Les premiers EDR étaient coûteux, complexes, et nécessitaient une équipe d'analystes 24/7 pour interpréter les alertes. Aujourd'hui, plusieurs solutions sont accessibles aux petites organisations, à des coûts par poste comparables à un bon antivirus traditionnel — particulièrement quand l'EDR est inclus dans un service géré qui prend en charge la surveillance et la réponse aux alertes.

Pour une coop ou un OBNL, la question n'est plus « peut-on se permettre un EDR ? » mais « peut-on se permettre de ne pas en avoir un ? » Le coût annualisé d'un incident de rançongiciel sur une organisation non protégée se chiffre en dizaines de milliers de dollars. Le coût d'un EDR géré, en quelques centaines.

## Ce que nous recommandons concrètement

Pour la plupart des coops et OBNL au Québec :

- **Conserver Microsoft Defender** intégré à Windows comme couche de base. Il est gratuit, il ne nuit pas, et il bloque les attaques les plus triviales.
- **Ajouter un EDR géré** comme couche principale de détection et de réponse. Sentinel, Defender for Business (la version EDR, pas l'antivirus de base), ou un produit comme ceux intégrés dans la plateforme Kaseya 365 — l'important est qu'il y ait quelqu'un qui répond aux alertes, pas juste un logiciel installé.
- **Désinstaller les vieux antivirus payants** qui font doublon avec Defender. Les marques connues du grand public (Norton, McAfee, Avast) installées il y a dix ans ne servent plus à grand-chose et peuvent même nuire aux performances.
- **Ne pas confondre antivirus et sauvegarde** : aucun outil de détection, aussi bon soit-il, ne remplace une stratégie de sauvegarde immuable. Voir notre [page Sauvegarde 365](/fr/sauvegarde365).

## En résumé

L'antivirus traditionnel a été utile. Il l'a même été énormément. Mais comme les pare-feu personnels qui étaient indispensables en 2003 et qui sont aujourd'hui intégrés à Windows sans qu'on y pense, il est devenu une couche basique parmi d'autres, plus le pivot. Le pivot, en 2026, c'est l'EDR — et idéalement un EDR surveillé par quelqu'un qui sait quoi faire quand l'alerte sonne à 3 h du matin un samedi.

C'est précisément la raison d'être d'un service de gestion TI proactive.

---

**Vous voulez savoir ce qui protège vraiment vos postes en ce moment ?** Notre service de [gestion TI proactive](/fr/rmm-edr-kaseya365) inclut un EDR de niveau entreprise et une surveillance active des alertes. Pour discuter de la situation actuelle de votre organisation, [demandez une soumission](/fr/contact).
