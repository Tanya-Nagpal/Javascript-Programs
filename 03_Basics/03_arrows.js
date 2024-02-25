/*
this keyword refers to the object to which the current code belongs.
In browser, the global object is windows whereas in standalone engines it is different
*/

// Creating an object
const user = {
    username: "Tanya",
    age: 21,

    // Adding a method to the object
    welcomeMsg: function() {
        // Logging a welcome message using the object's username property
        console.log(`${this.username}, welcome to this website!`);
        // Logging the context (value of "this") to the console
        console.log(this);
    }
}

user.welcomeMsg()

// Changing the username property of the user object
console.log("Welcome message after changing username:");
user.username = "Tia";
// Calling the welcomeMsg method again to see the updated message
user.welcomeMsg();

// Logging the global context (value of "this") to the console
console.log(this);

// Defining a function
function one(){
    // Declaring a variable within the function
    let username = 'tanya';
    // Logging the global context (value of "this") to the console
    console.log(this);
    // Attempting to log the username property of the global context (which is not defined)
    console.log(this.username); // this works for objects not functions
}
// calling function one
one()

//Using Function expressions
// const two = function(){
//     let username = "tanya"
//     console.log(this.username);  // this works for objects not functions
// }

const two = () => {
    let username = "tanya"
    console.log(this);
    console.log(this.username);
}

two()

// Arrow function with explicit return
const addNum = (num1, num2) => {
    return num1 + num2      // In curly braces, the return keyword is needed
}
console.log(addNum(3, 5));

// Arrow function with implicit return
const addNumImp = (num1, num2) =>  num1 + num2  // Implicit return

console.log(addNumImp(3, 2));

// returning object using arrow function

const returnObj = () => ({username: "Tanya"})   // Object must be wrapped in brackets

console.log(returnObj());

// arrow in loops
const myArr = [3, 4, 5, 2, 9]
myArr.forEach((element) => console.log(element) )