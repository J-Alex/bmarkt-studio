(function(){
	'use strict';

	angular
		.module('bmarkt')
		.controller('headCtrl', headCtrl);

	headCtrl.$inject = ['seoTitleService', '$scope'];
	
	function headCtrl(seoTitleService, $scope){

	    var titulo = "Bmarkt Studio - Diseño Gráfico, Desarrollo Web, Marketing Digital, Arquitectura"
	    seoTitleService.setTitle(titulo);
	    console.log(seoTitleService.title());

		$scope.seoTitle = seoTitleService.title();
	}
})();