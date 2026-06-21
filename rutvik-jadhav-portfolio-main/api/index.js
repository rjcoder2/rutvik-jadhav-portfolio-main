import { Readable } from "stream";

let serverEntryPromise;

async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("../dist/server/server.js").then((mod) => mod.default ?? mod);
  }
  return serverEntryPromise;
}

function buildUrl(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  return `${protocol}://${host}${req.url}`;
}

function buildRequest(req) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item != null) headers.append(key, item);
      });
    } else if (value != null) {
      headers.append(key, value);
    }
  }

  return new Request(buildUrl(req), {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "HEAD" ? null : req,
  });
}

export default async function handler(req, res) {
  const serverEntry = await getServerEntry();
  const request = buildRequest(req);
  const response = await serverEntry.fetch(request, undefined, undefined);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      const existing = res.getHeader("set-cookie");
      const cookies = existing ? ([]).concat(existing, value) : value;
      res.setHeader("set-cookie", cookies);
    } else {
      res.setHeader(key, value);
    }
  });

  if (!response.body) {
    res.end();
    return;
  }

  const reader = response.body.getReader();
  const stream = Readable.from(async function* () {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  }());

  stream.pipe(res);
}
