(function($) {
	"use strict";

	$.fn.inputNumerico = function() {

		return this.on("input", function(event) {
			var naoNumeros = /\D/g;
			if(naoNumeros.test(this.value)) {
				this.value = this.value.replace(naoNumeros, "");
			}
		})
	};
})(jQuery);