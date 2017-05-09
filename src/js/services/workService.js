(function(){
	angular
		.module('bmarkt')
		.service('workService', workService);
	
	workService.$inject = ['$http'];

	function workService($http) {
		
		this.getWork = function(work) {
			return $http({method: 'GET', url: 'api/'+work+'.json'})
			.then(function(response){ 
				return valor = response.data;
			});
		}
		
	}
})();