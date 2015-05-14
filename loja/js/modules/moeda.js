var formatadorMoeda = (function() {
	var simbolo = "R$ ";
	return {
		numberParaReal : function(numero) {
			return "R$ " + numero.toFixed(2).replace(".", ",");
		},

		realParaNumber : function(texto) {
			return parseFloat(texto.replace("R$ ", "").replace(",", "."));
		}
	};
})();