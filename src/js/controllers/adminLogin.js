;(function() {
	'use strict';

	angular
		.module('bmarkt')
		.controller('adminLoginController', adminLoginController);

	adminLoginController.$inject = ['loginService'];

	function adminLoginController(loginService) {
		console.log('Login...');
		console.log(loginService.getLogin().$$state.value);
	}
})();