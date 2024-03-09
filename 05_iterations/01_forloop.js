// for loop
for( let index = 0; index <= 10; index++){
    const element = index;
    if(element == 7) console.log("7 is the best number!");
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }   
}

let myArray = ["bali", "italy", "goa"]

for(let index = 0; index < myArray.length; index++){    // if index value is not incremented then loops falls into an infinity loop
    const element = myArray[index]
    console.log(element);
}

// breaks: breaks the loop based on condition
// continue: skips current value of condtions

for(let i = 1; i <= 15; i++){
    if(i == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 1; i <= 15; i++){
    if(i == 6){
        console.log("Skipped 6");
        continue;
    }
    console.log(`Value of i is ${i}`);
}