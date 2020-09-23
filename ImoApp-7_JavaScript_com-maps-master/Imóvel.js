function Imóvel(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, valor) {

	this.endereço = new Endereço(rua, número, cidade, new CódigoPostal(códigoPostalPrincipal, códigoPostalsecundário));
	this.valor = valor;

}
