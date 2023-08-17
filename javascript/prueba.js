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