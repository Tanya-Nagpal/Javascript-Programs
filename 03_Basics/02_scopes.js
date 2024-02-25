/*
1. `let`: Use when you need to reassign a variable.
2. `const`: Use for variables that won't be reassigned.
3. `var`: Avoid due to scope issues and use `let` instead.
*/

/*
var c = 1000
let a = 3000

if(true){
    let a = 10
    const b = 15
    console.log("IN BLOCK values of a and b: ", a, b);
    var c = 25
}

var c = 888 //value of var can be changed from anywhere

// console.log(a);     // as a is defined using let in if block it can not be accessed from outside
// console.log(b);     // as b is defined using const which cannot be declared is not allowed to access globally
console.log(c);     // c is declared using var so it can be accessed globally and this where the problem lies

console.log("Value of 'a' outside if block: ", a);
*/


// NESTED FUNCTION

function one() {
    const username = "tanya"

    function two() {
        const website = 'youtube'
        console.log("log of second function: ", username);
    }
    // console.log(website);

    two()
}

one()

// SCOPE IN NEXTED IF LOOPS

if(true){
    const username = "Tanya"
    if(username === "Tanya"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);   // website is not in this scope, hence it can not be printed
}

// console.log(username);       // username is not in this scope, hence it can not be printed

// ******* IMPORTANT ***** ( Mini Hoisting)

//Function declarations are hoisted to the top of their scope, meaning they are available for use before they are declared in the code.
console.log(addOne(7));

function addOne(num) {
    return num + 1
}

//A function expression defines a function as part of an expression, typically by assigning it to a variable.
addTwo(7)       // Function expressions are not hoisted, so they cannot be called before they are defined in the code.
const addTwo = function(num){   // This is function expressions not function declaration
    return num + 2
}