---
layout: ulugo
title: Notation d’une partie
sidebar: ./sidebar
---

Ulugo permet de noter une partie coup par coup pendant qu’elle se déroule. Vous pouvez également photographier périodiquement le goban avec un téléphone, enregistrer d’abord la différence entre deux positions sous la forme d’un nœud de configuration du plateau, puis convertir ces pierres en coups ordinaires dans leur ordre réel.

### Notation coup par coup

Après avoir commencé une nouvelle partie, utilisez l’outil **Jeu alterné** pour poser successivement les pierres sur le goban.

Sur un téléphone ou une tablette, le mode minimal permet au goban d’occuper autant d’espace que possible. Le bouton rond en haut à droite ouvre temporairement les numéros de coups, les coordonnées, les outils de base et l’arbre des coups.

![!620](/en/ulugo/minimal-mode.webp)

### Insérer ou supprimer des coups

- Sélectionnez **⨂ Supprimer le coup**, puis cliquez sur une pierre de la position actuelle ou d’un coup ultérieur pour la supprimer.
- Sélectionnez **⨁ Insérer un coup**, puis cliquez sur le goban pour ajouter un coup après la position actuelle. Un clic droit supprime plutôt un coup et sélectionne la position précédente.

L’entrée dans l’un des outils et le passage de l’un à l’autre ne changent pas la position actuelle. Toutes les modifications sont regroupées dans une seule variante temporaire. Pendant l’édition, seule la sélection d’une autre variante met fin à la session.

Les coups ultérieurs qui restent légaux sont conservés. Les coups insérés et supprimés sont signalés respectivement par une <span style='color:#0064ff'>ombre bleue</span> et une <span style='color:#ff4d4f'>ombre rouge</span>. Cliquez sur ✓ ou appuyez sur `Enter` pour confirmer. Cliquez sur X ou appuyez sur `Esc` pour annuler et restaurer la partie d’origine.

Les deux outils peuvent être combinés. Pour corriger un coup mal saisi, supprimez-le, puis insérez le bon coup.

### Notation par photos

La notation par photos est utile lorsque vous ne pouvez pas manipuler l’écran en permanence, mais pouvez photographier un goban réel de temps à autre. Pour le moment, cette entrée n’est affichée que dans la version web sur appareil mobile.

![!600](/en/ulugo/scan-move.webp)

Cette fonction n’est disponible que sur la branche principale de la partie.

### Convertir une configuration du plateau en coups ordinaires

Après avoir ajouté une photo à la partie, vous pouvez conserver temporairement le nœud correspondant à la position photographiée. Si vous connaissez l’ordre réel des coups, sélectionnez **Insérer un coup**, puis saisissez les coups dans cet ordre.

![!600](/en/ulugo/replace-scan-move.webp)

Le contenu encore valide après le nœud de position photographiée est conservé pendant la saisie. La confirmation supprime le nœud de position photographiée qui suit immédiatement les coups ajoutés ; l’annulation restaure la partie antérieure à la modification.
