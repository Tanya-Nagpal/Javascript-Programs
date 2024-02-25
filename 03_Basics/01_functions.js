// A function is a block of reusable code written to perform a specific task.
// Syntax: function functionName(){------code------}

function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
}

// function reference 
// sayMyName()      //calls sayMyName function

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)      // prints the addition (doesn't return)
}

const ans = addTwoNumbers(3,2)      // Executes function but doesn't return any value to store in variable
console.log(ans);

function addTwoNumbersReturn(number1, number2){
    const result = number1 + number2
    return result
}

const result = addTwoNumbersReturn(7, 9)
console.log("Result: ", result);

function loginUserMessage(username = "Unknown user"){    // A default username is set incase if argument is not passed
    if(!username){              // Executes when when neither defaul value not arugument is passed 
        console.log("Please, enter your name to login!");
        return 
    }

    return `${username} just logged in.`
}

console.log(loginUserMessage());        // prints default argument
console.log(loginUserMessage("Tanya"));


// spread operator in function is used to take multiple arguments
function calculateCartPrice(val1, val2, ...num1){
    return num1     // num1 returns all the values given after val1 and val2
}

console.log(calculateCartPrice(200, 400, 700, 3000));

// ******** PASSING OBJECT AS AN ARGUMENT IN A FUNCTION

const user = {
    name: 'Tanya',
    age:  21
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age of user is ${anyObject.age}.`);
}

handleObject(user)

// Passing object directly
handleObject({
    name: "Tia",
    age: 23
})


// function with objects
const myNewArray = [3, 7, 9, 11]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log("Using function by sending argument: ", returnSecondValue(myNewArray));
console.log("Using function by sending values directly: ", returnSecondValue([5, 2, 6, 4]));