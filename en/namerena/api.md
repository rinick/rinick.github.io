---
layout: namerena_en
title: Embedding the game
---

Embed Namerena with an iframe. Set the iframe URL to start a battle and listen for a `postMessage` event to get the result. See the [terms for third-party embeds](about.html#third-party-embeds).

## Start a battle

Follow the [naming rules](naming.html), using one name per line and a blank line between teams. Encode the text as UTF-8, convert the bytes to Base64URL, and pass the result in the `#n=` fragment.

```html
<iframe id="namerena" title="Namerena"></iframe>
```

```javascript
const iframe = document.querySelector("#namerena");
const game = new URL("https://deepmess.com/namerena/?lang=en");

function run(names) {
  const bytes = new TextEncoder().encode(names);
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  const encoded = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  game.hash = `n=${encoded}`;
  iframe.src = game.href;
}
```

## Read the result

Check the message’s origin and verify it came from the game iframe.

```javascript
window.addEventListener("message", (event) => {
  if (event.origin !== game.origin || event.source !== iframe.contentWindow) return;
  const { winners, all } = event.data ?? {};
  if (!Array.isArray(winners) || !Array.isArray(all)) return;
  console.log(winners, all);
});

run("Alice\nBob");
```

- `winners` contains the names on the winning team.
- `all` contains the names grouped into teams, as an array of arrays.
- Returned names may include an `@Clan` suffix. The `+Gear` suffix is omitted.
