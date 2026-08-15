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

### Corriger un coup antérieur

Si vous découvrez qu’un ancien coup a été enregistré au mauvais endroit, il n’est pas nécessaire de supprimer puis de rejouer toutes les pierres suivantes :

![!600](/en/ulugo/replace.webp)

1. Sélectionnez le coup incorrect dans l’arbre des coups. Vous pouvez aussi maintenir `Shift` et cliquer sur une pierre du goban pour accéder au coup correspondant ;
2. Sélectionnez l’outil **Remplacer le coup**. Ulugo revient à la position précédant le coup incorrect ;
3. Cliquez avec le bouton gauche sur le bon point pour remplacer le coup suivant. Les coups ultérieurs qui restent légaux sont conservés et apparaissent sous forme de pierres semi-transparentes ;
   - Les nouveaux coups sont signalés par une <span style='color:#0064ff'>ombre bleue</span>, et les coups remplacés par une <span style='color:#ff4d4f'>ombre rouge</span> ;
   - Pour insérer un coup oublié avant le coup suivant au lieu de le remplacer, posez la pierre avec un clic droit ;
   - Dans l’outil **Remplacer le coup**, le bouton de suppression ne supprime que le coup actuel ;
4. Après vérification, cliquez sur ✓ ou appuyez sur `Enter` pour confirmer ;
   - Cliquez sur X ou appuyez sur `Esc` pour abandonner le mode de remplacement et restaurer la position d’origine.

### Notation par photos

La notation par photos est utile lorsque vous ne pouvez pas manipuler l’écran en permanence, mais pouvez photographier un goban réel de temps à autre. Pour le moment, cette entrée n’est affichée que dans la version web sur appareil mobile.

![!600](/en/ulugo/scan-move.webp)

Cette fonction n’est disponible que sur la branche principale de la partie.

### Convertir une configuration du plateau en coups ordinaires

Après avoir ajouté une photo à la partie, vous pouvez conserver temporairement le nœud correspondant à la position photographiée. Si vous connaissez l’ordre réel des coups, utilisez le mode **Remplacer le coup** pour les convertir en coups ordinaires.

![!600](/en/ulugo/replace-scan-move.webp)

Lors de la confirmation, le nœud de position photographiée qui suit immédiatement les nouveaux coups est supprimé.
