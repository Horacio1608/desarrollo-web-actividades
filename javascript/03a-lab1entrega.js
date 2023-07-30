/**ingresando tres valores por el usuario, saber cual es el mayor y el menor de los 3 */

var primero, segundo, tercero;

do {
    primero = parseFloat(prompt("Ingrese primer número: "));
    segundo = parseFloat(prompt("Ingrese segundo número: "));
    tercero = parseFloat(prompt("Ingrese tercer número: "));

    if (primero === segundo || primero === tercero || segundo === tercero) {
        console.log("Error: Los números ingresados son iguales. Por favor, elija números diferentes.");
    }
} while (primero === segundo || primero === tercero || segundo === tercero);

if (primero > segundo && primero > tercero) {
    console.log(`El número ` + primero + ` es el más grande`);
} else if (segundo > primero && segundo > tercero) {
    console.log(`El número ` + segundo + ` es el más grande`);
} else if (tercero > primero && tercero > segundo) {
    console.log(`El número ` + tercero + ` es el más grande`);
}

if (primero < segundo && primero < tercero) {
    console.log(`El número ` + primero + ` es el más chico`);
} else if (segundo < primero && segundo < tercero) {
    console.log(`El número ` + segundo + ` es el más chico`);
} else if (tercero < primero && tercero < segundo) {
    console.log(`El número ` + tercero + ` es el más chico`);
}


/**realizar una tabla de multiplicar dado un valor por el usuario */

const prompt = require("prompt-sync")({sigint:true})
let multiplo = prompt("ingrese numero a multiplicar=  ");

multiplo = parseInt(multiplo);
console.log(typeof multiplo);

if(Number.isInteger(multiplo)){
    if (multiplo == 0){
        console.log('multiplicacion con 0 es 0, ingrese otro valor');
    }
    else if (multiplo >=1){
        for (let i = 1; i <= 10 ; i++)
        
        console.log("multiplo " + multiplo + " * " + i + " = "+ multiplo*i);
    }
    else{
        console.log ("el número debe ser positivo");
    }
}
else{
    console.log ('solo se permiten numeros')
}


/**realizar una tabla de dividir dado un valor por el usuario */

