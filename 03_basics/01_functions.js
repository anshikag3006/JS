function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //parameters

//     console.log(number1 + number2);   
// }

function addTwoNumbers(number1, number2){ //parameters

    // let result = number1 + number2
    // return result 
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //arguments

// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return  
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("anshika"))
console.log(loginUserMessage())
