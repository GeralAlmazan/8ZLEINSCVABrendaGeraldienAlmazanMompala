//5
function validar (formulario){

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.mujer.value;

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
        alert("Escriba únicamente números en el campo Número de mujeres.");
        formulario.mujer.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.hombre.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var a = 0; a < checkString.length; a++){
        var ch = checkString.charAt(a);
        for (var b = 0; b < checkOk.length; b++){
            if (ch == checkOk.charAt(b)){
                break;
            }

        }
        if (b == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Número de hombres.");
        formulario.hombre.focus();
        return false;
    }

    var hombre = parseInt(document.getElementById("hombre").value);
    var mujer = parseInt(document.getElementById("mujer").value);
    var sumaAlu = hombre + mujer;
    var porcentajeM = (mujer/sumaAlu)*100;
    var porcentajeH = (hombre/sumaAlu)*100;

    alert("El porcentaje de mujeres es: " + porcentajeM+ "%.");
    alert("El porcentaje de hombres es: " + porcentajeH+ "%.");
}
