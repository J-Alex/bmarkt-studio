(function(){
	'use strict';
	
	angular
		.module('bmarkt')
		.component('bmarktStudio',{
			template: '<bs-header></bs-header><main ui-view autoscroll="true"></main><bs-footer></bs-footer>'
		});

})();