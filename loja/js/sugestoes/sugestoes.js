$("input[type=button]").click(function(event) {
	var sugestao = $("input[type=text]").val();

	$("ul.sugestoes li:last").clone().appendTo("ul.sugestoes").find("span:first").text(sugestao);

});

$("ul.sugestoes").on("dblclick", "li", function(event) {
	$(this).remove();
});