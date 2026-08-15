---
layout: ulugo
title: KI-Analyse
sidebar: ./sidebar
---

Die Ulugo-Desktop-App analysiert Partien lokal und zeigt empfohlene Züge, Gebiet, Punkteabstand und Gewinnratenverlauf. In der Webversion ist diese Funktion nicht verfügbar.

Vor der ersten Nutzung muss die [KI-Laufzeit eingerichtet](./katago.html) werden.

### Analyse starten

Nach dem Öffnen einer Partie auf die Blitz-Schaltfläche unten rechts am Brett klicken oder `Space` drücken:

- Ulugo prüft zunächst die vorhandenen Züge mit geringer Rechentiefe und erstellt die Diagramme der gesamten Partie
- anschließend wird die aktuelle Stellung weiter analysiert; die Ergebnisse stabilisieren sich mit fortschreitender Suche
- abgeschlossene Knoten werden zwischengespeichert und beim erneuten Aufrufen nicht neu berechnet
- `Space` erneut drücken, um die Analyse zu stoppen

![!600](/en/ulugo/analysis.webp)

Mit gedrückter `Shift`-Taste auf die Analyse-Schaltfläche klicken oder `Shift + Space` drücken, um die **Tiefenanalyse** zu starten. Sie berechnet die aktuelle Stellung fortlaufend und eignet sich zum Vergleich komplexer Varianten.

### Empfohlene Züge

Die empfohlenen Züge sind Kandidaten der aktuellen Suche. Die Kreise zeigen ihre Reihenfolge; in den Einstellungen kann das **Top-Zug-Overlay** zusätzlich folgende Werte einblenden:

| Option | Beschreibung |
| --- | --- |
| Punkteänderung | Geschätzte Änderung gegenüber dem besten Kandidaten. `0` ist die Referenz; `-3.0` bedeutet etwa 3 Punkte Verlust |
| Gewinnratenänderung | Änderung gegenüber dem besten Kandidaten. `0%` ist die Referenz; negative Werte bedeuten einen Verlust an Gewinnrate |
| Punkteabstand | Geschätzter Endabstand nach dem Zug aus Sicht des Spielers am Zug; positiv bedeutet Führung, negativ Rückstand |
| Besuche | Dem Kandidaten zugewiesene Suchvorgänge. Sie zeigen Rechenverteilung und Stabilität, entsprechen aber nicht unmittelbar der Zugqualität |
| Wert | Wert des Zuges gegenüber Passen. Er ähnelt dem Wert eines Gote-Endspielzuges, ist aber nicht identisch |

Das Top-Zug-Overlay kann bis zu zwei Werte gleichzeitig anzeigen. Mit **Mindestbesuche für Top-Zug-Overlay** lassen sich Kandidaten ausblenden, deren Werte wegen geringer Suche noch instabil sind.

`Enter` spielt den derzeit besten Kandidaten. Weitere Befehle stehen unter [Tastenkürzel und Gesten](./shortcut.html).

### Hauptvariante

Den Mauszeiger über einen empfohlenen Zug bewegen, um die von der KI erwartete Fortsetzung auf dem Brett zu sehen. Ein `Alt`-Klick auf den Zug zeigt dieselbe Vorschau.

Die **Verzögerung der Hauptvarianten-Vorschau** bestimmt, wie lange der Mauszeiger ruhen muss. Der Wert `0` deaktiviert die Vorschau beim Überfahren, nicht aber den `Alt`-Klick.

Die Hauptvariante ist die von der aktuellen Suche bevorzugte Folge, nicht die einzige mögliche Fortsetzung. Sie kann sich mit weiterer Suche ändern.

### Diagramme im rechten Panel

Das rechte Panel bietet vier Diagramme, die einzeln oder gemeinsam angezeigt werden können:

| Diagramm | Beschreibung |
| --- | --- |
| Punkte | Geschätzter Endabstand nach jedem Zug einschließlich Komi und aktueller Regeln. Oberhalb der Mittellinie liegt `B+`, darunter `W+` |
| Verlust | Geschätzter Verlust durch den gespielten Zug. Je höher der Balken, desto größer der Verlust; Änderungen über etwa 1 Punkt werden hervorgehoben |
| Sieg % | Geschätzte Gewinnrate von Schwarz nach jedem Zug. Die von Weiß beträgt `100% − Gewinnrate Schwarz`; `50%` ist die ausgeglichene Referenz |
| Intens. | Aktuelle Kampfintensität, gemessen am Punkteverlust eines Passzuges gegenüber dem besten Zug. Die Fläche wird symmetrisch ober- und unterhalb der Nulllinie dargestellt |

![](/en/ulugo/chart-.webp)

Beim Überfahren eines Diagramms werden Zugnummer, Punkteabstand, beide Gewinnraten und der Verlust des Zuges angezeigt. Ein Klick springt direkt zum Zug; mit dem Mausrad über dem Diagramm lässt sich vor- und zurückgehen.

Bei deutlicher Führung kann die Gewinnrate lange nahe `0%` oder `100%` bleiben. Dann eignen sich Punkteabstand und Punktverlust besser zur Bewertung einzelner Züge.

Die **Anzeigegrenze der Intensität** ist standardmäßig `25`. Die Achse wächst nur mit der tatsächlichen Intensität bis zu dieser Grenze. Benötigen Punkte oder Verlust bereits eine breitere Achse, darf die Intensität diesen Bereich nutzen, erweitert ihn allein aber nicht weiter.

### Gebiet und Hot Zone

| Anzeige | Beschreibung |
| --- | --- |
| Gebiet | Halbtransparente Farben zeigen die voraussichtlich kontrollierten Bereiche. Dies ist die aktuelle Analyse, keine bestätigte Endauszählung |
| Hot Zone | Blau kennzeichnet umkämpfte Schlüsselbereiche oder Bereiche, die nach einem Fehler verloren gehen können. Grau zeigt Teile, die möglicherweise zum Schutz wichtigerer Bereiche aufgegeben werden müssen |

![!600](/en/ulugo/hot-zone.webp)

### Wenn die Analyse langsam ist

Zunächst die Besuche für normale Analyse oder den vollständigen Partiedurchlauf reduzieren. Informationen zu Modellen, Hardware und Laufzeiteinstellungen stehen unter [Laufzeit und Hardware](./katago.html).
