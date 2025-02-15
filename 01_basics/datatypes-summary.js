// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, functions

const heros = ["Captain America", "doga"]
let myObj = {
    name: "anshika",
    age : 20,
}

const myFunction = function(){
    console.log("Hello")
}