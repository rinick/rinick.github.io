---
layout: ulugo
title: Analyse IA
sidebar: ./sidebar
---

L'application de bureau Ulugo analyse les parties localement et affiche les coups recommandés, le territoire, l'écart de score et l'évolution du taux de victoire. Cette fonction n'est pas disponible dans la version web.

Avant la première utilisation, terminez la [configuration de l'environnement IA](./katago.html).

### Lancer l'analyse

Après avoir ouvert une partie, cliquez sur le bouton éclair en bas à droite du goban ou appuyez sur `Space` :

- Ulugo parcourt rapidement les coups existants pour construire les graphiques de la partie ;
- l'analyse se poursuit sur la position actuelle et se stabilise avec le calcul ;
- les nœuds terminés sont mis en cache et ne sont pas recalculés lors d'une nouvelle visite ;
- appuyez de nouveau sur `Space` pour arrêter l'analyse.

![!600](/en/ulugo/analysis.webp)

Maintenez `Shift` en cliquant sur le bouton d'analyse, ou appuyez sur `Shift + Space`, pour activer l'**analyse profonde**. Elle poursuit le calcul de la position actuelle et facilite la comparaison de variantes complexes.

### Coups recommandés

Les coups recommandés correspondent aux candidats de la recherche actuelle. Les cercles indiquent leur ordre ; l'option **Superposition des meilleurs coups** des paramètres peut aussi afficher les valeurs suivantes :

| Option | Description |
| --- | --- |
| Variation du score | Variation estimée par rapport au meilleur candidat. `0` est la référence ; `-3.0` correspond à une perte d'environ 3 points |
| Variation du taux de victoire | Variation par rapport au meilleur candidat. `0%` est la référence ; une valeur négative indique une perte de taux de victoire |
| Score | Marge finale estimée après le coup, du point de vue du joueur au trait ; positive s'il mène, négative s'il est mené |
| Visites | Nombre de recherches allouées au candidat. Il reflète la répartition du calcul et la stabilité du résultat, pas à lui seul la qualité du coup |
| Valeur | Valeur du coup par rapport à un passe. Elle est proche, sans lui être identique, de la valeur d'un yose gote |

La superposition peut afficher deux valeurs à la fois. Le réglage **Nombre minimal de visites pour la superposition** masque les candidats encore insuffisamment analysés.

Appuyez sur `Enter` pour jouer le meilleur coup actuel. Consultez [Raccourcis et gestes](./shortcut.html) pour les autres commandes.

### Variante principale

Survolez un coup recommandé pour afficher sur le goban la suite prévue par l'IA. Un `Alt`-clic sur le coup produit le même résultat.

Le **délai d'aperçu de la variante principale** détermine la durée du survol avant l'affichage. La valeur `0` désactive le survol, mais pas le `Alt`-clic.

La variante principale est la ligne privilégiée par la recherche actuelle, et non la seule suite possible. Elle peut évoluer à mesure que la recherche se poursuit.

### Graphiques du panneau droit

Le panneau droit propose quatre graphiques, affichables séparément ou ensemble :

| Graphique | Description |
| --- | --- |
| Score | Marge finale estimée après chaque coup, avec le komi et les règles actuelles. Au-dessus de l'axe : `B+` ; en dessous : `W+` |
| Perte | Perte de marge estimée causée par le coup joué. Plus la barre est haute, plus la perte est importante ; les variations supérieures à environ 1 point sont mises en évidence |
| Victoire | Taux de victoire estimé des Noirs après chaque coup. Celui des Blancs vaut `100% − taux des Noirs`, avec `50%` comme référence d'équilibre |
| Intens. | Intensité actuelle du combat, mesurée par la marge perdue si le joueur passe au lieu de jouer le meilleur coup. La zone ombrée s'étend de façon symétrique autour de zéro |

![](/en/ulugo/chart-.webp)

Survolez le graphique pour voir le numéro du coup, la marge, les taux de victoire des deux joueurs et la perte du coup. Cliquez pour aller directement à ce coup, ou utilisez la molette sur le graphique pour avancer et reculer.

Lorsqu'un joueur possède une avance nette, le taux de victoire peut rester longtemps proche de `0%` ou `100%`. Dans ce cas, le score et la perte en points décrivent mieux la qualité de chaque coup.

La **limite d'affichage de l'intensité** vaut `25` par défaut. L'axe ne s'élargit qu'avec l'intensité réelle, jusqu'à cette limite. Si le score ou la perte exige déjà un axe plus large, l'intensité peut utiliser cette plage sans l'élargir davantage à elle seule.

### Territoire et zone chaude

| Affichage | Description |
| --- | --- |
| Territoire | Les couleurs translucides indiquent les zones que chaque camp devrait contrôler. Il s'agit de l'estimation actuelle, pas d'un résultat final confirmé |
| Zone chaude | Le bleu indique les zones clés disputées ou susceptibles d'être perdues après une erreur. Le gris indique les parties qu'il faudra peut-être sacrifier pour préserver une zone plus importante |

![!600](/en/ulugo/hot-zone.webp)

### Si l'analyse est lente

Commencez par réduire le nombre de visites de l'analyse normale ou du parcours complet. Pour les modèles, le matériel et l'exécution, consultez [Environnement et matériel](./katago.html).
