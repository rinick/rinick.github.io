---
layout: page
title:  "Hashdown"
---

## 密码

[Hashdown](index.html)的密码输入框可以用来给信息加密，解码的时候必须输入相同密码。

### 特殊密码

用特殊密码时，编码结果并不会被加密，解码时也不用输入密码。

* **0**
  * 当密码是0，编码内容强制不加密不压缩。可以看到原始的UTF8编码结构。
* **1**
  * 当密码是1，编码结果会进行1字节加盐，同一个输入会有256种不同输出，可以用来防止过滤。
* **4**
  * 当密码是4，编码结果会进行4字节加盐，同一个输入会有4294967296种不同输出。


## Markdown

Markdown标记语言可以用来快速排版超文本内容

Markdown语法示例： [markdown_basis.zh.md](https://hashdown.github.io/edit.html#markdown_basis.zh.md)

在Marddown中嵌入HTML: [markdown_style.zh.md](https://hashdown.github.io/edit.html#markdown_style.zh.md)

### 编辑模式

* `A` : 纯文本模式
* `#` : Markdown预览
* `A|#` : Markdown编辑模式，文本和Markdown同时显示 
  * 多次点击`A|#`按钮可以进入纯净Markdown编辑模式，不显示解码框。