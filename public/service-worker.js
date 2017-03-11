
var cache_name = "cacheando";
var cache_urls = ["index.html", "partials/*.html", "partials/**/*.html", "api/*json", "res/css/styles.min.css", "res/css/*.min.css", "res/css/*.css", "res/img/**/*.jpg", "res/img/**/*.png", "res/js/*.js"];

self.addEventListener('install', function(ev){
	console.log("cache instalada");
	caches.open(cache_name)
		.then(function(cache) {
			console.log("cacheando");
			return cache.addAll(cache_urls)
		});
});
