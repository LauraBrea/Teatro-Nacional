//Verificar contenido carrito ------------------------------------------------

$(function showcar() {

    const checkcar = JSON.parse(localStorage.getItem ("listCar"));

    if (checkcar !== null) {

        $("#legendCar").hide();
        $("#carpage").show();
        $("#carfooter").show();

        for (const item of checkcar) {

            $("#carlist").append(`<li> <div class="car__items">
            <span class="span"> ${item.show} </span>
            <span class="span"> ${item.date} - ${item.time}hs </span>
            <span class="span"> ${item.qty} ${item.place} </span>
            <span class="span"> $ ${item.subprice} </span>
            <span class="span"> -$ ${item.discount} </span>
            <span class="span"> $ ${item.pricetot} </span>
            </div> </li>` );
        }

        let fixed=document.querySelector ("#fixedcost");
        fixed.textContent = `$ ${fixedCost}`;

        showTotal(checkcar);

    } else {

        $("#legendCar").show();
        $("#carpage").hide();
        $("#carfooter").show();
    };
});

//  Vaciar carrito de compras --------------------------------------------

$("#carclear").click(function carclear() {

    localStorage.removeItem('listCar');

    $("#legendCar").fadeIn(1000);
    $("#carpage").hide();
    $("#carfooter").show();
});

//  Confirmar compra --------------------------------------------

$("#carconfirm").click(function carconfirm() {
    
    localStorage.removeItem('listCar');

    $("#legendCar").fadeIn(1000);
    $("#carpage").hide();
    $("#carfooter").show();

    const codecar = genCode();

    const legendCarTxt = document.querySelector ("#legendCarTxt");
          legendCarTxt.textContent = `Código de Reserva:   BA${codecar}`;

        $ ("#legendCarTxt").css ("top","30%");

        $("#legendCarTxt").append(
            `<div class="legendTxtinsert"> <h4 class="mainH4"> El código de reserva y las instrucciones de pago han sido enviadas por correo electrónico a su dirección de E-mail. </h4>
             <h4 class="legendTxtinsert mainH4"> ¡Gracias por su compra! </h4> </div>` );
});

/*     
//  Confirmar compra --------------------------------------------

$("#carconfirm").click(function carconfirm() {

    localStorage.removeItem('listcar');

    $("#legendCar").fadeIn(1000);
    $("#carpage").hide();
    $("#carfooter").show();

    //definir usuario----- falta def key local storage
    //let mailuser = JSON.parse (localStorage.getItem ("usuario"));
    //let mail= " ";
    //let name= " ";

    //for (let usuario of mailuser) {
    //    mail += usuario.mail;
    //    name += usuario.name;
    //}

    const legendCarTxt = document.querySelector ("#legendCarTxt");
        legendCarTxt.textContent = "Gracias por su compra  !";

        $ ("#legendCarTxt").css ("top","30%");

        $("#legendCarTxt").append(
            `<div class="legendTxtinsert"> <h4 class="mainH4"> El comprobante de reserva y las instrucciones de pago han sido enviados a: </h4>
             <h5 class="mainH5"> <strong> ${mail} <strong></h5>
             <h4 class="legendTxtinsert mainH4"> ¡Recuerde que la validez de la reserva es de 48hs! </h4> </div>` );
});
*/