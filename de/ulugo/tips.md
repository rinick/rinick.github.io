---
layout: ulugo
title: Tipps
sidebar: ./sidebar
---

Diese Seite fasst die in Ulugo angezeigten Hinweise zusammen und ordnet sie nach Plattform.

### Allgemeine Bedienung

| Funktion | Aktion |
| --- | --- |
| Schnellnavigation | `Shift` gedrückt halten und einen Stein anklicken, um zu dem Zug zu springen, der ihn gesetzt hat; einen späteren Zug anklicken, um dorthin vorzugehen |
| Verbundene Steine markieren | Mit einem Text- oder Formwerkzeug einen Stein doppelklicken, um die aktuelle Markierung auf seine gesamte verbundene Gruppe gleicher Farbe anzuwenden |
| Markierungstext erhöhen | Textmarkierungen wechseln automatisch von `A → B` oder `1 → 2`; beim Hinzufügen mit Rechtsklick bleibt der aktuelle Text erhalten |
| Falsch notierten Zug korrigieren | Den falschen Zug auswählen und **Zug ersetzen** verwenden. Ulugo geht zur vorherigen Stellung zurück, sodass der Punkt ohne erneutes Setzen späterer Züge korrigiert werden kann |
| Bild importieren | Beim Öffnen einer Datei ein Brettbild auswählen, um die Stellung zu erkennen und ein SGF anzulegen. Details unter [Bilderkennung des Go-Bretts](./scan.html) |
| Aus Zwischenablage importieren | `Ctrl + V` drücken, um SGF-Text oder ein Bild direkt aus der Zwischenablage zu öffnen |

### Webversion

| Funktion | Aktion |
| --- | --- |
| Minimalmodus im Hochformat | Im Hochformat dreht sich der Minimalmodus um `90°` und lässt beim Mitschreiben auf Telefon oder Tablet mehr Platz für das Brett |
| Endstand schätzen | Einen Zug im Panel unten rechts rechtsklicken, um den Stand dieser Stellung zu schätzen; diese Funktion ist nur für Endspielstellungen vorgesehen |

### KI-Analyse in der Desktop-App

| Funktion | Aktion |
| --- | --- |
| Tiefenanalyse | `Shift` gedrückt halten und die Analyse-Schaltfläche unten rechts am Brett anklicken, um **Maximale Besuche** zu ignorieren und die aktuelle Stellung fortlaufend zu analysieren |
| Zugwert | Das **Top-Zug-Overlay** kann den **Wert** eines Zuges anzeigen. Leben und Tod in der Hot Zone sowie Sente/Gote beeinflussen ihn, daher entspricht er nicht genau dem Endspielwert |
| Hot Zone | **Hot Zone** aktivieren, um umkämpfte Schlüsselbereiche blau und möglicherweise aufzugebende Bereiche grau anzuzeigen |
| Analysegeschwindigkeit | Bei langsamer Analyse in der **KI-Konfiguration** ein kleineres KataGo-Modell wie `kata1-b18` wählen; geringere **Schnelle Besuche** verkürzen auch den vollständigen Partiedurchlauf |
| Hauptvarianten-Vorschau | Den Mauszeiger über einen empfohlenen Zug bewegen, um dessen Hauptvariante zu sehen; ein `Alt`-Klick auf den Punkt zeigt sie ebenfalls direkt |

Alle Tastatur- und Mausbefehle stehen unter [Tastenkürzel und Gesten](./shortcut.html). Analysewerte und Diagramme werden unter [KI-Analyse](./analysis.html) erklärt.
