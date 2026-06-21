---
layout: page
title:  "变形虫自动机"
---

**变形虫自动机**是一个基于<a href="https://zh.wikipedia.org/wiki/%E5%BA%B7%E5%A8%81%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F" target="_blank">生命游戏</a>的<a href="https://zh.wikipedia.org/wiki/%E7%B4%B0%E8%83%9E%E8%87%AA%E5%8B%95%E6%A9%9F" target="_blank">细胞自动机</a>程序，模拟变形虫的生长和相互吞食。


<style type="text/css">
  span.cell{
    display:inline-block;
    width:8px;
    height:8px;
    border:1px solid #666;
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

</style>

## 基本规则

<span class='cell black'></span> 空白区域<br/>
<span class='cell plasm'></span> / <span class='cell plasm1'></span> 细胞质：缓慢生长<br/>
<span class='cell membrane'></span> / <span class='cell membrane1'></span> 细胞壁：在细胞质周围快速生长，可不依赖于细胞质存在<br/>
<span class='cell core'></span> / <span class='cell core1'></span> 细胞内核：只能在细胞质内生长，可以破坏和重建细胞壁<br/>
<span class='cell wall'></span> 墙：阻挡变形虫前进，对应一些特别规则以优化电路模拟<br/>
<span class='cell virus'></span> 病毒：在蓝红战斗区域小概率产生，将周围的变形虫转化为病毒<br/>
<br/>
基本转换规律：每个栅格对其8邻域其他栅格的内容进行计数，满足条件时转换成其他状态<br/>
<span class='cell black'></span> / <span class='cell plasm'></span> ⇒ <span class='cell core'></span> 若 <span class='cell core'></span> = 3 <br/>
<span class='cell plasm'></span> ⇒ <span class='cell black'></span> 若 <span class='cell core'></span> > 3 | <span class='cell plasm'></span> = 0<br/>
<span class='cell core'></span> ⇒ <span class='cell black'></span> 若 <span class='cell plasm'></span> = 0<br/>
<span class='cell membrane'></span> ⇒ <span class='cell black'></span> 若 <span class='cell core'></span> > 1<br/>
<span class='cell black'></span> ⇒ <span class='cell membrane'></span> 若 <span class='cell membrane'></span> > 0 &amp; <span class='cell plasm'></span> > 0 &amp; <span class='cell core'></span> = 0<br/>
<span class='cell black'></span> ⇒ <span class='cell plasm'></span> 若 <span class='cell plasm'></span> = 3 | (3 > <span class='cell core'></span> > 0 &amp; <span class='cell plasm'></span> > 0)<br/>

------
访问完整网址以使用更多功能（读写存档，编辑像素）: 
<a href="/amoeba/#zh" target="_blank">deepmess.com/amoeba/</a>

<iframe src="/amoeba/#zh"  frameBorder="0" style="width:100%;height:752px">
<iframe>