const CACHE_NAME = "money-mission-v9-16-8";
// V9.16.0: guide pictures are cached for offline use. Existing manifest/icons remain optional
// during service-worker installation, so missing deployment assets cannot break the whole app.
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./guide-assets/account-form.png",
  "./guide-assets/accounts.png",
  "./guide-assets/activity.png",
  "./guide-assets/budget-form.png",
  "./guide-assets/budget.png",
  "./guide-assets/card-purchase.png",
  "./guide-assets/card-transaction.png",
  "./guide-assets/debt-form.png",
  "./guide-assets/home.png",
  "./guide-assets/income-grouping.png",
  "./guide-assets/income.png",
  "./guide-assets/roadmap.png",
  "./guide-assets/savings-form.png",
  "./guide-assets/settings-data.png",
  "./guide-assets/settings-reminders.png",
  "./guide-assets/settings-roadmap.png",
  "./guide-assets/settings.png",
  "./guide-assets/transaction.png"
];
const OPTIONAL_PWA_ASSETS = [
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./splash-screen.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cache.addAll(APP_SHELL);
      await Promise.allSettled(OPTIONAL_PWA_ASSETS.map(asset => cache.add(asset)));
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
