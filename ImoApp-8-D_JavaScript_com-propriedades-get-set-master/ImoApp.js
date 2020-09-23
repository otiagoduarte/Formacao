
class ImoApp {

	constructor() {
		this.clientes = new Clientes;
		this.imóveis = new Imóveis;
	}

	procurarImóvelEm(cidade) { // procurar 1 só imóvel em Lisboa
		return this.imóveis.procurarEm(cidade);
	}

	procurarCliente(email) { // procurar o cliente com um certo email
		return this.clientes.procurar(email);
	}

	registarCliente(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel) {
		this.clientes.registar(new Cliente(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel));
	}

}
