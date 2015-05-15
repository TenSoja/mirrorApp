function Sacola(total) {
	"use strict"

	var total = total || 0;

	this.obterTotal = function() {
		return total;
	};

	this.incrementarTotal = function() {
		total++;
	};
}