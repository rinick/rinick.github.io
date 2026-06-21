import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { load } from "js-yaml";
import MarkdownIt from "markdown-it";

type PageData = {
  layout?: string;
  title?: string;
};

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "dist");
const layoutsDir = path.join(rootDir, "layouts");
const markdown = new MarkdownIt({ html: true });

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

function applyTemplate(template: string, content: string, data: PageData): string {
  const values: Record<string, string> = {
    baseUrl: "",
    content,
    title: data.title ?? "",
  };

  const rendered = template.replace(
    /\{\{\s*(baseUrl|content|title)\s*\}\}/g,
    (_, key: string) => values[key],
  );

  if (rendered.includes("{{")) {
    throw new Error("Unsupported template expression");
  }

  return rendered;
}

async function renderLayout(
  layout: string,
  content: string,
  data: PageData,
  stack: string[] = [],
): Promise<string> {
  if (stack.includes(layout)) {
    throw new Error(`Circular layout chain: ${[...stack, layout].join(" -> ")}`);
  }

  const templatePath = path.join(layoutsDir, `${layout}.html`);
  const template = await readFile(templatePath, "utf8");
  const rendered = applyTemplate(template, content, data);
  const parent = parentLayouts[layout];

  return parent
    ? renderLayout(parent, rendered, data, [...stack, layout])
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

  let content = extension === ".md" ? renderMarkdown(parsed.body) : parsed.body;
  if (parsed.data.layout) {
    content = await renderLayout(parsed.data.layout, content, parsed.data);
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
