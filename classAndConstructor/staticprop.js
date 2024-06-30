class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`username: ${this.username}`);
    }
    //In JavaScript, static properties (or methods) are defined on the class itself, not on instances of the class. They can be accessed directly using the class name.
    static createId() {
        console.log("staticprop");
    }
}

const detail = new User("rishu");
console.log(detail.createId); // it will thrown an error due static 

//They can be accessed directly using the class name.
User.createId()

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
    price() {
        console.log(`${this.username} out of stock`);
    }
}
const iphone = new Teacher("iphone14", "@mail.com");
iphone.price()
iphone.createId() // it will also thrown an error , due to static because it not let access to the instance of the class