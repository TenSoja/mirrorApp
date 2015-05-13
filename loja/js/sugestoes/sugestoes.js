$("input[type=button]").click(function(event) {
	if ($("input[type=text]").val() != "") {
		var sugestao = $("input[type=text]").val();
		$("ul.sugestoes li:last").clone().addClass('sugestao-inserida').appendTo("ul.sugestoes").find("span:first").text(sugestao);
	}
});

$("ul.sugestoes").on("dblclick", "li", function(event) {
	$(this).remove();
});