(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('portfolioWork', {
			bindings: { work: '<' },
			controller: 'workCtrl',
			templateUrl: 'partials/work.html'
		});
})();