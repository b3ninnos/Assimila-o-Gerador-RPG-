/* Service worker: deixa o app funcionar sem internet.
   Ao mudar o index.html, aumente a VERSAO para os aparelhos pegarem a versão nova. */
var VERSAO = 'v4';
var CACHE = 'gerador-aventuras-' + VERSAO;
var SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('gerador-aventuras-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var mesmaOrigem = url.origin === location.origin;
  var fonte = /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname);
  if (!mesmaOrigem && !fonte) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (r) {
      var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put('./index.html', cp); }); return r;
    }).catch(function () { return caches.match('./index.html'); }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    var rede = fetch(req).then(function (r) {
      if (r && (r.ok || r.type === 'opaque')) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); }
      return r;
    }).catch(function () { return hit; });
    return hit || rede;
  }));
});
