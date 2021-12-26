//  Contador de entradas -------------------------------

$('.quantity').each(function() {
    let spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      let oldValue = parseFloat(input.val());
        if (oldValue >= max) { 
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
      spinner.find("input").val(newVal);
      //SelectorSlide.val(newVal);.    /*aquí pone el selector del slide*/
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      let oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
      spinner.find("input").val(newVal);
     //SelectorSlide.val(newVal);        /*aquí pone el selector del slide*/
      spinner.find("input").trigger("change");
    });
  });

//  Desplegable Entrega de entradas y Elegir mis Asientos--------------

$("#deliverticket").click(() => {
  $("#delivertxt").slideToggle(500);
  });

$("#selectseat").click(() => {
  $("#seattxt").slideToggle(500);
  });

//  Abrir Desplegable Menú Reservar entradas 7 Ene ---------------------

let sieteEne = document.getElementById ("sieteEne");

sieteEne.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundDate = dates.find (date => date.name === 'sieteEne');
    console.log (foundDate);
    
    let dateJSON = JSON.stringify (foundDate);
    sessionStorage.setItem ("showtempo", dateJSON);
    console.log (dateJSON);

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "contents";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "none";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "none";

    const nameTicket = document.getElementById ("nameTicket");
    nameTicket.textContent = "LAGO DE LOS CISNES";

    const dateTicket = document.getElementById ("dateTicket");
    dateTicket.textContent = "Viernes, 7 Enero 2022 - 19.30hs (-10%)";
    
})
//  Abrir Desplegable Menú Reservar entradas 8 Ene ---------------------

let ochoEne = document.getElementById ("ochoEne");

ochoEne.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundDate = dates.find (date => date.name === 'ochoEne');
    console.log (foundDate);
    
    let dateJSON = JSON.stringify (foundDate);
    sessionStorage.setItem ("showtempo", dateJSON);
    console.log (dateJSON);

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "contents";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "none";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "none";

    const nameTicket = document.getElementById ("nameTicket");
    nameTicket.textContent = "LAGO DE LOS CISNES";

    const dateTicket = document.getElementById ("dateTicket");
    dateTicket.textContent = "Sábado 8 Enero 2022 - 19.30hs";
})
//  Abrir Desplegable Menú Reservar entradas 9 Ene ---------------------

let nueveEne = document.getElementById ("nueveEne");

nueveEne.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundDate = dates.find (date => date.name === 'nueveEne');
    console.log (foundDate);
    
    let dateJSON = JSON.stringify (foundDate);
    sessionStorage.setItem ("showtempo", dateJSON);
    console.log (dateJSON);

    const reservartickets = document.getElementById ("reservartickets");
    reservartickets.style.display = "contents";

    const tituloLC = document.getElementById ("tituloLC");
    tituloLC.style.display = "none";

    const sinopsisLC = document.getElementById ("sinopsisLC");
    sinopsisLC.style.display = "none";

    const nameTicket = document.getElementById ("nameTicket");
    nameTicket.textContent = "LAGO DE LOS CISNES";

    const dateTicket = document.getElementById ("dateTicket");
    dateTicket.textContent = "Domingo 9 Enero 2022 - 19.00hs";
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

    sessionStorage.clear();
})
