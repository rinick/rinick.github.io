---
layout: ulugo
title: Raccourcis et gestes
sidebar: ./sidebar
---

Les raccourcis clavier peuvent être modifiés dans **Paramètres → Raccourcis clavier**. Les tableaux ci-dessous indiquent les valeurs par défaut ; les fonctions marquées **Bureau** nécessitent l'application Electron.

### Modificateurs des touches fléchées

Les flèches de navigation et de changement de variante acceptent des touches modificatrices :

| Entrée | Action |
| --- | --- |
| Touche fléchée | Avancer ou reculer d'un coup, ou changer d'une variante |
| `Shift + touche fléchée` | Avancer de 10 coups ou 10 variantes |
| `Ctrl + touche fléchée` | Aller directement au début, à la fin, à la première ou à la dernière variante |

Sous macOS, utilisez `Command` à la place de `Ctrl`. Afin de conserver ces modes de navigation, les raccourcis personnalisés correspondants n'enregistrent pas `Ctrl` ni `Shift`.

### Gestes d'annotation

| Geste | Action |
| --- | --- |
| Double-cliquer sur une pierre | Appliquer le texte ou la forme actuelle à tout le groupe connecté de même couleur |
| Double-cliquer sur une annotation avec l'outil Effacer | Effacer les annotations connectées ayant le même type et le même texte |
| Double-cliquer sur le bouton Effacer de la barre d'outils | Effacer toutes les annotations du nœud actuel |
| Cliquer droit sur une annotation avec un outil d'annotation | Effacer ce point sans sélectionner l'outil Effacer |
| Cliquer droit sur une intersection vide avec l'outil Texte | Ajouter le texte actuel sans déclencher son incrémentation automatique |

### Autres actions spéciales

- `Ctrl + V` : ouvrir un SGF ou une image depuis le presse-papiers ; ce raccourci est réservé et ne peut pas être réaffecté ;
- `Esc` : quitter le résultat du comptage ou revenir à l'outil **Jeu alterné** ;
- `Shift + clic` sur le goban : cliquer sur une pierre existante pour aller à son coup, ou sur un coup futur pour avancer jusqu'à lui ;
- molette sur le goban : afficher le coup précédent ou suivant ;
- `Alt + clic` sur un coup recommandé : afficher sa variante principale (**Bureau**).

### Fichiers et partie

| Fonction | Raccourci par défaut |
| --- | --- |
| Ouvrir | `Ctrl + O` |
| Enregistrer | `Ctrl + S` |
| Informations de partie | `Ctrl + I` |

### Navigation dans la partie

| Fonction | Raccourci par défaut |
| --- | --- |
| Coup précédent | `↑` |
| Coup suivant (variante principale prioritaire) | `↓` |
| Coup suivant (variante actuelle prioritaire) | Non assigné |
| Variante précédente | `←` |
| Variante suivante | `→` |

### Coups et annotations

| Fonction | Raccourci par défaut |
| --- | --- |
| Passer | `P` |
| Jeu alterné | `1` |
| Placer une pierre noire / blanche | `2` / `3` |
| Remplacer le coup | `4` |
| Ajouter texte / cercle / carré / triangle / croix | `5` / `6` / `7` / `8` / `9` |
| Effacer une annotation | `0` |

### Opérations sur les variantes

| Fonction | Raccourci par défaut |
| --- | --- |
| Déplacer la variante actuelle vers la principale | `\` |
| Déplacer la variante à gauche / à droite | Non assigné |
| Élaguer les autres variantes | Non assigné |
| Supprimer la variante actuelle | `Delete` |

### Affichage et analyse

| Fonction | Raccourci par défaut |
| --- | --- |
| Afficher les coordonnées | `` ` `` |
| Afficher le coup suivant | `Q` |
| Afficher les numéros de coups | `R` |
| Afficher les commentaires | `O` |
| Mode revue / édition (**Bureau**) | `W` |
| Afficher les cercles d'analyse (**Bureau**) | `E` |
| Afficher le territoire (**Bureau**) | `T` |
| Afficher score / perte en points / taux de victoire (**Bureau**) | `Y` / `U` / `I` |
| Lancer ou arrêter l'analyse (**Bureau**) | `Space` |
| Analyse profonde (**Bureau**) | `Shift + Space` |
| Jouer le meilleur coup (**Bureau**) | `Enter` |
