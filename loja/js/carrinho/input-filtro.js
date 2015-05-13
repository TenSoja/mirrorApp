var inputs = document.querySelectorAll("#carrinho input");
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function(event) {
		var naoNumericos = /\D/g;
		this.value = this.value.replace(naoNumericos, 1);

	});
}

/*var $ul = document.querySelector("ul#carrinho");
$ul.addEventListener("input", function(event) {
	var $input = event.target;
	if($input.contains('input')) {
		var regex = /\D/g;
		$input.value = $input.value.replace(regex, "1");
	}

});*/