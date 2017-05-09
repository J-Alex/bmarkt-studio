(function(){
	angular
		.module('bmarkt')
		.service('portfolioService', portfolioService);
	
	portfolioService.$inject = ['$http'];

	function portfolioService($http) {
		//this.getWorks = function () {
		return $http({method: 'GET', url: 'api/portfolio.json'})
			.then(function(response){ 
				return valor = response.data;
			});	
		//}
	}
})();