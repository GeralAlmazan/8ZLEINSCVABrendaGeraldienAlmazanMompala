/*
Java Script es multiparadigma
Como sería manejar POO
*/

class Figurageo{
    //Constructor
    constructor(){
        //Puede o no tener alguna implementación.
    }

    //métodos
    area(){
        //Método que se encarga de calcular.
    }

    perimetro(){
        //Método para cálculo de perimetro
        console.log("Este método calcula el perímetro")
    }
    
}

class rectangulo extends Figurageo{
    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualiazarArea = false;
        this._actualiazarPerimetro = false;
    }

    set altura(altura){
        this._altura = altura;
        //Si cambia el valor del area o perimetro hay que actualizar el dato
        this._actualiazarArea = true;
        this._actualiazarPerimetro = true;
    }

    set base(base){
        this._base = base;
        //Si cambia el valor del area o perimetro hay que actualizar el dato
        this._actualiazarArea = true;
        this._actualiazarPerimetro = true;
    }

    get area(){
        if(this._actualiazarArea || this._area){
            this.area = this._calcularArea();
        }
        return this._area;
    }

    get perimetro(){
        if(this._actualiazarPerimetro || this._perimetro){
            this._perimetro = this._calcularPerimetro();
        }
        return this._perimetro;
    }

    calcularArea(){
        console.log(this._base);
        console.log(this._altura);

        return this._base * this._altura;
    }

    _calcularPerimetro(){
        console.log(this._base);
        console.log(this._altura);

        return this._base + this._altura;
    }
}


const objetoRectangulo = new rectangulo(2,5);

console.log(objetoRectangulo.calcularArea());
console.log(objetoRectangulo._calcularPerimetro());



/* spread*/
/*
Es una sintaxis que nos permite a un elemento iterable (arreglo, matriz, vector,cadena) poder desde 0 contar los argumentos qie pasan por dicho elemnento
*/

const arregloOrdenadoMayorMenor = [10,9,8,7,6,5,4,3,2,1,0];

console.log(`Arreglo ordenado: ${arregloOrdenadoMayorMenor} `);

// vamos a suponer que podemos obtener tantas variables como deseemos a partir del patron

const[valorMasGrande]= arregloOrdenadoMayorMenor;
console.log(`Valor mas grande: ${valorMasGrande}`);

//vamos a obtener el resto de los valores


const[valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores]= arregloOrdenadoMayorMenor;

console.log(`VMG1, VMG2, VMG3, ..Resto: ${valorMasGrande},${valorMasGrande1}, ${valorMasGrande2},${valorMasGrande3}, ${restoValores}`);


const resultadoDeBusqurda={
    resultados:[
        "resultado1",
        "resultado2",
        "resultado3",
        "resultado4",
        "resultado5",
        "resultado6",
        "resultado7"
    ],
    total: 7,
    mejorCoincidencia: "resultado3"
};


console.log(`Resultado de la busqueda: ${resultadoDeBusqurda}`);

//vamos a suponer que solo nos imprima la mejor coincidencia 

const {mejorCoincidencia} = resultadoDeBusqurda;
console.log(`Mejor coincidencia: ${mejorCoincidencia}`);


//vamos a suponer que queremos cambiar el nombte, deribado a que necesitamos mantener la persistencia del codigo acorde a una nomenclatura


const copiaResultadoDeBusqueda= {...resultadoDeBusqurda};
console.log(`Copia de resulatado de busqueda: ${copiaResultadoDeBusqueda}`);

//vamos a modificar

const copiaResultadoDeBusquedaModificar= {...resultadoDeBusqurda, cadenaBuscar: "resultado3"};

console.log(`Copia Modificada: ${copiaResultadoDeBusquedaModificar}`);