(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('workCtrl', workCtrl);
        
    workCtrl.$inject = ['$element', '$document'];

    function workCtrl($element, $document) {
        //var carousel = $document.find('.bxslider')
        //carousel.bxslider();
        //console.log(ComponentService.$$state.value);

        //var arreglo = [];
        //arreglo = ComponentService;
        //console.log(arreglo.$$state.value);
    }

})();