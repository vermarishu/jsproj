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
