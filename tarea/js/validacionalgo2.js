//2
function validar (formulario){

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.com1.value;

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
        alert("Escriba únicamente números en el campo Comisión 1.");
        formulario.com1.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.com2.value;

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
        alert("Escriba únicamente números en el campo Comisión 2.");
        formulario.com2.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.com3.value;

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
        alert("Escriba únicamente números en el campo Comisión 3.");
        formulario.com3.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.sueldo.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var e = 0; e < checkString.length; e++){
        var ch = checkString.charAt(e);
        for (var f = 0; f < checkOk.length; f++){
            if (ch == checkOk.charAt(f)){
                break;
            }

        }
        if (f == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Sueldo base.");
        formulario.sueldo.focus();
        return false;
    }

    var com1 = parseInt(document.getElementById("com1").value);
    var com2 = parseInt(document.getElementById("com2").value);
    var com3 = parseInt(document.getElementById("com3").value);
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var comision1 = (com1/100)*10;
    var comision2 = (com2/100)*10;
    var comision3 = (com3/100)*10;
    var totalcomisiones = comision1+comision2+comision3+com1+com2+com3;
    var sueldototal = totalcomisiones+sueldo;

    alert("El total de comisiones ganadas incluyendo el 10% extra este mes es: " + totalcomisiones + " pelucholares.");
    alert("Su sueldo total de este mes es: " + sueldototal + " pelucholares.");
    
}