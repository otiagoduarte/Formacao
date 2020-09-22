function Coisa() {

	// campos privados
	var nome = "abc";
	var valor = 0;
	// campos públicos
	this.idade = 0;
	this.preço; // sem valor inicial não será visível (não existe?) no debugger

	this.getNome = function () {
		return nome;
	};

}

var coisa0 = new Coisa();
coisa0.nome = "def";
coisa0.idade = 10;