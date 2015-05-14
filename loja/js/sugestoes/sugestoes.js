function adicionaSugestao() {
	if ($("input[type=text]").val() != "") {
		var sugestao = $("input[type=text]").val();
		$("ul.sugestoes li:last").clone().addClass('sugestao-inserida').appendTo("ul.sugestoes").find("span:first").text(sugestao);
	}
}

$("input[type=button]").click(function(event) {
	adicionaSugestao();
});

$("ul.sugestoes").on("dblclick", "li", function(event) {
	$(this).remove();
});

$(document.body).on('keyup', $("input[type=text]"), function(event) {
	if (event.keyCode == 13) {
		adicionaSugestao();
	}
});

(function($) {
	"use strict"
	$("input[type=text]").autocomplete({
		source: function(entrada, resposta) {
			var sugestoesParecidas = [];

			var novaSugestao = new RegExp(entrada.term, "i");

			$(".sugestao").each(function() {
				var sugestaoExistente = $(this).text();
				if (sugestaoExistente.match(novaSugestao)) {
					sugestoesParecidas.push(sugestaoExistente);
				}

			});

			resposta(sugestoesParecidas);
		}
	});
})(jQuery);