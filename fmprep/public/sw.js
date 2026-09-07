// FM Prep service worker.
//
// The library is code-split one chunk per subject, so the shell is cached at
// install time and each subject is cached the first time it is opened. Once
// "Make the whole library available offline" has been used, every chunk is in
// this cache and the app works with no network at all.
//
// Bump CACHE_VERSION whenever the shell list changes; activate() drops every
// older cache so a deploy never serves a half-stale shell.
const CACHE_VERSION = 'fm-prep-v1'

const BASE = new URL('./', self.location).pathname
const INDEX = BASE + 'index.html'
const SHELL = [
  BASE,
  INDEX,
  BASE + 'favicon.svg',
  BASE + 'icon.svg',
  BASE + 'manifest.webmanifest',
  BASE + 'icon-192.png',
  BASE + 'icon-512.png',
]

/**
 * The JS/CSS filenames are content-hashed, so they cannot be listed above, and
 * they are fetched before this worker takes control on a first visit. Read
 * them out of index.html at install time instead.
 */
async function precache() {
  const cache = await caches.open(CACHE_VERSION)
  // add() per URL rather than addAll() so one 404 cannot void the whole shell.
  await Promise.all(SHELL.map((url) => cache.add(url).catch(() => {})))

  try {
    const res = await fetch(INDEX, { cache: 'reload' })
    if (!res.ok) return
    const html = await res.text()
    await cache.put(INDEX, new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    }))
    const assets = [...html.matchAll(/(?:src|href)="\.?\/?(assets\/[^"]+)"/g)].map((m) => BASE + m[1])
    await Promise.all(assets.map((url) => cache.add(url).catch(() => {})))
  } catch {
    // Offline at install: fetch() below fills the cache on a later visit.
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

function isCacheable(response) {
  return response && response.status === 200 && response.type === 'basic'
}

/** Content-hashed build output: a cache hit is always correct. */
async function cacheFirst(request) {
  const cached = await caches.match(request)
  if (cached) return cached
  const response = await fetch(request)
  if (isCacheable(response)) {
    const cache = await caches.open(CACHE_VERSION)
    cache.put(request, response.clone())
  }
  return response
}

/** Navigations: fresh when online, the cached shell when not. */
async function navigationHandler(request) {
  try {
    const response = await fetch(request, { cache: 'no-cache' })
    if (isCacheable(response)) {
      const cache = await caches.open(CACHE_VERSION)
      cache.put(INDEX, response.clone())
    }
    return response
  } catch {
    return (await caches.match(INDEX)) || (await caches.match(BASE)) || Response.error()
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request)
  const network = fetch(request)
    .then(async (response) => {
      if (isCacheable(response)) {
        const cache = await caches.open(CACHE_VERSION)
        cache.put(request, response.clone())
      }
      return response
    })
    .catch(() => cached)
  return cached || network
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(navigationHandler(request))
    return
  }

  if (url.pathname.startsWith(BASE + 'assets/')) {
    event.respondWith(cacheFirst(request))
    return
  }

  event.respondWith(staleWhileRevalidate(request))
})
