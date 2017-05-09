(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('modalWork', {
			bindings: { modalwork: '<' },
			//controller: 'modalWork',
			templateUrl: 'partials/modalwork.html'
		});
})();