---
layout: ulugo
title: Partie mitschreiben
sidebar: ./sidebar
---

Mit Ulugo kann eine Partie während des Spiels Zug für Zug mitgeschrieben werden. Alternativ lässt sich das Brett regelmäßig mit einem Telefon fotografieren: Der Unterschied zwischen zwei Stellungen wird zunächst als Brettaufstellungsknoten gespeichert und später in der tatsächlichen Reihenfolge in normale Züge umgewandelt.

### Zug für Zug mitschreiben

Beginnen Sie eine neue Partie und setzen Sie die Steine mit dem Werkzeug **Abwechselnd spielen** der Reihe nach auf das Brett.

Auf einem Telefon oder Tablet lässt der Minimalmodus das Brett möglichst viel Bildschirmfläche einnehmen. Über die runde Schaltfläche oben rechts können Zugnummern, Koordinaten, Grundwerkzeuge und der Zugbaum vorübergehend geöffnet werden.

![!620](/en/ulugo/minimal-mode.webp)

### Einen früheren Fehler korrigieren

Wenn Sie beim Mitschreiben feststellen, dass ein früherer Zug an der falschen Stelle eingetragen wurde, müssen Sie nicht alle späteren Steine löschen und erneut setzen:

![!600](/en/ulugo/replace.webp)

1. Wählen Sie den falschen Zug im Zugbaum aus. Sie können auch `Shift` gedrückt halten und einen Stein auf dem Brett anklicken, um zum entsprechenden Zug zu springen.
2. Wählen Sie das Werkzeug **Zug ersetzen**. Ulugo kehrt zur Stellung vor dem falschen Zug zurück.
3. Klicken Sie mit der linken Maustaste auf den richtigen Punkt, um den nächsten Zug zu ersetzen. Spätere Züge, die weiterhin legal sind, bleiben erhalten und werden als halbtransparente Steine angezeigt.
   - Neu hinzugefügte Züge erhalten einen <span style='color:#0064ff'>blauen Schatten</span>, ersetzte Züge einen <span style='color:#ff4d4f'>roten Schatten</span>.
   - Soll vor dem nächsten Zug ein vergessener Zug eingefügt statt ersetzt werden, setzen Sie den Stein mit einem Rechtsklick.
   - Im Werkzeug **Zug ersetzen** löscht die Löschtaste nur den aktuellen Zug.
4. Prüfen Sie das Ergebnis und klicken Sie zum Bestätigen auf ✓ oder drücken Sie `Enter`.
   - Klicken Sie auf X oder drücken Sie `Esc`, um den Ersetzungsmodus zu verwerfen und die ursprüngliche Brettstellung wiederherzustellen.

### Mit Fotos mitschreiben

Die Aufzeichnung per Foto eignet sich, wenn Sie den Bildschirm nicht durchgehend bedienen, aber ein reales Brett von Zeit zu Zeit fotografieren können. Dieser Einstieg wird derzeit nur in der mobilen Webversion angezeigt.

![!600](/en/ulugo/scan-move.webp)

Diese Funktion steht nur im Hauptzweig der Partie zur Verfügung.

### Eine Brettaufstellung in normale Züge umwandeln

Nachdem ein Foto zur Partie hinzugefügt wurde, kann der Knoten der fotografierten Stellung zunächst bestehen bleiben. Wenn die tatsächliche Zugfolge bekannt ist, lässt er sich mit dem Modus **Zug ersetzen** in normale Züge umwandeln.

![!600](/en/ulugo/replace-scan-move.webp)

Beim Bestätigen wird der Knoten der fotografierten Stellung unmittelbar nach den neu eingegebenen Zügen gelöscht.
