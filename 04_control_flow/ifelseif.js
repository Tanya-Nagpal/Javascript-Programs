// if 

const isUserLoggedIn = true
const temparature = 49

if(temparature == 40){
    console.log("Temparature is less than 50.");
}
console.log("Executed!");
// if-else
if(temparature === "40"){
    console.log("Temparature is less than 50.");
}else{
    console.log("Temparature is greater than 50.");
}

// Comparison operators: <, >, <=, >=, ==, !=, ===

const score = 300

if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}


const bal = 1000
if(bal > 500) console.log("Tested");    // Implicit scope (One line)

if (bal < 500) {
    console.log("Less than!");
}else if(bal < 750){
    console.log("Less than 750!");
}else if(bal < 900){
    console.log("Less than 900!");
}else{
    console.log("Less than 1200");
}


const userLoggedIn = true
const withDebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && withDebitCard){
    console.log("Allowed to buy the product");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in!");
}
