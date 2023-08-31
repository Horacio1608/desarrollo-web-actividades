/* JavaScript es un lenguaje de programación que se ejecuta en un entorno de
 navegador o en el servidor (con Node.js). Es conocido por ser "asíncrono" 
 debido a su naturaleza de ejecución no bloqueante. Esto significa que en 
 lugar de esperar a que una operación termine antes de continuar con la 
 siguiente, JavaScript permite que varias operaciones se ejecuten 
 simultáneamente y maneja las respuestas a medida que llegan.

La asincronía en JavaScript es fundamental para tratar con operaciones 
que pueden tomar tiempo, como la carga de recursos desde la red o la 
manipulación de bases de datos. Para gestionar estas operaciones, JavaScript
 utiliza callbacks, promesas y, más recientemente, async/await.

Callbacks:
Un callback es una función que se pasa como argumento a otra función y se 
ejecuta después de que se complete una operación. Aquí tienes un ejemplo 
simple de un callback:

javascript
Copy code*/

function cargarDatos(callback) {
    // Simulamos una operación asincrónica, como una solicitud de red
    setTimeout(function () {
        const datos = "Datos cargados";
        callback(datos);
    }, 1000);
}

function mostrarDatos(datos) {
    console.log(datos);
}

cargarDatos(mostrarDatos); // Llama a cargarDatos con el callback mostrarDatos

/*Promesas:
Las promesas son una forma más estructurada y legible de manejar la asincronía.
 Representan un valor que puede estar disponible ahora, en el futuro o nunca.
  Aquí tienes un ejemplo:

javascript
Copy code*/

function cargarDatos() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const datos = "Datos cargados";
            resolve(datos); // Resuelve la promesa con los datos
        }, 1000);
    });
}

cargarDatos().then(function (datos) {
    console.log(datos);
});

/*
async/await:
El async/await es una forma más moderna y legible de manejar promesas. Permite 
escribir código asincrónico de manera similar a código síncrono. Aquí tienes un ejemplo:

javascript
Copy code*/
async function mostrarDatos() {
    try {
        const datos = await cargarDatos(); // Espera hasta que la promesa se resuelva
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

mostrarDatos();
En resumen, la asincronía en JavaScript te permite realizar operaciones que pueden llevar tiempo
 sin bloquear la ejecución del programa. Puedes usar callbacks, promesas y async/await para gestionar
  y expresar la asincronía de manera más estructurada y legible.
