// IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION
// An IIFE is used to create a function expression that is immediately executed.

// named IIFE
(function code(){
    console.log(`DB Connected!`);
})();       //use semi colon when you use two IIFE

//unnamed IIFE with an arrow function
((name) => {
    console.log(`${name}, DB is connected!`);
})('Tanya')     // Immediately invokes the arrow function with 'Tanya' as the argument