(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('workCtrl', workCtrl);
        
    workCtrl.$inject = ['$element', '$document', 'workService'];

    function workCtrl($element, $document, workService) {
        /*var work=[];
        work = workService;*/
        //console.log(workService);
        //var carousel = $document.find('.bxslider')
        //carousel.bxslider();
        //console.log(ComponentService.$$state.value);

        //var arreglo = [];
        //arreglo = ComponentService;
        //console.log(arreglo.$$state.value);
    }

})();