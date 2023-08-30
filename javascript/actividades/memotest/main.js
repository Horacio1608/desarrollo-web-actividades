//click sobre opciones

const opciones = document.getElementsByClassName("opcion");
let cantidadCartas = 20;
function sel (e){
    cantidadCartas = parseInt(e.target.innerText);
}

for (const opcion of opciones){
    opcion.addEventListener('click', sel);
}

const boton = document.getElementById("iniciar");


//elijo cantidad de cartas y elimino sobrantes

boton.addEventListener("click", function() {
if (cantidadCartas == 8){
    
        for (let i=20; i>8; i--){
            const carta = document.getElementById(`cartas${i}`);
        carta.remove();
    }
    const fondo = document.getElementById("op1");
    fondo.classList.add("resaltar");
    const botonDeshabilitado2 = document.getElementById("op2");
    const botonDeshabilitado3 = document.getElementById("op3");
    botonDeshabilitado2.remove();
    botonDeshabilitado3.remove();
    cantidadCartas = [1,2,3,4,5,6,7,8];
}
    else if (cantidadCartas == 12){
        for (let i=20; i>12; i--){
            const carta = document.getElementById(`cartas${i}`);
        carta.remove();
    }
    const fondo = document.getElementById("op2");
    fondo.classList.add("resaltar");
    const botonDeshabilitado1 = document.getElementById("op1");
    const botonDeshabilitado3 = document.getElementById("op3");
    botonDeshabilitado1.remove();
    botonDeshabilitado3.remove();
    cantidadCartas = [1,2,3,4,5,6,7,8,9,10,11,12];
}
    else if (cantidadCartas == 20){
        const fondo = document.getElementById("op3");
    fondo.classList.add("resaltar");
    const botonDeshabilitado2 = document.getElementById("op2");
    const botonDeshabilitado1 = document.getElementById("op1");
    botonDeshabilitado2.remove();
    botonDeshabilitado1.remove();
    cantidadCartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    }
    else{alert("seleccione las cartas");
}
console.log(cantidadCartas);
});

const reverso = document.getElementsByClassName('cartas');
reverso = .add("reverso");


const tablero = document.getElementsByClassName("cartas");
let cartasElegidas = '';
function selCartas (e){
    cartasElegidas = e.target.innerText;
}

for (const cartas of tablero){
    cartas.addEventListener('click', selCartas);
}
console.log(cartasElegidas);