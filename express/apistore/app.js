const express = require('express');// contiene todas las funciones

const app = express();// instancio express

const port = 3500; //https://localhost:3500

//router(get, post, delete, put, patch, header, option)solicitudes http
//app.method(path,handler)  path=ruta handler=metodos
//req   datos que me envian
//response   lo que respondo
app.get('/',(req,res)=>{
    res.send('message');
});

//send envia datos de cualquier tipo
//json envia una respuesta json
//end finaliza el proceso de respuesta
app.get('/hello',(req,res)=>{
    res.json({data:'hello'});
})

//MVC  modelo(estructura data) vista(interfaz de usuario) control(logica)

app. listen(port,()=>{
    console.log("welcome https://localhost:"+port)
});

