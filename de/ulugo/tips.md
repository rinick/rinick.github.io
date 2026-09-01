---
layout: ulugo
title: Tipps
sidebar: ./sidebar
---

Diese Seite fasst die in Ulugo angezeigten Tipps nach Plattform zusammen.

### Allgemeine Bedienung

| Funktion | Bedienung |
| --- | --- |
| Schnelle Navigation | Halten Sie `Shift` gedrückt und klicken Sie auf einen Stein, um zu dem Zug zu springen, der ihn gesetzt hat. Klicken Sie auf einen späteren Zug, um dorthin vorzuspringen |
| Verbundene Steine markieren | Doppelklicken Sie mit ausgewähltem Text- oder Formwerkzeug auf einen Stein, um die aktuelle Markierung auf seine gesamte verbundene Gruppe gleicher Farbe anzuwenden |
| Textmarkierungen automatisch erhöhen | Textmarkierungen wechseln automatisch zum nächsten Zeichen, etwa `A → B` oder `1 → 2`. Beim Hinzufügen mit der rechten Maustaste bleibt das aktuelle Zeichen erhalten |
| Züge einfügen | Mit **Zug einfuegen** fügen Sie Züge in denselben temporären Zweig ein. Ein Rechtsklick löscht stattdessen einen Zug und wählt die Stellung davor aus |
| Navigation während der Zugbearbeitung | **Zug einfuegen** oder **Zug loeschen** verändert die aktuelle Stellung nicht. Beim Wechsel zwischen den Werkzeugen sowie bei Auswahl des aktuellen Zweigs oder seines früheren Stamms bleibt die Bearbeitung aktiv. Die Auswahl eines anderen Zweigs beendet sie |
| Bild importieren | Wählen Sie beim Öffnen einer Datei ein Bild des Go-Bretts, um die Stellung zu erkennen und eine SGF-Datei zu erstellen. Weitere Informationen finden Sie unter [Bilderkennung des Go-Bretts](./scan.html) |
| Aus der Zwischenablage importieren | Drücken Sie `Ctrl + V`, um SGF-Text oder ein Bild direkt aus der Zwischenablage zu öffnen |

### Webversion

| Funktion | Bedienung |
| --- | --- |
| Minimalmodus im Hochformat | Im Hochformat dreht sich der Minimalmodus automatisch um `90°`, damit beim Aufzeichnen auf einem Smartphone oder Tablet mehr Platz für das Brett bleibt |
| Endstellung auszählen | Klicken Sie im Fenster unten rechts mit der rechten Maustaste auf einen Zug, um die Stellung auszuzählen. Diese Funktion eignet sich nur für Endstellungen |

### KI-Analyse auf dem Desktop

| Funktion | Bedienung |
| --- | --- |
| Tiefenanalyse | Halten Sie `Shift` gedrückt und klicken Sie auf die Analyseschaltfläche unten rechts am Brett, um **Max. Besuche** zu ignorieren und die aktuelle Stellung weiter zu analysieren |
| Zugwert | Das **Beste-Zuege-Overlay** kann den **Wert** eines Zugs anzeigen. Leben und Tod in der Hotzone sowie Sente und Gote beeinflussen diesen Wert; er entspricht daher nicht genau dem Endspielwert |
| Hotzone | Aktivieren Sie die **Hotzone**, um von beiden Spielern umkämpfte Schlüsselbereiche blau und möglicherweise aufzugebende Bereiche grau darzustellen |
| Analysegeschwindigkeit | Falls die Analyse langsam ist, wählen Sie unter **KI-Konfiguration** ein kleineres KataGo-Modell wie `kata1-b18`. Weniger **Schnelle Besuche** verkürzen auch die Erstellung des Diagramms für die gesamte Partie |
| Vorschau der Hauptvariante | Bewegen Sie den Mauszeiger über einen besten Zug, um seine Hauptvariante als Vorschau anzuzeigen. Mit `Alt` und einem Klick auf den Punkt können Sie sie ebenfalls direkt anzeigen |

Alle Tastatur- und Mausbefehle finden Sie unter [Tastenkürzel und Gesten](./shortcut.html), Erläuterungen zu Analysewerten und Diagrammen unter [KI-Analyse](./analysis.html).
