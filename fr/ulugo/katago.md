---
layout: ulugo
title: KataGo et paramètres d'exécution
sidebar: ./sidebar
---

KataGo est un moteur de go open source dépourvu d'interface graphique. L'application de bureau Ulugo l'exécute localement pour obtenir les coups candidats, le territoire, le score et d'autres données, puis les présente dans son interface de revue.

Lors de la première utilisation, Ulugo installe et sélectionne automatiquement une version de KataGo et un modèle recommandés. La plupart des utilisateurs n'ont aucune configuration manuelle à effectuer. Une fois la préparation terminée, consultez [Analyse IA](./analysis.html).

### KataGo et modèles

L'analyse IA repose sur deux composants :

| Composant | Rôle |
| --- | --- |
| KataGo | Programme qui exécute l'analyse sur l'ordinateur |
| Modèle | Fichier de réseau neuronal contenant la force de jeu et l'évaluation |

Les deux s'exécutent localement. Une connexion Internet est nécessaire pour le téléchargement initial ; après l'installation, les parties peuvent être analysées hors ligne.

### Configuration matérielle

KataGo peut utiliser un GPU ou fonctionner uniquement sur le CPU. Le GPU n'est pas obligatoire, mais accélère généralement beaucoup l'analyse.

| Ordinateur | Choix recommandé |
| --- | --- |
| GPU dédié ou intégré relativement récent | Essayer d'abord `OpenCL`, compatible avec de nombreux matériels |
| GPU NVIDIA récent avec pilotes et bibliothèques compatibles | Essayer `TensorRT` ou `CUDA` |
| Aucun GPU adapté, mais CPU compatible AVX2 | Choisir `CPU` |
| Ancien CPU sans AVX2 | Choisir `Ancien CPU` ; l'analyse sera plus lente |
| macOS | Installation par Homebrew ; Apple Silicon utilise une version adaptée au système |

![!500](/en/ulugo/ai-config.webp)

Les grands modèles et les analyses simultanées consomment généralement plus de mémoire. Si la mémoire est limitée ou si l'analyse est lente, commencez par un modèle marqué **le plus rapide**. Prévoyez au moins quelques centaines de Mo d'espace disque, davantage pour plusieurs modèles.

Pour les détails sur les backends, consultez la [documentation officielle de KataGo](https://github.com/lightvector/KataGo#opencl-vs-cuda-vs-tensorrt-vs-eigen).

### Configuration automatique et sélection manuelle

Au premier lancement, Ulugo télécharge et sélectionne automatiquement une version d'exécution et un modèle recommandés. Maintenez la connexion pendant le téléchargement ; l'analyse fonctionne ensuite hors ligne.

Pour essayer une autre version ou un autre modèle, ouvrez **Configuration IA** :

1. dans **Installations KataGo**, choisissez et installez une version adaptée à l'ordinateur ;
2. dans **Modèles KataGo**, installez et sélectionnez un modèle ;
3. cliquez sur **Enregistrer**, revenez au goban et lancez l'analyse.

Certaines versions GPU effectuent un réglage des performances au premier démarrage. L'interface peut répondre lentement pendant cette opération ; une fois terminée, elle ne doit normalement pas se répéter.

### Paramètres courants

| Paramètre | Description |
| --- | --- |
| Visites maximales | Quantité de calcul pour l'analyse normale de la position actuelle ; une valeur élevée est généralement plus stable, mais plus lente |
| Visites rapides | Quantité de calcul par coup lors du parcours complet ; une valeur plus faible affiche les graphiques plus vite |
| Diversité des meilleurs coups | Augmente la variété des candidats ; `0` est le plus stable et une valeur élevée les disperse davantage |
| Installation actuelle | Permet de changer de version de KataGo ou de modèle installé, et de désinstaller les éléments inutiles |

### Démarrage impossible ou analyse lente

- Essayez d'abord `OpenCL` ; si le GPU ou le pilote est incompatible, passez à `CPU` ;
- les versions `CUDA` et `TensorRT` pour NVIDIA exigent des pilotes et bibliothèques compatibles ;
- sélectionnez un petit modèle marqué **le plus rapide** ;
- réduisez les **Visites rapides** et les **Visites maximales** ;
- ouvrez la console du panneau gauche pour consulter l'erreur précise.

Si le problème persiste, ouvrez une [issue GitHub Ulugo](https://github.com/rinick/ulugo/issues/new) en indiquant le système, le modèle de CPU/GPU, la version choisie et l'erreur de la console. La documentation et l'historique de KataGo se trouvent dans son [dépôt officiel](https://github.com/lightvector/KataGo).
