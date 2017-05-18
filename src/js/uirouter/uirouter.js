(function() {
    'use strict';
    
    angular
        .module('bmarkt')
        .config(uiRouting);
    
    uiRouting.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    
    serviceResolve.$inject = ['serviceService', '$transition$'];
    portfolioResolve.$inject = ['portfolioService', '$transition$'];    
    workResolve.$inject = ['workService', '$transition$'];
    modalworkResolve.$inject = ['modalworkService', '$transition$', '$stateParams'];
    adminLoginResolve.$inject = ['loginService', '$transition$'];
    //seoTitleServiceR.$inject = ['seoTitleService'];

    function uiRouting($stateProvider, $locationProvider,  $urlRouterProvider) {
        
        var homeState = {
            name: '/',
            url: '/',
            //resolve: seoTitleServiceR,
            templateUrl: 'partials/home.html'
        };
        var servicesState = {
            name: 'servicios',
            url: '/servicios',
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
            name: 'servicio',
            url: '/servicios/{service}',
            component: 'serviceComponent',
            resolve: {
                service: serviceResolve
            }
        };
        var portfolioState = {
            name: 'portafolio',
            url: '/portafolio',
            component: 'portfolioComponent',
            resolve: {
                works: portfolioResolve
            }
        };
        var portfolioWorkState = {
            name: 'trabajo',
            url: '/portafolio/proyecto/{work}',
            component: 'portfolioWork',
            resolve: {
                work: workResolve
            }
        };
        var modalWorkState = {
            name: 'portafolio.modalwork',
            url: '/{modalwork}',
            component: 'modalWork',
            resolve: {
                modalwork: modalworkResolve
            }
        };
        var contactState = {
            name: 'contacto',
            url: '/contacto',
            component: 'contactComponent'
        };
        var state404 = {
          name: 'state404',
          url: '/state-404',
          templateUrl: 'partials/404.html'
        };

        var adminLoginState = {
            name: 'administracion',
            url: '/administracion/login',
            component: 'adminLoginComponent'/*,
            resolve: {
                adminLogin: adminLoginResolve
            }*/
        }
        
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
        
        
        //$stateProvider.state('/');
        $stateProvider.state(homeState);
        $stateProvider.state(servicesState);
        $stateProvider.state(serviceState);
        $stateProvider.state(portfolioState);
        $stateProvider.state(portfolioWorkState);
        $stateProvider.state(modalWorkState);
        $stateProvider.state(contactState);


        $stateProvider.state(adminLoginState);
        
        $stateProvider.state(state404);
        $urlRouterProvider.otherwise('/');
    }

    function serviceResolve(serviceService, $transition$){
        return serviceService.getService($transition$.params().service);
    }
    function modalworkResolve(modalworkService, $transition$, $stateParams){
        return modalworkService.getService($stateParams.modalwork);
    }
    function portfolioResolve(portfolioService, $transition$){
        return portfolioService/*.getWorks($transition$.params().service)*/;
    }
    function workResolve(workService, $transition$){
        return workService.getWork($transition$.params().work);
    }
    function adminLoginResolve(loginService, $transition$) {
        return loginService;
    }
    /*function seoTitleServiceR(seoTitleService) {
        return seoTitleService.title();
    }*/
})();