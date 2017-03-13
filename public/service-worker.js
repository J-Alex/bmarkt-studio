
/*var cache_name = "cacheando";
var cache_urls = ["index.html","res/css/styles.min.css","res/js/angular.min.js","res/js/jquery.min.js","res/js/scripts.min.js","res/js/angular-ui-router.js", "res/img/banner.png", "res/img/Banner1.png", "res/img/banner.png"];

self.addEventListener('install', function(ev){
	console.log("cache instalada");
	caches.open(cache_name)
		.then(function(cache) {
			console.log("cacheando");
			return cache.addAll(cache_urls)
		});
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
			})
	)
});*/
