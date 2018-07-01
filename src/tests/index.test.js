// const makeServiceWorkerEnv = require('service-worker-mock');

describe("Service worker", () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv());
    jest.resetModules();
  });

  it("should delete old caches on activate", async () => {
    require("../sw.js");

    // Create old cache
    await self.caches.open("OLD_CACHE");
    expect(self.snapshot().caches.OLD_CACHE).toBeDefined();

    // Activate and verify old cache is removed
    await self.trigger("activate");
    expect(self.snapshot().caches.OLD_CACHE).toBeUndefined();
    expect(self.snapshot().caches["precache-v1"]).toBeDefined();
  });
});
