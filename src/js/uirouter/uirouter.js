(function() {
    'use strict';
    
    angular
        .module('bmarkt')
        .config(uiRouting);
    
    uiRouting.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    componentResolve.$inject = ['ComponentService'];    
    
    function uiRouting($stateProvider, $locationProvider,  $urlRouterProvider) {
        
        var homeState = {
            name: '/',
            url: '/',
            templateUrl: 'partials/home.html'
        };
        var servicesState = {
            name: '/services',
            url: '/services',
            templateUrl: 'partials/services.html'
        };
        var serviceState = {
            name: '/service',
            url: '/service',
            templateUrl: 'partials/service.html'
        };
        var portfolioState = {
            name: '/portfolio',
            url: '/portfolio',
            templateUrl: 'partials/portfolio.html',
            controller: 'portfolioCtrl'
        };
        var contactState = {
            name: '/contact',
            url: '/contact',
            templateUrl: 'partials/contact.html'
        };
        var componente = {
            name: "/componente",
            url: '/componente',
            component: 'componente',
            resolve: {
                componente: componentResolve
            }
        };
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
        $stateProvider.state(componente);
        
        $stateProvider.state(state404);
        $urlRouterProvider.otherwise('/');
    }

    function componentResolve(ComponentService) {
        var componente = ComponentService;
        //console.log(componente);
        return componente;
    }
})();