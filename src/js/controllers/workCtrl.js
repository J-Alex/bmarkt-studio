(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('workCtrl', workCtrl);
        
    workCtrl.$inject = ['$element', '$document', 'workService'];

    function workCtrl($element, $document, workService) {
        /*var carousel = $element.find('.bxslider');
        angular.element(carousel).bxSlider();*/

        //angular.element($document.find('.bxslider')).bxSlider();
        //((angular.element(document).bxSlider()) ? console.log("si") : console.log("no"))
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