---
layout: ulugo
title: Conseils
sidebar: ./sidebar
---

Cette page regroupe par plateforme les conseils affichés dans Ulugo.

### Opérations générales

| Fonction | Action |
| --- | --- |
| Navigation rapide | Maintenez `Shift` et cliquez sur une pierre pour accéder au coup qui l’a posée. Cliquez sur un coup ultérieur pour avancer jusqu’à celui-ci |
| Marquer un groupe connecté | Avec un outil de texte ou de forme sélectionné, double-cliquez sur une pierre pour appliquer le marquage actuel à tout son groupe connecté de la même couleur |
| Incrémentation automatique du texte | Le marquage textuel passe automatiquement au caractère suivant, par exemple `A → B` ou `1 → 2`. Un clic droit conserve le caractère actuel |
| Insérer des coups | Utilisez **Inserer un coup** pour ajouter des coups dans une même branche temporaire. Un clic droit supprime plutôt un coup et sélectionne la position précédente |
| Navigation pendant l’édition | Sélectionner **Inserer un coup** ou **Supprimer le coup** ne modifie pas la position actuelle. Passer d’un outil à l’autre ou sélectionner la branche actuelle ou son tronc antérieur poursuit l’édition. Sélectionner une autre branche y met fin |
| Importer une image | Lors de l’ouverture d’un fichier, choisissez une image du goban pour reconnaître la position et créer un SGF. Consultez [Reconnaissance du goban](./scan.html) pour plus de détails |
| Importer depuis le presse-papiers | Appuyez sur `Ctrl + V` pour ouvrir directement un texte SGF ou une image du presse-papiers |

### Version web

| Fonction | Action |
| --- | --- |
| Mode minimal en orientation portrait | En orientation portrait, le mode minimal pivote automatiquement de `90°` afin de laisser plus de place au goban lors de la saisie sur téléphone ou tablette |
| Estimation du score en fin de partie | Faites un clic droit sur un coup dans la fenêtre inférieure droite pour estimer le score de cette position. Cette fonction convient uniquement aux positions de fin de partie |

### Analyse IA sur ordinateur

| Fonction | Action |
| --- | --- |
| Analyse approfondie | Maintenez `Shift` et cliquez sur le bouton d’analyse en bas à droite du goban pour ignorer les **Visites max** et poursuivre l’analyse de la position actuelle |
| Valeur d’un coup | La **Superposition des meilleurs coups** peut afficher la **Valeur** d’un coup. La vie et la mort dans la zone chaude ainsi que le sente et le gote influencent ce nombre ; il ne correspond donc pas exactement à la valeur de fin de partie |
| Zone chaude | Activez la **Zone chaude** pour afficher en bleu les zones clés disputées par les deux joueurs et en gris celles qu’il faudra peut-être abandonner |
| Vitesse d’analyse | Si l’analyse est lente, sélectionnez un modèle KataGo plus petit dans **Configuration IA**, tel que `kata1-b18`. Réduire les **Visites rapides** accélère aussi la création du graphique de toute la partie |
| Aperçu de la variation principale | Survolez un meilleur coup pour prévisualiser sa variation principale. Vous pouvez aussi maintenir `Alt` et cliquer sur le point pour l’afficher directement |

Pour toutes les commandes au clavier et à la souris, consultez [Raccourcis et gestes](./shortcut.html). Pour les valeurs et graphiques d’analyse, consultez [Analyse IA](./analysis.html).
