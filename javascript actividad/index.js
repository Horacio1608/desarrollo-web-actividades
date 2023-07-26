let contador = 1;

function agregarElemento() {
  const texto = document.getElementById('texto').value;
  const listaItem = document.querySelector('.lista-item');

  const nuevaFila = document.createElement('div');
  nuevaFila.classList.add('listado');

  const nuevoOrden = document.createElement('div');
  nuevoOrden.innerText = contador++;
  nuevoOrden.classList.add('orden');
  nuevaFila.appendChild(nuevoOrden);

  const nuevaDescripcion = document.createElement('div');
  nuevaDescripcion.innerText = texto;
  nuevaDescripcion.classList.add('descripcion');
  nuevaFila.appendChild(nuevaDescripcion);

  listaItem.appendChild(nuevaFila);

  document.getElementById('texto').value = '';
}

function borrarElemento() {
  const listaItem = document.querySelector('.lista-item');

  const ultimaFila = listaItem.lastElementChild;

  if (ultimaFila) {
    listaItem.removeChild(ultimaFila);
  }
}

const botonAgregar = document.querySelector('button');
botonAgregar.addEventListener('click', agregarElemento);

const botonEliminar = document.querySelector('.listado button');
botonEliminar.addEventListener('click', borrarElemento);
