(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('contactCtrl', contactCtrl);
        
    contactCtrl.$inject = ['$http', '$element', '$document'];

    function contactCtrl($http, $element, $document) {
    	var formulario = $document.find('.contact-form')[0];
	    this.mailObj = {};

	    this.sendMail = function(){
	    	console.log(this.mailObj);
			
			$http.post("api/mail-api.php",this.mailObj)
			.then(function(data,status,headers,config){
				console.log(data);
				formulario.reset();
			},function(err,status,headers,config){
				console.log(error);
			});
	    }
    }

})();