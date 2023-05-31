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




//1
function validar (formulario){

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.inv.value;

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
        alert("Escriba únicamente números en el campo Inversión.");
        formulario.inv.focus();
        return false;
    }

    var inv = parseInt(document.getElementById("inv").value);
    var ganancia = (inv)*(0.02);
    var saldonvo = inv+ganancia;

    alert("Ha ganado: " + ganancia + " pejecoins.");
    alert("Su nuevo saldo es: " + saldonvo + " pejecoins.");
}