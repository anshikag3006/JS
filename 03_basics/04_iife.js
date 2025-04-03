// Immediately Invoked Function Expressions (IIFE )
//to remove global scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ()() function def, execution call //we have to use ; to explicitly tell iif to stop executing
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('anshika');
