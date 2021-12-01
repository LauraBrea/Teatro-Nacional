//----------------------------------------------------------------------------
const newUser = [];

class User {
    constructor (name,lastname,mail,password) {
        this.name = name.toUpperCase();
        this.lastname = lastname.toUpperCase();
        this.mail = mail.toLowerCase();
        this.password = password;
    }
}

//----------------------------------------------------------------------------
const logUser = [];

class loginUser {
    constructor (mail, password) {
        this.mail = mail;
        this.password = password;
    }
}
//-----------------------------------------------------------------------------