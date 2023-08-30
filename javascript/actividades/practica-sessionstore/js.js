
    let usuarios = []; // Creo el array vacio

// Función para agregar los datos al array usuarios[]
const addusuarios = (firstName, lastName, user, password) => {
    let usuario = {
        firstName,
        lastName,
        user,
        password
    };
    
    usuarios.push(usuario);
}

// Función para tomar datos del HTML al hacer click
const addregistros = () => {
    let firstName = document.getElementById("fistName").value; 
    let lastName = document.getElementById("lastName").value; 
    let user = document.getElementById("user").value; 
    let password = document.getElementById("password").value; 

    addusuarios(firstName, lastName, user, password); // Agrega los datos al array
        // Borrar los valores de los campos después de agregar los datos
        document.getElementById("fistName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("user").value = "";
        document.getElementById("password").value = "";
        firstName.focus;
    console.log(usuarios); // Mostrar los usuarios en la consola
};
  
// Guardar los datos en sessionStorage
let userData = {
    firstName,
    lastName,
    user,
    password
};
sessionStorage.setItem('userData', JSON.stringify(userData));

console.table(usuarios);





/*localStorage.setItem('users', JSON.stringify(usuarios));
alert(`Usuario ${firstname}, ${lastname} registrado correctamente`);*/