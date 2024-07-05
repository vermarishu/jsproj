class User {
    constructor(username, password, email) {
        this.username = username
        this.password = password // or this._password = password
        this.email = email // or this._email = email
    }
    // for email
    get email() {
        return `sldjkfl${this._email}`
    }
    set email(value) {
        this._email = value
    }
    // for passowrd
    get password() {
        return `23u4oh${this._password.toUpperCase()}w3h4oi`
    }
    set password(value) {
        this._password = value
    }
}

const detail = new User("rishuverma", "password", "rishu@email.com")      
console.log(detail.password);
console.log(detail.email);
