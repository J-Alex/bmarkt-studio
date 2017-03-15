(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('portfolioCtrl', portfolioCtrl);
        
    portfolioCtrl.$inject = ['portfolioService'];
    
    function portfolioCtrl(portfolioService) {
    	this.portImgs = ["res/img/portfolio/diseno/logos/familiasunidas/campana.jpg", "res/img/portfolio/diseno/logos/familiasunidas/logo.jpg", "res/img/portfolio/diseno/logos/familiasunidas/manual.jpg", "res/img/portfolio/diseno/logos/familiasunidas/manuales.jpg"];

    	/*var trabajos = portfolioService;  
        console.log(trabajos.$$state.value);*/
    }

})();