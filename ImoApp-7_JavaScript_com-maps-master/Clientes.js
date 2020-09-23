class Clientes {

	constructor() {
		this.coleção = new Map();
		// com repetição do email como chave
		this.coleção.set("samuel.vasco@sapo.pt", new Cliente("Praça da Pereira", 25, "Lourinhã", 2530, 170, "Samuel Vasco", "samuel.vasco@sapo.pt", 960025874));
		// sem repetição do email como chave, menos suscetível a erros
		var cliente = new Cliente("Rua do Poente", 88, "Porto", 2100, 350, "João Bosco", "joao.bosco@meo.pt", 915289756);
		this.coleção.set(cliente.email, cliente); // o campo email é escolhido como chave no Map
	}

}