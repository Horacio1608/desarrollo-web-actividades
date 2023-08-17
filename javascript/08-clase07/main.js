let dataPersona = [];  //se crea unn array vacio

//esta funcion guarda en person los datos ingresados
const addDataPersona = (firstName, lastName, birthday, address, status, dni, condition = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }

}
//funcion para gregar los datos al formulario , llama a la validadcion finddnione y emite alertas
const addFormPerson = () => {
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    if (findDniOne(dni.value) == -1) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        document.getElementById("formPerson").reset();
        dni.focus();
        document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
        messageAlert("Datos Guardados");
    }
    else {
        dni.focus();
        messageAlert("ERROR, EL DNI YA SE ENCUENTRA REGISTRADO", "error");
    }
}



const listPerson = (dataArray) => {
    let list = '';
    if (dataArray.length > 0) {
        dataArray.forEach((person,index) => {
            list += `<tr>
                    <td>${person.dni}</td>
                    <td>${person.firstName} ${person.lastName}</td>
                    <td>${person.birthday}</td>
                    <td>${person.address}</td>
                    <td>${person.status}</td>
                    <td><button type="button" onclick="deleteRegisterPerson(${person.dni})" class="btn btn-danger">ELIMINAR</button></td>
                    <td><button type="button" onclick="modRegisterPerson(${person.dni})" class="btn btn-success">MODIFICAR</button></td>
                    </tr>`;
        });
    }
    else {
        list = `<tr>
                    <td class="text-center" colspan="7">NO HAY REGISTRO FILTRADOS</td>
                </tr>`;
    }
    return list;
}
//valida si el dni esta duplicado
const findDniOne = (dni) => {
    return dataPersona.findIndex((person) => {
        return person.dni == parseInt(dni)
    })
}
//funcion para buscar datos guardados
const searchInput = () => {
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();//trim limpia los espacios vacios y toLowerCase hace todo minuscula
    let filterData = filteDataPerson(search);

    document.getElementById("listPerson").innerHTML = listPerson(filterData);

}

const filteDataPerson = (search) => {
    return dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) ||
            person.lastName.toLowerCase().includes(search);
    });
}

const deleteRegisterPerson = (dni) =>{
    let position = findDniOne(dni);
    dataPersona.splice(position,1);
    document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
}

const messageAlert = (title, icon = 'success') => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 900
    })
}
//********* */
// Función para cargar los datos de una persona en el formulario para editar
const modRegisterPerson = (dni) => {
    let position = findDniOne(dni);

    if (position !== -1) {
        let person = dataPersona[position];
        
        // Rellenar los campos del formulario con los datos de la persona
        document.getElementById("dni").value = person.dni;
        document.getElementById("fistName").value = person.firstName;
        document.getElementById("lastName").value = person.lastName;
        document.getElementById("birthday").value = person.birthday;
        document.getElementById("address").value = person.address;
        document.getElementById("status").value = person.status;

        // Cambiar el comportamiento del botón para guardar la modificación
        let addButton = document.getElementById("addButton");
        addButton.innerText = "Guardar Modificación";
        addButton.removeEventListener("click", addFormPerson); // Elimina el evento anterior
        addButton.addEventListener("click", () => {
            updateDataPersona(position);
        });
    }
}

// Función para actualizar los datos de una persona en el array y en la lista mostrada
const updateDataPersona = (position) => {
    let firstName = document.getElementById("fistName").value;
    let lastName = document.getElementById("lastName").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;
    let status = document.getElementById("status").value;
    
    dataPersona[position].firstName = firstName;
    dataPersona[position].lastName = lastName;
    dataPersona[position].birthday = birthday;
    dataPersona[position].address = address;
    dataPersona[position].status = status;

    // Restaurar el comportamiento original del botón
    let addButton = document.getElementById("addButton");
    addButton.innerText = "Agregar";
    addButton.removeEventListener("click", updateDataPersona);
    addButton.addEventListener("click", addFormPerson);

    // Limpiar el formulario
    document.getElementById("formPerson").reset();
    document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
    messageAlert("Datos Modificados");
}
/*const modRegisterPerson = (dni) =>{
    let position = findDniOne(dni);
    document.getElementById(dataPersona)= addformPerson.innerHTML ;
}

/** 1.- agregar el boton de editar la data
 * 2.- hacer el guardado de la data
 */