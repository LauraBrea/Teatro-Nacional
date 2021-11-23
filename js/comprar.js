function comprar () {

alert("Bienvenido al sistema de compra de entradas del Teatro Nacional");

do{
  
    let optionLoc = showMenuLocations();
    if(optionLoc === (locations.length + 1)){
        break;
    }
    let qty = parseInt(prompt(selectedQty));

    addToCard(optionLoc, qty);

    resp = prompt("Desea comprar mas entradas? Indique s / n");

}while(resp === 's');

if(car.length > 0) showTotal();

alert("Gracias por tu visita"); 
}