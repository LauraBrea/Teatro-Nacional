//Arreglos de Nuevo Usuario y Validar Usuario --------------------------------

const newUser = [];
const logUser = [];

let car = [];


//Arreglos de Obras-Fechas y Ubicación ---------------------------------------

let dates = [
    {name: 'sieteEne', date:'07/01/22', day:'Viernes', show:'Lago de los Cisnes', discount: 0.1},
    {name: 'ochoEne', date:'08/01/22', day:'Sábado', show:'Lago de los Cisnes', discount: 0},
    {name: 'nueveEne', date:'09/01/22', day:'Domingo', show:'Lago de los Cisnes', discount: 0},
    {name: 'ventiunoEne', date:'21/01/22', day:'Viernes', show:'La Bella Durmiente', discount: 0.1},
    {name: 'ventidosEne', date:'22/01/22', day:'Sábado', show:'La Bella Durmiente', discount: 0},
    {name: 'ventitresEne', date:'23/01/22', day:'Domingo', show:'La Bella Durmiente', discount: 0},
]

let locations = [
    {name:'PB', place:'Palco Bajo', price: 2500, stock: 30},
    {name:'PA', place:'Palco Alto', price: 4500, stock: 30},
    {name:'PL', place:'Platea', price: 3500, stock: 3},
]

//Verificar stock entradas ----------------------------------------------------

const isStock = (selectqty, stock) => {
    if(selectqty > stock){
        alert(`No existen suficientes entradas disponibles \nEntradas disponibles: ${stock}`);
        return false;
    }
    return true;
};

//Agregar al carrito ----------------------------------------------------

const addToCard = (foundPlace, foundQty, foundShow) => {

    let itemPlace = {
        name: foundShow.name + foundPlace.name,
        show: foundShow.show,
        day: foundShow.day,
        date: foundShow.date,
        qty: foundQty,
        place: foundPlace.place,
        stock: foundPlace.stock,
        subprice: foundPlace.price * foundQty,
        discount: (foundPlace.price * foundQty) * foundShow.discount,
        price: (foundPlace.price * foundQty) -((foundPlace.price * foundQty) * foundShow.discount),
    }
       // if(isStock(itemPlace.qty, itemPlace.stock)){

        car.push (itemPlace);
        console.log (car);

    let carJSON = JSON.stringify (car);
    sessionStorage.setItem ("car", carJSON);
    console.log (carJSON);

       // locations[optionLoc - 1].stock -= qty;
    //}
    
}
