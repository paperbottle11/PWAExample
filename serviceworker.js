importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js")

self.skipWaiting();

workbox.routing.registerRoute(
    /\.(?:html)$/,
    new workbox.strategies.NetworkFirst({
        "cacheName": "markup",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 36400
            })
        ]
    })
)

workbox.routing.registerRoute(
    /\.(?:css|js|json)$/,
    new workbox.strategies.NetworkFirst({
        "cacheName": "assets",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 36400
            })
        ]
    })
)

workbox.routing.registerRoute(
    /\.(?:png|jpg|gif)$/,
    new workbox.strategies.CacheFirst({
        "cacheName": "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 36400
            })
        ]
    })
)