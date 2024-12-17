#-------FUNÇÃO de chamada PARA PEGAR Constraint(valores dentro do arrayList) ----#

var constraints1 = new Array();
var formSituacao = getConstraintValue(constraints, "formSituacao") != 'numero vazio' ? getConstraintValue(constraints, "formSituacao") : 'A'; 

/**
 * Pega o valor da Constraint
 *
 * @param {Constraint[]} constraints
 * @param {string} field
 * @returns {string}
 */
function getConstraintValue(constraints, field) {
   if(constraints !=null){
       
   
    for (var i = 0; i < constraints.length; ++i) {
        if (constraints[i].fieldName == field) {
            return constraints[i].initialValue;
        }
    }
   }

    return "numero vazio";
}
