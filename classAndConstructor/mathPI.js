const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

//  console.log(Math.PI);

// example
 const chai = {
    fullName: "chaimasala",
    price: 23,
    brand: "mdh",
    allBrand: function() {
      console.log("chai");
    }
 }
// it only provide limeted controle on property
Object.defineProperty(chai, "fullName", {
    writable: false,
    enumerable: false
 })

const product = Object.getOwnPropertyDescriptor(chai, "fullName");
console.log(product);

// itrate(can we looped over)

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
};