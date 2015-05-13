var aviso = document.querySelector(".aviso");
var botao = document.querySelector("#botaoaviso");

botao.addEventListener("click", function(event) {

	aviso.classList.toggle("invisivel");

	if(aviso.classList.contains('invisivel')) {
		this.textContent = "Aviso";
	} else {
		this.textContent = "Esconder";
	}
});