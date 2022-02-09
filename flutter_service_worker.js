'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "18a6ddfb6eb68e7264543f9b61ace307",
".git/config": "75b8363c0e30f2eb04b5aae2b0dcd3d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a1a1a3df483c2b885f236e413ffd9b83",
".git/HEAD": "f3008afde9280876a4a2dd25008ae9a2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "47ecfc008e487f14ad1ef70969899f9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "022c6289e6d2deaaaf59384b7bf27d0d",
".git/logs/refs/heads/master": "6c24581258331dc183c92649168256ec",
".git/logs/refs/heads/web-v1.1": "86a8642cebdbe68c99d823621812c18a",
".git/logs/refs/remotes/origin/main": "31c269d1f82f77a8511056989b79c48f",
".git/logs/refs/remotes/origin/web": "eb39760fe5632f9dfe85b731e8c2e27f",
".git/logs/refs/remotes/origin/web-v1.1": "e195b4aa041f46a064cffb6b4100c114",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/00/b933e2d80db51774cfc1679f14a4940aba01df": "e5f870082937796a60286d1794d4b735",
".git/objects/09/e4f6acc5a51d4eba0349cb8a980a88196dc420": "7aaa9ebcf3232c4317ab662c4aa9cf25",
".git/objects/20/236ec4c93dad1a421adf4ab84f94aaeda505cc": "e8a3056e50d3f1e19cb4c4a147240f2b",
".git/objects/20/2aa150f179d988038b5904d26a6bb450af898d": "bea6f750c2d35d5aa2f27378b99ab8ab",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/b53be7431525bdd245d88d0bf6b0c610f08fa1": "b44bdbee184cc0fba0cac9e85fef20dd",
".git/objects/3c/11d340f8f32af3f872dd6015ec8d5b5fd4a0b8": "4e2a9907d3d4e0dc880a41f95bd1395b",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/40/bd9105134f0e9d17eb960dc73ede7fafc39a97": "dbd998f98da000b5e314eb47793eab48",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/44/eed6271ccecdc1d8cd971d38788417a118942c": "bc22927843f4cf30a87399f3abb78fa3",
".git/objects/4a/930ec7de1440a91c5c446ae9fff9e97957be88": "1ef5322a387c7fac627bad4d915bd255",
".git/objects/4c/b345dfd0c9d38314959f350fe95a27353c7436": "eb8634eb14c8e8c8fa67f29a66366771",
".git/objects/51/81fecc0dfe790571863d9c1ccaff73d442fe94": "584ce90bc14c262de767d58056cf6987",
".git/objects/53/9114f7858c77c551d60c73c8ee958328458883": "c1654104f2869bbed639e04878bc8a6b",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/6a78532b44aedfa8357786aab63b5351d8fd71": "cb8b1387df5c0ce2ef8fe9f51e5624f0",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fc3c8847ffb74066f405dc9caaf8c0f2a3d622": "47a3dc83e9e96e641409b57319e91b66",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/93/11dd89d16b6dd7320780b211e801dc5d9feb7d": "3e6c88ff31ff4c69c9a2d33de9c7a986",
".git/objects/94/e019cc1c025db7e1e2c4c6424d871a8b1c67c3": "2c6091a436bd52bf032c4d2f952ed2fa",
".git/objects/9d/4c7e7b60158487f52ca1015370f5830cea694c": "f207740d1b71510711d4bd0877782513",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f49aa179fbac3ed022074b9b2ad285ff38ac55": "53f5d8621ca2d906214de0d857192501",
".git/objects/a6/d3873e1d3a0e48775aff76b933e114cffe317e": "b954213bc5e411e2c3d78c0de44364e6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/ab5f54910dce5d123e28fe94ff24b3d83273b2": "3cd00380866829061b7ecbcb59ebccab",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b0/187c21a81e07cd7c17c72ef9feb85755f72ed0": "2d9869ca9d78954ded754c4f8074a0eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/a51561e66c88facfa1d447cf8b8ea59ae312a2": "b2c0ce93649e0ff2ca88af4855c26e7b",
".git/objects/c2/dfd67c217e051cc572a75661383126c3ea47e6": "544c53017d069be150628d75c2d60798",
".git/objects/d3/59a0e36c1b01e2b0638373fa308eca53444eb2": "7be6aca92e6dc245fa6d4fda76f13b27",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/1e6404248292c16a0cb8407d0e2e3cdd44a959": "c1facf490b74de6bacb1f6d0beda3b53",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bd3494a760d444aaad616e66add1194db073c4": "97c678fc5f4c51710346effa53c2eabc",
".git/objects/f1/33097550d38110451f75c033b2adaf6feaba28": "323f14092ee6f677db5945b2af6d8a3c",
".git/objects/f3/157f92409d9dab858f13e7cc686112902de25b": "48bbf49709381c5a8b1bec176ad2e3ab",
".git/objects/f7/d064cb525833161024008be95e86329dfe4453": "e852ec215f3641d2b285b1c351d513e6",
".git/objects/pack/pack-32ee8174078341f50b784a878765012419cbbec3.idx": "565acf7b2d8110634346d596a9377b45",
".git/objects/pack/pack-32ee8174078341f50b784a878765012419cbbec3.pack": "ddc3b899b32f5a85001caa45e7942b34",
".git/ORIG_HEAD": "2778accddf56832c63b75d6d17a39370",
".git/refs/heads/master": "4597d64a6fbc2041a48115479e217aa1",
".git/refs/heads/web-v1.1": "0d438ac4f27be73ec8258b7d08ab1b57",
".git/refs/remotes/origin/main": "27bca1d9b1586a667bf42e7ced2ac069",
".git/refs/remotes/origin/web": "2c50119d1fddb55c1294c98ddba1d9ef",
".git/refs/remotes/origin/web-v1.1": "0d438ac4f27be73ec8258b7d08ab1b57",
"assets/AssetManifest.json": "e886c2354eeb8c350b2a4c01034c1125",
"assets/assets/jpg/pexels.jpg": "bb46ac8f9d9165c5fa0fdb0b56ebdbee",
"assets/FontManifest.json": "b417c8197e08be3f18101f9b01bf0e45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f7f3e97ae527d113de636998ac44791a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce16e64445ca6af677a3d62fab362aab",
"/": "ce16e64445ca6af677a3d62fab362aab",
"main.dart.js": "cff1122226b1bbe34625a4a8938db959",
"manifest.json": "320d0a4c0ac0a961e4a07f6ee2ed6261",
"version.json": "74ad395f5381cafa8a0913828b096140"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
