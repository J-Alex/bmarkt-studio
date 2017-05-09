(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('portfolioComponent', {
			bindings: { works: '=' },
			controller: 'portfolioCtrl',
			templateUrl: 'partials/portfolio.html'
		});
})();