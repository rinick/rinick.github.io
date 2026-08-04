# Deep Mess site

This is a small TypeScript static-site build.

```sh
npm install
npm run build
```

The generated site is written to `dist/`.

Start the development server at `http://localhost:4000`:

```sh
npm run dev
```

Set `PORT` or `HOST` to override the default `127.0.0.1:4000`.

## Page index

Add `{{index}}` to a layout or an included sidebar to render a page index. Pages whose templates do not contain the placeholder do not show an index.

- Level-three Markdown headings become links. Their visible text is used as the anchor unless the heading ends with an explicit `{#anchor}`.
- Duplicate automatic anchors receive `-2`, `-3`, and so on.
- Level-two headings become non-clickable separators.
