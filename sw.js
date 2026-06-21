/* ═══════════════════════════════════════════════════════════════════
   NECRONOMICON 404 — sw.js  v4
   Service Worker — offline + cache estratégico
   ═══════════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'necronomicon-404-v7';

// Assets locales que se pre-cachean en install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg'
];

// Instalación: pre-cachear todos los assets locales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activación: limpiar versiones anteriores del cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: estrategia diferenciada por origen
self.addEventListener('fetch', event => {
  // Solo manejar peticiones GET
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Assets del mismo origen → Cache-first con actualización en background
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached); // Si falla la red, usar cache

        // Devolver cache inmediatamente si existe, red en background
        return cached || networkFetch;
      })
    );
    return;
  }

  // Google Fonts → Network-first con cache de respaldo
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Resto: network only, sin cache
});
