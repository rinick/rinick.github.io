---
layout: ulugo
title: Shortcuts and Gestures
sidebar: ./sidebar
---

Keyboard shortcuts can be changed under **Settings → Keyboard shortcuts**. The tables below list the defaults; actions marked **Desktop** require the Electron desktop app.

### Arrow-Key Modifiers

The arrow keys for move navigation and variation switching support modifier keys:

| Input | Action |
| --- | --- |
| Arrow key | Move backward or forward by 1 move, or switch by 1 variation |
| `Shift + Arrow key` | Skip 10 moves or 10 variations |
| `Ctrl + Arrow key` | Jump to the beginning, end, first variation, or last variation |

On macOS, use `Command` instead of `Ctrl`. To preserve these navigation actions, custom shortcuts for navigation do not record `Ctrl` or `Shift`.

### Markup Gestures

| Gesture | Action |
| --- | --- |
| Double-click a stone | Apply the current label or shape to the entire connected group of the same color |
| Double-click markup with the Erase tool | Erase connected markup with the same type and text |
| Double-click the Erase button in the toolbar | Clear all markup on the current node |
| Right-click existing markup while using a markup tool | Erase the markup without switching to the Erase tool |
| Right-click an empty point with the Label tool | Add the current label without advancing auto-incremented markup text |

### Other Special Actions

- `Ctrl + V`: Open an SGF file or image from the clipboard. This shortcut is reserved and cannot be reassigned;
- `Esc`: Exit the scoring result, or return to the **Auto play** tool;
- `Shift + click` on the board: Click an existing stone to jump to the move that played it, or click a future move to move forward to it;
- Mouse wheel over the board: Move to the previous or next move;
- `Alt + click` a top move: Show its principal variation (**Desktop**).

### Files and Game Information

| Action | Default shortcut |
| --- | --- |
| Open | `Ctrl + O` |
| Save | `Ctrl + S` |
| Game information | `Ctrl + I` |

### Game Navigation

| Action | Default shortcut |
| --- | --- |
| Previous move | `↑` |
| Next move (prefer main branch) | `↓` |
| Next move (prefer current branch) | Unassigned |
| Previous branch | `←` |
| Next branch | `→` |

### Moves and Markup

| Action | Default shortcut |
| --- | --- |
| Pass | `P` |
| Auto play | `1` |
| Place black / white stone | `2` / `3` |
| Replace move | `4` |
| Add label / circle / square / triangle / cross | `5` / `6` / `7` / `8` / `9` |
| Erase markup | `0` |

### Variation Actions

| Action | Default shortcut |
| --- | --- |
| Move current variation to main | `\` |
| Move variation left / right | Unassigned |
| Prune other variations | Unassigned |
| Delete current variation | `Delete` |

### Display and Analysis

| Action | Default shortcut |
| --- | --- |
| Show coordinates | `` ` `` |
| Show next move | `Q` |
| Show move numbers | `R` |
| Show comments | `O` |
| Review / Edit mode (**Desktop**) | `W` |
| Show analysis dots (**Desktop**) | `E` |
| Show territory (**Desktop**) | `T` |
| Show score / point loss / win rate (**Desktop**) | `Y` / `U` / `I` |
| Start or stop analysis (**Desktop**) | `Space` |
| Deep analysis (**Desktop**) | `Shift + Space` |
| Play the best move (**Desktop**) | `Enter` |
