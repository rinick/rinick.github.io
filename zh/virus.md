---
layout: page
title:  "Virus细胞自动机"
---

**Virus**是一个4状态的<a href="http://zh.wikipedia.org/wiki/%E7%B4%B0%E8%83%9E%E8%87%AA%E5%8B%95%E6%A9%9F" target="_blank">细胞自动机</a>，四种状态模拟了植物细胞内病毒的生长。（程序通过WebGL和GLSL实现，和计算机病毒没有任何关系）

网址: 
<a href="/ca/virus.html" target="_blank">deepmess.com/ca/virus.html</a>


## 规则
<html>
<style type="text/css">
  span.cell{
    display:inline-block;
    width:8px;
    height:8px;
    border:1px solid #666;
  }
  .red.cell{
    background: rgb(255,76,0);
  }
  .blue.cell{
    background: rgb(76,76,255);
  }
  .black.cell{
    background: black;
  }
  .green.cell{
    background: rgb(52,255,76);
  }
</style>
<span class='cell blue'></span> 细胞质：缓慢生长<br/>
<span class='cell red'></span> 细胞壁：在细胞质周围快速生长，可不依赖于细胞质存在<br/>
<span class='cell green'></span> 病毒：只能在细胞质内生长，可以摧毁细胞壁<br/>
转换规律：每个栅格对其8邻域其他栅格的内容进行计数，满足条件时转换成其他状态<br/>
<span class='cell black'></span> / <span class='cell blue'></span> ⇒ <span class='cell green'></span> 若 <span class='cell green'></span> = 3 <br/>
<span class='cell blue'></span> ⇒ <span class='cell black'></span> 若 <span class='cell green'></span> > 3 | <span class='cell blue'></span> = 0<br/>
<span class='cell green'></span> ⇒ <span class='cell black'></span> 若 <span class='cell blue'></span> = 0<br/>
<span class='cell red'></span> ⇒ <span class='cell black'></span> 若 <span class='cell green'></span> > 1<br/>
<span class='cell black'></span> ⇒ <span class='cell red'></span> 若 <span class='cell red'></span> > 0 &amp; <span class='cell blue'></span> > 0 &amp; <span class='cell green'></span> = 0<br/>
<span class='cell black'></span> ⇒ <span class='cell blue'></span> 若 <span class='cell blue'></span> = 3 | (3 > <span class='cell green'></span> > 0 &amp; <span class='cell blue'></span> > 0)<br/>
</html>

------

<iframe src="/ca/virus.html#noad" style="width:100%;height:500px">
<iframe>