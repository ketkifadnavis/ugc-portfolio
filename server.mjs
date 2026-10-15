import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const port = 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
};

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Invalid request path");
    return;
  }
  const path = resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
  if (!path.startsWith(`${root}${sep}`)) {
    response.writeHead(403);
    response.end("Access denied");
    return;
  }
  try {
    const info = await stat(path);
    if (!info.isFile()) {
      response.writeHead(404);
      response.end("Portfolio asset not found");
      return;
    }
    const headers = {
      "Content-Type": types[extname(path)] || "application/octet-stream",
      "Content-Length": info.size,
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    };
    if (request.method === "HEAD") {
      response.writeHead(200, headers);
      response.end();
      return;
    }
    if (info.size === 0 && !request.headers.range) {
      response.writeHead(200, headers);
      response.end();
      return;
    }
    let start = 0;
    let end = info.size - 1;
    const range = request.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (match && (match[1] || match[2])) {
        if (match[1]) {
          start = Number(match[1]);
          end = match[2] ? Math.min(Number(match[2]), end) : end;
        } else {
          start = Math.max(0, info.size - Number(match[2]));
        }
      } else {
        start = -1;
      }
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || start > end || start >= info.size) {
        response.writeHead(416, { "Content-Range": `bytes */${info.size}` });
        response.end();
        return;
      }
      headers["Content-Range"] = `bytes ${start}-${end}/${info.size}`;
      headers["Content-Length"] = end - start + 1;
    }
    response.writeHead(range ? 206 : 200, headers);
    const stream = createReadStream(path, { start, end });
    stream.on("error", error => {
      console.error("Could not stream portfolio asset:", error);
      response.destroy(error);
    });
    response.on("close", () => stream.destroy());
    stream.pipe(response);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR" || error.code === "ENOTDIR") {
      response.writeHead(404);
      response.end("Preview asset not found");
      return;
    }
    console.error("Could not serve preview asset:", error);
    response.writeHead(500);
    response.end("Could not load preview asset");
  }
});
server.on("error", error => {
  console.error("Could not start preview server:", error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () => {
  console.log(`Ketki's story: http://localhost:${port}`);
});
