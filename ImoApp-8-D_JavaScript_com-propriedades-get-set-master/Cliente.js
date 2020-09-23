class Cliente {

	constructor(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel) {
		this.endereço = new Endereço(rua, número, cidade, Freguesias.identificar(códigoPostalPrincipal, códigoPostalsecundário));
		this.nome = nome;
		this.email = email;
		this.telemóvel = telemóvel;
	}

	get freguesia() { // torna a freguesia do endereço disponível como propriedade direta do cliente, p.ex. client0.freguesia (irá invocar este método)
		return this.endereço.freguesia;
	}
}
