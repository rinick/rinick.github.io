import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { load } from "js-yaml";
import MarkdownIt from "markdown-it";

type PageData = {
  [key: string]: unknown;
  layout?: string;
  partial?: boolean;
  title?: string;
};

type RenderContext = {
  pageIndex: string;
  sourceRelativePath: string;
};

type PageIndexEntry = {
  anchor?: string;
  level: 2 | 3;
  title: string;
};

type MarkdownEnvironment = {
  pageIndex?: PageIndexEntry[];
};

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "dist");
const layoutsDir = path.join(rootDir, "layouts");
const markdown = new MarkdownIt({ html: true });
const customAnchorPattern = /\s+\{#([-A-Za-z0-9_:.]+)\}\s*$/;
const headingMarkers: Record<string, string> = {
  h1: "/",
  h2: "▓",
  h3: "■",
  h4: "□",
  h5: "#",
  h6: "#",
};
const defaultHeadingOpenRenderer =
  markdown.renderer.rules.heading_open ??
  ((tokens, index, options, _environment, renderer) =>
    renderer.renderToken(tokens, index, options));
const defaultImageRenderer =
  markdown.renderer.rules.image ??
  ((tokens, index, options, _environment, renderer) =>
    renderer.renderToken(tokens, index, options));

markdown.core.ruler.push("custom_heading_anchor", (state) => {
  for (let index = 0; index < state.tokens.length - 1; index += 1) {
    const headingToken = state.tokens[index];
    const inlineToken = state.tokens[index + 1];
    if (headingToken.type !== "heading_open" || inlineToken.type !== "inline") {
      continue;
    }

    const match = inlineToken.content.match(customAnchorPattern);
    const lastChild = inlineToken.children?.at(-1);
    if (!match || !lastChild || lastChild.type !== "text") {
      continue;
    }

    const childContent = lastChild.content.replace(customAnchorPattern, "");
    if (childContent === lastChild.content) {
      continue;
    }

    inlineToken.content = inlineToken.content.slice(0, match.index).trimEnd();
    if (childContent) {
      lastChild.content = childContent;
    } else {
      inlineToken.children?.pop();
    }
    headingToken.attrSet("id", match[1]);
    headingToken.attrJoin("class", "has-custom-anchor");
  }
});

markdown.core.ruler.after("custom_heading_anchor", "page_index", (state) => {
  const pageIndex = (state.env as MarkdownEnvironment).pageIndex;
  if (!pageIndex) {
    return;
  }

  const usedAnchors = new Set(
    state.tokens.flatMap((token) => {
      const anchor = token.type === "heading_open" ? token.attrGet("id") : null;
      return anchor ? [anchor] : [];
    }),
  );

  for (let index = 0; index < state.tokens.length - 1; index += 1) {
    const headingToken = state.tokens[index];
    const inlineToken = state.tokens[index + 1];
    if (
      headingToken.type !== "heading_open" ||
      inlineToken.type !== "inline" ||
      (headingToken.tag !== "h2" && headingToken.tag !== "h3")
    ) {
      continue;
    }

    const title = (inlineToken.children ?? [])
      .map((child) => {
        if (child.type === "softbreak" || child.type === "hardbreak") {
          return " ";
        }
        return child.type === "text" || child.type === "code_inline" || child.type === "image"
          ? child.content
          : "";
      })
      .join("")
      .trim();
    if (!title) {
      continue;
    }

    if (headingToken.tag === "h2") {
      pageIndex.push({ level: 2, title });
      continue;
    }

    const anchor = headingToken.attrGet("id") ?? uniqueAnchor(title, usedAnchors);
    headingToken.attrSet("id", anchor);
    pageIndex.push({ anchor, level: 3, title });
  }
});

markdown.renderer.rules.heading_open = (tokens, index, options, environment, renderer) => {
  const token = tokens[index];
  const openingTag = defaultHeadingOpenRenderer(
    tokens,
    index,
    options,
    environment,
    renderer,
  );
  const anchor = token.attrGet("id");

  if (!anchor || !token.attrGet("class")?.split(" ").includes("has-custom-anchor")) {
    return openingTag;
  }

  const escapedAnchor = markdown.utils.escapeHtml(anchor);
  const marker = headingMarkers[token.tag] ?? "#";
  return `${openingTag}<a class="heading-anchor" href="#${escapedAnchor}" aria-label="Permalink to this section">${marker}</a>`;
};

markdown.renderer.rules.image = (tokens, index, options, environment, renderer) => {
  const token = tokens[index];
  const match = token.content.match(/^!(\d*)$/);

  if (match) {
    token.attrJoin("class", "markdown-popup-image");
    token.attrSet("tabindex", "0");
    token.attrSet("role", "button");
    token.attrSet("aria-label", "Open image preview");
    if (match[1]) {
      token.attrSet("width", match[1]);
    }
  }

  return defaultImageRenderer(tokens, index, options, environment, renderer);
};

const ignoredRoots = new Set([
  ".build",
  ".git",
  ".github",
  "dist",
  "layouts",
  "node_modules",
  "src",
]);

const ignoredFiles = new Set([
  ".gitignore",
  "package-lock.json",
  "package.json",
  "README.md",
  "tsconfig.json",
]);

const parentLayouts: Record<string, string> = {
  "deep-fuse": "default",
  namerena: "namerena_base",
  page: "default",
  page_en: "default",
};

function normalizeMarkdown(source: string): string {
  const lines = source
    .replace(
      /(<iframe\b[^>]*>)(\s*)<iframe>/gi,
      "$1$2</iframe>",
    )
    .replace(
      /\*\*(<span\b[^>]*>[\s\S]*?<\/span>)\*\*/g,
      "<strong>$1</strong>",
    )
    .split("\n");
  const normalized: string[] = [];

  for (let index = 0; index < lines.length; ) {
    if (!lines[index].trimStart().startsWith("|")) {
      normalized.push(lines[index]);
      index += 1;
      continue;
    }

    const table: string[] = [];
    while (index < lines.length && lines[index].trimStart().startsWith("|")) {
      table.push(lines[index]);
      index += 1;
    }

    const separator = /^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/;
    const separatorIndex = table.findIndex((line) => separator.test(line));
    if (separatorIndex === -1) {
      normalized.push(...table);
      continue;
    }

    if (separatorIndex === 0) {
      const rows = table.slice(1).filter((line) => !separator.test(line));
      const cells = rows.map(splitTableRow);
      const columnCount = Math.max(...cells.map((row) => row.length));
      const alignments = splitTableRow(table[0]).slice(0, columnCount);

      normalized.push(
        "<table>",
        "<tbody>",
        ...cells.flatMap((row) => [
          "<tr>",
          ...row.map((cell, cellIndex) => {
            const alignment = tableAlignment(alignments[cellIndex]);
            const style = alignment ? ` style="text-align:${alignment}"` : "";
            return `<td${style}>${markdown.renderInline(cell.trim())}</td>`;
          }),
          "</tr>",
        ]),
        "</tbody>",
        "</table>",
        "",
      );
      continue;
    }

    normalized.push(...table.slice(0, separatorIndex));
    normalized.push(table[separatorIndex]);
    normalized.push(
      ...table.slice(separatorIndex + 1).filter((line) => !separator.test(line)),
    );
  }

  return normalized
    .map((line, index, allLines) => {
      const next = allLines[index + 1];
      const endsHtmlBlock =
        /^(?:\s*<img\b[^>]*\/?>|\s*<\/(?:div|iframe|script|style|table)>)\s*$/i.test(line);

      return endsHtmlBlock && next && !next.startsWith("<") ? `${line}\n` : line;
    })
    .join("\n");
}

function splitTableRow(row: string): string[] {
  return row.trim().replace(/^\||\|$/g, "").split("|");
}

function tableAlignment(separator: string | undefined): string | undefined {
  const value = separator?.trim();
  if (value?.startsWith(":") && value.endsWith(":")) {
    return "center";
  }
  if (value?.endsWith(":")) {
    return "right";
  }
  if (value?.startsWith(":")) {
    return "left";
  }
  return undefined;
}

function renderMarkdown(source: string, collectPageIndex = true): { html: string; pageIndex: PageIndexEntry[] } {
  const rawBlocks: string[] = [];
  const pageIndex: PageIndexEntry[] = [];
  const protectedSource = normalizeMarkdown(source).replace(
    /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,
    (block) => {
      const index = rawBlocks.push(block) - 1;
      return `<!--RAW_BLOCK_${index}-->`;
    },
  );

  const html = markdown
    .render(protectedSource, collectPageIndex ? { pageIndex } : {})
    .replace(/<!--RAW_BLOCK_(\d+)-->/g, (_, index: string) => rawBlocks[Number(index)]);

  return { html, pageIndex };
}

function uniqueAnchor(base: string, usedAnchors: Set<string>): string {
  if (!usedAnchors.has(base)) {
    usedAnchors.add(base);
    return base;
  }

  for (let suffix = 2; ; suffix += 1) {
    const candidate = `${base}-${suffix}`;
    if (!usedAnchors.has(candidate)) {
      usedAnchors.add(candidate);
      return candidate;
    }
  }
}

function renderPageIndex(entries: PageIndexEntry[], pageTitle: string): string {
  if (!entries.length) {
    return "";
  }

  const title = markdown.utils.escapeHtml(pageTitle);
  const items = entries.map((entry) => {
    const title = markdown.utils.escapeHtml(entry.title);
    return entry.level === 2
      ? `<li class="page-index-separator">${title}</li>`
      : `<li class="page-index-entry"><a href="#${markdown.utils.escapeHtml(entry.anchor ?? "")}">${title}</a></li>`;
  });

  return `<nav class="page-index" aria-label="${title}">\n<div class="page-index-title">${title}</div>\n<ul>\n${items.join("\n")}\n</ul>\n</nav>`;
}

function parseFrontMatter(source: string): { data: PageData; body: string } | null {
  if (!source.startsWith("---\n")) {
    return null;
  }

  const end = source.indexOf("\n---\n", 4);
  if (end === -1) {
    throw new Error("Front matter is missing its closing delimiter");
  }

  const data = load(source.slice(4, end)) as PageData | undefined;
  return {
    data: data ?? {},
    body: source.slice(end + 5),
  };
}

async function applyTemplate(
  template: string,
  content: string,
  data: PageData,
  context: RenderContext,
): Promise<string> {
  const values: Record<string, string> = {
    baseUrl: "",
    content,
    index: context.pageIndex,
    title: data.title ?? "",
  };

  let rendered = await replaceAsync(
    template,
    /\{\{\s*include:([^}]+?)\s*\}\}/g,
    async (_, includeTarget: string) =>
      readTemplateInclude(resolveIncludeTarget(includeTarget.trim(), data), context),
  );

  rendered = rendered.replace(
    /\{\{\s*([A-Za-z][\w.-]*)\s*\}\}/g,
    (_, key: string) => getTemplateValue(key, values, data),
  );

  if (rendered.includes("{{")) {
    throw new Error("Unsupported template expression");
  }

  return rendered;
}

