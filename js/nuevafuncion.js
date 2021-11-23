
const selectedQty = 'Ingrese la cantidad de entradas:'
let car = [];
const fixedCost = 500;


let locations = [
    {id:'1', place: 'Palco bajo', day:'Viernes',  date:'07/01/22', name:'Lago de los Cisnes',  price: 2500, stock: 30, discount: 0.1},
    {id:'2', place: 'Palco balcon', day:'Viernes',  date:'07/01/22', name:'Lago de los Cisnes',  price: 4500, stock: 30, discount: 0.1},
    {id:'3', place: 'Platea', day:'Viernes',  date:'07/01/22', name:'Lago de los Cisnes',  price: 3500, stock: 30, discount: 0.1},
    {id:'4', place: 'Palco bajo', day:'Sábado',  date:'08/01/22', name:'Lago de los Cisnes',  price: 2500, stock: 30, discount: 0},
    {id:'5', place: 'Palco balcon', day:'Sábado',  date:'08/01/22', name:'Lago de los Cisnes',  price: 4500, stock: 30, discount: 0},
    {id:'6', place: 'Platea', day:'Sábado',  date:'08/01/22', name:'Lago de los Cisnes',  price: 3500, stock: 30, discount: 0},
    {id:'7', place: 'Palco bajo', day:'Domingo',  date:'09/01/22', name:'Lago de los Cisnes',  price: 2500, stock: 30, discount: 0},
    {id:'8', place: 'Palco balcon', day:'Domingo',  date:'09/01/22', name:'Lago de los Cisnes',  price: 4500, stock: 30, discount: 0},
    {id:'9', place: 'Platea', day:'Domingo',  date:'09/01/22', name:'Lago de los Cisnes',  price: 3500, stock: 30, discount: 0},
]


//Seleccion ubicacion
const showMenuLocations = () =>{
    let menulocations = "Ingrese la opción elegida: (ej. 1) \n";
    locations.forEach((location)=>{
        menulocations += location.id + ". " + location.date + location.place + "\n"
    });
    menulocations += (locations.length + 1) + ". Salir selección";
    let optL = parseInt(prompt(menulocations));
    return optL;
};

//Verificar stock entradas
const isStock = (selectqty, stock) => {
    if(selectqty > stock){
        alert(`No existen suficientes entradas disponibles \nEntradas disponibles: ${stock}`);
        return false;
    }
    return true;
};

//Agregar al carrito las entradas seleccionadas
const addToCard = (optionLoc, qty) => {
    const foundLoc = locations.find(location => location.id === optionLoc.toString());
    if(isStock(qty, foundLoc.stock)){
            if (location.discount !== 0 ) {
                let item = {
                    prod: foundLoc.name,
                    day: foundLoc.day,
                    date: foundLoc.date,
                    place: foundLoc.place,
                    selectqty: qty,
                    subprice: foundLoc.price * qty,
                    discount: (foundLoc.price * qty) * foundLoc.discount,
                    price: (foundLoc.price * qty) - ((foundLoc.price * qty) * foundLoc.discount),
                }
                car.push(item);
                alert(`Se ha agregado al carrito: \n${foundLoc.name} - Fecha: ${foundLoc.day} ${foundLoc.date} - Ubicación: ${foundLoc.place} - Cant: ${qty} \nImporte: $ ${item.subprice} \nDescuento: -$ ${item.discount} \nImporte con descuento: $ ${item.price}`)
            }
            else {
                let item = {
                    prod: foundLoc.name,
                    day: foundLoc.day,
                    date: foundLoc.date,
                    place: foundLoc.place,
                    selectqty: qty,
                    price: foundLoc.price * qty,
                }
                car.push(item);
                alert(`Se ha agregado al carrito: \n${foundLoc.name} - Fecha: ${foundLoc.day} ${foundLoc.date} - Ubicación: ${foundLoc.place} - Cant: ${qty} \nImporte: $ ${item.price}`)
            }
        locations[optionLoc - 1].stock -= qty;
    }
};

//Calculo Total
const showTotal = () => {
    let dataSubTotal = "";
    let subtotal = 0;
    car.forEach(location => {
        dataSubTotal += `${location.prod} - ${location.date} - ${location.place} - cant: ${location.selectqty} - Importe: $ ${location.price} \n`;
        subtotal += location.price
    })
    dataSubTotal += `Subtotal: $ ${subtotal}`;
    let datatotal = "";
    datatotal += subtotal + fixedCost;
    alert (`${dataSubTotal} \nCargo servicio: +$ ${fixedCost} \n \nTOTAL: $ ${datatotal} `);
    return;
};