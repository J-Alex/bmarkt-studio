(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('componente',{
			bindings: { componente: '<' },
			templateUrl: 'partials/componente.html',
			controller: 'componenteCtrl'
	});

})();