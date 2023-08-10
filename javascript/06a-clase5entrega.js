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
    dataPersona.push(person);
}

addDataPersona("juan","torres",20,"mdp",5);
addDataPersona("antonio","ruiz",50,"mdp",2);
addDataPersona("jose","garcia",25,"mdp",2);
addDataPersona("soledad","torres",33,"mdp",2);
addDataPersona("diego","sotelo",23,"caba",1);
addDataPersona("juanjo","isac",43,"mdp",2);
addDataPersona("migue","mujica",25,"mdp",3);
addDataPersona("luis","andrade",44,"caba",2);
addDataPersona("gabriel","sosa",44,"caba",5);
addDataPersona("susana","gomez",20,"mdp",3);
addDataPersona("juan","torres",20,"mdp",5);
addDataPersona("antonio","ruiz",50,"mdp",2);
addDataPersona("jose","garcia",27,"mdp",2);
addDataPersona("soledad","tor",37,"mdp",2);
addDataPersona("diego","soho",21,"caba",1);
addDataPersona("juanjo","isaac",43,"mdp",2);
addDataPersona("migue","muli",25,"mdp",3);
addDataPersona("luis","andre",36,"caba",2);
addDataPersona("gabriel","sos",49,"caba",5);
addDataPersona("susana","gonce",22,"mdp",3);



while (true) {
    var salir = prompt("para salir opima 0 o enter para ingresar personas: ");
    salir = parseInt(salir); 
  
    if (salir === 0) {0

      break;
    } else {
        let firstName = prompt("INGRESE EL NOMBRE: ");
        let lastName = prompt("INGRESE EL APELLIDO: ");
        let birthday = parseInt(prompt("INGRESE LA EDAD: "));
        let address = prompt("INGRESE LA DIRECCION: ");
        let status = parseInt(prompt("INGRESE EL STATUS: "));
        addDataPersona(firstName,lastName,birthday,address,status);
    }
  }
  console.table(dataPersona);

 
        let nombre = prompt("ingrese nombre a buscar: ");
        let dataPersonaFilter = dataPersona.filter((element)=>{
            return (element.firstName == nombre);
        });
console.table(dataPersonaFilter);

// Función para calcular el promedio de edades
const calcularPromedioEdades = (data) => {
    if (data.length === 0) {
        return 0;
    }

    const totalEdades = data.reduce((sum, person) => sum + person.birthday, 0);
    return totalEdades / data.length;
};

const promedioEdad = calcularPromedioEdades(dataPersonaFilter);
console.log(`Edad promedio de las personas con el nombre ${nombre}: ${promedioEdad}`);
//node 06a-clase5entrega.js