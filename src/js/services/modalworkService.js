(function(){
	angular
		.module('bmarkt')
		.service('modalworkService', modalworkService);
	
	modalworkService.$inject = ['$http'];

	function modalworkService($http) {
		
		this.getService = function(servicio) {
			return $http({method: 'GET', url: 'api/'+servicio+'.json'})
			.then(function(response){ 
				return valor = response.data;
			});
		}
		
	}
})();