/*
function  reservar() {

    alert ("Bienvenido al sistema de compra de entradas del Teatro Nacional");
    
    let seleccionusuario = prompt ("Para poder realizar la compra debe ser un usuario registrado \n \nEstá registrado? (Indique Si o No)").toLowerCase();
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
                    break;
                } 
                else {
                    console.log ("Error: " + i);
                    error = error + 1;
                    if (error == 3){
                        alert ("Los datos ingresados son incorrectos");
                        return comprar();
                    }
                }
            } 
        }
        else if (seleccionusuario === noregistrado && seleccionusuario !== null) {

            let usuarionuevo = prompt ("Ingrese un nombre de Usuario: (ej. nuevousuario)").toLowerCase();
            let passnuevo = parseInt (prompt("Ingrese un password numérico de hasta 4 digitos: (ej.1111)"));
                console.log ("Usuario nuevo: "+usuarionuevo+" Pass: "+passnuevo);

                if ((usuarionuevo !== " " && usuarionuevo !== null) && (passnuevo !== isNaN && passnuevo > 0 && passnuevo < 9999)) {
                    alert ("Usuario Registrado: \n \nUsuario:  " + usuarionuevo + "\nPassword:  " + passnuevo + "\n \nPuede iniciar la compra");
                }
                else {
                    alert ("Los datos ingresados no son válidos");
                    return comprar();
                }
        }
        else {
            console.log ("error registro")
            alert ("Debe seleccionar una opcion valida");
            return comprar();
        }
    
    let seleccionobra = parseInt(prompt("Seleccione la obra: (seleccione la opción): \n \n1 - El lago de los cisnes \n2 - La bella durmiente del bosque \n3 - El cascanueces"));
        console.log ("Obra: "+seleccionobra);

        if (seleccionobra === 1 && seleccionobra !== isNaN) {
            alert ("Ha seleccionado: El lago de los cisnes");
        }
        else if (seleccionobra === 2 && seleccionobra !== isNaN) {
            alert ("Ha seleccionado: La bella durmiente del bosque");
        }
        else if (seleccionobra === 3 && seleccionobra !== isNaN) {
            alert ("Ha seleccionado:  El cascanueces");
        }
        else {
            alert ("Debe seleccionar una opcion valida");
            return comprar();
        }
    
    let seleccionubicacion = parseInt(prompt("Seleccione la ubicación: (seleccione la opción): \n \n1 - Palco \n2 - Platea \n \nValores de entradas: \nPalco: $ 3500 \nPlatea: $ 5500"));
        console.log ("Ubicacion: "+seleccionubicacion);

        const palco = 1;
        const platea = 2;

        if (seleccionubicacion === 1 && seleccionubicacion !== isNaN) {
            alert ("Ha seleccionado: Palco");
        }
        else if (seleccionubicacion === 2 && seleccionubicacion !== isNaN) {
            alert ("Ha seleccionado : Platea");
        }
        else {
            alert ("Debe seleccionar una opcion valida");
            return comprar();
        }
    
    let cantentradas  =  parseInt(prompt( "Ingrese la cantidad de entradas:" ));
        console.log ("Cant. entr: "+cantentradas);
        alert ("Ha indicado : " + cantentradas +" entradas");

    let fecha = parseInt(prompt("Funciones disponibles los días: 25 - 26 - 27 de Noviembre \n \n(La función inaugural del Jueves 25 de Noviembre tiene 10% de descuento) \n \nIngrese el dia elegido: (25, 26 o 27)"));
        console.log ("Fecha selec: "+fecha);

        const f25 = 25;
        const f26 = 26;
        const f27 = 27;  
    
        if (fecha === 25 && fecha !== isNaN) {
            alert ("Ha seleccionado fecha:  " + f25 + " de Noviembre (10% Descuento)");
        }
        else if (fecha === 26 && fecha !== isNaN) {
            alert ("Ha seleccionado fecha:  " + f26 + " de Noviembre");
        }
        else if (fecha === 27 && fecha !== isNaN) {
            alert ("Ha seleccionado fecha:  " + f27 + " de Noviembre");
        }
        else {
            alert ("Debe seleccionar una opcion valida");
            return comprar();
        }

    let confirmacioncompra= prompt ("Cargo fijo por utilizar el servicio $ 300 \n \nDesea confirmar la compra? (Indique Si o No)").toLowerCase();
        console.log ("Conf. compra: "+confirmacioncompra);

        const sicompra = "si";

        const preciopalco = 3500;
        const precioplatea = 5500;
        const comision =  300 ;

        const subtotal = (a,b) => a * b;
        const descuento = (a,b) => (a * b) * 0.1;
        const totalentradas  = (a,b,c) => (a * b) + c ;
        const totalentradasdescuento  = (a,b,c) => (a * b)-((a * b) * 0.1) + c ;

        if (confirmacioncompra === sicompra && confirmacioncompra !==null) {
            
            if (seleccionubicacion === palco && fecha === f25) {
                console.log ("Total :"+totalentradasdescuento(cantentradas,preciopalco,comision))
                alert ("Resumen:\n \nCantidad entradas: "+cantentradas+" - Ubicación: Palco - Fecha: "+fecha+"/11/21\n \nSubtotal: $ "+subtotal(cantentradas,preciopalco)+"\nDescuento: $ "+descuento(cantentradas,preciopalco)+"\nCargo servicio : $ 300\n \nTOTAL: $ "+totalentradasdescuento(cantentradas,preciopalco,comision));
            }

            else if (seleccionubicacion === palco && (fecha === f26 || fecha === f27)) {
                console.log ("Total :"+totalentradas(cantentradas,preciopalco,comision))
                alert ("Resumen:\n \nCantidad entradas: "+cantentradas+" - Ubicación: Palco - Fecha: "+fecha+"/11/21\n \nSubtotal: $ "+subtotal(cantentradas,preciopalco)+"\nCargo servicio : $ 300\n \nTOTAL: $ "+totalentradas(cantentradas,preciopalco,comision));
            }

            else if (seleccionubicacion === platea && fecha === f25) {
                console.log ("Total :"+totalentradasdescuento(cantentradas,precioplatea,comision))
                alert ("Resumen:\n \nCantidad entradas: "+cantentradas+" - Ubicación: Platea - Fecha: "+fecha+"/11/21\n \nSubtotal: $ "+subtotal(cantentradas,precioplatea)+"\nDescuento: $ "+descuento(cantentradas,precioplatea)+"\nCargo servicio : $ 300\n \nTOTAL: $ "+totalentradasdescuento(cantentradas,precioplatea,comision));
            }

            else if (seleccionubicacion === platea && (fecha === f26 || fecha === f27)) {
                console.log ("Total :"+totalentradas(cantentradas,precioplatea,comision))
                alert ("Resumen:\n \nCantidad entradas: "+cantentradas+" - Ubicación: Palco - Fecha: "+fecha+"/11/21\n \nSubtotal: $ "+subtotal(cantentradas,precioplatea)+"\nCargo servicio : $ 300\n \nTOTAL: $ "+totalentradas(cantentradas,precioplatea,comision));
            }
            else {
                alert ("Error")
            }
        } 
        else {
        }

}

/*
do{
    let optionProd = showMenuProductions();

        if (optionProd.toString() === '1') {
            let optionDateOb1 = showMenuDatesOb1();
            if(optionDateOb1 === (datesOb1.length + 1)){
                break;
            }
        }
        else if (optionProd.toString() === '2') {
            let optionDateOb2 = showMenuDatesOb2();
            if(optionDateOb2 === (datesOb2.length + 1)){
                break;
            }
        }
        else if (optionProd.toString() === '3') {
            let optionDateOb3 = showMenuDatesOb3();
            if(optionDateOb3 === (datesOb2.length + 1)){
                break;
            }
        }
        else if (optionProd === (productions.length + 1)){
            break;
        }

    let optionLoc = showMenuLocations();
    if(optionLoc === (locations.length + 1)){
        break;
    }
    let qty = parseInt(prompt(selectedQty));
    //addToCard(optionProd, optionDate, optionLoc, qty);

    resp = prompt("Desea comprar mas entradas? Indique s / n");

}while(resp === 's');

if(car.length > 0) showTotal();

alert("Gracias por tu visita"); 
}





//Seleccion fecha OB1 -----------------------------------------------------------
const showMenuDatesOb1 = () =>{
    let menudatesOb1 = "Funciones disponibles los días: 7, 8 y 9 de Enero \n¡¡Función inaugural día Viernes 7 de Enero: 10% de descuento!! \n \nIngrese la opción elegida: (ej. 1) \n";
    datesOb1.forEach((date)=>{
        menudatesOb1 += date.id + ". Fecha: " + date.day + " de Enero \n"
    });
    menudatesOb1 += (datesOb1.length + 1) + ". Salir selección";
    let optDob1 = parseInt(prompt(menudatesOb1));
    return optDob1;
  };

//Seleccion fecha OB2
const showMenuDatesOb2 = () =>{
    let menudatesOb2 = "Funciones disponibles los días: 21, 22 y 23 de Febrero \n \nIngrese la opción elegida: (ej. 1) \n";
    datesOb2.forEach((date)=>{
        menudatesOb2 += date.id + ". Fecha: " + date.day + " de Enero \n"
    });
    menudatesOb2 += (datesOb2.length + 1) + ". Salir selección";
    let optDob2 = parseInt(prompt(menudatesOb2));
    return optDob2;
};

//Seleccion fecha OB3
const showMenuDatesOb3 = () =>{
    let menudatesOb3 = "Funciones disponibles los días: 4, 5 y 6 de Febrero \n¡¡Función despedida día Domingo 6 de Febrero: 10% de descuento!! \n \nIngrese la opción elegida: (ej. 1) \n";
    datesOb3.forEach((date)=>{
        menudatesOb3 += date.id + ". Fecha: " + date.day + " de Enero \n"
    });
    menudatesOb3 += (datesOb3.length + 1) + ". Salir selección";
    let optDob3 = parseInt(prompt(menudatesOb3));
    return optDob3;
};
*/