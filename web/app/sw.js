import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';

console.log(`${new Date()}: Service Worker is loaded`);

// Set cache name for multiple projects.
// @see https://developers.google.com/web/tools/workbox/modules/workbox-core
setCacheNameDetails({
  prefix: 'localhost',
  suffix: 'v1',
  precache: 'install-time',
  runtime: 'run-time',
  googleAnalytics: 'ga',
});

skipWaiting();
clientsClaim();

// Enable google analytics for offline
// @see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
// workbox.googleAnalytics.initialize();

precacheAndRoute(self.__WB_MANIFEST);

// Cache Google Fonts
registerRoute(
  'https://fonts.googleapis.com/(.*)',
  new CacheFirst({
    cacheName: 'google-fonts',
    cacheableResponse: { statuses: [0, 200] },
  }),
);

// Static content from Google
registerRoute(
  /.*(?:gstatic)\.com.*$/,
  new CacheFirst({
    cacheName: 'google-static',
  }),
);

// Cache any images which are included the extention list
registerRoute(
  /\.(?:png|gif|jpg|svg)$/,
  new CacheFirst({
    cacheName: 'image-content',
    cacheableResponse: { statuses: [0, 200] },
  }),
);

// Cache any JavaScript and CSS which are included the extention list
registerRoute(
  /\.(?:js|css)$/,
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    cacheableResponse: { statuses: [0, 200] },
  }),
);

// Cache any HTTP Content
registerRoute(
  /^http.*/,
  new StaleWhileRevalidate({
    cacheName: 'http-content',
    cacheableResponse: { statuses: [0, 200] },
  }),
  'GET',
);
