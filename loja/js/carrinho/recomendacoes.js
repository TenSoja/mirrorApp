setInterval(function() {

	$.getJSON("http://mirrorfashion.caelum.com.br/produtos?callback=?",
		function(retorno) {

			$(document).trigger("novasRecomendacoes", retorno);

		}, 5000);

	$(document).on("novasRecomendacoes", function(event, retorno) {

		var painel = $("#recomendacoes");

		var ul = $("<ul>");

		$.each(retorno.produtos, function() {
			var li = $("<li>");
			var img = $("<img>").attr("src", this.imagem);
			var pNome = $("<p>").text(this.nome);
			var pPreco = $("<p>").text(numberParaReal(this.preco));

			li.append(img).append(pNome).append(pPreco).appendTo(ul);
		});

		$("ul", painel).remove();

		ul.appendTo(painel);
	});

});

$(document).one("novasRecomendacoes", function(event, retorno) {
	$("<a>").text("Novas Recomendações").addClass('aviso-recomendacao')
		.attr("href", "#recomendacoes").insertAfter('.aviso');
});