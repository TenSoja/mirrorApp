function adicionaEvento() {
	if ($("input[type=text]").val() != "") {
		var sugestao = $("input[type=text]").val();
		$("ul.sugestoes li:last").clone().addClass('sugestao-inserida').appendTo("ul.sugestoes").find("span:first").text(sugestao);
	}
}

$("input[type=button]").click(function(event) {
	adicionaEvento();
});

$("ul.sugestoes").on("dblclick", "li", function(event) {
	$(this).remove();
});

$(document.body).on('keyup', $("input[type=text]"), function(event) {
	if (event.keyCode == 13) {
		adicionaEvento();
	}
});