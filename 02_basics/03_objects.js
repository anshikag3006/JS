// singleton
// Object.create
//object literals

const JsUser = {
    name: "Anshika", //key-value pair
    "Full name": "Anshika Gupta",
    age: 21,
    location: "Ghaziabad",
    email: "anshika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])
