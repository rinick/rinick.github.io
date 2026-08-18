---
layout: ulugo
title: Ulugo
sidebar: ./sidebar
---

Ulugo ist ein Editor für Go-Partieaufzeichnungen und ein Offline-Werkzeug zur KI-Analyse. Im Browser lassen sich Partien mitschreiben, SGF-Dateien bearbeiten, Stellungen aus Fotos übernehmen und beendete Partien auszählen. Die Desktop-App bietet zusätzlich lokale KI-Analyse.

| Version | Geeignet für |
| --- | --- |
| [Webversion](https://ulugo.com) | Mitschrift und Bearbeitung, Minimalmodus, Bilderkennung und Auszählung nach der Partie, ohne Installation |
| [Desktop-App](https://github.com/rinick/ulugo/releases/latest) | Alle Webfunktionen plus lokale KI-Analyse |

### Prüfmodus

Der Prüfmodus zeigt KI-Empfehlungen, Gebiet, Punkteabstand und den Verlauf der Gewinnrate. Damit lassen sich nach der Partie Fehler finden und Varianten vergleichen. Die KI-Analyse ist nur in der Desktop-App verfügbar; Einzelheiten stehen unter [KI-Analyse](./analysis.html).

![!600](/en/ulugo/analysis.webp)

Mit Ulugo lassen sich Partieaufzeichnungen direkt von Fox Weiqi, Tygem, KGS, Pandanet und OGS öffnen. Auch das Öffnen und Speichern über Google Drive wird unterstützt.

![!600](/en/ulugo/open-from.webp)

### Bearbeitungsmodus

Der Bearbeitungsmodus dient zum Erstellen und Ordnen von Partieaufzeichnungen:

- SGF-Dateien öffnen, bearbeiten und speichern
- Varianten, Kommentare und Brettmarkierungen hinzufügen
- falsch notierte Züge ersetzen und Varianten umordnen
- eine Stellung aus einem Foto erkennen und als SGF anlegen

![!600](/en/ulugo/edit-mode.webp)

Für Fotoimport und Auszählung nach der Partie siehe [Bilderkennung des Go-Bretts](./scan.html). Häufige Tastatur- und Mausaktionen stehen unter [Tastenkürzel und Gesten](./shortcut.html).

Informationen zur Zug-für-Zug-Mitschrift, zum Fortsetzen per Foto und zum Korrigieren eines früher falsch notierten Zuges stehen unter [Partie mitschreiben](./record.html).

### Minimalmodus

Der Minimalmodus blendet den größten Teil der Oberfläche aus, damit das Brett möglichst viel Platz einnimmt. Er eignet sich besonders zum [Mitschreiben einer Partie](./record.html) auf Telefon oder Tablet. Über die runde Schaltfläche oben rechts lassen sich vorübergehend Zugnummern, Koordinaten, Grundwerkzeuge und das rechte Panel öffnen.

![!640](/en/ulugo/minimal-mode.webp)

### Funktionsübersicht

| Funktion | Dokumentation |
| --- | --- |
| Zug für Zug mitschreiben, per Foto fortsetzen oder einen falsch notierten Zug korrigieren | [Partie mitschreiben](./record.html) |
| Ein Brett aus einem Foto übernehmen oder eine beendete Partie auszählen | [Bilderkennung des Go-Bretts](./scan.html) |
| Eine Partie mit KI prüfen | [KI-Analyse](./analysis.html) |
| KI-Laufzeit konfigurieren oder Leistungsprobleme beheben | [Laufzeit und Hardware](./katago.html) |
| Tastenkürzel ansehen oder ändern | [Tastenkürzel und Gesten](./shortcut.html) |
