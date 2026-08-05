---
layout: ulugo
title: License and Acknowledgements
sidebar: ./sidebar
---

### Project License

| Scope | Licensing |
| --- | --- |
| Code developed by Ulugo and published in its public repository | [Mozilla Public License 2.0 (MPL-2.0)](https://github.com/rinick/ulugo/blob/main/LICENSE) |
| Core implementation of board image recognition and screenshot detection | Distributed separately and not released under an open-source license |
| Third-party code and resources | Governed by their respective licenses |

MPL 2.0 is a file-level open-source license. You may use, study, modify, and redistribute the code it covers. If you distribute modified MPL-covered files, you must make the corresponding source code available and retain the license notices as required by the license. Separate new files that contain no MPL-covered code may use another license.

The [LICENSE](https://github.com/rinick/ulugo/blob/main/LICENSE) in the repository defines the applicable rights and obligations. Mozilla also provides an [MPL 2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/).

### Open-Source Boundary of Image Recognition

Application integration code for image selection, cropping, preview, result correction, and SGF generation is open source with the main Ulugo app under MPL 2.0; the core board image recognition code, including game-software screenshot detection, is not open source.

This code is withheld primarily to make it harder to repurpose the recognition technology for real-time reading of online games or move assistance, and to prevent targeted circumvention of screenshot detection. This restriction concerns reuse of the technology; it does not affect normal use for recording a physical board, post-game scoring, or reviewing a completed game.

Recognition still runs on the user's device. Images are not uploaded to a server, collected, or used for training. See [Board Image Recognition](./scan.html#screenshot) for intended use, screenshot detection, and issue reporting.

### Acknowledgements

| Project | Relationship to Ulugo |
| --- | --- |
| [KaTrain](https://github.com/sanderland/katrain) | An important reference for AI review concepts and parts of the interaction design |
| [Sabaki](https://github.com/SabakiHQ/Sabaki) | A reference for SGF editor design; Ulugo's board-rendering component is adapted from its original renderer and visual behavior |
| [KataGo](https://github.com/lightvector/KataGo) | The local AI analysis engine used by the desktop app |
| [circle-flags](https://github.com/HatScripts/circle-flags) | Flag icons used in the language selector, licensed under the MIT License |

We thank the authors and contributors of these projects, as well as everyone who has submitted issues, suggestions, and translations for Ulugo. Third-party project names are used only for attribution and do not imply endorsement or warranty by their authors.

Other third-party libraries and resources used by Ulugo remain the property of their respective rights holders and are subject to their own licenses. Any redistribution must also comply with the applicable terms and license notices.
