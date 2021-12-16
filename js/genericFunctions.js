//Arreglos de Nuevo Usuario y Validar Usuario --------------------------------

const newUser = [];
const logUser = [];
const car = [];
const fixedCost = 500;

//Arreglos de Obras-Fechas y Ubicación ---------------------------------------

let dates = [
    {name: 'sieteEne', date:'07/01/22', day:'Viernes', show:'Lago de los Cisnes', discount: 0.1},
    {name: 'ochoEne', date:'08/01/22', day:'Sábado', show:'Lago de los Cisnes', discount: 0},
    {name: 'nueveEne', date:'09/01/22', day:'Domingo', show:'Lago de los Cisnes', discount: 0},
    {name: 'ventiunoEne', date:'21/01/22', day:'Viernes', show:'La Bella Durmiente', discount: 0.05},
    {name: 'ventidosEne', date:'22/01/22', day:'Sábado', show:'La Bella Durmiente', discount: 0},
    {name: 'ventitresEne', date:'23/01/22', day:'Domingo', show:'La Bella Durmiente', discount: 0},
]

let locations = [
    {name:'PB', place:'Palco Bajo', price: 2500, stock: 3},
    {name:'PA', place:'Palco Alto', price: 4500, stock: 30},
    {name:'PL', place:'Platea', price: 3500, stock: 30},
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
                        day: foundShow.day,
                        date: foundShow.date,
                        qty: foundQty,
                        stock: foundLoc.stock,
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
                    console.log (locations);
                    
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
