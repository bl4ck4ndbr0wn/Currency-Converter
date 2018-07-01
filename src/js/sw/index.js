const version = "1.15";
const staticCacheName = `CC-V${version}`;

// Installing resources to cache.....
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.min.css",
        "/css/vendor/bootstrap.min.css",
        "/fonts/google-font.css",
        "/js/vendor/bootstrap.min.js",
        "/js/vendor/jquery.min.js",
        "/js/bundle.min.js",
        "/js/indexController.js"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("[ServiceWorker] Activate");
  //Remove old cache
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName.startsWith("CC-V") && cacheName != staticCacheName;
          })
          .map(cacheName => {
            console.log(`[ServiceWorker] Removing old cache ${cacheName}`);
            return cache.delete(cacheName);
          })
      );
    })
  );
});

// Intercept the web page requests
self.addEventListener("fetch", event => {
  console.log("[ServiceWorker] Fetch", event.request.url);
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
