class User {
    constructor(username) {
        this.username = username
    }
    lgoMe() {
        console.log(`username is ${this.username}`);
    }
}
class teacher extends User {
    constructor(username, password, email) {
     super(username)
     this.password = password
     this.email = email
    }
    addCourse() {
        console.log(`course was add by ${this.username}`);
    }
}
    const chai = new teacher("rishu", 233, "@mail.com")
    chai.addCourse()

    const tea = new User("verma");
    tea.lgoMe()



/////// example by chatGpt and cohort
class Animal {
    constructor(aniamlType, names, colors, speaks, breads) {
        this.animalType = aniamlType
        this.names = names
        this.colors = colors
        this.speaks = speaks
        this.breads = breads 
    }

    speak() {
        console.log(`${this.animalType} - ${this.speaks}`);
    }
    name() {
        console.log(`Animal Name is - ${this.names}`);
    }
    color() {
        console.log(`Color of animal is - ${this.colors}`);
    }
    bread() {
        console.log(`Bread of animal is- ${this.breads}`);
    }
    
}

let dog = new Animal("dog", "bruno", "brown", "barks", "Greman shepherd");
let cat = new Animal("cat", "cati", "white", "mew-mew", "American");

dog.speak();
cat.name();
dog.name();
cat.speak();