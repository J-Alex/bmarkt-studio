(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('contactCtrl', contactCtrl);
        
    contactCtrl.$inject = ['$http', '$element', '$document', 'API', 'seoTitleService', '$scope'];

    function contactCtrl($http, $element, $document, API, seoTitleService, $scope) {
    	var formulario = $document.find('.contact-form')[0];
	    this.mailObj = {};

	    
	    this.sendMail = function(){
	    	console.log(this.mailObj);
			
			$http.post("api/mail-api.php", {"name": "jennier"})
			.then(function(data,status,headers,config){
				console.log(data);
				formulario.reset();
			},function(err,status,headers,config){
				console.log(err);
			});
	    };
	    
	    $http({method: 'GET', url: API})
			.then(function(response){ 
				console.log(response.data);
			});
    }

})();