/**creacion de funciones */
const hola = ()=>{
    console.log("ejemplo..");
}
hola();

const suma = (a,b,c)=>{
    return a+b+c;
}

let a=4;
let b=6;
let c=9;


let resultado = suma(c,a,b); //19
let mensaje= suma("hola","ver",3); //holaver3

/**OBJETOS (OBJECT) DICCIONARIO  {} DECLARACION
 * 
*/
//const objectExample = new Object(); //esta no se usa....
const objectExample ={};
// { key: value,key: value } { atributo: valor}

let lastName = "RAMIREZ";
const objectPerson = {
    firstName:"PEDRO",
    lastName,
    birthday:20,
    status:false,
    address:{
        cp:1424,
        address:"CABA"
    }
}
console.log(objectPerson);
objectPerson.lastName ="JUAN"
//notacion para acceder a las propiedades - atributos -key del objecto (.)
console.log(objectPerson.firstName);
//notacion [];
console.log(objectPerson["firstName"]);

//objectPerson.address = "CABA";
objectPerson["life"] = 60;
console.log(objectPerson);
//DESESTRUCTURACION DE OBJECTO converitr los atributos en variables

const {firstName,status}=objectPerson;
console.log(firstName);
console.log(status);

const {cp,address}=objectPerson.address;

objectPerson.address.cp;
objectPerson["address"]["cp"];

/** ARRAY VECTORES  INDEX (POSICION) 
 * DECLARACION new Array();
*/

const arrayData = new Array(2,3,"hola","prueba",true,false,"****");
/**longitud cantidad de elementos length */
console.log(arrayData.length);
/**notacion para declarion [] */
const arrayDataTwo =[3,4,5,"hola","prueba",true]; //[] array vacio..
console.log(arrayDataTwo.length);

/** acceder a los valores del arreglo.. [] */

console.log(arrayData[2]);
console.log(arrayData);
/** insertar elementos en un array
 * final push(elementos) insertar elemento al final del array
 * principio unshift(elementos) insertar elementos al principio del array
 */
arrayData.push(3,5,8,9);
arrayData.unshift("****","*****");
console.log(arrayData);

/**PODEMOS ELIMINAR
 * pop() // elimina el ultimo elemento del array
 * shift() // eliminar el primer elemento del array
 */
arrayData.pop();
arrayData.shift();
console.log(arrayData);

/**eliminar y agregar en cualquier posicion
 * splice(inicial, cantidad de elementos a eliminar, agregar);
 */
arrayData.splice(3,0,"JUAN..");
console.log(arrayData);

//delete(arrayData[2]);
console.log(arrayData);

/**FUNCIONES DE ARRAY
 * foreach() => recorrer el array
 * map() => interaccion en el array y devuelve un nuevo array
 * filter() => filtrar por una condicion y devuelve un nuevo array
 * find() => busca el primera coincidencia y devuelve un array
 * findIndex() devuel el indice (pos) de la primera coincidencia
 * includes(valor) // devuelve un valor verdadero o falso
 * indexOf(valor) //devuelve la pos del elemento (su primera coincidencia) buscado, si no esta devuelve -1
 * lastIndexOf(valor) //devuelve la pos del elemento (su primera coincidencia) buscado, si no esta devuelve -1
 */

console.log(arrayData.includes("juanp"));
console.log(arrayData.indexOf(3));
console.log(arrayData.lastIndexOf(3));
arrayData.forEach((data,poscition)=>{
    console.log(`${data} POS => ${poscition}`);
});
arrayData.map((element,index)=>{
    console.log(`${element} POS => ${index}`);
});
let dataNew = arrayData.filter((element)=>{
    return element >= 2;
});

console.log(arrayData);
console.log(dataNew);