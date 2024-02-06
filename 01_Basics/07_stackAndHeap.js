// Primitive datatype uses Stack
// Non-Primitive uses Heap

let myName = "tanya"

let anotherName = myName
anotherName = "manya"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tanya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);