function preparar() {
	let aviso = false;
	document.querySelectorAll(".copiável code").forEach(code => {
		code.addEventListener("click", function (clique) {
			(async () => {
				clique.target.classList.toggle("copiado");
				await navigator.clipboard.writeText(clique.target.innerText);
				if (!aviso) {
					console.log("CTRL-V + ENTER para colar e executar o clicado");
					console.log("O histórico das instruções já executadas pode ser consultado com as setas ↑↓");
					aviso = true;
				}
			})();
		});
		code.addEventListener("transitionend", fim => fim.target.classList.toggle("copiado")); // transição definida em CSS
	});
}
