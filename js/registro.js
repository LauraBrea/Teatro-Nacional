let btnReg = document.getElementById ("btnReg");

    btnReg.addEventListener ("click", function (e) {
        e.preventDefault(); 

    let datname = document.getElementById ("name");
    let datlastname= document.getElementById ("lastname");
    let datmail = document.getElementById ("mail");
    let datpassword = document.getElementById ("password");

    newUser.push(new User (datname.value, datlastname.value, datmail.value, datpassword.value));
    let userJSON =JSON.stringify (newUser);
    localStorage.setItem ("usuario", userJSON);

    const legendReg = document.getElementById ("usuReg");
                legendReg.textContent = "Registrado! Inicie sesión para comprar boletos";
                legendReg.style.background = "white";   
                legendReg.style.paddingTop = "70px";
                legendReg.style.paddingBottom = "80px";
})
