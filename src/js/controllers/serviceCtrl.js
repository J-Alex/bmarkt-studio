(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('serviceCtrl', componenteCtrl);

    componenteCtrl.$inject = ['serviceService', '$location', '$rootScope', '$scope'];

    function componenteCtrl(serviceService, $location, $rootScope, $scope) {
    	var ruta = $location.path();
    	switch(ruta) {
    		case '/service/design': 
    			$scope.$parent.serviceTitle = 'DESIGN';
    			break;
    		case '/service/development':
    			$scope.$parent.serviceTitle = 'DEVELOPMENT';
    			break;
    		case '/service/marketing':
    			$scope.$parent.serviceTitle = 'MARKETING';
    			break;
    		case '/service/architecture':
    			$scope.$parent.serviceTitle = 'ARCHITECTURE';
    			break;
    	}
    }

})();