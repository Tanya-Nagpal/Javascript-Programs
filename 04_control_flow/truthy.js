const userEmail = "tanya@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
// returns right-hand side operand when left-hand side operand is null or undefined, and otherwise returns left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 17 ?? undefined
console.log(val1);


// Terinary Operator
// Syntax: condition ? true:false

const icecreamPrice = 100
icecreamPrice <= 80? console.log("less than 80"): console.log("More than 80");