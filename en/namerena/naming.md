---
layout: namerena_en
title: Naming rules
---

Enter one fighter per line. Clan and gear are optional. Use `@` before the clan and `+` before the gear.

```text
Alice
Alice@Nightfall
Alice+Wooden Sword
Alice@Nightfall+Wooden Sword
```

The name and clan determine a fighter’s base stats and skills. Gear can change both.

## Clans

- If you leave out the clan, the game uses the fighter’s name as their clan. In a free-for-all, the clan determines the fighter’s badge. In a team battle, regular fighters share the badge of the first fighter on their team.
- Blank lines set the teams. Fighters on the same team who share a clan may boost each other’s stats or skills.
- The starting lineup shows the clan. The battle log uses the fighter’s name.
- If you enter the same name and clan more than once, the game keeps the first entry. This also applies if the entries use different gear.

## Spaces and length

The game uses the whole name to generate a fighter, including spaces and the text after them. The battle log shows only the part before the first space. For example, `Rick Zhou` appears as `Rick`.

A clan can be up to 64 UTF-16 code units long. The same limit applies to a name with no explicit clan. With an explicit clan, the name can be up to 80 code units. An English letter or a common Chinese character takes one code unit, while many emoji take two.

A regular battle needs at least two different fighters. The game lists a limit of 1,000 names per battle.
