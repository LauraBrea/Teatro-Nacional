//  Seleccion Boletos Platea --------------------------------------

let btnPL = document.getElementById ("btnPL");

    btnPL.addEventListener ("click", function (e) {
        e.preventDefault(); 

        const foundPlace = locations.find (location => location.name === 'PL');
        const foundQty = document.getElementById ("inputPL").value;
        const foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

        addToCard (foundPlace, foundQty, foundShow); 

        const listacompra = document.getElementById ("listacompra");
        listacompra.textContent = `* ${foundShow.date} - ${foundShow.show} - ${foundQty} ${foundPlace.place} - SubTot: $ ${(foundPlace.price*foundQty)} - Desc: -$ ${((foundPlace.price * foundQty) * foundShow.discount)} - Total: $ ${((foundPlace.price * foundQty)-((foundPlace.price * foundQty)*foundShow.discount))}`;
    })

//  Seleccion Boletos Palco Bajo --------------------------------------

let btnPB = document.getElementById ("btnPB");

btnPB.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PB');
    const foundQty = document.getElementById ("inputPB").value;
    let foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    addToCard (foundPlace, foundQty, foundShow); 

    const listacompra = document.getElementById ("listacompra");
    listacompra.textContent = `* ${foundShow.date} - ${foundShow.show} - ${foundQty} ${foundPlace.place} - SubTot: $ ${(foundPlace.price*foundQty)} - Desc: -$ ${((foundPlace.price * foundQty) * foundShow.discount)} - Total: $ ${((foundPlace.price * foundQty)-((foundPlace.price * foundQty)*foundShow.discount))}`;
})

//  Seleccion Boletos Palco Alto --------------------------------------

let btnPA = document.getElementById ("btnPA");

btnPA.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PA');
    const foundQty = document.getElementById ("inputPA").value;
    let foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    addToCard (foundPlace, foundQty, foundShow); 

    const listacompra = document.getElementById ("listacompra");
    listacompra.textContent = `* ${foundShow.date} - ${foundShow.show} - ${foundQty} ${foundPlace.place} - SubTot: $ ${(foundPlace.price*foundQty)} - Desc: -$ ${((foundPlace.price * foundQty) * foundShow.discount)} - Total: $ ${((foundPlace.price * foundQty)-((foundPlace.price * foundQty)*foundShow.discount))}`;
})


