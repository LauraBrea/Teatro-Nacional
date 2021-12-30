const callUser = () => localStorage.getItem("dataBaseUser") === null ? [] : JSON.parse(localStorage.getItem("dataBaseUser"));
const saveUser = (newUser) => localStorage.setItem("dataBaseUser", JSON.stringify(newUser));

//  Agregar nuevo usuario ----------------------------------------------------------------------------

let btnReg = document.getElementById ("btnReg");

btnReg.addEventListener ("click", function (e) {

    e.preventDefault();
    e.stopPropagation();

    const datname = document.getElementById ("name").value;
    const datlastname= document.getElementById ("lastname").value;
    const datmail = document.getElementById ("mail").value;
    const datpassword = document.getElementById ("password").value;

    if (datname !== "" && datlastname !== "" && datmail !== "" && datpassword !== ""){
       
        const user = { 
            name: datname.toUpperCase(),
            lastname: datlastname.toUpperCase(),
            mail: datmail.toLowerCase(),
            password: datpassword,
        };

        const newUser = callUser();
        newUser.push(user);
        saveUser(newUser);

        const loginReg = document.getElementById ("loginReg");
        loginReg.style.display = "none";

        const legendReg = document.getElementById ("legendReg");
        legendReg.style.display = "block";

        const usuReg = document.getElementById ("usuReg");
        usuReg.textContent = "Registrado "+user.name+"! Inicie sesión para comprar boletos";

    }
    else {
        const loginReg = document.getElementById ("loginReg");
        loginReg.style.display = "none";
        
        const legendReg = document.getElementById ("legendReg");
        legendReg.style.display = "block";
        
        const usuReg = document.getElementById ("usuReg");
        usuReg.textContent = "Los datos ingresados no son válidos";
    }
});





/*

//----------------------------------------------------------------------------

class User {
    constructor (name,lastname,mail,password) {
        this.name = name.toUpperCase();
        this.lastname = lastname.toUpperCase();
        this.mail = mail.toLowerCase();
        this.password = password;
    }
}

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

            const loginReg = document.getElementById ("loginReg");
            loginReg.style.display = "none";
            
            const legendReg = document.getElementById ("legendReg");
            legendReg.style.display = "block";
            
            const usuReg = document.getElementById ("usuReg");
            usuReg.textContent = "Los datos ingresados no son válidos";

            localStorage.removeItem ("usuario");
            
        } else {

            const loginReg = document.getElementById ("loginReg");
            loginReg.style.display = "none";

            const legendReg = document.getElementById ("legendReg");
            legendReg.style.display = "block";

            const usuReg = document.getElementById ("usuReg");
            usuReg.textContent = "Registrado! Inicie sesión para reservar boletos";
        }
    }
})


*/