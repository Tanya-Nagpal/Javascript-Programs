const real_heros = ["krishna", "ram", "gaura"]
const img_heros = ["superman", "flash", "batman"]

// real_heros.push(img_heros)  //pushing array into another array

console.log(real_heros);

//accessing value from an array which is inside another array
// console.log(real_heros[3][1]);

const both_heros = real_heros.concat(img_heros) //concat adds one value at the end
console.log("Using concatenation:", both_heros);

const all_new = [...real_heros, ...img_heros, ...both_heros];   // Using spread method to merge all arrays
console.log("Using spread method:", all_new);


const newArray = [1, 2, 3, [4, 5, 6], 7, [2, 4, [8, 9]]]    // Nested array
const anotherArr = newArray.flat(Infinity)  // Flattening nested array
console.log(anotherArr);


console.log(Array.isArray("Tanya"))  // Checking if "Tanya" is an array 
console.log(Array.from("Tanya"))    // Converting string "Tanya" into an array of characters
console.log(Array.from({name: "tanya"})) // Converting object into array (empty array as the object isn't iterable)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //output an array of variables