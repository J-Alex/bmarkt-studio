(function(){
	//'use strict';

	angular
		.module('bmarkt')
		.service('seoTitleService', seoTitleService);

	function seoTitleService() {
		var title = "Bmarkt Studio";
		var metaDescription = "";
		var metaKeywords = "";

		return {
			title: function() {return title;},
			setTitle: function(newTitle) { title = newTitle },
	        metaDescription: function() { return metaDescription; },
	        metaKeywords: function() { return metaKeywords; },
	        reset: function() {
	          metaDescription = '';
	          metaKeywords = '';
	        },
	        setMetaDescription: function(newMetaDescription) {
	          metaDescription = newMetaDescription;
	        },
	        appendMetaKeywords: function(newKeywords) {
	          for (var key in newKeywords) {
	            if (metaKeywords === '') {
	              metaKeywords += newKeywords[key].name;
	            } else {
	              metaKeywords += ', ' + newKeywords[key].name;
	            }
	          }
	        }
		}
	}
})();