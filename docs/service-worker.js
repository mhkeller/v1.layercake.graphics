!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=["client/1f5af7f67e7e329cf776/main.js","client/1f5af7f67e7e329cf776/index.1.js","client/1f5af7f67e7e329cf776/examples_$slug.2.js","client/1f5af7f67e7e329cf776/guide.3.js","client/1f5af7f67e7e329cf776/test.4.js","client/1f5af7f67e7e329cf776/vendors~examples_$slug.5.js"].concat([".DS_Store","CNAME","copy.svg","deps.json","global.css","hljs.css","icons/download.svg","icons/link.svg","layercake-logo-100.png","layercake-logo-1200.png","layercake-logo-128.png","layercake-logo-192.png","layercake-logo-500x400.png","layercake-logo-512.png","manifest.json","svelte-app.json"]),c=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1540172874524").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1540172874524"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method)return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1540172874524").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const o=await t.match(e.request);if(o)return o;throw n}}))))})}]);