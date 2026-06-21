---
layout: page
title:  "Rick's Deep Mess"
---

---
<script>
(()=>{
  let lan = window.localStorage.language;
  if (lan) {
      if (lan === 'en') {
        window.location.replace("/en/");
      }
  } else {
    let hasZh = window.navigator.language.startsWith('zh');
    let hasOther = false;
    if (!hasZh) {
      for (let str of window.navigator.languages) {
        if (str.startsWith('zh')) {
          hasZh = true;
        } else if (!str.startsWith('en')) {
          hasOther = true;
        }
      }
      if (!hasZh || hasOther) {
        window.location.replace("/en/");
      }
    }
  }
})();
</script>

| ------------- | ------------- | ------------- |
| [<img src="/images/icon/chess.png" style="min-width:160px;width:160px" />](/zh/chess.html) | [乐高国际象棋设计](/zh/chess.html) <br /> 用乐高设计的国际象棋棋子 |
| [![](/images/icon/amoeba.png)](/zh/amoeba.html) | [变形虫自动机](/zh/amoeba.html) <br /> 基于GLSL的细胞自动机模拟 |
| [![](/images/icon/namerena.png)](/zh/namerena/) | [名字竞技场](/zh/namerena/) <br /> 基于文本的对战游戏，战斗的过程由输入的名字决定，固定的输入有固定的对战结果 |
| [<img src="/images/icon/hashdown.png" style="min-width:160px" />](/zh/hashdown/) | [Hashdown](/zh/hashdown/) <br /> 文本编码和压缩的工具，可以在有限的字符内储存更多的文本信息 |

