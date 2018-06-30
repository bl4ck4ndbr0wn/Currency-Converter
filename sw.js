const version = "0.5";
const staticCacheName = `CC-V${version}`;

// Installing resources to cache.....
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/css/vendor/bootstrap.min.css",
        "/fonts/google-font.css",
        "/js/vendor/bootstrap.min.js",
        "/js/vendor/jquery.min.js",
        "/js/bundle.js"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  //Remove old cache
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName.startsWith("CC-V") && cacheName != staticCacheName;
          })
          .map(cacheName => {
            return cache.delete(cacheName);
          })
      );
    })
  );
});

// Intercept the web page requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Update response to message event.
self.addEventListener("message", event => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
