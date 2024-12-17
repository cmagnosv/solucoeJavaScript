
#----------para bloquear e desbloquear campos em Javascript------#
	var liberado= [];
	var bloqueado = [];

	bloqueado.push("nomeSuperior");
	liberado.push("DATAASSINATURA");

	//bloquea os campos
	for(var i=0; i<bloqueado.length; i++){
		form.setEnabled(bloqueado[i], false);
	}
	//desbloqueia os campos
	for(var i=0; i<liberado.length; i++){
		form.setEnabled(liberado[i], true);
	}

#----------fim de para bloquear e desbloquear campos em Javascript------#
