/**  ACTIVIDAD AGREGAR 10 OBJETOS PERSONAS EN AL ARRAY CON DATA DIFERENTE...
 * 1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 * 2.- MOSTRAR EL PROMEDIO DE EDADES
 */


const prompt = require("prompt-sync")(({sigint:true}))
let dataPersona =[];

const addDataPersona = (firstName,lastName,birthday,address,status,condition) =>{
    let person ={
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if(condition){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }

}

addDataPersona("juan","torres",20,"mdp",5,true);
console.log(addDataPersona);
//node 06a-clase5entrega.js