/**DADA DOS VARIABLES  REALIZAR CON ESAS VARIABLES LAS OPERACIONES MATEMATICAS SIGUIENTE (+,-,*,/)
 * MEDIANTE UN SWITCH
*/
var a = 2;
var b = 4;
var opcion = 1; //1-suma, 2-resta, 3-multiplicacion, 4-division

switch(opcion){
    case 1:
    mensaje= console.log(a+b);
    break;
    case 2:
    mensaje= console.log(a-b);
    break;
    case 3:
    mensaje= console.log(a*b);
    break;
    case 4:
    mensaje= console.log(a/b);
    break;
    default:
        alert("Opción no válida");
}

/* CALCULAR SI UN NUMERO ES PRIMO O NO */
var c = 19; // Ingresa el número que desees aquí

if (c == 0 || c == 1 || c < 0) {
    console.log("Ingrese un número mayor que 1 para determinar si es primo.");
} else {
    var esPrimo = true;

    for (var i = c - 1; i >= 2; i--) {
        if (c % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log("El número es primo.");
    } else {
        console.log("El número no es primo.");
    }
}
/** REALIZAR LA TABLA DE MULTIPLICAR DE UN VALOR X HASTA EL 10*/
while (true) {
    var m = prompt("Ingrese valor a multiplicar (0 para salir):");
  
    m = parseInt(m); // Convertir la entrada a un número entero
  
    if (m === 0) {
      break; // Salir del bucle si el valor es 0
    } else {
      for (let i = 1; i <= 10; i++) {
        console.log("Multiplo de " + m + " * " + i + " =", m * i);
      }
    }
  }
/**TODOS LOS DEBERAS MOSTRAR POR LA CONSOLA */