---
layout: page
title:  "π"
---

<style>
  #cm-editor {
    min-height: 400px;
    width: 100%;
    overflow: scroll;
  }
  #main-content {
    position: relative;
  }
  #pi-toolbox{
    position: absolute;
    padding: 4px;
    gap: 4px;
    width: calc(100% - 80px);
    top: 20px;
    right: 0;
    display: flex;
    align-items: stretch;
  }
  #pi-rule-input{
    flex-grow: 1;
  }
  .cm-editor {
    font-size: 32px;
  }
  .cm-gutterElement {
    font-size: 14px;
  }
</style>

<div id='pi-toolbox'>
格式: <input id='pi-rule-input'>
</div>
<div id='cm-editor' ></div>
<script type="importmap">
{
  "imports": {
    "@codemirror/state": "https://cdn.jsdelivr.net/npm/@codemirror/state@6.4.1/dist/index.js",
    "@codemirror/view":  "https://cdn.jsdelivr.net/npm/@codemirror/view@6.38.1/dist/index.js",
    "@codemirror/basic-setup": "https://cdn.jsdelivr.net/npm/@codemirror/basic-setup@0.20.0/dist/index.js",

    "@codemirror/commands": "https://cdn.jsdelivr.net/npm/@codemirror/commands@6.8.1/dist/index.js",
    "@codemirror/search":   "https://cdn.jsdelivr.net/npm/@codemirror/search@6.5.6/dist/index.js",
    "@codemirror/autocomplete": "https://cdn.jsdelivr.net/npm/@codemirror/autocomplete@6.18.6/dist/index.js",
    "@codemirror/lint":     "https://cdn.jsdelivr.net/npm/@codemirror/lint@6.8.5/dist/index.js",
    "@codemirror/language": "https://cdn.jsdelivr.net/npm/@codemirror/language@6.11.3/dist/index.js",

    "@lezer/common":   "https://cdn.jsdelivr.net/npm/@lezer/common@1.2.1/dist/index.js",
    "@lezer/highlight":"https://cdn.jsdelivr.net/npm/@lezer/highlight@1.2.0/dist/index.js",

    "style-mod":   "https://cdn.jsdelivr.net/npm/style-mod@4.0.3/src/style-mod.js",
    "w3c-keyname": "https://cdn.jsdelivr.net/npm/w3c-keyname@2.2.8/index.js",
    "crelt":       "https://cdn.jsdelivr.net/npm/crelt@1.0.6/index.js"
  }
}
</script>
<script src='./data.js'></script>
<script type="module" src='./pi.js'></script>

