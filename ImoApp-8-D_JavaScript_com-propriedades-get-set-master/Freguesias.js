var Freguesias = [
	{nome: "Estrela", códigoPostal: {principal: 1200, secundário: 739}},
	{nome: "Lapa", códigoPostal: {principal: 1300, secundário: 350}},
	{nome: "Boavista", códigoPostal: {principal: 2200, secundário: 301}},
	{nome: "Palaciana", códigoPostal: {principal: 2100, secundário: 350}},
	{nome: "Aeroporto", códigoPostal: {principal: 8100, secundário: 366}},
	{nome: "Margem Este", códigoPostal: {principal: 2530, secundário: 170}}
];

Freguesias.identificar = function (principal, secundário) {
	return Freguesias.find(
			  freguesia => freguesia.códigoPostal.principal === principal && freguesia.códigoPostal.secundário === secundário
	);
	// Nota: síntaxe lambda a ser explicada em versões futuras
};