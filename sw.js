var cacheName = 'control-horario';
var filesToCache = [
  '/',
  '/index.html',
  
  
  '/css/style.css',

  '/calendar.html',
  '/bienvenido.html',
  '/profile.html',
  '/visitas.html',

  '/lib/slick-theme.css',
  '/lib/slick.min.css',
  '/lib/slick.min.js',
  '/lib/fonts/slick.woff',

  '/lib/jquery.min.js',
  '/lib/semantic.min.css',
  '/lib/semantic.min.js',
  '/lib/lib/themes/default/assets/fonts/icons.woff2',
  '/lib/lib/themes/default/assets/fonts/outline-icons.woff2'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
