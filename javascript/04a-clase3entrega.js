/** DADA UNA ACCION POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR
 * SUMAR, DIVIDIR Y RESTAR, SEGUN EL VALOR QUE INGRESE EL USUARIO
 */

while (true) {
    var a = prompt("Ingrese primer valor: ");
    var b = prompt("Ingrese segundo valor: ");
    var option = prompt("Ingrese 1= suma, 2= resta, 3= multiplicacion, 4= division: ");
  
    a = parseInt(a);
    b = parseInt(b);

if (isNaN(a) || isNaN(b)) {
  console.log("Ingrese valores numéricos");
} else {
  // Si ambos valores son números se sale del ciclo
  break;
}
}
let resultado;
// Funciones

const suma = (a, b) => {
return a + b;
}

const resta = (a, b) => {
return a - b;
}

const multiplicacion = (a, b) => {
return a * b;
}

const division = (a, b) => {
return a / b;
}

// Uso switch

switch (parseInt(option)) {
case 1:
  resultado = suma(a, b);
  break;
case 2:
  resultado = resta(a, b);
  break;
case 3:
  resultado = multiplicacion(a, b);
  break;
case 4:
  resultado = division(a, b);
  break;
default:
  console.log("Opción inválida ingrese del 1 al 4.");
}

console.log("El resultado es:", resultado);
