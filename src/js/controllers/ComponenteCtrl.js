(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('componenteCtrl', componenteCtrl);
        
    componenteCtrl.$inject = ['ComponentService'];

    function componenteCtrl(ComponentService) {
        console.log("componenteCtrl");
        //console.log(ComponentService.$$state.value);
        /*var arreglo = [];
        arreglo = ComponentService;
        console.log(arreglo.$$state.value);*/
    }

})();