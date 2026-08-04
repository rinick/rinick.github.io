---
layout: ulugo
title: KataGo und Laufzeiteinstellungen
sidebar: ./sidebar
---

KataGo ist eine quelloffene Go-Engine ohne eigene grafische Oberfläche. Die Ulugo-Desktop-App führt sie lokal aus, erhält Kandidatenzüge, Gebiet, Punkteabstand und weitere Analysedaten und bereitet sie für die Prüfoberfläche auf.

Bei der ersten Nutzung installiert und wählt Ulugo automatisch eine empfohlene KataGo-Version und ein Modell. Die meisten Nutzer müssen nichts manuell konfigurieren. Nach Abschluss der Einrichtung erklärt [KI-Analyse](./analysis.html) die Bedienung.

### KataGo und Modelle

Die KI-Analyse benötigt zwei Komponenten:

| Komponente | Aufgabe |
| --- | --- |
| KataGo | Programm, das die Analyse auf dem Computer ausführt |
| Modell | Neuronale Netzwerkdatei mit Spielstärke und Stellungsbewertung |

Beide laufen lokal. Für den ersten Download wird eine Internetverbindung benötigt; danach lassen sich Partien offline analysieren.

### Hardwareanforderungen

KataGo kann eine GPU verwenden oder nur auf der CPU laufen. Eine GPU ist nicht erforderlich, beschleunigt die Analyse aber meistens deutlich.

| Computer | Empfehlung |
| --- | --- |
| Neuere dedizierte oder integrierte GPU | Zuerst `OpenCL` versuchen; es unterstützt viele Geräte |
| Neuere NVIDIA-GPU mit passenden Treibern und Laufzeitbibliotheken | `TensorRT` oder `CUDA` versuchen |
| Keine geeignete GPU, CPU unterstützt AVX2 | `CPU` wählen |
| Ältere CPU ohne AVX2 | `Alte CPU` wählen; die Analyse ist langsamer |
| macOS | Installation über Homebrew; Apple Silicon verwendet einen passenden System-Build |

![!500](/en/ulugo/ai-config.webp)

Größere Modelle und mehr gleichzeitige Analysen benötigen in der Regel mehr Arbeitsspeicher. Bei wenig Speicher oder langsamer Analyse zunächst ein mit **am schnellsten** markiertes Modell wählen. Mindestens einige hundert MB freien Speicherplatz einplanen; mehrere Modelle benötigen entsprechend mehr.

Details zu den Backends enthält die [offizielle KataGo-Dokumentation](https://github.com/lightvector/KataGo#opencl-vs-cuda-vs-tensorrt-vs-eigen).

### Automatische Einrichtung und manuelle Auswahl

Beim ersten Start lädt Ulugo automatisch einen empfohlenen Laufzeit-Build und ein Modell herunter und wählt beide aus. Während des Downloads muss die Netzwerkverbindung bestehen; danach funktioniert die Analyse offline.

Zum Ausprobieren eines anderen Builds oder Modells die **KI-Konfiguration** öffnen:

1. unter **KataGo-Installationen** einen zum Computer passenden Build auswählen und installieren
2. unter **KataGo-Modelle** ein Modell installieren und auswählen
3. **Speichern** klicken, zum Brett zurückkehren und die Analyse starten

Einige GPU-Builds führen beim ersten Start eine Leistungsoptimierung aus. Währenddessen kann die Oberfläche langsam reagieren; nach dem Abschluss ist normalerweise keine Wiederholung nötig.

### Häufige Einstellungen

| Einstellung | Beschreibung |
| --- | --- |
| Maximale Besuche | Rechenmenge für die normale Analyse der aktuellen Stellung; höhere Werte sind meist stabiler, aber langsamer |
| Schnelle Besuche | Rechenmenge pro Zug beim vollständigen Partiedurchlauf; kleinere Werte stellen Diagramme früher bereit |
| Vielfalt der Top-Züge | Erhöht die Streuung der Kandidaten; `0` ist am stabilsten, höhere Werte verteilen die Kandidaten breiter |
| Aktuelle Installation | Zwischen installierten KataGo-Builds oder Modellen wechseln und nicht benötigte Einträge entfernen |

### Startprobleme oder langsame Analyse

- Zuerst `OpenCL` versuchen; bei inkompatibler GPU oder inkompatiblem Treiber auf `CPU` wechseln
- `CUDA`- und `TensorRT`-Builds für NVIDIA benötigen passende Treiber und Laufzeitbibliotheken
- ein kleineres, mit **am schnellsten** markiertes Modell auswählen
- **Schnelle Besuche** und **Maximale Besuche** verringern
- die Konsole im linken Panel öffnen und die genaue Fehlermeldung prüfen

Falls das Problem bleibt, ein [Ulugo GitHub Issue](https://github.com/rinick/ulugo/issues/new) mit Betriebssystem, CPU/GPU-Modell, gewähltem Build und Konsolenfehler anlegen. Dokumentation und Änderungsverlauf von KataGo befinden sich im [offiziellen Repository](https://github.com/lightvector/KataGo).
