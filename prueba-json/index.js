const leerJson = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1',{method:"GET"});
    const data = await response.json();
    console.log(data);
}

leerJson();

//jsonlint.com pagina que valida json para prueba
//jsonplaceholder crea json
//api rest full nos permite mediante peticiones interactuar cliente <=>servidor

//metodos http => se definen en el fetch
/*
GET: buscar informacion
POST: agregar nueva informacion al servidor
PUT: actualizar una informacion del servidor
DELETE: borrar informacion*/
