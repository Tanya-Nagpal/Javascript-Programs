// Array: The Array object, enables storing a collection of multiple items under a single variable name

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ['Krishna', "Ram"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[2]);

// Array methods

myArr.push(10)
console.log("Push operation:", myArr);      //adds an element at the end of an array

myArr.pop()
console.log("Pop operation:", myArr)        // removes last element

myArr.unshift(15)
console.log("Unshift operation:", myArr);   // adds an element at the start of an array

myArr.shift()
console.log("Shift operation:", myArr);     // shifts(removes) the element which was added

console.log(myArr.includes(9));     // return boolean 1 if value is included, else 0
console.log(myArr.includes(1));     
console.log(myArr.indexOf(5));      // return index of the value


const newArr = myArr.join() //converts myArr object into a string
console.log(newArr)

console.log("Original Array:", myArr);

const new1 = myArr.slice(1, 4)
console.log("Sliced array", new1);
console.log("Array after slicing", myArr);

const new2 = myArr.splice(1,3)
console.log("Spliced Array", new2);     //changes are made on original array
console.log("Array after splicing", myArr);