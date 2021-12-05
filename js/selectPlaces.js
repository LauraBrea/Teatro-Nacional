//  Seleccion Boletos Platea --------------------------------------

let btnPL = document.getElementById ("btnPL");

btnPL.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PL');
    const foundQty = document.getElementById ("inputPL").value;
    let foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    let itemPlace = {
        show: foundShow.show,
        day: foundShow.day,
        date: foundShow.date,
        qty: foundQty,
        place: foundPlace.place,
        subprice: foundPlace.price * foundQty,
        discount: (foundPlace.price * foundQty) * foundShow.discount,
        price: (foundPlace.price * foundQty) -((foundPlace.price * foundQty) * foundShow.discount),
    }
    let itemPlaceJSON = JSON.stringify (itemPlace);
    sessionStorage.setItem ("placetempoPL", itemPlaceJSON);
    console.log (itemPlaceJSON);

    const listacompra = document.getElementById ("listacompra");
    listacompra.textContent = `${itemPlace.date} - ${itemPlace.show} - ${itemPlace.qty} ${itemPlace.place} - SubTot: $ ${itemPlace.subprice} - Desc: -$ ${itemPlace.discount} - Total: $ ${itemPlace.price}`;
})

//  Seleccion Boletos Palco Bajo --------------------------------------

let btnPB = document.getElementById ("btnPB");

btnPB.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PB');
    const foundQty = document.getElementById ("inputPB").value;
    let foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    let itemPlace = {
        show: foundShow.show,
        day: foundShow.day,
        date: foundShow.date,
        qty: foundQty,
        place: foundPlace.place,
        subprice: foundPlace.price * foundQty,
        discount: (foundPlace.price * foundQty) * foundShow.discount,
        price: (foundPlace.price * foundQty) -((foundPlace.price * foundQty) * foundShow.discount),
    }
        let itemPlaceJSON = JSON.stringify (itemPlace);
        sessionStorage.setItem ("placetempoPB", itemPlaceJSON);
        console.log (itemPlaceJSON);

        const listacompra = document.getElementById ("listacompra");
        listacompra.textContent = `${itemPlace.date} - ${itemPlace.show} - ${itemPlace.qty} ${itemPlace.place} - SubTot: $ ${itemPlace.subprice} - Desc: -$ ${itemPlace.discount} - Total: $ ${itemPlace.price}`;
    })

//  Seleccion Boletos Palco Alto --------------------------------------

let btnPA = document.getElementById ("btnPA");

btnPA.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PA');
    const foundQty = document.getElementById ("inputPA").value;
    let foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    let itemPlace = {
        show: foundShow.show,
        day: foundShow.day,
        date: foundShow.date,
        qty: foundQty,
        place: foundPlace.place,
        subprice: foundPlace.price * foundQty,
        discount: (foundPlace.price * foundQty) * foundShow.discount,
        price: (foundPlace.price * foundQty) -((foundPlace.price * foundQty) * foundShow.discount),
    }
        let itemPlaceJSON = JSON.stringify (itemPlace);
        sessionStorage.setItem ("placetempoPA", itemPlaceJSON);
        console.log (itemPlaceJSON);

        const listacompra = document.getElementById ("listacompra");
        listacompra.textContent = `${itemPlace.date} - ${itemPlace.show} - ${itemPlace.qty} ${itemPlace.place} - SubTot: $ ${itemPlace.subprice} - Desc: -$ ${itemPlace.discount} - Total: $ ${itemPlace.price}`;
    })


