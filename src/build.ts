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
  sourceRelativePath: string;
};

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "dist");
const layoutsDir = path.join(rootDir, "layouts");
const markdown = new MarkdownIt({ html: true });
const defaultImageRenderer =
  markdown.renderer.rules.image ??
  ((tokens, index, options, _environment, renderer) =>
    renderer.renderToken(tokens, index, options));

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

function renderMarkdown(source: string): string {
  const rawBlocks: string[] = [];
  const protectedSource = normalizeMarkdown(source).replace(
    /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,
    (block) => {
      const index = rawBlocks.push(block) - 1;
      return `<!--RAW_BLOCK_${index}-->`;
    },
  );

  return markdown
    .render(protectedSource)
    .replace(/<!--RAW_BLOCK_(\d+)-->/g, (_, index: string) => rawBlocks[Number(index)]);
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
    title: data.title ?? "",
  };

  let rendered = template.replace(
    /\{\{\s*([A-Za-z][\w.-]*)\s*\}\}/g,
    (_, key: string) => getTemplateValue(key, values, data),
  );

  rendered = await replaceAsync(
    rendered,
    /\{\{\s*include:([^}]+?)\s*\}\}/g,
    async (_, includeTarget: string) =>
      readTemplateInclude(resolveIncludeTarget(includeTarget.trim(), data), context),
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

        return path.extname(candidate) === ".md" ? renderMarkdown(body) : body;
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

  let content = extension === ".md" ? renderMarkdown(parsed.body) : parsed.body;
  if (parsed.data.layout) {
    content = await renderLayout(parsed.data.layout, content, parsed.data, {
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
