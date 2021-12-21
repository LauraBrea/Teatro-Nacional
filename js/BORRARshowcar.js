//Verificar contenido carrito ------------------------------------------------

window.onload =  function showcar () {

    const checkcar = JSON.parse(localStorage.getItem ("car"));
    
    if (checkcar.lenght != 0) {

        const legendCar = document.getElementById ("legendCar");
        legendCar.style.display = "none";

        const carpage = document.getElementById ("carpage");
        carpage.style.display = "block";

        const carfooter = document.getElementById ("carfooter");
        carfooter.style.display = "block";


        let carlist=document.getElementById ("carlist");

        for (const item of checkcar) {

            let li = document.createElement ("li");
    
            li.textContent = `${item.show} - ${item.day} ${item.date} - Boletos: ${item.qty} ${item.place} - Subtotal: $ ${item.subprice} - Descuento: -$ ${item.discount} - Total: $ ${item.pricetot}`;
            carlist.appendChild(li);
        }

        let fixed=document.getElementById ("fixedcost");
        fixed.textContent = `$ ${fixedCost}`;

        showTotal(checkcar);

    } else {
        const legendCar = document.getElementById ("legendCar");
        legendCar.style.display = "block";

        const carfooter = document.getElementById ("carfooter");
        carfooter.style.display = "block";
    };

};

