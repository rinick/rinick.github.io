---
layout: ulugo
title: Astuces
sidebar: ./sidebar
---

Cette page regroupe les conseils affichés dans Ulugo et les classe selon la plateforme concernée.

### Opérations générales

| Fonction | Action |
| --- | --- |
| Navigation rapide | Maintenir `Shift` et cliquer sur une pierre pour aller au coup qui l'a jouée ; cliquer sur un coup futur pour avancer jusqu'à lui |
| Marquer un groupe connecté | Avec un outil de texte ou de forme, double-cliquer sur une pierre pour appliquer l'annotation actuelle à tout son groupe connecté de même couleur |
| Incrémentation du texte | Le texte d'annotation passe automatiquement de `A → B` ou de `1 → 2` ; un ajout par clic droit conserve le texte actuel |
| Corriger un coup mal saisi | Sélectionner le coup incorrect et utiliser **Remplacer le coup**. Ulugo revient à la position précédente pour corriger l'intersection sans rejouer les coups suivants |
| Importer une image | Choisir une image de goban lors de l'ouverture d'un fichier pour reconnaître la position et créer un SGF. Voir [Reconnaissance du goban](./scan.html) |
| Importer depuis le presse-papiers | Appuyer sur `Ctrl + V` pour ouvrir directement un texte SGF ou une image du presse-papiers |

### Version web

| Fonction | Action |
| --- | --- |
| Mode minimal en portrait | Le mode minimal pivote de `90°` en orientation portrait afin de réserver davantage d'espace au goban sur téléphone ou tablette |
| Estimation du score final | Cliquer droit sur un coup dans le panneau en bas à droite pour estimer le score de cette position ; cette fonction est réservée aux positions de fin de partie |

### Analyse IA de bureau

| Fonction | Action |
| --- | --- |
| Analyse profonde | Maintenir `Shift` et cliquer sur le bouton d'analyse en bas à droite du goban pour ignorer les **Visites maximales** et poursuivre l'analyse de la position actuelle |
| Valeur d'un coup | La **Superposition des meilleurs coups** peut afficher la **Valeur** d'un coup. La vie et mort dans la zone chaude ainsi que sente/gote influencent cette valeur, qui ne correspond donc pas exactement à celle du yose |
| Zone chaude | Activer **Zone chaude** pour afficher en bleu les zones clés disputées et en gris celles qu'il faudra peut-être céder |
| Vitesse d'analyse | Si l'analyse est lente, choisir dans **Configuration IA** un petit modèle KataGo, par exemple `kata1-b18` ; réduire les **Visites rapides** raccourcit aussi la création des graphiques de la partie |
| Aperçu de la variante principale | Survoler un coup recommandé pour afficher sa variante principale ; un `Alt`-clic sur le point l'affiche également directement |

Pour toutes les commandes clavier et souris, consultez [Raccourcis et gestes](./shortcut.html). Pour les valeurs et graphiques d'analyse, consultez [Analyse IA](./analysis.html).
