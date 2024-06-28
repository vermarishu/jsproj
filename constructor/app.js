function User(username, age, gender) {
    this.username = username;
    this.age = age; 
    this.gender = gender;

    this.greetin = function () {
        // console.log(`welcome ${this.username}`);
    }
    return this
}

const user1 = new User("rishu", 11, "male");
const user2 = new User("girl", 10, "female");
// console.log(user1);
// console.log(user2 instanceof User);
 
// user1.greetin();

function multiple(num) {
    return num*5
}
multiple.power = 2

console.log(multiple(5));
console.log(multiple.power);
//(. dot ) used in Object but we can also use in function

    console.log(multiple.prototype);


    
/// prototype 
    let myName = ["rishu", "verma"];
     
    let myFullName = {
        fullName: "rishu",
        nickName: "verma",

        thereName: function() {
            console.log(`name is ${this.fullName}`);
        } 
    };

  
    // Object.prototype.rishuverma = function() {
    //     console.log("my name is here");
    // }
    
    Array.prototype.rishuverma = function() {
        console.log("name is aviable in Object");
    }

    myName.rishuverma();
    // myFullName.rishuverma();

/// print acutual(trueLength) length of string

    let anoterUsername = "rishuverma   ";

    String.prototype.trueLnegth = function() {
        console.log(`${this}`);
        console.log(`${this.name}`);
        console.log(`True length is: ${this.trim().length}`);
    }

    anoterUsername.trueLnegth()
    "rishu   ".trueLnegth()
    "verma".trueLnegth()