(function(){
	angular
		.module('bmarkt')
		.service('serviceService', serviceService);
	
	serviceService.$inject = ['$http'];

	function serviceService($http) {
		
		this.getService = function(servicio) {
			return $http({method: 'GET', url: 'api/'+servicio+'.json'})
			.then(function(response){ 
				return valor = response.data;
			});
		}
		
	}
})();