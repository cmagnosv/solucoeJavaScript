function ajustaNome(campo){
	  var texto=campo.value; //captura o nome do campo input que contém o texto que esta sendo digitado
		var texto1 = ""; //variavel que vai guardar o texto ajsutado
    
      for (letra of texto){ // percorrer o texto digitado
        caracteres="ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 1234567890";
          for (letra1 of caracteres ){
            if (letra==letra1){
            	texto1+=letra;
            }
          }
        }
      document.getElementById(campo.name).value=texto1;
}
