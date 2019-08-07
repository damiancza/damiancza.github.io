var cacheName = 'apsa-congreso';
var filesToCache = [
  '/',
  '/data/data.json',
  '/fonts',
  '/fonts/03b48d7ac06a62c5ad76a798683ba177.woff',
  '/fonts/5f48561abb43ace3f2a761ee719f0113.ttf',
  '/fonts/70e013de33c2337bce7d5e97eae856b2.svg',
  '/fonts/ea4a08a9d13eac796eb335310c8084f0.eot',
  '/img/hello-icon-128.png',
  '/img/hello-icon-144.png',
  '/img/hello-icon-152.png',
  '/img/hello-icon-192.png',
  '/img/hello-icon-256.png',
  '/img/hello-icon-512.png',
  '/img/Logo.png',
  '/img/salas1.jpg',
  '/img/salas2.jpg',
  '/img/sponsor_footer.png',
  '/img/sponsor2.jpg',
  '/src/views/activity_view',
  '/src/views/activity_view/activity_view.html',
  '/src/views/autorities_view/autorities_view.html',
  '/src/views/initial_view/initial_view.html',
  '/src/views/lecturer_activities_view/lecturer_activities_view.html',
  '/src/views/lecturers_view/lecturers_view.html',
  '/src/views/micongreso_view/micongreso_view.html',
  '/src/views/pcientifico_view/pcientifico_view.html',
  '/src/views/sede_view/sede_view.html',
  '/src/views/sponsor_view/sponsor_view.html',
  '/src/views/ubicacion_view/ubicacion_view.html',
  '/app.js',
  '/favicon.ico',
  '/index.html',
  '/manifest.json',
  '/style.css',
  '/style.css.map',
  '/sw.js'
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
