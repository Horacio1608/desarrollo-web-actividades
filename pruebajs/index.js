/*declaro variables cont, let, var*/

/*funciones predeterminadas del navegador (windows)*/

/**alert("Alerta...");
confirm("Estas seguro....");
prompt("escriba algo....");*/
/** 
print();                       apertura delcuadro de dialogo par imprimir
open("http://google.com");     apertura de una pagina web 
console.log(location);         location .pot .host .etc nos da la info de lapagina


setInterval(function({}),1000)

const parrafo1 = document.querySelector("#parrafo1");
const intervalTime = setInterval(function(){
    parrafo1.innerHTML += "prueba...";
},1000)     /*ejecucuion cada intervalo de tiempo*/
/*
setTimeout(function(){
    parrafo1.innerHTML += "prueba...";
},1000)     /*espera un intervalo de tiempo*/
/*
const boton = document.querySelector("#eventStop");
boton.addEventListener("click",function(){clearInterval(intervalTime)})

//eventos del usuario click doble click, change(input) key, key press, key up, key down, mouse hover, mouse up, mouse down, mouse enter

const ejemploDiv = document.createElement("div"); //crea elemento del documento div img etc
ejemploDiv.innerHTML="<p>ejemplo de prueba...</p><p>ejemplo de acciones...</p>";  //inserta html

const divcontenedor = document.querySelector(".contenedor"); //selecciono donde se va a agregar
divcontenedor.appendChild(ejemploDiv)  //appendchild agrega el elemento

divcontenedor.append("Agrego el texto solo con append");

const imagen = document.createElement("img"); //agrego imagen con javascript
imagen.src="https://via.placeholder.com/50x50";
imagen.alt = "texto alternativo";
divcontenedor.appendChild(imagen);

const input = document.createElement("input")
input.placeholder="ingrese nombre";
input.type="name";
divcontenedor.prepend(input);//insertar al inicio

// lab11*/

var x = 5;
console.log(x);
