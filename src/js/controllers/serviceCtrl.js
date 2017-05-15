(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('serviceCtrl', componenteCtrl);

    componenteCtrl.$inject = ['serviceService', '$location', '$scope'];

    function componenteCtrl(serviceService, $location, $scope) {

    /*if (angular.element().lazyload()) {
        console.log("si");
    } else {
        console.log("no");
    }*/

    	var ruta = $location.path();
    	switch(ruta) {
    		case '/servicios/diseno-grafico': 
    			$scope.$parent.serviceTitle = 'DISEÑO GRAFICO';
    			break;
    		case '/servicios/desarrollo-web':
    			$scope.$parent.serviceTitle = 'DESARROLLO WEB';
    			break;
    		case '/servicios/marketing':
    			$scope.$parent.serviceTitle = 'MARKETING DIGITAL';
    			break;
    		case '/servicios/arquitectura':
    			$scope.$parent.serviceTitle = 'ARQUITECTURA';
    			break;
    	}
    }

})();