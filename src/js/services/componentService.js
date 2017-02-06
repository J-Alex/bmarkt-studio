(function(){
	angular
		.module('bmarkt')
		.service('ComponentService', componentService);
	
	componentService.$inject = ['$http'];

	function componentService($http) {
		return $http({method: 'GET', url: 'api/api.json'})
			.then(function(response){ 
				return valor = response.data;
			});
	}

})();