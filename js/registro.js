let newUser = [];
let logUser = [];
//----------------------------------------------------------------------------

class User {
    constructor (name,lastname,mail,password) {
        this.name = name.toUpperCase();
        this.lastname = lastname.toUpperCase();
        this.mail = mail.toLowerCase();
        this.password = password;
    }
}

class loginUser {
    constructor (mail, password) {
        this.mail = mail;
        this.password = password;
    }
}
//-----------------------------------------------------------------------------

function addUser() {

    let datname = document.getElementById ("name");
    let datlastname= document.getElementById ("lastname");
    let datmail = document.getElementById ("mail");
    let datpassword = document.getElementById ("password");

newUser.push(new User (datname.value, datlastname.value, datmail.value, datpassword.value));
let userJSON =JSON.stringify (newUser);
localStorage.setItem ("usuario", userJSON);

const titulo = document.getElementById('LR');
titulo.textContent = "usuario registrado";

}
//-------------------------------------------------------------------------------

function validate() {

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
    
        } else {
            localStorage.removeItem ("usuariolog");
        }
    }
}