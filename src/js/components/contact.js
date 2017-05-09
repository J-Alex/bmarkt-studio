(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('contactComponent', {
			//bindings: { mailObj: '=' },
			controller: 'contactCtrl',
			templateUrl: 'partials/contact.html'
		});
})();