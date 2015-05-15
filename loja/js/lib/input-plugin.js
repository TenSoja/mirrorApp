(function($) {
	"use strict";

	$.fn.inputNumerico = function(seletor) {

		return this.on("input", seletor, function(event) {
			var naoNumeros = /\D/g;
			if(naoNumeros.test(this.value)) {
				this.value = this.value.replace(naoNumeros, "");
				$(this).trigger("input");
			}
		});
	}
})(jQuery);