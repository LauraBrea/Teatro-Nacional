function  login() {

    alert ("Bienvenido al sistema de registro del Teatro Nacional");
    
    let seleccionusuario = prompt ("Es un usuario registrado? (Indique Si o No)").toLowerCase();
        console.log ("Esta registrado: "+seleccionusuario);

        const registrado = "si";
        const noregistrado = "no";

        if (seleccionusuario === registrado && seleccionusuario !== null) {

            const usuarioreg = "usuario";
            const passreg = 1234;
            let error = 0;
    
            for(let i = 0 ; i <= 3 ; i = i +1){
            
                let usuario = prompt ("Ingrese su nombre de Usuario: (ej. usuario)").toLowerCase();
                let pass = parseInt (prompt("Ingrese su Password: (ej. 1234)"));
    
                if (usuario === usuarioreg && pass === passreg){
                    console.log ("Usuario registrado");
                    alert ("Bienvenido!");
                    break;
                } 
                else {
                    console.log ("Error: " + i);
                    error = error + 1;
                    if (error == 3){
                        alert ("Los datos ingresados son incorrectos");
                        break;
                    }
                }
            } 
        }
        else if (seleccionusuario === noregistrado && seleccionusuario !== null) {

            class nuevoUsuario {
                constructor (nombre, apellido,usunuevo,passnuevo) {
                    this.nombre = nombre.toUpperCase();
                    this.apellido = apellido.toUpperCase();
                    this.telefono = parseInt (telefono);
                    this.mail = mail.toLowerCase();
                    this.passnuevo = parseInt (passnuevo);
                }
            }

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
