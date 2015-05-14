function adicionaSugestao() {
	if ($("input[type=text]").val() != "") {
		var sugestao = $("input[type=text]").val();

		var sugestaoExistente = $(".sugestoes li").filter(function() {
			return $(this).find(".sugestao").text() == sugestao;
		});

		if (sugestaoExistente.length > 0) {

			var votos = sugestaoExistente.data("votos") + 1;
			sugestaoExistente.data("votos", votos);
			sugestaoExistente.find(".votos").text(votos + " votos")

		} else {
			$("ul.sugestoes li:last")
			.clone()
			.data("votos", 1)
			.addClass('sugestao-inserida')
			.appendTo("ul.sugestoes")
			.find("span:first")
			.text(sugestao)
			.next()
			.text(1 + " voto");
		}
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