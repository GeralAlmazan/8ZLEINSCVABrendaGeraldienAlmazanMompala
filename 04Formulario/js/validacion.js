// js es multiparadigmico y vamo a iniciar a la programacion por funciones 
//js no tipado, script (son no tipado no entero no flotante no nada)
function validar(formulario){
    //hay varias formas para poder obtener los parametros del formulario
    if(formulario.nombre.valor.length <= 3){
        alert("Escriba mas de 3 caracteres en el campo nombre")
        formulario.nombre.focus();
    }

    var checkOk = "asdfghjklñqwertyuiopzxcvbnm"+"ASDFGHJKLÑQWERTYUIOPZXCVBNM ";

    var checkString = formulario.nombre.value;

    var todoesValido = true;
    /*
    JS es un lenguaje de programacion no tipado eso quiere decir 
    que solo maneja 3 tipos de variable de dato
,
    var es una variable cambiante con acceso publico
    
    let es una variable de acceso restringido 
    
    const es una constante de acceso unico 

    charAt trasforma una cadena en caracteres 
    */
    for(var i=0; i<checkString.length; i++){

        var ch= checkString.charAt(i);

        for (var j=0; j< checkOk.length;j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
        }

        if(j==checkOk.length){
            todoesValido=false;
            break;
        }
    
    }

    if(!todoesValido){
        alert("Escriba unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    



    var checkOk = "1234567890";

    var checkString = formulario.edad.value;

    var todoesValido = true;
    /*
    JS es un lenguaje de programacion no tipado eso quiere decir 
    que solo maneja 3 tipos de variable de dato
,
    var es una variable cambiante con acceso publico
    
    let es una variable de acceso restringido 
    
    const es una constante de acceso unico 

    charAt trasforma una cadena en caracteres 
    */
    for(var i=0; i<checkString.length; i++){

        var ch= checkString.charAt(i);

        for (var j=0; j< checkOk.length;j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
        }

        if(j==checkOk.length){
            todoesValido=false;
            break;
        }
    
    }

    if(!todoesValido){
        alert("Escriba unicamente numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }


    var txt = formulario.email.value;
    var b= /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;



}
