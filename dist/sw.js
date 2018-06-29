importScripts("/cache-polyfill.js");

CACHE_NAME = "CC_V1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/scripts/bundle.js",
        "/css/style.css"
      ]);
    })
  );
});
