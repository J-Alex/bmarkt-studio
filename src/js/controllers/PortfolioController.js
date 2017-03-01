(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('portfolioCtrl', portfolioCtrl);
        
    portfolioCtrl.$inject = ['portfolioService'];
    
    function portfolioCtrl(portfolioService) {
    	var trabajos = portfolioService;  
        console.log(trabajos.$$state.value);
    }

})();