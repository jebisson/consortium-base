---
title: "7 réglages Microsoft 365 que toute coopérative devrait vérifier ce mois-ci"
url_slug: 7-reglages-microsoft-365-cooperative-obnl
meta_description: "Microsoft 365 est livré avec des paramètres pensés pour les grandes entreprises. Voici les 7 réglages qui changent vraiment la sécurité d'une coop ou d'un OBNL."
angle: "Comment faire / Éducatif"
cta_principal: "/fr/securite365"
cta_secondaire: "/fr/survey"
mots: 1050
lang: fr
date: "2026-04-27"
---

Microsoft 365 est probablement la plateforme la mieux outillée du marché en matière de sécurité — mais ses paramètres par défaut sont conçus pour ne déranger personne, pas pour protéger votre organisation. Une coopérative ou un OBNL qui s'abonne à un plan Business Standard et part avec les réglages d'usine se retrouve avec une posture de sécurité bien en-deçà de ce que la même licence permet d'atteindre.

La bonne nouvelle : sept ajustements suffisent à changer significativement le niveau de protection. Aucun ne demande un budget supplémentaire. Tous sont accessibles depuis le centre d'administration Microsoft 365 par une personne qui n'est pas développeuse.

Voici la liste, dans l'ordre d'impact.

## 1. Authentification multifacteur (MFA) obligatoire pour tout le monde

C'est de loin le réglage le plus important, et celui qui est le plus souvent partiel ou absent. Activée correctement, l'authentification multifacteur bloque l'écrasante majorité des compromissions de comptes — y compris celles qui résultent d'un mot de passe volé par hameçonnage.

**Le piège classique :** activer la MFA pour la direction seulement. Si la responsable des communications, le coordonnateur ou un bénévole occasionnel n'a pas la MFA, un attaquant qui prend son compte peut souvent ensuite se déplacer latéralement vers des comptes plus sensibles.

**Réglage à viser :** MFA obligatoire pour 100 % des comptes utilisateurs et administrateurs, sans exception. L'application *Microsoft Authenticator* sur téléphone est gratuite et suffit largement.

## 2. Blocage des protocoles d'authentification hérités (legacy authentication)

Les anciens protocoles — IMAP, POP, SMTP basique, EWS, ActiveSync hérité — n'acceptent pas la MFA. Tant qu'ils sont activés, un attaquant peut contourner toute votre MFA en se connectant simplement par l'un de ces protocoles avec un mot de passe volé.

**Vérification rapide :** dans le centre d'administration, sous *Paramètres > Paramètres organisation > Outlook moderne dans le navigateur*, vérifiez que les protocoles legacy sont désactivés. Plus rigoureusement, créez une *politique d'accès conditionnel* qui les bloque pour tous les utilisateurs.

**Risque résiduel :** un vieux scanner qui envoie des courriels par SMTP, une application métier obsolète. Faites l'inventaire avant de bloquer, créez les exceptions strictement nécessaires, et planifiez leur remplacement.

## 3. Paramètres anti-hameçonnage renforcés

Microsoft Defender for Office 365 (inclus dans plusieurs plans Business) inclut des règles anti-hameçonnage qui ne sont pas toutes activées par défaut. La règle la plus utile pour une petite organisation est la **protection contre l'usurpation d'identité** des cadres : Defender peut détecter qu'un courriel prétend venir de votre direction générale alors qu'il vient d'un domaine externe similaire.

**À configurer :** ajoutez les noms et adresses de la direction et des personnes-clés (trésorerie, comptabilité) à la liste des utilisateurs protégés. Activez la mise en quarantaine plutôt que l'envoi en boîte de réception avec avertissement.

**Coup combiné gagnant :** ce réglage avec la formation des employés à reconnaître les courriels frauduleux (voir notre [page Formations](/fr/formation-integration)).

## 4. Restriction du partage externe SharePoint et OneDrive

Par défaut, dans plusieurs plans Microsoft 365, un utilisateur peut partager n'importe quel fichier avec n'importe qui à l'extérieur de l'organisation, en quelques clics, sans approbation. Pour une coop qui gère des données membres, des dossiers RH ou des documents financiers, c'est un risque majeur — et un risque Loi 25.

