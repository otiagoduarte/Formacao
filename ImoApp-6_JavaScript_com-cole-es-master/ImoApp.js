class ImoApp {
	
	constructor() {
		this.clientes = new Clientes();
		this.clientes.coleção[2] = new Cliente("Bico da Ajuda", 17, "Lisboa", 1450, 230, "Mariana Abrunheiro", "mariana.abrunheiro@gmail.com", 935689714);
		this.clientes.coleção[2].númeroFiscal = 214406257;
		this.imóveis= new Imóveis();
	}
	
}

