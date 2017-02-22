(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('portfolioWork', {
			//bindings: { mailObj: '=' },
			controller: 'workCtrl',
			templateUrl: 'partials/work.html'
		});
})();