**Niveau recommandé pour une petite organisation :** *Personnes nouvelles et existantes invitées*, avec authentification du destinataire (lien à usage unique envoyé par courriel). Désactivez les liens « toute personne avec le lien » par défaut, et autorisez-les uniquement sur les sites SharePoint où c'est délibérément nécessaire.

**Bonus :** activez l'expiration automatique des liens externes après 30 ou 60 jours. Les fichiers ne devraient pas rester partagés ad vitam aeternam avec un fournisseur qui ne travaille plus avec vous.

## 5. Journalisation et alertes de connexion suspecte

Microsoft 365 enregistre par défaut les événements importants, mais les alertes ne sont pas toutes activées. Trois alertes simples valent la peine d'être actives dès le départ :

- **Voyage impossible** : connexions depuis deux endroits géographiquement incompatibles dans un court délai (Montréal puis Lagos en 30 minutes).
- **Connexion depuis un pays inhabituel** : alerte dès qu'un utilisateur se connecte depuis un pays où votre organisation n'opère pas.
- **Modification des règles de redirection courriel** : les attaquants créent souvent des règles cachées qui transfèrent les courriels vers une adresse externe pour intercepter les conversations.

**Où :** centre de conformité Microsoft Purview ou portail Defender, section *Politiques d'alerte*.

## 6. Politique de mot de passe moderne (et pas l'inverse)

C'est probablement le réglage le plus contre-intuitif de la liste : **n'imposez pas de changement de mot de passe régulier**. Le NIST américain a abandonné cette recommandation en 2017, et le Centre canadien pour la cybersécurité l'a suivi. Forcer les utilisateurs à changer leur mot de passe tous les 90 jours mène à des mots de passe plus faibles (variations prévisibles, post-it sur l'écran) et n'apporte aucun bénéfice mesurable de sécurité.

**Réglage moderne :**

- Mots de passe d'au moins 12 caractères, sans expiration forcée.
- Liste de mots de passe interdits (votre nom d'organisation, *Quebec2026*, etc.).
- Détection automatique des mots de passe compromis dans des fuites publiques (Microsoft le fait nativement avec *Azure AD Password Protection*).
- Authentification multifacteur sur tout le monde, qui rend le mot de passe une protection secondaire.

## 7. Récupération de fichiers et préservation après suppression

Microsoft 365 conserve par défaut les fichiers supprimés et les courriels pendant un temps limité, et plusieurs organisations apprennent trop tard que ce filet de sécurité est court. Si un employé quitte et que son compte est supprimé, ses fichiers OneDrive disparaissent généralement après 30 jours sauf intervention.

**À vérifier :**

- **Rétention OneDrive après désactivation du compte** : porter à 90 jours minimum, ou mettre en place une procédure systématique de transfert vers un site SharePoint avant suppression.
- **Politique de rétention des courriels** : pour la plupart des coops, conserver les courriels pendant 7 ans est un bon point de départ (alignement avec les obligations comptables).
- **Sauvegarde tierce** : les paramètres de Microsoft 365 ne remplacent pas une vraie sauvegarde. Un ransomware qui chiffre OneDrive synchronisé localement chiffre aussi les versions cloud. Voir notre [page Sauvegarde 365](/fr/sauvegarde365).

## Combien de temps ça prend

Pour une organisation de 10 à 30 personnes, l'ensemble de ces sept réglages représente entre une et deux journées de travail pour une personne familière avec le centre d'administration Microsoft 365. La principale variable, c'est la communication interne : la MFA et le blocage des protocoles legacy demandent qu'on prévienne les utilisateurs et qu'on prévoie un peu de support les premiers jours.

Une fois en place, ces réglages améliorent significativement la posture de sécurité, contribuent directement à la conformité Loi 25, et n'ont pratiquement pas besoin d'entretien.

---

**Vous n'êtes pas certain·e de l'état actuel de vos paramètres ?** Le [questionnaire TI](/fr/survey) inclut une section diagnostic Microsoft 365 qui identifie en quelques minutes lesquels de ces sept réglages sont à revoir chez vous. Pour une révision complète accompagnée, consultez notre [service Sécurité 365](/fr/securite365).
