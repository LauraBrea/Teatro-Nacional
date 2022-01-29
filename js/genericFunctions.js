//Animación Menú Burger ---------------------------------------------------------

$(".burger__iconbox").click(() => {
    $(".burger__nav").slideToggle(1500);
    });

//Arreglos de Obras-Fechas y Ubicación ---------------------------------------

let dates = [
    {name: 'sieteEne', date:'07/01/22', time:'19.30', show:'Lago de los Cisnes', discount: 0.1},
    {name: 'ochoEne', date:'08/01/22', time:'19.30', show:'Lago de los Cisnes', discount: 0},
    {name: 'nueveEne', date:'09/01/22', time:'19.00', show:'Lago de los Cisnes', discount: 0},
    {name: 'ventiunoEne', date:'21/01/22', time:'19.30', show:'La Bella Durmiente', discount: 0.05},
    {name: 'ventidosEne', date:'22/01/22', time:'19.30', show:'La Bella Durmiente', discount: 0},
    {name: 'ventitresEne', date:'23/01/22', time:'19.00', show:'La Bella Durmiente', discount: 0},
]

let locations = [
    {name:'PB', place:'Palco Bajo', price: 2500, stock: 5},
    {name:'PA', place:'Palco Alto', price: 4500, stock: 50},
    {name:'PL', place:'Platea', price: 3500, stock: 100},
]

//Generar ID ---------------------------------- --------------------------------

const genId = () => Math.floor(Math.random() * (1000000 - 1)) + 1;
const genCode = () => Math.floor(Math.random() * (9999999)) + 1;


//Verificar stock entradas ----------------------------------------------------

const isStock = (qty, stock) => {
    if(qty > stock){
        return false;
    }
        return true;
};

//Agregar al carrito ----------------------------------------------------

const fixedCost = 500;

const callCar = () => localStorage.getItem("listCar") === null ? [] : JSON.parse(localStorage.getItem("listCar"));
const saveCar = (newitemCar) => localStorage.setItem("listCar", JSON.stringify(newitemCar));

const addToCard = (foundPlace, foundQty, foundShow) => {

   const foundLoc = locations.find(location => location.name === foundPlace.name);

    if (foundQty != 0 ) {

            if(isStock(foundQty, foundLoc.stock)){

                    let itemCar = {
                        id: genId(),
                        show: foundShow.show,
                        time: foundShow.time,
                        date: foundShow.date,
                        qty: foundQty,
                        place: foundPlace.place,
                        price: foundPlace.price,
                        subprice: foundPlace.price * foundQty,
                        discount: (foundPlace.price * foundQty) * foundShow.discount,
                        pricetot: (foundPlace.price * foundQty) -((foundPlace.price * foundQty) * foundShow.discount),
                    }
                    
                    foundLoc.stock -= foundQty;

                    const newitemCar = callCar();
                    newitemCar.push(itemCar);
                    saveCar(newitemCar);
                    
                    const itemShow = document.getElementById ("listacompra");
                    itemShow.textContent = `* ${itemCar.date} - ${itemCar.show} - ${itemCar.qty} ${itemCar.place} - SubTot: $ ${itemCar.subprice} - Desc: -$ ${itemCar.discount} - Total: $ ${itemCar.pricetot}`;

            } else {
                const itemShow = document.getElementById ("listacompra");
                itemShow.textContent = `* Quedan solo ${foundPlace.stock} boletos disponibles para esta ubicación.`;
            }

    } else {
        const itemShow = document.getElementById ("listacompra");
        itemShow.textContent = `* Debe seleccionar la ubicación y cantidad de boletos.`;
    }
}

//Calculo Total ----------------------------------------------------
const showTotal = (checkcar) => {

    let subtotal = 0;
    checkcar.forEach(checkitem => {
        subtotal += checkitem.pricetot
    })
    let total = "";
    total += subtotal + fixedCost;

    let showtot=document.getElementById ("showtot");
        showtot.textContent = `$ ${total}`;
    return;
};