/* *********** Dates ***************
`Date`: Date object in JavaScript, it represents a specific point in time. This point includes both the date (day, month, year) and the time (hours, minutes, seconds, milliseconds).

It allows working with dates and times, including creating new date instances, accessing and modifying various components of a date (such as year, month, day, hour, minute, second), and performing operations like formatting dates, comparing dates, and arithmetic operations with dates.
*/

let myDate = new Date() // Creating a new Date object
console.log(myDate.toString()); // Displaying date as a string
console.log(myDate.toDateString()); // Displaying date portion of the Date object
console.log(myDate.toLocaleString()); // Displaying date and time in local time format
console.log(typeof myDate); // Checking the type of myDate variable

// let myCreatedDate = new Date(2023, 0, 23)    // creates a new Date object representing January 23, 2023, at midnight (00:00:00 local time).
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //  creates a new Date object representing January 23, 2023, at 5:03 AM local time.
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("09-30-2023") // Creating a date object from a string with ambiguous format (MM-DD-YYYY)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // Getting the current timestamp in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC)
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime()); // Printing the timestamp representation of myCreatedDate
// console.log(Math.floor(Date.now()/1000)); // Printing the current timestamp in seconds (Unix timestamp), rounded down


let newDate = new Date() // Creating a new Date object representing the current date and time
console.log(newDate);
console.log(newDate.getMonth() + 1); // adding 1 to the month because months are zero-indexed
console.log(newDate.getDay()); // day of the week starting from index 0.

// `${newDate.getDay()} and the time `

console.log(
    newDate.toLocaleString('default', {
    weekday: "long",    // display the full name of the weekday
    
    })
)
