(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('serviceCtrl', componenteCtrl);
        
    componenteCtrl.$inject = ['serviceService'];

    function componenteCtrl(serviceService) {
        console.log("serviceCtrl");
    }

})();