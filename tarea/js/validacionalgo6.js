function validar(formulario){
    //Hay varias formas para poder obtener los parámetros del formulario.
//6

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.edad.value;

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
        alert("Escriba únicamente números en el campo Año de nacimiento.");
        formulario.edad.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.ano.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var x = 0; x < checkString.length; x++){
        var ch = checkString.charAt(x);
        for (var y = 0; y < checkOk.length; y++){
            if (ch == checkOk.charAt(y)){
                break;
            }

        }
        if (y == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Año actual.");
        formulario.ano.focus();
        return false;
    }

    var ano = parseInt(document.getElementById("ano").value);
    var edad = parseInt(document.getElementById("edad").value);
    var resta = ano - edad;

    alert("Su edad actual es: " + resta + " años.");
}
