// Primitive => copy banti h then usme changes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive) => original ka reference milta h then usme changes

// Array, Objects, functions

// const heros = ["Captain America", "doga"]
// let myObj = {
//     name: "anshika",
//     age : 20,
// }

// const myFunction = function(){
//     console.log("Hello")
// }

//+++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myYTname = "anshikadotcom"

let anothername = myYTname;
anothername = "anshikagupta3006"

console.log(myYTname);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "anshika@google.com"

console.log(userOne.email);
console.log(userTwo.email);

