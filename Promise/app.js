new Promise(function(resolve, reject) {

    setTimeout(() => {
        console.log("async task");
        resolve()
    }, 1000);
})
.then(() => {
    console.log("async task resolve");
})
// we can also do same thing by adding function to whole system like
// function anotherWay()  {
//     new Promise(function(resolve, reject) {
        
//         setTimeout(() => {
//             console.log("async task");
//             resolve()
//         }, 1000);
//     })
// }
// anotherWay().then(() => {
//     console.log("async task resolve");
// });

const promiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({username: "rishu", email: "rishu@example.com"})
    }, 1000);
});
promiseTwo
.then((user) => {
    console.log(user);
})

const promiseThree = new Promise((resolve, reject) => {
   let error = false;
  
    if(!error) {
        resolve({
            username: "vermarishu", fullname: "rishuverma"})
    } else {
        reject("error: username went wrong")
    }
})
promiseThree
.then((user) => {
    return user.username
})
// whatever pass the return(username) will accept the parameter belwo .then like username
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("This will definitely run at the end, either it resolve or reject"))

// async/await
const promiseFour = new Promise((resolve, reject) => {
   setTimeout(() => {
    let value = true;  //false

    if(!value) {
        resolve({
            username: "verma", fullname: "rishu"})
    } else {
        reject("something went wrong")
    }
   }, 1000);
 })

async function consumePromiseFour() {
    try{
        const response = await promiseFour
        console.log(response);
    } catch (error){
        console.log("ERROR:", error);
    }
    
} 
consumePromiseFour();

const requestUrl = 'https://api.github.com/users/vermarishu'

async function getAllData() {
    
    try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR:", error);
    }
}
getAllData();

// samething with .then 
fetch(requestUrl)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    consol.log(error);
})