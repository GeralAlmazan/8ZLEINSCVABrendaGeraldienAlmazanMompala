//vamos a crear una funcion que se encarga de validar la entrada de datos

function Com(event, el){//Validar nombre	
    //Obteniendo posicion del cursor 
    var val = el.value;//Valor de la caja de texto
    var pos = val.slice(0, el.selectionStart).length;
	
    var out = '';//Salida
    var filtro = '1234567890';
    var v = 0;//Contador de caracteres validos
	
    //Filtar solo los numeros
    for (var i=0; i<val.length; i++){
       if (filtro.indexOf(val.charAt(i)) != -1){
	     v++;
	     out += val.charAt(i);		   
	     //Agregando un espacio cada 4 caracteres
	     if((v==4) || (v==8))
	         out+='';
	   }
    }
    //Reemplazando el valor
    el.value = out;
	
    //En caso de modificar un numero reposicionar el cursor
    if(event.keyCode==8){//Tecla borrar precionada
        el.selectionStart = pos;
        el.selectionEnd = pos;
    }
}

// se crea la funcion para calcular interes del primer ejercicio
function interes() {
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
  
    // Validar si el valor es un número positivo
    if (resul >= 0) {
      var interes = resul * 0.02;
      var total = interes + resul;
      document.formulario.sueldoI.value = "$" + total;
    } else {
      // Mostrar un mensaje de error si el valor no es válido
      alert("Por favor, ingrese un número positivo.");
    }
  }
  

// se crea la funcion para conocer el sueldo final con comision de tres ventas ejercicio dos
function sueldo() {
    var sueldo = document.segundo.sueldob.value;
    var sueldo1 = parseInt(sueldo);
    var vent1 = document.segundo.venta1.value;
    var ventauno = parseInt(vent1);
    var vent2 = document.segundo.venta2.value;
    var ventados = parseInt(vent2);
    var vent3 = document.segundo.venta3.value;
    var ventatres = parseInt(vent3);
  
    // Validar si los valores son números positivos
    if (sueldo1 >= 0 && ventauno >= 0 && ventados >= 0 && ventatres >= 0) {
      var com1 = ventauno * 0.10;
      var com2 = ventados * 0.10;
      var com3 = ventatres * 0.10;
  
      var tcomision = com1 + com2 + com3;
  
      var total = sueldo1 + tcomision;
  
      document.segundo.comision.value = "$" + tcomision;
      document.segundo.sueldoT.value = "$" + total;
    } else {
      // Mostrar un mensaje de error si los valores no son válidos
      alert("Por favor, ingrese números positivos en todos los campos.");
    }
  }
  



// se crea funcion que calcule el 15 por ciento de descuento en el total de la compra ejercicio 3
function descuento() {
    var totali = document.tercero.total1.value;
    var totala = parseFloat(totali);
  
    // Validar si el valor es un número positivo
    if (totala >= 0) {
      var res = totala * 0.15;
      var totalfi = totala - res;
  
      document.tercero.descuent.value = "$" + res;
      document.tercero.totalf.value = "$" + totalfi;
    } else {
      // Mostrar un mensaje de error si el valor no es válido
      alert("Por favor, ingrese un número positivo en el campo Total.");
    }
  }
  

// se crea la funcion para conocer la calificacion final ejercicio cuatro
function calificacion() {
  var cal1 = document.cuarto.c1.value;
  var cali1 = parseInt(cal1);
  var cal2 = document.cuarto.c2.value;
  var cali2 = parseInt(cal2);
  var cal3 = document.cuarto.c3.value;
  var cali3 = parseInt(cal3);
  var ex = document.cuarto.exam.value;
  var examen = parseInt(ex);
  var tra = document.cuarto.trabajo.value;
  var trabajo = parseInt(tra);

  // Validar si todos los valores son números positivos
  if (cali1 >= 0 && cali2 >= 0 && cali3 >= 0 && examen >= 0 && trabajo >= 0) {
    var prom = (cali1 + cali2 + cali3) / 3;
    var promedio = prom * 0.55;
    var pexam = examen * 0.30;
    var trab = trabajo * 0.15;

    var final = promedio + pexam + trab;

    document.cuarto.cf.value = "" + final;
  } else {
    // Mostrar un mensaje de error si alguno de los valores no es válido
    alert("Por favor, ingrese números positivos en todos los campos de calificaciones.");
  }
}


// se crea la funcion para conocer el porcentaje de hombres y mujeres que hay en una aula
function porcentaje() {
  var cantidadHombres = parseInt(document.quinto.hom.value);
  var cantidadMujeres = parseInt(document.quinto.muj.value);
  var totalAlumnos = cantidadHombres + cantidadMujeres;

  var porcentajeHombres = (cantidadHombres / totalAlumnos) * 100;
  var porcentajeMujeres = (cantidadMujeres / totalAlumnos) * 100;

  document.getElementById("porhom").value = porcentajeHombres.toFixed(2) + "%";
  document.getElementById("pormuj").value = porcentajeMujeres.toFixed(2) + "%";
}

function borrar() {
  document.quinto.hom.value = "";
  document.quinto.muj.value = "";
  document.getElementById("porhom").value = "";
  document.getElementById("pormuj").value = "";
}



// se crea la funcion para conocer la edad 
function edad() {
  var añoActual = parseInt(document.sexto.añoac.value);
  var añoNacimiento = parseInt(document.sexto.añonaci.value);
   
  var edad = añoActual - añoNacimiento;

  document.getElementById("eda1").value = edad;
}

function borrar() {
  document.sexto.añoac.value = "";
  document.sexto.añonaci.value = "";
  document.getElementById("eda1").value = "";
}
s





//funcion para vaciar los campos

function borrar(){
    
    
    //ejercicio 1
    document.formulario.sueldoI.value = "";
    document.formulario.cantidad.value = "";

    // ejercicio 2
    document.segundo.sueldob.value  = "";
    document.segundo.venta1.value = "";
    document.segundo.venta2.value  = "";
    document.segundo.venta3.value  = "";
    document.segundo.comision.value  = "";
    document.segundo.sueldoT.value  = "";

    //ejercicio 3
    document.tercero.total1.value = "" ;
    document.tercero.descuent.value = "";
    document.tercero.totalf.value = "";

    // ejercicio 4
    document.cuarto.c1.value = "";
    document.cuarto.c2.value = "";
    document.cuarto.c3.value = "";
    document.cuarto.exam.value = "";
    document.cuarto.trabajo.value = "";
    document.cuarto.cf.value = "" ;


    // ejercicio 5
    document.quinto.taalum.value=" ";
    document.quinto.hom.value=" ";
    document.quinto.muj.value=" ";
    document.quinto.porh.value =" " ;
    document.quinto.porm.value =" " ;



    //ejercicio 6
    document.sexto.añoac.value =" ";
    document.sexto.añonaci.value=" " ;
    document.sexto.eda.value=" "  ;

}