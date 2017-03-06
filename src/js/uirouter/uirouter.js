(function() {
    'use strict';
    
    angular
        .module('bmarkt')
        .config(uiRouting);
    
    uiRouting.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    
    serviceResolve.$inject = ['serviceService', '$transition$'];
    portfolioResolve.$inject = ['portfolioService', '$transition$'];    
    workResolve.$inject = ['workService', '$transition$'];
    
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
                $('.logo').toggleClass('logo-white');
                $('.logo-mobile').toggleClass('logo-mobile_white');
                $('.header').toggleClass('bgt');
                $('.menu-wrapper').toggleClass('wrapper_white');
                $('.hamburger').toggleClass('hamburger_white');
            },
            onExit: function(){
                console.log('saliendo');
                $('.logo').toggleClass('logo-white');
                $('.logo-mobile').toggleClass('logo-mobile_white');
                $('.header').toggleClass('bgt');
                $('.menu-wrapper').toggleClass('wrapper_white');
                $('.hamburger').toggleClass('hamburger_white');
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
            component: 'portfolioComponent',
            resolve: {
                works: portfolioResolve
            }
            /*templateUrl: 'partials/portfolio.html',
            controller: 'portfolioCtrl'*//*,
            views: {
                'work': {
                    name: 'portfolio.work',
                    url: '/work',
                    template: '<h1>ANIDADA</h1>'
                    //component: 'portfolioWork'        
                }
            }*/
        };
        var portfolioWorkState = {
            name: 'work',
            url: '/work/{work}',
            component: 'portfolioWork',
            resolve: {
                work: workResolve
            }
        };
        var contactState = {
            name: 'contact',
            url: '/contact',
            component: 'contactComponent'
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
        $stateProvider.state(portfolioWorkState);
        $stateProvider.state(contactState);
        
        $stateProvider.state(state404);
        $urlRouterProvider.otherwise('/');
    }

    function serviceResolve(serviceService, $transition$){
        return serviceService.getService($transition$.params().service);
    }
    function portfolioResolve(portfolioService, $transition$){
        return portfolioService/*.getWorks($transition$.params().service)*/;
    }
    function workResolve(workService, $transition$){
        return workService.getWork($transition$.params().work);
    }
})();