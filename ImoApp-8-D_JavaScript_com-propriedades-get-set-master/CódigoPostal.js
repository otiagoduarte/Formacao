function CódigoPostal(principal, secundário) {

	this.principal = principal;
	this.secundário = secundário;

}

CódigoPostal.prototype.imprimir = function () {
	return "CódigoPostal(" + this.principal + "-" + this.secundário + ")";
};


/*
 http://crockford.com/javascript/private.html
 */