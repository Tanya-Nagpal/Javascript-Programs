const name = "tanya";  // Declaring a constant variable 'name' and assigning it a primitive string value 'tanya'
const age = 21;  // Declaring a constant variable 'age' and assigning it the numeric value 21

// The following line is commented out, labeled as outdated
// console.log(name + count + "value");     //Outdated

// This line uses template literals to create a string with variables embedded within it, known as string interpolation
console.log(`Hello, my name is ${name} and my age is ${age}.`);

// String Declaration:
const gameName = new String('tanya30');  // Creating a new instance of the String object with the value 'tanya30'

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); // returns {} represents object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newStr = gameName.substring(0,3);
console.log(newStr);

const anotherStr = gameName.slice(-7, 4);
console.log(anotherStr);

const newStr1 = "     tanya   "
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://tanya.com/tanya%20githubpage"

console.log(url.replace('%20', '_'));
console.log(url.includes('github'));
console.log(url.includes('microsoft'));


const str = "tanya_3_0"
console.log(str.split('_'));