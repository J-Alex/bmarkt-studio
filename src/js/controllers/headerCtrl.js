(function() {
    'use strict';
    angular
        .module('bmarkt')
        .controller('headerCtrl', headerCtrl);
        
    headerCtrl.$inject = ['$element', '$document'];

    function headerCtrl($element, $document) {
        var documentWidth = $document.width();
        var menuLink = $document.find('a.link');
        ((documentWidth < 420) ? menuLink.toggleClass('link-mobile') : console.log('do nothing'));
    	var mobileBtn = $document.find('.menu-wrapper');
    	var hamburger = $document.find('.hamburger');
    	var mobileNav = $document.find('.navbar');
    	var header = $document.find('.header');
        var menuLinkMobile = $document.find('.link-mobile');

    	mobileBtn.click(function(){
            console.log('menu-wrapper');
    		hamburger.toggleClass('togle');
    		mobileNav.toggleClass('navbar-mobile');
            $(this).toggleClass("menu-wrapper_white");
            header.toggleClass("bg-transparent");
    	});

    	menuLinkMobile.click(function() {
            console.log('link');
			hamburger.toggleClass('togle');
    		mobileNav.toggleClass('navbar-mobile');
            mobileBtn.toggleClass("menu-wrapper_white");
            header.toggleClass("bg-transparent");
    	});
	    /*this.sendMail = function(){
	    	console.log(this.mailObj);
			
			$http.post("api/mail-api.php",this.mailObj)
			.then(function(data,status,headers,config){
				console.log(data);
				formulario.reset();
			},function(err,status,headers,config){
				console.log(error);
			});
	    }*/
    }

})();