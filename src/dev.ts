import { spawn } from "node:child_process";
import { createReadStream, watch } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "127.0.0.1";
const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "dist");
const ignoredRoots = new Set([".build", ".git", "dist", "node_modules"]);

let buildRunning = false;
let rebuildPending = false;
let rebuildTimer: NodeJS.Timeout | undefined;

function rebuild(): void {
  if (buildRunning) {
    rebuildPending = true;
    return;
  }

  buildRunning = true;
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  const child = spawn(command, ["run", "build"], { stdio: "inherit" });

  child.on("exit", () => {
    buildRunning = false;
    if (rebuildPending) {
      rebuildPending = false;
      rebuild();
    }
  });
}

const watcher = watch(projectRoot, { recursive: true }, (_, filename) => {
  if (!filename || ignoredRoots.has(filename.split(path.sep)[0])) {
    return;
  }

  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(rebuild, 100);
});

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const server = createServer(async (request, response) => {
  try {
    const urlPath = decodeURIComponent(
      new URL(request.url ?? "/", "http://localhost").pathname,
    );
    let filePath = path.resolve(outputRoot, `.${urlPath}`);
    if (filePath !== outputRoot && !filePath.startsWith(`${outputRoot}${path.sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    const contentType = contentTypes[path.extname(filePath)];
    response.writeHead(200, contentType ? { "Content-Type": contentType } : undefined);
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Serving http://${host}:${port}`);
});

function stop(): void {
  watcher.close();
  server.close();
}

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
