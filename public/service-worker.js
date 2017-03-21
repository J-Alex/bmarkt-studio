'use strict';


var cache_name = "cacheando";
var cache_urls = ["res/fonts/Arial-Rounded-Bold.ttf", "res/fonts/Arial-Rounded.ttf", "res/fonts/Montserrat-Regular.ttf", "res/fonts/fontawesome-webfont.ttf", "index.html", "service-worker.js", "res/css/styles.min.css","res/css/font-awesome.min.css","res/css/jquery.bxslider.min.css","res/js/angular.min.js","res/js/jquery.min.js","res/js/scripts.min.js","res/js/angular-ui-router.js","res/js/lazyload.js","res/js/isotope.pkgd.min.js","res/js/jquery.bxslider.min.js","res/js/isotope.js", "res/img/banner.png", "res/img/Banner1.png", "res/img/banner.png", "res/img/services-home/diseno2.png", "res/img/services-home/desarrollo.png", "res/img/wide/architect.jpg", "res/img/wide/design.jpg", "res/img/wide/development.jpg", "res/img/wide/marketing.jpg"];

self.addEventListener('install', function(ev){
	console.log("cache instalada");
	caches.open(cache_name)
		.then(function(cache) {
			console.log("cacheando");
			return cache.addAll(cache_urls)
		});
});

self.addEventListener('activate', function(e) {
	console.log('activando');
	/*e.waitUntil(
		caches.keys().then(function(cache_names){
			return Promise.all(
				cache_name.map(function(cache_nama) {
					if(cache_name == cache_nama) {
						return caches.delete(cache_nama)
					}
				})
			)
		})
	)*/
});

self.addEventListener("fetch", function(e) {
	//console.log(e.request);
	e.respondWith(
		caches.match(e.request)
			.then(function(res) {
				if(res) {
					//console.log("estoy en el caché");
					return res;
				}

				//console.log("NO estoy en el caché");
				return fetch(e.request);
			}).catch(function(err){
				if(e.request.mode == "navigate") {
					return caches.match("index.html");
				}
			})
	)
});
