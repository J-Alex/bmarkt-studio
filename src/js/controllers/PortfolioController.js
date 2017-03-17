(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('portfolioCtrl', portfolioCtrl);
        
    portfolioCtrl.$inject = ['$location','portfolioService', 'modalworkService'];
    
    function portfolioCtrl($location, portfolioService, modalworkService) {
        this.back = function() {
            $location.path('/portfolio');
        }
    	//console.log(modalworkService.getService('gasmarket').$$state.value);
        //this.sam = ["res/img/portfolio/diseno/logos/gasmarket.png","res/img/portfolio/diseno/logos/gasmarket0.jpg","res/img/portfolio/diseno/logos/gasmarket1.jpg"]
        //this.liche = ["res/img/portfolio/diseno/logos/familiasunidas/campana.jpg", "res/img/portfolio/diseno/logos/familiasunidas/logo.jpg", "res/img/portfolio/diseno/logos/familiasunidas/manual.jpg", "res/img/portfolio/diseno/logos/familiasunidas/manuales.jpg"];
        //this.portImgs = this.liche;
    	/*var trabajos = portfolioService;  
        console.log(trabajos.$$state.value);*/
    }

})();