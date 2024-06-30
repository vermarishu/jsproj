class User {
    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }
    
            encryptPassword() {
                return `${this.password}abc`
            }

            changeUsername() {
                return `${this.username.toUpperCase()}`
            }
}

const detail = new User("rishu", "233", "@email.com") 
console.log(detail.encryptPassword());
console.log(detail.changeUsername()); 


