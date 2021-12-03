//  Desplegable Entrega de entradas -------------------------------

let deliverticket = document.getElementById ("deliverticket");

deliverticket.addEventListener ("mouseenter", function (e) {
        e.preventDefault(); 

        const delivertxt = document.getElementById ("delivertxt");
        delivertxt.style.display = "contents";
})

deliverticket.addEventListener ("mouseleave", function (e) {
    e.preventDefault(); 

    const delivertxt = document.getElementById ("delivertxt");
    delivertxt.style.display = "none";
})
//  Desplegable Elegir mis asientos ---------------------------------

let selectseat = document.getElementById ("selectseat");

selectseat.addEventListener ("mouseenter", function (e) {
        e.preventDefault(); 

        const seattxt = document.getElementById ("seattxt");
        seattxt.style.display = "contents";
})

selectseat.addEventListener ("mouseleave", function (e) {
    e.preventDefault(); 

    const seattxt = document.getElementById ("seattxt");
    seattxt.style.display = "none";
})
//  Abrir Desplegable Menú Reservar entradas 7 Ene ---------------------

let sieteEne = document.getElementById ("sieteEne");

sieteEne.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "contents";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "none";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "none";

    const nameTicket = document.getElementById ("nameTicket");
    nameTicket.textContent = "LAGO DE LOS CISNES";

    const dateTicket = document.getElementById ("dateTicket");
    dateTicket.textContent = "Viernes, 7 Enero 2022";
})
//  Abrir Desplegable Menú Reservar entradas 8 Ene ---------------------

let ochoEne = document.getElementById ("ochoEne");

ochoEne.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "contents";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "none";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "none";

    const nameTicket = document.getElementById ("nameTicket");
    nameTicket.textContent = "LAGO DE LOS CISNES";

    const dateTicket = document.getElementById ("dateTicket");
    dateTicket.textContent = "Sábado 8 Enero 2022";
})
//  Abrir Desplegable Menú Reservar entradas 9 Ene ---------------------

let nueveEne = document.getElementById ("nueveEne");

nueveEne.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "contents";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "none";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "none";

    const nameTicket = document.getElementById ("nameTicket");
    nameTicket.textContent = "LAGO DE LOS CISNES";

    const dateTicket = document.getElementById ("dateTicket");
    dateTicket.textContent = "Domingo 9 Enero 2022";
})
//  Cerrar Desplegable Menú Reservar entradas ---------------------------

let closeTicket = document.getElementById ("closeTicket");

closeTicket.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "none";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "block";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "block";
})

