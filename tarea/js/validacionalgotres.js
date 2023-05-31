//3
function validar (formulario){

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.sub.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++){
            if (ch == checkOk.charAt(j)){
                break;
            }

        }
        if (j == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Subtotal.");
        formulario.sub.focus();
        return false;
    }

    var sub = parseInt(document.getElementById("sub").value);
    var total = (sub)*(0.85);

    alert("El total a pagar es: " + total);
    
}
