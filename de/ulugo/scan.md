---
layout: ulugo
title: Bilderkennung des Go-Bretts
sidebar: ./sidebar
---

Ulugo erkennt schwarze und weiße Steine auf einem Foto des Go-Bretts. Damit lässt sich eine **Stellung schnell erfassen** oder eine **beendete Partie vom Foto auszählen**. Beides funktioniert in der Webversion; die Auszählung benötigt keine Desktop-KI.

![!600](/en/ulugo/scan.webp)

Ein einzelnes Foto enthält nur die **aktuelle Stellung**. Frühere Zugreihenfolge und geschlagene Steine lassen sich daraus nicht rekonstruieren.

### Schnellstart

1. Auf [ulugo.com](https://ulugo.com) ein Bild öffnen. Auf einem Telefon kann auch **Von Kamera öffnen** gewählt werden.
2. `9 × 9`, `13 × 13` oder `19 × 19` auswählen und das Bild bei Bedarf zuschneiden.
3. **Anwenden** klicken und die erkannte Stellung mit dem Originalbild vergleichen.
4. Die Regeln der Partie wählen und bestätigen. Anschließend kann das SGF gespeichert oder das Zählergebnis angezeigt werden.

### Ein gut erkennbares Foto aufnehmen

| Empfohlen | Vermeiden |
| --- | --- |
| Alle vier Seiten und Ecken des Bretts aufnehmen | Abgeschnittene oder verdeckte Brettränder |
| Direkt oder nahezu direkt von oben fotografieren | Niedriger Winkel mit starker perspektivischer Verzerrung |
| Gleichmäßiges Licht und klare Steinkanten | Starke Reflexionen auf den Steinen oder große Schatten |
| Scharfes Bild, in dem das Brett den größten Teil einnimmt | Unschärfe, Verdeckung oder ein zu kleines Brett im Bild |

### Zuschneiden

Wenn das Brett nur einen kleinen Bildteil einnimmt oder der Hintergrund unruhig ist, kann vorheriges Zuschneiden helfen.

- Alle vier Seiten und Ecken des Bretts erhalten
- die Schnittkante nicht direkt auf die äußerste Gitterlinie legen, auch wenn auf der ersten Linie keine Steine liegen

![!600](/en/ulugo/scan-crop.webp)

### Beendete Partie vom Foto auszählen

Nach der Partie [ulugo.com](https://ulugo.com) auf dem Telefon öffnen, das vollständige Brett fotografieren und die Erkennung abschließen. Das Zählergebnis wird direkt im Browser berechnet.

- dieselben Regeln wie in der Partie auswählen
- die erkannte Stellung mit dem Foto auf fehlende oder falsche Steine prüfen
- bei Bedarf tote Steine auf dem Brett anklicken und korrigieren

![!600](/en/ulugo/scoring.webp)

### Faire Nutzung und Screenshots von Go-Programmen {#screenshot}

Die Bilderkennung von Ulugo ist für die Aufzeichnung physischer Bretter, die Auszählung nach der Partie und die spätere Analyse vorgesehen. Zum Schutz fairer Online-Partien erkennt die Desktop-Umgebung typische Screenshots von Go-Programmen und verhindert, dass daraus direkt eine Partieaufzeichnung erstellt wird.

![](/en/ulugo/scan-warning.webp)

Dieser Mechanismus beurteilt nicht die Absicht des Nutzers. Er fügt lediglich eine leichte Einschränkung in Situationen hinzu, die eine laufende Partie beeinflussen könnten.

Wenn nach einer Online-Partie kein SGF heruntergeladen werden kann und nur ein Foto verfügbar ist, lässt sich das Bild auf einem Mobilgerät mit [ulugo.com](https://ulugo.com) erkennen und als SGF exportieren. Auf Mobilgeräten führt Ulugo keine Screenshot-Erkennung durch.

### Datenschutz und Problemberichte

Die Bilderkennung läuft auf dem eigenen Gerät. Ausgewählte Bilder werden nicht auf einen Server hochgeladen; wir sammeln sie nicht und verwenden sie nicht zum Trainieren eines Modells.

Bei einem deutlichen Erkennungsfehler bitte ein [GitHub Issue](https://github.com/rinick/ulugo/issues/new) anlegen. Ob das Originalbild beigefügt wird, entscheidet der Nutzer selbst.
