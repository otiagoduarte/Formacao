
class Clientes {

	constructor() {
		this.coleção = new Map();
		var cliente = new Cliente("Praça da Pereira", 25, "Lourinhã", 2530, 170, "Samuel Vasco", "samuel.vasco@sapo.pt", 960025874);
		this.coleção.set(cliente.email, cliente);
		cliente = new Cliente("Rua do Poente", 88, "Porto", 2100, 350, "João Bosco", "joao.bosco@meo.pt", 915289756);
		this.coleção.set(cliente.email, cliente);
	}

	procurar(email) {
		return this.coleção.get(email);
	}

	registar(cliente) {
		this.coleção.set(cliente.email, cliente);
	}

}