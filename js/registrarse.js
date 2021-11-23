function  registro() {

    
    class nuevoUsuario {
        constructor (nombre,apellido,telefono,mail,passnuevo) {
            this.nombre = nombre.toUpperCase();
            this.apellido = apellido.toUpperCase();
            this.telefono = parseInt (telefono);
            this.mail = mail.toLowerCase();
            this.passnuevo = parseInt (passnuevo);
        }
    }



         if (seleccionusuario === noregistrado && seleccionusuario !== null) {

       

            let nuevoRegistro = ' ';
            while (nuevoRegistro != null) {

                let nuevoUsuarioX = new nuevoUsuario(
                    prompt ("Ingrese su Nombre: "),
                    prompt ("Ingrese su Apellido: "),
                    prompt ("Ingrese un nombre de Usuario: (ej. nuevousuario)").toLowerCase(),
                    prompt("Ingrese un password numérico de hasta 4 digitos: (ej.1111)"));

                    if ((nuevoUsuarioX.usunuevo !== " " && nuevoUsuarioX.usunuevo !== null) && (nuevoUsuarioX.passnuevo !== isNaN && nuevoUsuarioX.passnuevo > 0 && nuevoUsuarioX.passnuevo < 9999)) {

                        nuevoRegistro +=`ALTA USUARIO\n \nNombre: ${nuevoUsuarioX.nombre} ${nuevoUsuarioX.apellido} \nUsuario: ${nuevoUsuarioX.usunuevo} \nContraseña: ${nuevoUsuarioX.passnuevo}`;
                        alert (nuevoRegistro);
                    }
                    else {
                        alert ("Debe seleccionar una opcion valida");
                        return login();
                    }
            }
        }
        else {
            console.log ("error registro")
            alert ("Debe seleccionar una opcion valida");
            return login();
        }
    
    }
