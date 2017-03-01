(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('portfolioWork', {
			bindings: { works: '<' },
			controller: 'workCtrl',
			templateUrl: 'partials/work.html'
		});
})();