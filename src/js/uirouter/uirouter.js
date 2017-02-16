(function() {
    'use strict';
    
    angular
        .module('bmarkt')
        .config(uiRouting);
    
    uiRouting.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    
    //componentResolve.$inject = ['ComponentService'];
    serviceResolve.$inject = ['serviceService', '$transition$'];    
    
    function uiRouting($stateProvider, $locationProvider,  $urlRouterProvider) {
        
        var homeState = {
            name: '/',
            url: '/',
            templateUrl: 'partials/home.html'
        };
        var servicesState = {
            name: 'services',
            url: '/services',
            templateUrl: 'partials/services.html',
            onEnter: function(){
                console.log('entrando');
                $('img').toggleClass('logo-white');
            },
            onExit: function(){
                console.log('saliendo');
                $('img').toggleClass('logo-white');
            }
        };
        var serviceState = {
            name: 'service',
            url: '/service/{service}',
            component: 'serviceComponent',
            resolve: {
                service: serviceResolve
            }
        };
        var portfolioState = {
            name: 'portfolio',
            url: '/portfolio',
            templateUrl: 'partials/portfolio.html',
            controller: 'portfolioCtrl'
        };
        var contactState = {
            name: 'contact',
            url: '/contact',
            component: 'contactComponent'
        };
        /*var componente = {
            name: "componente",
            url: '/component',
            component: 'componente',
            resolve: {
                componente: componentResolve
            }
        };*/
        var state404 = {
          name: 'state404',
          url: '/state-404',
          templateUrl: 'partials/404.html'
        };
        
        $locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true).hashPrefix('');
        
        
        //$stateProvider.state('/');
        $stateProvider.state(homeState);
        $stateProvider.state(servicesState);
        $stateProvider.state(serviceState);
        $stateProvider.state(portfolioState);
        $stateProvider.state(contactState);
        //$stateProvider.state(componente);
        
        $stateProvider.state(state404);
        $urlRouterProvider.otherwise('/');
    }

    function serviceResolve(serviceService, $transition$){
        return serviceService.getService($transition$.params().service);
        
    }
})();