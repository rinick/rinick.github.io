---
layout: ulugo
title: Licence et remerciements
sidebar: ./sidebar
---

### Licence du projet

| Périmètre | Licence |
| --- | --- |
| Code développé par Ulugo et publié dans son dépôt public | [Mozilla Public License 2.0 (MPL-2.0)](https://github.com/rinick/ulugo/blob/main/LICENSE) |
| Implémentation centrale de la reconnaissance du goban et de la détection des captures d'écran | Distribuée séparément et non publiée sous une licence open source |
| Code et ressources de tiers | Soumis aux licences de leurs projets respectifs |

La MPL 2.0 est une licence open source à copyleft au niveau du fichier. Le code qu'elle couvre peut être utilisé, étudié, modifié et redistribué. Toute distribution de fichiers couverts par la MPL et modifiés doit mettre à disposition le code source correspondant et conserver les avis de licence conformément à ses conditions. Les nouveaux fichiers indépendants qui ne contiennent pas de code couvert par la MPL peuvent employer une autre licence.

Les droits et obligations applicables sont définis par le texte du fichier [LICENSE](https://github.com/rinick/ulugo/blob/main/LICENSE) du dépôt. Mozilla propose également une [FAQ sur la MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/FAQ/).

### Périmètre open source de la reconnaissance d'images

Le code d'intégration de l'application — sélection, recadrage et aperçu de l'image, correction du résultat et création du SGF — est publié avec l'application principale Ulugo sous MPL 2.0 ; le code central de reconnaissance du goban, qui comprend la détection des captures de logiciels de jeu, n'est pas open source.

Ce code reste fermé principalement pour rendre plus difficile le détournement de la reconnaissance à des fins de lecture en temps réel d'une partie en ligne ou d'assistance au choix des coups, ainsi que le contournement ciblé de la détection des captures d'écran. Cette restriction concerne la réutilisation de la technologie ; elle n'affecte pas la notation d'un goban physique, le comptage après la partie ou la revue d'une partie terminée.

La reconnaissance s'exécute toujours sur l'appareil de l'utilisateur. Les images ne sont ni envoyées à un serveur, ni collectées, ni utilisées pour l'entraînement. Consultez [Reconnaissance du goban](./scan.html#screenshot) pour les usages prévus, la détection des captures et le signalement des problèmes.

### Remerciements

| Projet | Relation avec Ulugo |
| --- | --- |
| [KaTrain](https://github.com/sanderland/katrain) | Référence importante pour les principes de revue par IA et certains choix d'interaction |
| [Sabaki](https://github.com/SabakiHQ/Sabaki) | Référence pour la conception de l'éditeur SGF ; le composant de rendu du goban d'Ulugo adapte son moteur de rendu et son comportement visuel d'origine |
| [KataGo](https://github.com/lightvector/KataGo) | Moteur d'analyse IA locale utilisé par l'application de bureau |
| [circle-flags](https://github.com/HatScripts/circle-flags) | Icônes de drapeaux du sélecteur de langue, sous licence MIT |

Nous remercions les auteurs et contributeurs de ces projets, ainsi que toutes les personnes qui ont envoyé des rapports de problèmes, des suggestions et des traductions pour Ulugo. Les noms des projets tiers ne sont utilisés qu'à des fins d'attribution et ne supposent ni approbation ni garantie de la part de leurs auteurs.

Les autres bibliothèques et ressources tierces utilisées par Ulugo restent la propriété de leurs ayants droit respectifs et sont soumises à leurs propres licences. Toute redistribution doit également respecter les conditions et avis de licence applicables.
