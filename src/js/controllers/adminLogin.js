;(function() {
	'use strict';

	angular
		.module('bmarkt')
		.controller('adminLoginController', adminLoginController);

	//adminLoginController.$inject = ['loginService'];

	function adminLoginController() {
		
		/* jshint validthis: true */
		var adminCtrl = this;

		adminCtrl.variable;
		adminCtrl.evento;

		adminCtrl.variable = "Soy controller As";
		
		console.log(adminCtrl);
		adminCtrl.evento = function() {
			console.log(adminCtrl);
		}
		//console.log(loginService.$$state.value);
	}
})();