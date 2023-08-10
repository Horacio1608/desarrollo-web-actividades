let dataPersona =[];
const addDataPersona = (firstName,lastName,birthday,address,status,dni,condition=true) =>{
    if (dataPersona.some(person => person.dni === dni)) {
        Swal.fire('Error Ya existe este DNI');
        return; // No agregamos el registro duplicado
    }
    let person ={
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if(condition){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }

}

const addFormPerson  = () => {
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    
    if (firstName.value && lastName.value && birthday.value && address.value && status.value && dni.value) {
       
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        
        firstName.value = '';
        lastName.value = '';
        birthday.value = '';
        address.value = '';
        status.value = '';
        dni.value = '';
        
        Swal.fire('Saved!', '', 'success');
        firstName.focus();
        
        console.table(dataPersona);
    } else {
        Swal.fire("Error Por favor complete todos los campos");
    }
};
    console.table(dataPersona);


/** 1.- EVITAR QUE EL USUARIO INGRESE DATOS VACIOS.
 *  2.- EVITAR DUPLICIDAD DE DATOS POR EL DNI
 */