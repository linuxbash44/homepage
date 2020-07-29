const staticMatanHome = "matan-mashraki-home"
const assets = [
    "/index.html",
    "/assets/css/style.css",
    "/assets/js/data.js",
    "/assets/js/script.js",
    "/assets/js/themer.js",
    "/assets/icon/maskable-icon512.png",
    "/assets/icon/icon192.png",
    "/assets/icon/favicon.png",
    "/assets/icon/any-icon192.png"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMatanHome).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
