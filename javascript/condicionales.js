//estructurs de control

//if(condicion && condicion !! condicion)

//condiciones multiples : if, else if, else
console.log("*****condiciones multiples****")
let x = 5;
if (x<10){
    console.log("Es menor a 10");
}
let  nota = 16;
if (nota <=5){
    mensaje="malo";
}
else if (nota <10){
    mensaje="regular";
}
else if (nota <=15){
    mensaje="bien" ;
}
else {
    mensaje = "muy bien!";
}

console.log("estas muy ",mensaje);

//operador ternario anidado

//condicionales switch

//estructuras de control repetitivas  for - while

//estructura for


//estructura while
console.log("*****while*****")
let i = 1;
while (i<=10){
    console.log(3*i);
    i++; //incrementa el valor del contador en cada iteracion
}