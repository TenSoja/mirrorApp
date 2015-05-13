$("input[type=button]").click(function(event) {
	var sugestao = $("input[type=text]").val();

	$("ul.sugestoes li:last").clone().appendTo("ul.sugestoes").find("span:first").text(sugestao);

});

$("ul.sugestoes li").dblclick(function(event) {
	$(this).remove();
});