(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('componente',{
			bindings: { componente: '<' },
			controller: 'componenteCtrl',
			templateUrl: 'partials/componente.html'
	});

})();
