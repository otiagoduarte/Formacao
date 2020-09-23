function Cliente(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel) {

	this.endereço = new Endereço(rua, número, cidade, new CódigoPostal(códigoPostalPrincipal, códigoPostalsecundário));
	this.nome = nome;
	this.email = email;
	this.telemóvel = telemóvel;

}
