(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('serviceComponent', {
			bindings: { service: '<' },
			controller: 'serviceCtrl',
			templateUrl: 'partials/service.html'
			//template:'<div id="parallax-banner" class="service-banner"><h2 class="service-title">Diseño</h2></div><div class="services row row-content_column" data-ng-repeat="servicio in $ctrl.service"><figure id="design" class="service-container row-content"><img class="img-service" src="{{ servicio.img }}" alt=""><figcaption class="description-service"><h3 class="title-service">{{ servicio.title }}</h3><p>{{ servicio.description }}</p></figcaption></figure></div>'
		});
})();