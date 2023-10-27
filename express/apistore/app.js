const express = require('express'); // contiene todas las funciones
const app = express(); // instancio express
const bodyParser = require('body-parser');
const isAdmin = require('./middleware/isAdmin.middleware');
const port = 3000; //https://localhost:3500

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

const userRouter = require('./routers/user.router'); 
//router(get, post, delete, put, patch, header, option)solicitudes http
//app.method(path,handler)  path=ruta handler=metodos(funcion)
//req   datos que me envian
//response   lo que respondo
app.get('/',(req,res,next)=>{
    res.send({'message':'welcome api rest'});
});

//send envia datos de cualquier tipo
//json envia una respuesta json
//end finaliza el proceso de respuesta
app.use(isAdmin);

app.get('/hello',(req,res)=>{
    res.json({data:'hello'});
});

 app.use('/user', userRouter)

//MVC  modelo(estructura data) vista(interfaz de usuario) control(logica)

//app.listen siempre al final
app. listen(port,()=>{
    console.log("welcome https://localhost:"+port)
});

