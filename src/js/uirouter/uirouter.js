(function() {
    'use strict';
    
    angular
        .module('bmarkt')
        .config(uiRouting);
    
    uiRouting.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
        
    
    function uiRouting($stateProvider, $locationProvider,  $urlRouterProvider) {
        
        var homeState = {
            name: '/',
            url: '/',
            templateUrl: 'partials/home.html'
        };
        var servicesState = {
            name: 'services',
            url: '/services',
            templateUrl: 'partials/services.html'
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
            templateUrl: 'partials/contact.html'
        };
        var state404 = {
          name: 'state404',
          url: '/state-404',
          templateUrl: 'partials/404.html'
        };
        
        $locationProvider.hashPrefix('');
        
        
        //$stateProvider.state('/');
        $stateProvider.state(homeState);
        $stateProvider.state(servicesState);
        $stateProvider.state(portfolioState);
        $stateProvider.state(contactState);
        
        $stateProvider.state(state404);
        $urlRouterProvider.otherwise('/');
    }
})();