/*
Las variables que se ocupan dentro de js son 3 

var-> De acuerdo a EJS6 esta siendo sustituida; pero es la de uso mas comun para determinar una variable es de acceso publico 


let -> es una variable pprotegida qie solo funciona dentro de una funcion o declaracion de codifo 

const-> la cual es un valor constante enn todo el documento 
*



let x=  "x";

if(true){
    const x= "y";
    console.log(x);
}



la funcion flecha es una funcion en js que a diferencia de una funcion normal no genera su propio contexto (this) necesita ser declarada abtes de ser usada y no necesita de un return




function sumarFuncionNormal(n1, n2){
    return n1+n2;

}


//cuando ocupamos este tipo de comilla `` es para mandar a llamar elementos de nombres de funciones que van a ser evaluados y/o incorpirar etiquetas de html y css en JS


console.log(`vamos a sumar 3 y 4: ${sumarFuncionNormal(3,4)}`);


/*
Una funcion flecha tiene la siguiente estructura: 
"cadena" -> id, clase, name, atributo

'' y "" es para el uso de id, clases, name
`` es para incorporar codigo html e invocar fucniones de JS






const sumaFuncionFlecha= (n1, n2) => n1+n2;
console.log(`vamos a sumar 5 y 6: ${sumaFuncionFlecha(5,6)}`);


// que pasaria si solo necesitamos un parametro 

const cuadradoFuncionFlecha = n1 => n1** 2;

console.log(`vamos a hacer una funcion cuadratica de 7: ${cuadradoFuncionFlecha(7)}`);


*/


const razasDePerros = [

    "Gran Danes",
    "Pasto Aleman",
    "Chihuahua",
    "Belga",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
];

//recorremos el arreglo
/*
for(let indice=0; indice < razasDePerros.length; indice++){
    console.log(razasDePerros[indice]);
}



//for of
for(const raza of razasDePerros){
    console.log(raza);
}



for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}




//forEach -> es iterar sobre los elementos del arreglo que no devuelva nada

razasDePerros.forEach((raza, indice, arreloOriginal)=> console.log(raza));
razasDePerros.forEach((raza)=> console.log(raza));




//funcion Map iterar sobre los elementos de un arreglo y regresar un arreglo con el cual podemos hacer operaciones

const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal)=> console.log(raza.toUpperCase()));





//FIND nos permite buscar un elemento dentro del arreglo y si lo encuentra, lo regresa y sino lanza un "UNIDEFINED"


if (razasDePerros.find((raza, indice, arregloOriginal)=> raza == "Chihuahua")){
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razasDePerros);

} else{
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log("Se agrego la raza en el arreglo");
    console.log(razasDePerros);
}

*/

//FINDINDEX Es similar a la busqueda, pero en lugar de regresar el elemento, regresa su indice y sino lo encuentra nos devuelve un -1 esta funcion particularmente es util si queremos modificar el elemento original dentro de un arreglo



const indiceChihuahua = razasDePerros.findIndex((raza, indice, arregloOriginal)=> raza === "Chihuahua");

if(indiceChihuahua > -1){
    //el resultado esperado pq si esta dentro del arreglo 
    console.log(razasDePerros[indiceChihuahua]);

    //aparte voy a agregar que diga que la raza es pequeña
    razasDePerros[indiceChihuahua] += "(Raza de perros pequeña y escandalosa)";
    console.log(razasDePerros[indiceChihuahua]);
    console.log(razasDePerros);

}else{
    console.log("no esta");
}



