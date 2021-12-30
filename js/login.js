const checkingUser = () => localStorage.getItem("checkUser") === null ? [] : JSON.parse(localStorage.getItem("checkUser"));
const addUser = (newlog) => localStorage.setItem("checkUser", JSON.stringify(newlog));

//-----------------------------------------------------------------------------

let btnVal = document.getElementById ("btnVal");

    btnVal.addEventListener ("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

    const logmail = document.getElementById ("mail").value;
    const logpassword = document.getElementById ("password").value;

        const loguser = {
            mail: logmail,
            password: logpassword,
        }
        console.log (loguser);

        const newlog = checkingUser();
        newlog.push(loguser);
        addUser (newlog);

//sessionStorage.clear();



/*
    let reguser = JSON.parse(localStorage.getItem ("dataBaseUser"));
    let regmail = " ";
    let regpass = " ";
    let regname = " ";

    for (let dataBaseUser of reguser) {
        regmail += dataBaseUser.mail;
        regpass += dataBaseUser.password;
        regname += dataBaseUser.name;
    }

    console.log (regmail, regpass);

   
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
            usuVal.textContent = "Bienvenido/a " + regname + " !";

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
    */
})

/*
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

    let reguser = JSON.parse(localStorage.getItem ("dataBaseUser"));
    let regmail = " ";
    let regpass = " ";
    let regname = " ";

    for (let dataBaseUser of reguser) {
        regmail += dataBaseUser.mail;
        regpass += dataBaseUser.password;
        regname += dataBaseUser.name;
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
            usuVal.textContent = "Bienvenido/a " + regname + " !";

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

*/