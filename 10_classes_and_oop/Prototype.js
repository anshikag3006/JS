// let myName = "Anshika     "
// let myDrink = "chai    " 

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.anshika = function(){
    console.log(`anshika is present in all objects`);
    
}

Array.prototype.heyAnshika = function(){
    console.log('Anshika says hello');
    
}

// heroPower.anshika()
myHeros.anshika()
myHeros.heyAnshika()
// heroPower.heyAnshika()

//inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"anshika".trueLength()
'iceTea'.trueLength()