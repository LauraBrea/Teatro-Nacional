//  Seleccion Boletos Platea --------------------------------------

let btnPL = document.getElementById ("btnPL");

    btnPL.addEventListener ("click", function (e) {
        e.preventDefault(); 

        const foundPlace = locations.find (location => location.name === 'PL');
        const foundQty = document.getElementById ("inputPL").value;
        const foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

        addToCard (foundPlace, foundQty, foundShow); 
    })

//  Seleccion Boletos Palco Bajo --------------------------------------

let btnPB = document.getElementById ("btnPB");

btnPB.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PB');
    const foundQty = document.getElementById ("inputPB").value;
    const foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    addToCard (foundPlace, foundQty, foundShow); 
})

//  Seleccion Boletos Palco Alto --------------------------------------

let btnPA = document.getElementById ("btnPA");

btnPA.addEventListener ("click", function (e) {
    e.preventDefault(); 

    const foundPlace = locations.find (location => location.name === 'PA');
    const foundQty = document.getElementById ("inputPA").value;
    const foundShow = JSON.parse (sessionStorage.getItem ("showtempo"));

    addToCard (foundPlace, foundQty, foundShow); 
})


