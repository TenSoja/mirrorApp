var aviso = document.querySelector(".aviso");
//var botao = document.querySelector("#botaoaviso");
var botao = document.createElement("button");
botao.id = "botaoaviso";
botao.textContent = "esconder";
aviso.parentNode.insertBefore(botao, aviso);

botao.addEventListener("click", function(event) {

	aviso.classList.toggle("invisivel");

	if(aviso.classList.contains('invisivel')) {
		this.textContent = "Aviso";
	} else {
		this.textContent = "Esconder";
	}
});