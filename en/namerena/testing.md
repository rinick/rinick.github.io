---
layout: namerena_en
title: Testing names
---

The trick to winning is finding a strong name. The green smiley next to a fighter’s stats is a good first clue. Once you’ve picked a few candidates, try a power rating or pit them against each other.

Use `Alt+1` to start a test and `Alt+2` to return to the input screen.

## Search for strong names

Type `!test!` on the first line, leave a blank line, and add a pattern. Then click **Fight**.

```text
!test!

Alice???
```

The game replaces the first `???` with each number from `000` to `999` and lists candidates whose total stats meet the cutoff. You can also list at least 11 candidates yourself, one per line in the same group. The game lists a limit of 8,000 candidates per search.

## Keep the name or badge you like

### Keep the name

`Rick`, `Rick Zhou`, `Rick@Nightfall`, and `Rick Zhou@Nightfall` all appear as **Rick** in the battle log. Try a different clan or add text after a space to roll different stats without changing the name people see in battle.

### Keep the badge

To keep a badge in a free-for-all, keep the clan and change the name. For example, `Alice@Nightfall` and `Bob@Nightfall` share the Nightfall badge.

## Get a power rating

Type `!test!`, a blank line, and the name you want to rate. Then click **Fight**.

```text
!test!

Alice
```

The power rating is the win rate multiplied by 10,000. The first official score appears after 1,000 battles. It updates after 10,000 battles, 100,000 battles, and so on.

Still running at 101%? That’s for anyone who can’t leave a rating alone.

- **One name.** The game supplies a teammate for a two-on-two test.
- **One-on-one.** Enter the same name twice in the same group.
- **A full team.** Enter two to ten teammates in the same group. They’ll face teams of the same size.

## Compare two lineups

Separate `!test!` and the two lineups with blank lines. The game runs the matchup across different random seeds and shows how often the first lineup wins.

```text
!test!

Alice

Bob
```
