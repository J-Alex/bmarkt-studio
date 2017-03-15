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
    		case '/service/design': 
    			$scope.$parent.serviceTitle = 'DISEÑO';
    			break;
    		case '/service/development':
    			$scope.$parent.serviceTitle = 'DESARROLLO';
    			break;
    		case '/service/marketing':
    			$scope.$parent.serviceTitle = 'MARKETING';
    			break;
    		case '/service/architecture':
    			$scope.$parent.serviceTitle = 'ARQUITECTURA';
    			break;
    	}
    }

})();