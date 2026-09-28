/*
  Retire the service worker registered by the old theme (Chirpy 5.x).

  Browsers that visited the site before the upgrade keep `/sw.js` registered
  and serve old pages from its cache. When they check this file for updates,
  this version clears those caches, unregisters itself and reloads the open
  pages so the current theme can register its own worker (`/sw.min.js`).
*/

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      })
  );
});
