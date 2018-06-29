// importScripts("/cache-polyfill.js");

const version = "0.1";
CACHE_NAME = `CC-V${version}`;

// Installing resources to cache

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/css/vendor/bootstrap.min.css",
        "/scripts/vendor/bootstrap.min.js",
        "/scripts/vendor/jquery.min.js",
        "/scripts/bundle.js"
      ]);
    })
  );
});

// Intercept the web page requests
self.addEventListener("fetch", event => {
  console.log(event.request.url);
  //Eveluate the results of the event in the future.
  event.respondWith(
    //match current web request with cached resouces.(URL string)
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
