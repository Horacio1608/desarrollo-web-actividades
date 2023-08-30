document.addEventListener('DOMContentLoaded', () => {
    const palabra = document.getElementById('palabra');
    const jugarButton = document.getElementById('button');
    const objetivoDiv = document.getElementById('objetivo');
    const letrasDiv = document.getElementById('letras');
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let palabraObjetivo = "";

    jugarButton.addEventListener('click', () => {
        const word = palabra.value.trim().toUpperCase();

        if (/^[A-Za-z]+$/.test(word)) {
            palabraObjetivo = word;
            const guiones = "_".repeat(palabraObjetivo.length);
            objetivoDiv.textContent = guiones;
            crearLetrasSeleccionables();
        } else {
            alert("La palabra ingresada no cumple con los requisitos");
        }
    });

    function crearLetrasSeleccionables() {
        letrasDiv.innerHTML = ""; // Limpia las letras seleccionables antes de agregar nuevas
        for (let letra of alfabeto) {
            const letraDiv = document.createElement('div');
            letraDiv.classList.add('letra');
            letraDiv.textContent = letra;
            letrasDiv.appendChild(letraDiv);
        }
        habilitarLetras();
    }

    function habilitarLetras() {
        const letrasSeleccionables = document.querySelectorAll('.letra');
        letrasSeleccionables.forEach(letraDiv => {
            letraDiv.addEventListener('click', () => {
                const letraSeleccionada = letraDiv.textContent;
                if (palabraObjetivo.includes(letraSeleccionada)) {
                    const nuevaVisualizacion = objetivoDiv.textContent
                        .split('')
                        .map((letra, index) =>
                            palabraObjetivo[index] === letraSeleccionada ? letraSeleccionada : letra
                        )
                        .join('');
                    objetivoDiv.textContent = nuevaVisualizacion;
                    letraDiv.style.backgroundColor = 'green';
                    comprobarVictoria(nuevaVisualizacion);
                } else {
                    letraDiv.style.backgroundColor = 'red';
                }
                letraDiv.removeEventListener('click', () => {}); // Deshabilita el clic después de usarlo
            });
        });
    }

    function comprobarVictoria(visualizacion) {
        if (visualizacion === palabraObjetivo) {
            alert("¡Adivinaste la palabra!");
        }
    }
});
