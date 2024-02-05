//Compares 2 operators
/***************Basic Conversion***************/
// console.log(5 > 3);
// console.log(5 >= 3);
// console.log(5 < 3);
// console.log(5 == 3);
// console.log(5 != 3);

console.log("5" > 3)    //JS automatically converts string into number while comparing
console.log("05" > 3);  // It's a good practice to use comparison operator between same datatype

//Avoid below type of conversions as they are confusing
console.log(null > 0);  //JS converts null into 0
console.log(null == 0); // == works differently than >= (Both values should be equal while using ==)
console.log(null >= 0); //Converts null to 0 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strictly equality check ===
console.log("5" === 5);