;(function() {
	'use strict';

	angular
		.module('bmarkt')
		.component('adminLoginComponent', {
			/*bindings: { adminLogin: '<' },*/
			controllerAs: 'adminCtrl',
			controller: 'adminLoginController',
			templateUrl: 'partials/adminLogin.html'
		});
})();