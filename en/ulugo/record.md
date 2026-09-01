---
layout: ulugo
title: Game Recording
sidebar: ./sidebar
---

Ulugo can record a game move by move as it is played. You can also photograph the board periodically with a phone, first record the difference between two positions as a board setup node, and later convert those stones into regular moves in their actual order.

### Recording move by move

After starting a new game, use the **Auto play** tool to place each move on the board in sequence.

On a phone or tablet, Minimal mode lets the board occupy as much of the screen as possible. The round button in the upper-right corner temporarily opens move numbers, coordinates, basic tools, and the move tree.

![!620](./minimal-mode.webp)

### Inserting or deleting moves

- Select **⨂ Delete move**, then click a stone in the current position or among the future moves to delete it.
- Select **⨁ Insert move**, then click the board to add a move after the current position. Right-click instead to delete a move and select the position before it.

Entering either tool or switching between them does not change the current position. All changes are combined in one temporary variation. During editing, selecting another variation exits the session.

Later legal moves are preserved. Inserted and deleted moves are marked with a <span style='color:#0064ff'>blue shadow</span> and a <span style='color:#ff4d4f'>red shadow</span>, respectively. Click ✓ or press `Enter` to confirm. Click X or press `Esc` to cancel and restore the original game record.

You can combine both tools. To correct a misrecorded move, delete the incorrect move, then insert the correct one.

### Recording with photos

Photo recording is useful when you cannot continuously operate the screen but can photograph a physical board from time to time. This entry is currently available only in the mobile web version.

![!600](./scan-move.webp)

This feature works only on the main branch of the game record.

### Converting a board setup into regular moves

After adding a photo to the game record, you can keep its photographed-position node temporarily. If you know the actual order of play, select **Insert move** and enter the moves in sequence.

![!600](./replace-scan-move.webp)

Content after the photographed-position node remains if it is still valid. Confirming the move edit deletes the photographed-position node immediately after the added moves; canceling restores the game record from before the edit.
