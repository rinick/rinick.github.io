---
layout: namerena_en
title: Languages and custom language packs
---

## Choose a language

On your first visit, the game looks for a supported language in your browser preferences and falls back to English. Click the flag in the upper-right corner to change languages. Your browser remembers the language you pick there.

Add `?lang=en` or another code to the game URL to open it in that language. A link leaves your saved preference alone. You can still use the flag menu to save a new choice.

| Language | Game link |
| --- | --- |
| English | [`?lang=en`](/namerena/?lang=en) |
| 日本語 | [`?lang=ja`](/namerena/?lang=ja) |
| Deutsch | [`?lang=de`](/namerena/?lang=de) |
| 简体中文 | [`?lang=zh`](/namerena/?lang=zh) |
| 한국어 | [`?lang=ko`](/namerena/?lang=ko) |
| Français | [`?lang=fr`](/namerena/?lang=fr) |
| Español | [`?lang=es`](/namerena/?lang=es) |
| Português (Brasil) | [`?lang=pt-BR`](/namerena/?lang=pt-BR) |
| العربية | [`?lang=ar`](/namerena/?lang=ar) |
| Русский | [`?lang=ru`](/namerena/?lang=ru) |

## Try another language pack

- [Traditional Chinese](/namerena/?l=lang%2Fzh-Hant.json)
- [Money pack](/namerena/?l=lang%2Fzh-money.json) (Chinese). If you’ve had enough of all the fighting, try counting coins instead.

Use `?l=` to pass the path or URL of a language file. If a link has both parameters, a supported `lang` takes priority.

## Make your own language pack

1. <a href="/namerena/lang/en.json" download>Download the English JSON file</a> and edit it as UTF-8.
2. Keep the JSON keys and placeholders such as `[0]`, `[1]`, `[2]`, and `[]`. You can translate `[Fireball]`. Keep the brackets to highlight the skill name in the battle log. Missing keys appear blank, and the game skips translations containing `<` or `>`.
3. Host the JSON at an HTTPS URL. If you host it on another origin, let the game read it by returning the header `Access-Control-Allow-Origin: https://deepmess.com`.
4. URL-encode your file’s address and pass it as the `l` parameter. For example, a file at `https://example.com/lang.json` would use `https://deepmess.com/namerena/?l=https%3A%2F%2Fexample.com%2Flang.json`.
