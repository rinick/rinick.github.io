---
layout: page_en
title:  "Hashdown"
---

## Password

When you use password in [Hashdown](index.html)'s password editor, the same password is required to decode.

### Special Password

When the following special password is used, the data won't be protected by the password:

* **0**
  * When password is `0`, the output is forced to use raw UTF8 without compression or encryption
* **1**
  * When password is `1`, a one byte salt is used, and there will be 256 different possible outputs
* **4**
  * When password is `4`, a 4 byte salt is used, and there will be 4294967296 different possible outputs

## Markdown

Markdown is a makrup language that can easily convert text to html

Markdown example： [markdown_basis.md](https://hashdown.github.io/edit.html#markdown_basis.md)

use raw html inside Marddown: [markdown_style.md](https://hashdown.github.io/edit.html#markdown_style.md)

### Editing Mode

* `A` : Plain Text 
* `#` : Markdown Preview
* `A|#` : Markdown Editor，Text and Rendered Markdown are shown side by side
  * Click the `A|#` Button multiple times will switch to pure editing mode, and the encoded data area is hidden to give more editing space