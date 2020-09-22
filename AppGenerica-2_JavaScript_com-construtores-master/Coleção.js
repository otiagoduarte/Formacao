class Coleção {

	constructor() {
		this.coisa0 = new Coisa("abc", 123);
		this.coisa1 = new Coisa("def", 456);
		// alternativa
		this.coisa2 = new Object();
		this.coisa2.nome = "ghi";
		this.coisa2.valor = 789;
		// alternativa, sintaxe JSON
		this.coisa3 = {
			nome: "jkl",
			valor: 147
		};
		//alternativa
		this.coisa4 = {};
		Object.defineProperty(this.coisa4, "nome", {value: "mno"});
		Object.defineProperty(this.coisa4, "valor", {value: 258});
		// atenção: serão valores inalteráveis
	}

}
