// storage.js
(function() {
    'use strict';

    angular
        .module('bmarkt')
        .directive('menuMobile', menuMobile);

    function menuMobile() { 
    	var directive = {
	        link: link,
	        templateUrl: 'partials/directives/contactTitle.html',
	        restrict: 'EA'
	    };
	    return directive;

	    function link(scope, element, attrs) {
	    	var elemento = element.find('h3');
	    	console.log(elemento);
	    	elemento.on('click', function(){
	    		console.log("holas");
	    	})
	    }
    }
})();