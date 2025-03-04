const name = "anshika"
const repoCount = 5

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anshika-dd-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //index pr konsa char h
console.log(gameName.indexOf('h')); //position of char

const newString = gameName.substring(0, 4);
console.log(newString); //last count nhi krta //ignores -ve sign

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    anshika     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anshika.com/anshika%20gupta"

console.log(url.replace('%20', '-'));

console.log(url.includes('anshika'))

console.log(gameName.split('-'));
