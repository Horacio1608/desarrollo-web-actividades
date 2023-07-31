const array = [2,3,4,"o","y",true]; // la posicion se cuenta a partir de cero
console.log(array.length);
console.log(array[4]);

array.push("hola","chau");//inserto al final del array
array.unshift("inicio");//inserto al inicio
console.log(array);

array.pop();                //elimina el ultimo elemento pop
array.shift();              // elimina el primer elemento shift
console.log(array);

//elimina y agrega en cualquier posicion
//splice (inicial,cantidad de elementos a eliminar, agregar)
const array2 = [0,1,2,3,4,5,6,7,8,9];
array2.splice(2,3,);                 //elimino elemento  splice
console.log("array2");
console.log(array2);
array2.splice(2,0,"agrego");        //agrego elemento splice
console.log(array2);

// delete elimina dato no la  posicion
delete(array2[6]);                  //delete item
console.log(array2);

/**FUNCIONES DE ARRAY
 * foreach() => recorrer el array
 * map() => interaccion en el array y devuelve un nuevo array
 * filter() => filtrar por una condicion y devuelve un nuevo array
 * find() => busca el primera coincidencia y devuelve un array
 * findIndex() devuel el indice (pos) de la primera coincidencia
 * includes(valor) // devuelve un valor verdadero o falso de valor
 * indexOf(valor) //devuelve la pos del elemento (su primera coincidencia) buscado, si no esta devuelve -1
 * lastIndexOf(valor) //devuelve la pos del elemento (su primera coincidencia) buscado, si no esta devuelve -1
 */
 console.log(array2.includes("agrego")); //devuelve true o false
 console.log(array2.indexOf("agrego"));  //devuelve la posicion si no regresa -1
 array2.forEach((data,poscition)=>{
    console.log(`${data} POS => ${poscition}`);
});
array2.map((element,index)=>{
    console.log(`${element} POS => ${index}`);
});
let dataNew = array2.filter((element)=>{
    return element >= 2;
});
console.log(dataNew);