var cacheName = 'apsa-congreso';
var filesToCache = [
  '/',
  '/data/data.json',
  '/fonts/a0369ea57eb6d3843d6474c035111f29.eot',
  '/fonts/f89ea91ecd1ca2db7e09baa2c4b156d1.woff',
  '/fonts/c20b5b7362d8d7bb7eddf94344ace33e.woff2',
  '/fonts/bea989e82b07e9687c26fc58a4805021.woff',
  '/fonts/b15db15f746f29ffa02638cb455b8ec0.woff2',
  '/fonts/261d666b0147c6c5cda07265f98b8f8c.eot',
  '/fonts/1ab236ed440ee51810c56bd16628aef0.ttf',
  '/fonts/ec3cfddedb8bebd2d7a3fdf511f7c1cc.woff',
  '/fonts/db78b9359171f24936b16d84f63af378.ttf',
  '/fonts/c1868c9545d2de1cf8488f1dadd8c9d0.eot',
  '/fonts/89f9806b964f92ad282fd60947eba588.svg',
  '/fonts/a06da7f0950f9dd366fc9db9d56d618a.woff2',
  '/fonts/ad912fd102f4052d3273dd838e0c671d.svg',
  '/fonts/13685372945d816a2b474fc082fd9aaa.ttf',
  '/fonts/3debcaf1a98e4445d213fd0089d42f6b.svg',
  '/images/9c74e172f87984c48ddf5c8108cabe67.png',
  '/img/icon-144.png',
  '/img/icon-256.png',
  '/img/icon-192.png',
  '/img/icon-36.png',
  '/img/icon-96.png',
  '/img/icon-48.png',
  '/img/icon-72.png',
  '/img/Logo.png',
  '/img/sponsor_footer.png',
  '/img/icon-512.png',
  '/img/salas2.jpg',
  '/img/salas1.jpg',
  '/img/sponsor2.jpg',
  '/src/views/calendar_view/calendar_view.html',
  '/src/views/login_view/login_view.html',
  '/src/views/visitas_view/visitas_view.html',
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
