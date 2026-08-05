---
layout: ulugo
title: Tips
sidebar: ./sidebar
---

This page collects the tips shown in Ulugo and groups them by platform.

### General Operations

| Feature | Action |
| --- | --- |
| Quick navigation | Hold `Shift` and click a stone to jump to the move that played it; click a future move to move forward to it |
| Mark connected stones | With a label or shape tool selected, double-click a stone to apply the current markup to its entire connected group of the same color |
| Auto-increment labels | Text markup advances automatically, such as `A → B` or `1 → 2`; adding it with the right mouse button keeps the current text unchanged |
| Correct a misrecorded move | Select the incorrect move and use **Replace move**. Ulugo returns to the previous position so you can correct the point without replaying later moves |
| Import an image | Choose a board image while opening a file to recognize the position and create an SGF. See [Board Image Recognition](./scan.html) for details |
| Import from the clipboard | Press `Ctrl + V` to open SGF text or an image directly from the clipboard |

### Web App

| Feature | Action |
| --- | --- |
| Portrait Minimal mode | Minimal mode rotates `90°` in portrait orientation, preserving more board space while recording on a phone or tablet |
| Endgame score estimate | Right-click a move in the bottom-right panel to estimate the score of that position; this function is intended only for endgame positions |

### Desktop AI Analysis

| Feature | Action |
| --- | --- |
| Deep analysis | Hold `Shift` and click the analysis button at the bottom-right of the board to ignore **Max visits** and keep analyzing the current position |
| Move value | **Top move overlay** can display a move's **Value**. Life and death in the hot zone and sente/gote affect this number, so it is not identical to endgame value |
| Hot zone | Enable **Hot zone** to show contested key areas in blue and areas that may need to be given up in gray |
| Analysis speed | If analysis is slow, select a smaller KataGo model in **AI config**, such as `kata1-b18`; reducing **Fast visits** also shortens the full-game chart scan |
| Principal variation preview | Hover over a top move to preview its principal variation; `Alt`-clicking the point displays it directly as well |

For the complete keyboard and mouse controls, see [Shortcuts and Gestures](./shortcut.html). For analysis values and charts, see [AI Analysis](./analysis.html).
