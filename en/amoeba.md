---
layout: page_en
title:  "Rick's Game of Amoeba"
---

**Rick\'s Game of Amoeba** is a <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank">Cellular Automaton</a> based on <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Game of Life</a>. It emulates Amoebas growing and devouring each other.

Source code: [github.com/rinick/game-of-amoeba](https://github.com/rinick/game-of-amoeba)

------
Open the full web app to access more features（ Save / Load / Edit ）: 

[deepmess.com/amoeba/](/amoeba/#en)


<style type="text/css">
  span.cell{
    display:inline-block;
    width:18px;
    height:18px;
    border:1px solid #000;
  }
  .black.cell{
    background: black;
  }

  .membrane.cell{
    background:#91d5ff;
  }
  .plasm.cell{
    background: #003a8c;
  }
  .core.cell{
    background: #096dd9;
  }

  .membrane1.cell{
    background:#ffa39e;
  }
  .plasm1.cell{
    background: #820014;
  }
  .core1.cell{
    background: #cf1322;
  }

  .virus.cell{
    background: #ff00ff;
  }
  .wall.cell{
    background: #ffffff;
  }

  iframe {
    height:752px;
  }
@media (max-width: 500px) {
  iframe {
    height: 540px
  }
}
</style>

<iframe src="/amoeba/#en"  frameBorder="0" style="width:100%">
</iframe>

## Cell Types

<table>
<tr><th> Type </th><th> Rules </th></tr>
<tr>
  <td rowspan="2" align="center"> <span class='cell plasm'></span> / <span class='cell plasm1'></span><br/> Plasm </td><td> Slowly grows, constrained by membrane cells and utilized by core cells.</td>
</tr>
<tr><td>
<ul>
  <li><span style="color:#0a0">grows</span> from empty cell when there are 3 neighbor plasm cells</li>
  <li><span style="color:#0a0">created</span> at empty cell when there is any neighbor plasm and 1~2 neigbor core cells</li>
  <li><span style="color:#e00">cosumed</span> ( become empty cell ) when there are 4 or more neibor core cells</li>
  <li><span style="color:#e00">desiccated</span> ( become empty cell ) when there is no neighbor plasm cell</li>
  <li><span style="color:#e00">destroied</span> ( become empty cell ) when there are 2 or more enemy core cells or any enemy membrane cell</li>
</ul>
</td></tr>
<tr>
  <td rowspan="2" align="center" style="word-break: keep-all;"> <span class='cell membrane'></span> / <span class='cell membrane1'></span><br/> Membrane </td><td> Quickly grows around plasm cell.</td>
</tr>
<tr><td>
<ul>
  <li><span style="color:#0a0">grows</span> from empty cell when there is neighbor plasm cell and membrane cell but NO core cell.</li>
  <li><span style="color:#e00">destroied</span> when there are 2 or more neighbor core cells.</li>
</ul>
</td></tr>
<tr>
  <td rowspan="2" align="center"> <span class='cell core'></span> / <span class='cell core1'></span><br/> Core </td><td> Core part of the amoeba, can not live without plasm.</td>
</tr>
<tr><td>
<ul>
  <li><span style="color:#0a0">grows</span> from empty cell or plasm cell when there are 3 neighbor core cells.</li>
  <li><span style="color:#e00">dies</span> when there is no neighbor plasm cell.</li>
</ul>
</td></tr>
<tr>
  <td rowspan="2" align="center"> <span class='cell virus'></span><br/> Virus </td><td> Infects all amoeba cells.</td>
</tr>
<tr><td>
<ul>
  <li><span style="color:#0a0">grows</span> from membrane cell when there are 6 enemy plasm cells and 1 ally plasm cell.</li>
  <li><span style="color:#0a0">infects</span> plasm/membrane/core cell when there is any neigbor virus cell.</li>
  <li><span style="color:#e00">dies</span> when there are less than 5 neighbor virus cell and no neighbor plasm/membrane/core cell.</li>
</ul>
</td></tr>
<tr>
  <td rowspan="2" align="center"> <span class='cell wall'></span><br/> Wall </td><td> Just wall.</td>
</tr>
<tr><td>
  <p>There is no rule to convert any cell to wall or convert wall cell to anything else.</p>
  <p>But other rules are modified when there are walls around. These rules are mainly designed to improve circuit emulation. For example: Plasm cell wont grow when there is wall cell but no core cell neighbor.</p>
</td></tr>
</table>

## Idea and new samples

Please submit your idea or sample stage (as webp file) at [github.com/rinick/game-of-amoeba/issues](https://github.com/rinick/game-of-amoeba/issues)

Also these rules are not finalized yet, samples that relies on these cases might be broken in the future:

- rules that involve both walls and membrane cells
- rules that involve walls and both color of amoeba cells 