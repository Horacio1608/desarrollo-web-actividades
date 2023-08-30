const prompt = require("prompt-sync")(({sigint:true}))
let datapersona =[];

const addDataPersona=(firstName,lastName,birdthday,address,status,condicion)=>{
  let person =  {firstName,
                lastName,
                birdthday,
                address,
                status
            }
    if (condicion){
        datapersona.push(person);
    } else{
        datapersona.unshift(person);
    }
}

addDataPersona("juan","perez",30,"hh",true);
addDataPersona("juan2","perez",31,"hh",true);
addDataPersona("juan3","perez",32,"hh",true);
addDataPersona("juan4","perez",33,"hh",true);

console.table(datapersona);

const promedio = ()=>{
    let suma =0;
    datapersona.forEach((person)=>{
        suma+= person.birdthday;
    });
    let prom = suma/datapersona.length;
    return prom;
};
console.log("el promedio de edades es = "+promedio());

let sumaReduce = datapersona.reduce((sumaEdades, person)=>{
    return sumaEdades + person.birdthday ;},0);

    console.log(`la suma reduce es ${sumaReduce}`);


    console.log("Cantidad de personas = "+datapersona.length);

    const saludar =(nombre,edad)=>{
        return `hola mi nombre es ${nombre} y tengo ${edad}`;

    };

    console.log(saludar("horacio",41));
