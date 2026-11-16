---
layout: namerena
title:  "在网页里嵌入名字竞技场"
---

可以用 iframe 把名字竞技场嵌入自己的网页。调用方设置 iframe 的网址来开始战斗，并通过 `postMessage` 接收结算结果。

### 调用

按[命名规则](naming.html)准备文本。每行一个名字，空行分隔队伍。将文本编码为 UTF-8，再转成 Base64URL，放到网址的 `#n=` 里。示例用 `lang=zh` 指定简体中文。

```html
<iframe id="namerena" title="名字竞技场"></iframe>
```

```javascript
const iframe = document.querySelector("#namerena");
const game = new URL("https://deepmess.com/namerena/?lang=zh");

function run(names) {
  const bytes = new TextEncoder().encode(names);
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  const encoded = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  game.hash = `n=${encoded}`;
  iframe.src = game.href;
}
```

### 回调

处理结果时，先验证消息来自游戏的来源和当前 iframe。

```javascript
window.addEventListener("message", (event) => {
  if (event.origin !== game.origin || event.source !== iframe.contentWindow) return;
  const { winners, all } = event.data ?? {};
  if (!Array.isArray(winners) || !Array.isArray(all)) return;
  console.log(winners, all);
});

run("中国\n日本");
```

- `winners` 是获胜队伍的成员名字数组。
- `all` 是按队伍分组的参战名字二维数组。
- 名字可能带有 `@战队名`。返回值使用参战身份，省略 `+装备` 后缀。

### 示例

[打开 iframe 接口示例](api_test.html)
