//Animación Menú Burger ---------------------------------------------------------

$(".burger__iconbox").click(() => {
    $( ".burger__nav" ).slideToggle(1500);
    });

//Arreglos de Nuevo Usuario y Validar Usuario --------------------------------

const newUser = [];
const logUser = [];
const car = [];
const fixedCost = 500;

const genId = () => Math.floor(Math.random() * (1000000 - 1)) + 1;

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
    {name:'PB', place:'Palco Bajo', price: 2500, stock: 30},
    {name:'PA', place:'Palco Alto', price: 4500, stock: 50},
    {name:'PL', place:'Platea', price: 3500, stock: 100},
]

//Verificar stock entradas ----------------------------------------------------

const isStock = (qty, stock) => {
    if(qty > stock){
        return false;
    }
        return true;
};

//Agregar al carrito ----------------------------------------------------

const addToCard = (foundPlace, foundQty, foundShow) => {

   const foundLoc = locations.find(location => location.name === foundPlace.name);

    if (foundQty != 0 ) {

            if(isStock(foundQty, foundLoc.stock)){

                    let itemCar = {
                        name: foundShow.name + foundPlace.name,
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

                    
                    car.push (itemCar);
                    console.log (car);

                    let carJSON = JSON.stringify (car);
                    localStorage.setItem ("car", carJSON);
                    console.log (carJSON);

                    foundLoc.stock -= foundQty;
                    
                    const itemShow = document.getElementById ("listacompra");
                    itemShow.textContent = `* ${foundShow.date} - ${foundShow.show} - ${foundQty} ${foundPlace.place} - SubTot: $ ${(foundPlace.price*foundQty)} - Desc: -$ ${((foundPlace.price * foundQty) * foundShow.discount)} - Total: $ ${((foundPlace.price * foundQty)-((foundPlace.price * foundQty)*foundShow.discount))}`;
        
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