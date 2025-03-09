// singleton
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Anshika", //key-value pair
    [mySym]: "mySym1",
    "Full name": "Anshika Gupta",
    age: 21,
    location: "Ghaziabad",
    email: "anshika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym]);

JsUser.email = "anshika@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "anshika@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); //this["name"] by this you can also access
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
