const xs= 3;
/*               -------condicionales------
if(condicion){
//entra si se cumple la condicion
}else{
//si no a este otro
}
*/

if (xs==3){
    console.log("usted eligio el 3")
}else if(xs==4){
    console.log("puede ser el 4")
}else{
    console.log("eligio cualquier numero")
}
console.log("fin");

//               ---------switch----------
switch(""){
    case "manzana":
        console.log("es una manzana")
    break;
    case "banana":
        console.log("es una banana")
    break
    case "sandia":
         console.log("es una sandia")
    break
    default :
    console.log ("no es ni una manzana, ni una banana ni una .....")
    //codigo que ejecuta cuando ninguna de las opciones coincida
    break
}

/*
Operadores Aritméticos: Se utilizan para realizar operaciones matemáticas básicas.

+: Suma.
-: Resta.
*: Multiplicación.
/: División.
%: Módulo (devuelve el resto de una división).
Operadores de Asignación: Se utilizan para asignar valores a variables.

=: Asignación simple.
+=: Asignación con suma (por ejemplo, x += 5 es lo mismo que x = x + 5).
-=: Asignación con resta.
*=: Asignación con multiplicación.
/=: Asignación con división.
%=: Asignación con módulo.
Operadores de Comparación: Se utilizan para comparar valores.

==: Igual a (compara valores sin tener en cuenta el tipo de datos).
===: Igual a (compara valores y tipos de datos).
!=: Diferente de (compara valores sin tener en cuenta el tipo de datos).
!==: Diferente de (compara valores y tipos de datos).
>: Mayor que.
<: Menor que.
>=: Mayor o igual que.
<=: Menor o igual que.
Operadores Lógicos: Se utilizan para combinar o negar expresiones lógicas.

&&: AND lógico (true si ambas expresiones son true).
||: OR lógico (true si al menos una expresión es true).
!: NOT lógico (nega una expresión booleana).
Operadores de Incremento y Decremento:

++: Incremento (aumenta en 1 el valor de una variable).
--: Decremento (disminuye en 1 el valor de una variable).
Operadores Ternarios: Es una forma abreviada de una estructura condicional if-else.

condición ? expresión1 : expresión2: Si la condición es true, devuelve expresión1; de lo contrario, devuelve expresión2.
Operadores de Concatenación: Se utilizan para unir cadenas de texto (strings).

+: Concatenación (une dos o más cadenas).
Estos son los operadores más comunes en JavaScript. Combinando estos operadores, puedes crear expresiones complejas para manipular datos y tomar decisiones dentro de tu código. Es importante entender cómo funcionan estos operadores para desarrollar aplicaciones eficientes y funcionales.
*/

