;(function() {
	'use strict';
	angular
		.module('bmarkt')
		.service('loginService', loginService);

	loginService.$inject = ['$http', 'API'];

	function loginService($http, API) {
		this.getLogin = function() {
			return $http({method: 'GET', url: API})
			.then(function(response){ 
				return valor = response.data;
			});
		}
	}
})();