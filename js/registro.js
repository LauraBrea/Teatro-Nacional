class User {
    constructor (name,lastname,mail,password) {
        this.name = name.toUpperCase();
        this.lastname = lastname.toUpperCase();
        this.mail = mail.toLowerCase();
        this.password = password;
    }
}
//----------------------------------------------------------------------------

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

    let reguser = JSON.parse (localStorage.getItem ("usuario"));
    let regname = " ";
    let reglastname = " ";
    let regmail = " ";
    let regpass = " ";

    for (let usuario of reguser) {
        regname += usuario.name;
        reglastname += usuario.lastname;
        regmail += usuario.mail;
        regpass += usuario.password;
    
        if (regname == " " || reglastname == " " || regmail == " " || regpass == " "){

            const legendReg = document.getElementById ("usuReg");
            legendReg.textContent = "Los datos ingresados no son válidos";
            legendReg.style.background = "white";   
            legendReg.style.paddingTop = "70px";
            legendReg.style.paddingBottom = "400px"; 

            localStorage.removeItem ("usuario");
            
        } else {
            const legendReg = document.getElementById ("usuReg");
            legendReg.textContent = "Registrado! Inicie sesión para comprar boletos";
            legendReg.style.background = "white";   
            legendReg.style.paddingTop = "70px";
            legendReg.style.paddingBottom = "400px"; 
        }
    }
})