function getTemplateValue(key: string, values: Record<string, string>, data: PageData): string {
  if (key in values) {
    return values[key];
  }

  const value = data[key];
  if (value == null) {
    return "";
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  throw new Error(`Template value is not renderable: ${key}`);
}

function resolveIncludeTarget(includeTarget: string, data: PageData): string {
  const value = data[includeTarget];
  if (value == null) {
    if (/^[A-Za-z][\w.-]*$/.test(includeTarget)) {
      throw new Error(`Missing include target: ${includeTarget}`);
    }

    return includeTarget;
  }
  if (typeof value !== "string") {
    throw new Error(`Include target is not a string: ${includeTarget}`);
  }

  return value;
}

async function replaceAsync(
  source: string,
  pattern: RegExp,
  replacer: (...match: string[]) => Promise<string>,
): Promise<string> {
  const matches = Array.from(source.matchAll(pattern));
  const replacements = await Promise.all(matches.map((match) => replacer(...match)));
  let index = 0;

  return source.replace(pattern, () => replacements[index++]);
}

async function readTemplateInclude(includePath: string, context: RenderContext): Promise<string> {
  if (!includePath || path.isAbsolute(includePath) || includePath.split(/[\\/]/).includes("..")) {
    throw new Error(`Invalid include path: ${includePath}`);
  }

  const sourceDirectory = path.resolve(rootDir, path.dirname(context.sourceRelativePath));

  for (let directory = sourceDirectory; ; directory = path.dirname(directory)) {
    if (directory !== rootDir && !directory.startsWith(`${rootDir}${path.sep}`)) {
      break;
    }

    for (const candidate of includePathCandidates(includePath)) {
      const resolvedPath = path.resolve(directory, candidate);
      if (resolvedPath !== rootDir && !resolvedPath.startsWith(`${rootDir}${path.sep}`)) {
        throw new Error(`Include path escapes docs root: ${includePath}`);
      }

      try {
        const source = await readFile(resolvedPath, "utf8");
        const parsed = parseFrontMatter(source);
        const body = parsed ? parsed.body : source;

        return path.extname(candidate) === ".md" ? renderMarkdown(body, false).html : body;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
          throw error;
        }
      }
    }
  }

  throw new Error(`Include not found: ${includePath}`);
}

