const CACHE_NAME = "V1";
/**
 * install event is fired when registration succeeds.
 * After install, browser tries to activate service worker.
 * we cache static resources that allow website to run offline
 */
this.addEventListener("install", async function() {
  const cache = await caches.open(CACHE_NAME);
  //add static files into cache
  cache.addAll(["/index.html", "/css/style.css", "/scripts/bundle.js"]);
});
