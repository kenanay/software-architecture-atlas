const VERSION = "0.3.0";
const SHELL_CACHE = `atlas-shell-${VERSION}`;
const CONTENT_CACHE = `atlas-content-${VERSION}`;
const CORE = ["/", "/tr/", "/en/", "/es/", "/tr/catalog/", "/tr/glossary/", "/tr/compare/", "/tr/decision/", "/tr/research/", "/tr/author/", "/tr/sources/", "/tr/standards/", "/tr/registry/", "/tr/status/", "/offline/", "/manifest.webmanifest", "/icons/atlas.svg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(SHELL_CACHE).then(cache => Promise.allSettled(CORE.map(url => cache.add(url)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("atlas-") && ![SHELL_CACHE, CONTENT_CACHE].includes(key)).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) (await caches.open(CONTENT_CACHE)).put(request, response.clone());
    return response;
  } catch {
    return (await caches.match(request)) || (await caches.match("/offline/"));
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const update = fetch(request).then(async response => {
    if (response.ok && new URL(request.url).origin === self.location.origin) (await caches.open(CONTENT_CACHE)).put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || update;
}

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || url.pathname.startsWith("/@")) return;
  if (request.mode === "navigate") event.respondWith(networkFirst(request));
  else event.respondWith(staleWhileRevalidate(request));
});
