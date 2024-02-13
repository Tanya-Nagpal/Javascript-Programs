// singleton: using constructor (created as literals)
// Object.create

// Object literals
const mySymbol = Symbol("Key1")     //declaring symbol

const jsUser = {        // contains keys and values
    name: "Tanya",
    "Full Name": "Tanya Nagpal",
    age: 21,
    location: "Hyderabad",
    email: "tanyanagpal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Thursday", "Sunday"],
    [mySymbol]: "myKey1"   //symbol must be used in square brackets
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
// console.log(jsUser.Full Name); // Incorrect syntax (string with spaces is not allowed with dot operator)
console.log(jsUser[mySymbol]); // Symbols must be accessed using square brackets

// Assigning an email to a property of jsUser object
jsUser.email = "tanyanagpal@yahoo.in";

// Freezing the jsUser object to prevent further modifications to its properties
// Object.freeze(jsUser);

// Attempting to change the value of the email property after freezing (which should fail)
jsUser.email = "tanyanagpal@microsoft.com";

// Displaying the frozen object to see if the email property was successfully changed (it shouldn't be)
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello, JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello, JS user, ${this.name}`);    // use "this" when u need to refer from same object
}

console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());