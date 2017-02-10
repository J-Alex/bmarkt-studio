(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('serviceComponent',{
			bindings: { service: '<' },
			controller: 'serviceCtrl',
			templateUrl: 'partials/service.html'
	});

})();