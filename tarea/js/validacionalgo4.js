//4
function validar (formulario){
    if(formulario.prom.value.length > 2){
        alert("Escriba dos o menos números en el campo Promedio de las tres calificaciones.")
        formulario.prom.focus();
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.prom.value;

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
        alert("Escriba únicamente números en el campo Promedio de las tres calificaciones.");
        formulario.prom.focus();
        return false;
    }

    if(formulario.exa.value.length > 2){
        alert("Escriba dos o menos números en el campo Calificación del examen final.")
        formulario.exa.focus();
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.exa.value;

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
        alert("Escriba únicamente números en el campo Calificación del examen final.");
        formulario.exa.focus();
        return false;
    }

    if(formulario.trabajo.value.length > 2){
        alert("Escriba dos o menos números en el campo Calificación del trabajo final.")
        formulario.trabajo.focus();
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.trabajo.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var c = 0; c < checkString.length; c++){
        var ch = checkString.charAt(c);
        for (var d = 0; d < checkOk.length; d++){
            if (ch == checkOk.charAt(d)){
                break;
            }

        }
        if (d == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Calificación del trabajo final.");
        formulario.trabajo.focus();
        return false;
    }

    var prom = parseInt(document.getElementById("prom").value);
    var exa = parseInt(document.getElementById("exa").value);
    var trabajo = parseInt(document.getElementById("trabajo").value);
    var caliprom = (prom/100)*55;
    var caliexa = (exa/100)*30;
    var calitrabajo = (trabajo/100)*15;
    var califinal = caliprom+caliexa+calitrabajo;

    alert("Su calificación final es: " + califinal);
    
}
