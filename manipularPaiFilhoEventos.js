#---------para mexer no pai filho em eventos de formulário-------------#
		var indexDocs = form.getChildrenIndexes("tb_docs");
		 for (var i=0; i < indexDocs.length; i++) {
				
				bloqueado.push("ORDEMDOCS___"+indexDocs[i]);
				bloqueado.push("DOCS___"+indexDocs[i]);
				bloqueado.push("CODIGODOCS_filho___"+indexDocs[i]);
			
			}
#------------------------------------------------------------------#
