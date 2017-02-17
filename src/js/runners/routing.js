/*(function() {
    'use strict';
    
    angular
        .module('bmarkt')
        .run(stateP);
    
    stateP.$inject = ['$rootScope', '$state']; 
    
    function stateP($rootScope, $state) {
		  
		  $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
		    console.log("$stateChangeStart " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
		  });
		  $rootScope.$on('$stateChangeSuccess', function() {
		  	console.log('test');
		    console.log("$stateChangeSuccess " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
		  });
		  $rootScope.$on('$stateChangeError', function() {
		    console.log("$stateChangeError " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
		  });

    }
})();*/