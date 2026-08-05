---
layout: ulugo
title: Lizenz und Danksagung
sidebar: ./sidebar
---

### Projektlizenz

| Bereich | Lizenzierung |
| --- | --- |
| Von Ulugo entwickelter und im öffentlichen Repository veröffentlichter Code | [Mozilla Public License 2.0 (MPL-2.0)](https://github.com/rinick/ulugo/blob/main/LICENSE) |
| Kernimplementierung der Brettbilderkennung und Screenshot-Erkennung | Separat verteilt und nicht unter einer Open-Source-Lizenz veröffentlicht |
| Code und Ressourcen Dritter | Unterliegen den Lizenzen der jeweiligen Projekte |

Die MPL 2.0 ist eine Open-Source-Lizenz mit Copyleft auf Dateiebene. Der von ihr erfasste Code darf verwendet, untersucht, geändert und weitergegeben werden. Wer geänderte MPL-Dateien extern weitergibt, muss den zugehörigen Quellcode gemäß der Lizenz bereitstellen und die Lizenzhinweise erhalten. Für eigenständige neue Dateien, die keinen MPL-Code enthalten, kann eine andere Lizenz verwendet werden.

Die maßgeblichen Rechte und Pflichten ergeben sich aus der [LICENSE](https://github.com/rinick/ulugo/blob/main/LICENSE) im Repository. Mozilla stellt außerdem eine [FAQ zur MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/FAQ/) bereit.

### Open-Source-Umfang der Bilderkennung

Der Integrationscode der Anwendung für Bildauswahl, Zuschnitt, Vorschau, Ergebniskorrektur und SGF-Erstellung ist zusammen mit der Ulugo-Hauptanwendung unter MPL 2.0 Open Source; der Kerncode der Brettbilderkennung einschließlich der Screenshot-Erkennung bei Go-Programmen ist nicht quelloffen.

Dieser Code bleibt vor allem geschlossen, um eine Umnutzung der Erkennung zum Auslesen laufender Online-Partien oder zur Zugunterstützung zu erschweren und eine gezielte Umgehung der Screenshot-Erkennung zu verhindern. Diese Einschränkung betrifft die Weiterverwendung der Technik; die normale Erfassung eines physischen Bretts, die Auszählung nach der Partie und die nachträgliche Analyse bleiben davon unberührt.

Die Erkennung läuft weiterhin auf dem Gerät des Benutzers. Bilder werden weder auf einen Server hochgeladen noch gesammelt oder zum Training verwendet. Hinweise zu vorgesehenen Einsatzzwecken, Screenshot-Erkennung und Problemmeldungen stehen unter [Bilderkennung des Go-Bretts](./scan.html#screenshot).

### Danksagung

| Projekt | Bezug zu Ulugo |
| --- | --- |
| [KaTrain](https://github.com/sanderland/katrain) | Wichtige Referenz für Konzepte der KI-Analyse und Teile des Interaktionsdesigns |
| [Sabaki](https://github.com/SabakiHQ/Sabaki) | Referenz für das Design des SGF-Editors; Ulugos Komponente zur Brettdarstellung adaptiert den ursprünglichen Renderer und dessen visuelles Verhalten |
| [KataGo](https://github.com/lightvector/KataGo) | Lokale KI-Analyse-Engine der Desktop-App |
| [circle-flags](https://github.com/HatScripts/circle-flags) | Flaggensymbole der Sprachauswahl unter der MIT-Lizenz |

Wir danken den Autoren und Mitwirkenden dieser Projekte sowie allen, die Fehlerberichte, Vorschläge und Übersetzungen für Ulugo beigesteuert haben. Die Namen von Drittprojekten dienen ausschließlich der Quellenangabe und Danksagung; sie bedeuten keine Empfehlung oder Gewährleistung durch deren Autoren.

Andere von Ulugo verwendete Bibliotheken und Ressourcen Dritter bleiben Eigentum ihrer jeweiligen Rechteinhaber und unterliegen den zugehörigen Lizenzen. Bei einer Weitergabe sind auch deren Bedingungen und Lizenzhinweise einzuhalten.
