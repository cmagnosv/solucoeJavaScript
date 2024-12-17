#--------para oculta e tornar visível campos em Javascript--------------#
	// cria as variáveis para guardar os campos
	var visivel= [];
	var oculto = [];	

	// atribuição de cada campo
	visivel.push("div_principal");
	oculto.push("div_principal");


	// no final da execução oculta os campos dentro da lista
	for(var i=0; i<oculto.length; i++){
		form.setVisibleById(oculto[i], false);
	}

	//torna visivel os campos
	for(var i=0; i<visivel.length; i++){
		form.setVisibleById(visivel[i], true);
	}
