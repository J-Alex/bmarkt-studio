(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('modalwork', modalwork);
        
    modalwork.$inject = ['modalworkService'];

    function modalwork(modalworkService) {
        console.log('test');
        //console.log(modalworkService.$$state.value);
    }

})();