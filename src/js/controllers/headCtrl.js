(function(){
	'use strict';

	angular
		.module('bmarkt')
		.controller('headCtrl', headCtrl);

	headCtrl.$inject = ['seoTitleService', '$scope'];
	
	function headCtrl(seoTitleService, $scope){

	    var titulo = "BmarktStudio - Diseño Gráfico, Desarrollo Web, Marketing, Arquitectura";
	    var homeDescription = "En Bmarkt, nuestra misión es transformarte digitalmente, ponemos en las manos de nuestros clientes las oportunidades de la era moderna";
	    
	    seoTitleService.setTitle(titulo);
	    seoTitleService.setMetaDescription(homeDescription);

		$scope.seoTitle = seoTitleService.title();
		$scope.homeDescription = seoTitleService.metaDescription();
	}
})();