---
layout: ulugo
title: Ulugo
sidebar: ./sidebar
---

Ulugo est un éditeur de parties de go et un outil de revue IA hors ligne. Il permet de noter une partie dans le navigateur, de modifier des fichiers SGF, d'importer une position depuis une photo et de compter le score après la partie. L'application de bureau propose aussi une analyse IA locale.

| Version | Usages principaux |
| --- | --- |
| [Version web](https://ulugo.com) | Notation et édition, mode minimal, reconnaissance d'image et comptage après la partie, sans installation |
| [Application de bureau](https://github.com/rinick/ulugo/releases/latest) | Toutes les fonctions web, plus l'analyse IA locale |

### Mode revue

Le mode revue affiche les coups recommandés par l'IA, le territoire, l'écart de score et l'évolution du taux de victoire. Il permet de repérer les erreurs après une partie et de comparer les variantes. L'analyse IA est réservée à l'application de bureau ; consultez [Analyse IA](./analysis.html) pour son utilisation.

![!600](/en/ulugo/analysis.webp)

Ulugo permet d'ouvrir directement des parties depuis Fox Weiqi, Tygem, KGS, Pandanet et OGS. L'ouverture et l'enregistrement de parties sur Google Drive sont également pris en charge.

![!600](/en/ulugo/open-from.webp)

### Mode édition

Le mode édition sert à créer et organiser les parties :

- ouvrir, modifier et enregistrer des fichiers SGF ;
- ajouter des variantes, des commentaires et des annotations sur le goban ;
- corriger un coup mal saisi et réordonner les variantes ;
- reconnaître une position depuis une photo et créer un SGF.

![!600](/en/ulugo/edit-mode.webp)

Pour l'importation depuis une photo et le comptage après la partie, consultez [Reconnaissance du goban](./scan.html). Les commandes courantes sont regroupées dans [Raccourcis et gestes](./shortcut.html).

Pour noter une partie coup par coup, poursuivre la notation à l’aide de photos ou corriger un ancien coup mal saisi, consultez [Notation d’une partie](./record.html).

### Mode minimal

Le mode minimal masque la majeure partie de l'interface afin d'agrandir au maximum le goban. Il convient particulièrement à la [notation d’une partie](./record.html) sur téléphone ou tablette. Le bouton rond en haut à droite donne un accès temporaire aux numéros de coups, aux coordonnées, aux outils de base et au panneau droit.

![!640](/en/ulugo/minimal-mode.webp)

### Index des fonctionnalités

| Fonction | Documentation |
| --- | --- |
| Noter coup par coup, poursuivre avec des photos ou corriger un coup mal saisi | [Notation d’une partie](./record.html) |
| Importer un goban depuis une photo ou compter une partie terminée | [Reconnaissance du goban](./scan.html) |
| Revoir une partie avec l'IA | [Analyse IA](./analysis.html) |
| Configurer l'environnement IA ou résoudre un problème de performances | [Environnement et matériel](./katago.html) |
| Consulter ou modifier les raccourcis | [Raccourcis et gestes](./shortcut.html) |
