(function($) {
	"use scrict";

	var sacola = $(".sacola");

	if (!sacola.data("total")) {
		sacola.data("total", 0);
	}

	$("#carrinho li").on("swipeleft", function(event) {

		var li = $(this);
		li.fadeOut("slow", function() {

			var total = sacola.data("total") + 1;
			sacola.data("total", total);
			sacola.text("Você tem " + total + " produto(s) na sacola");
			$(this).remove();

		});

	});

})(jQuery);