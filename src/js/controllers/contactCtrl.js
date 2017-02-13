(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('contactCtrl', contactCtrl);
        
    contactCtrl.$inject = ['$http', '$element'];

    function contactCtrl($http, $element) {
	    this.mailObj = {};

	    this.sendMail = function(){
	    	console.log(this.mailObj);
			$http.post("api/mail-api.php",this.mailObj)
			.then(function(data,status,headers,config){
				console.log(data);
			},function(err,status,headers,config){
				console.log(error);
			});
			/*.error(function(err,status,headers,config){
				console.log(error);
			})*/;
	    }
    }

})();