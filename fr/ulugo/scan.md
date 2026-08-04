---
layout: ulugo
title: Reconnaissance du goban
sidebar: ./sidebar
---

Ulugo reconnaît les pierres noires et blanches sur une photo de goban afin de **saisir rapidement une position** ou de **compter une partie terminée depuis une photo**. Ces deux opérations fonctionnent dans la version web ; le comptage ne dépend pas de l'IA de bureau.

![!600](/en/ulugo/scan.webp)

Une photo ne contient que la **position actuelle**. Elle ne permet pas de reconstituer l'ordre des coups ni les pierres capturées auparavant.

### Démarrage rapide

1. Ouvrez une image sur [ulugo.com](https://ulugo.com). Sur téléphone, vous pouvez aussi choisir **Ouvrir depuis l'appareil photo**.
2. Sélectionnez `9 × 9`, `13 × 13` ou `19 × 19`, puis recadrez l'image si nécessaire.
3. Cliquez sur **Appliquer** et comparez la position reconnue à l'image originale.
4. Sélectionnez les règles de la partie et confirmez. Vous pouvez ensuite enregistrer le SGF ou afficher le résultat du comptage.

### Prendre une photo facile à reconnaître

| Recommandé | À éviter |
| --- | --- |
| Inclure les quatre côtés et les quatre coins du goban | Bords coupés ou masqués par un objet |
| Photographier à la verticale ou presque | Angle trop bas et forte déformation de perspective |
| Utiliser une lumière uniforme et conserver des contours nets | Reflets forts sur les pierres ou grandes ombres |
| Garder l'image nette et faire occuper l'essentiel du cadre au goban | Flou, obstruction ou goban trop petit dans l'image |

### Recadrage

Un recadrage peut aider si le goban est petit dans la photo ou si l'arrière-plan est complexe.

- Conservez les quatre côtés et les quatre coins du goban ;
- ne placez pas la limite du recadrage directement sur la ligne extérieure, même si la première ligne ne contient aucune pierre.

![!600](/en/ulugo/scan-crop.webp)

### Compter une partie terminée depuis une photo

Après la partie, ouvrez [ulugo.com](https://ulugo.com) sur un téléphone, photographiez le goban complet et terminez la reconnaissance pour afficher le résultat. Le comptage est effectué dans le navigateur.

- Sélectionnez les règles utilisées pendant la partie ;
- comparez la position à la photo pour repérer les pierres manquantes ou incorrectes ;
- si nécessaire, cliquez sur les pierres mortes pour ajuster le résultat.

![!600](/en/ulugo/scoring.webp)

### Usage équitable et captures de logiciels de go {#screenshot}

La reconnaissance d'images d'Ulugo est destinée à la notation de gobans physiques, au comptage après la partie et à la revue. Afin de préserver l'équité du jeu en ligne, l'environnement de bureau détecte les captures courantes de logiciels de go et empêche la création directe d'un SGF à partir de ces images.

![](/en/ulugo/scan-warning.webp)

Ce mécanisme ne cherche pas à déduire l'intention de l'utilisateur. Il ajoute simplement une restriction légère aux situations susceptibles d'affecter une partie en cours.

Après une partie en ligne, si le SGF ne peut pas être téléchargé et qu'une photo est la seule solution, utilisez [ulugo.com](https://ulugo.com) sur un appareil mobile pour reconnaître l'image et exporter le SGF. Ulugo n'effectue pas de détection de capture d'écran sur les appareils mobiles.

### Confidentialité et signalement

La reconnaissance s'exécute sur votre appareil. Les images sélectionnées ne sont jamais envoyées à un serveur ; nous ne les collectons pas et ne les utilisons pour entraîner aucun modèle.

En cas d'erreur de reconnaissance manifeste, ouvrez une [issue GitHub](https://github.com/rinick/ulugo/issues/new). Vous décidez librement de joindre ou non l'image originale.