function includePathCandidates(includePath: string): string[] {
  if (path.extname(includePath)) {
    return [includePath];
  }

  return [includePath, `${includePath}.html`, `${includePath}.md`];
}

async function renderLayout(
  layout: string,
  content: string,
  data: PageData,
  context: RenderContext,
  stack: string[] = [],
): Promise<string> {
  if (stack.includes(layout)) {
    throw new Error(`Circular layout chain: ${[...stack, layout].join(" -> ")}`);
  }

  const templatePath = path.join(layoutsDir, `${layout}.html`);
  const template = await readFile(templatePath, "utf8");
  const rendered = await applyTemplate(template, content, data, context);
  const parent = parentLayouts[layout];

  return parent
    ? renderLayout(parent, rendered, data, context, [...stack, layout])
    : rendered;
}

async function processFile(relativePath: string): Promise<void> {
  const sourcePath = path.join(rootDir, relativePath);
  const extension = path.extname(relativePath);

  if (extension !== ".md" && extension !== ".html") {
    await copyFile(sourcePath, path.join(outputDir, relativePath));
    return;
  }

  const source = await readFile(sourcePath, "utf8");
  const parsed = parseFrontMatter(source);

  if (!parsed) {
    await copyFile(sourcePath, path.join(outputDir, relativePath));
    return;
  }

  if (parsed.data.partial) {
    return;
  }

  const renderedMarkdown = extension === ".md" ? renderMarkdown(parsed.body) : null;
  let content = renderedMarkdown?.html ?? parsed.body;
  if (parsed.data.layout) {
    content = await renderLayout(parsed.data.layout, content, parsed.data, {
      pageIndex: renderPageIndex(renderedMarkdown?.pageIndex ?? [], parsed.data.title ?? ""),
      sourceRelativePath: relativePath,
    });
  }

  const outputPath =
    extension === ".md" ? relativePath.slice(0, -extension.length) + ".html" : relativePath;
  const destination = path.join(outputDir, outputPath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, content);
}

async function copyFile(source: string, destination: string): Promise<void> {
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination);
}

async function walk(directory: string, relativeDirectory = ""): Promise<void> {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name);

    if (
      (!relativeDirectory && ignoredRoots.has(entry.name)) ||
      (!relativeDirectory && ignoredFiles.has(entry.name))
    ) {
      continue;
    }

    const sourcePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(sourcePath, relativePath);
    } else if (entry.isFile()) {
      await processFile(relativePath);
    }
  }
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await walk(rootDir);
await writeFile(path.join(outputDir, ".nojekyll"), "");
