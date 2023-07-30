/** CUADRO DIALOGO INPUT PROMPT */
const prompt=require("prompt-sync")({sigint:true});
//ES UNA PAQUETERIA PARA LEER EL PROMPT DESDE CONSOLA...


let numeroUno = prompt("ingrese el valor uno: ");
let numeroDos = prompt("ingrese el valor dos: ");

/**CONDICIONAL IF-- ELSE SABER EL MAYO DE DOS NUMEROS INGRESADOS
 * POR EL USUARIO.. 
 * parseInt => de string -> numerico
 * Number() => true, false
 */
/*numeroUno = parseInt(numeroUno);
console.log(typeof numeroUno);
*/
/*if( (typeof numeroUno == 'string' ) || (typeof numeroDos =='string')){
console.log("INGRESE SOLO NUMEROS..");
}*/
console.log(Number(numeroUno));
console.log(Number(numeroDos));
//String()
/*
if( !(Number(numeroUno)) || !(Number(numeroDos))  ){
   console.log("INGRESE SOLO NUMEROS");
}
else*/
if(numeroDos > numeroUno){
   console.log("MAYOR es el numero dos: ",numeroDos);
}
else if( numeroUno == numeroDos){
   console.log("SON IGUALES");
}
else{
   console.log("Mayor es el numero uno: ", numeroUno);
}

let date = new Date(); 
let month = date.getMonth(); //0-11
console.log(month);

let mes="";
switch(month){
   default: mes="Enero"; break;
   case 1: mes="Febrero"; break;
   case 2: mes="Marzo"; break;
   case 3: mes="Abril"; break;
   case 4: mes="Mayo"; break;
   case 6: mes="JULIO"; break;
   case 7: mes="AGOSTO"; break;
   case 8: mes="SEPTIEMBRE"; break;
   case 9: mes="OCTUBRE"; break;
   case 10: mes="NOVIEMBRE"; break;
   case 11: mes="DICIEMBRE"; break;
   case 5: mes="JUNIO"; break;

}

/** while 
 * variable de inicializacion
 * while(condicion){
 * //accion (incremento, decremento)
 * }
 */
//repetir los numeros de  1 hasta 10

let y = 1;
while(y<=10){
   console.log("numero ",y);
   y++;
}

y=10;
while(y>0){
   console.log("numero ",y);
   y--; //y=y-1;
}

//FOR (INICIALIZACION; CONDICION; ACCION)

for(let i=1; i<=10; i++){
   console.log("i: ",i);
}
for(let i=10; i > 0; i--){
   console.log("i: ",i);
}

/** repitir los numeros hasta donde el usuario indique */

let xy = prompt("Ingrese un valor: ");

if(xy > 1){
for(let i=1; i<=xy; i++){
   console.log("el numero es: ",i);
}
}
else{
  console.log("INGRESE NUMEROS MAYOR A 1");
}

