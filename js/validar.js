class loginUser {
    constructor (mail, password) {
        this.mail = mail;
        this.password = password;
    }
}
//-----------------------------------------------------------------------------

let btnVal = document.getElementById ("btnVal");

    btnVal.addEventListener ("click", function (e) {
        e.preventDefault();

    let reguser = JSON.parse (localStorage.getItem ("usuario"));
    let regmail = " ";
    let regpass = " ";

    for (let usuario of reguser) {
        regmail += usuario.mail;
        regpass += usuario.password;
    }

    let mail = document.getElementById ("mail").value;
    let password = document.getElementById ("password").value;

    logUser.push(new loginUser(mail, password));
    let userLogJSON =JSON.stringify (logUser);
    localStorage.setItem ("usuariolog", userLogJSON);

    let loguser = JSON.parse (localStorage.getItem ("usuariolog"));
    let logmail = " ";
    let logpass = " ";

    for (let usuariolog of loguser) {
        logmail += usuariolog.mail;
        logpass += usuariolog.password;

        if (regmail === logmail && regpass === logpass) {

            logUser.push(new loginUser(logmail, logpass));
            let userLogJSON =JSON.stringify (logUser);
            localStorage.setItem ("usuariolog", userLogJSON);
            
            const usuVal = document.getElementById ("usuVal");
            usuVal.textContent = "Bienvenido! Ya puede iniciar la compra";

            const loginVal = document.getElementById ("loginVal");
            loginVal.style.display = "none";

            const legendVal = document.getElementById ("legendVal");
            legendVal.style.display = "block";
        } 
        else {
            localStorage.removeItem ("usuariolog");

            const usuVal = document.getElementById ("usuVal");
            usuVal.textContent = "Los datos ingresados no son válidos";

            const loginVal = document.getElementById ("loginVal");
            loginVal.style.display = "none";

            const legendVal = document.getElementById ("legendVal");
            legendVal.style.display = "block";
        }
    }
})
