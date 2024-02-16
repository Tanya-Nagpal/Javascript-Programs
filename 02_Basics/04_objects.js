// const gitUser = new Object()    //singleton object
const gitUser = {}  // Non-singleton object

gitUser.id = "tan30"
gitUser.name = "Tanya Nagpal"
gitUser.loggedIn = false

console.log(gitUser);      // Outputs all values

const regularUser = {
    email : "tanyanagpal@gmail.com",
    userName : {
        fullName : {
            firstName : "Tanya",
            lastName : "Nagpal"
            } 
    } 
}

console.log(regularUser.email,"\n" ,regularUser.userName.fullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {
    5: "e",
    6: "f"
}

console.log(obj1, obj2, obj3);  //Output all objects in separate arrays

const flat = {...obj1, ...obj2, ...obj3}
console.log("Flattened object:", flat);  // Objects are not iterable unlike arrays

const obj4 = {obj1, obj2, obj3}
console.log(obj4);  // Output all objects in an array

const obj5 = Object.assign({}, obj1, obj2, obj3)    // {} is target where source is strored: obj1, obj2, obj3 are sources
console.log(obj5);  // Output all the keys and values of object

/*
if you skip adding {} then first object becomes target and source joins with it
const target = { a: 3, b: 5}
const source = { c: 7, d: 9}
const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 3, b: 5, c: 7, d: 9} as source joins with the target

console.log(returnedTarget == target);
// Expected output: true
*/

// Refer Object.assign() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Value from users through form is recieved in the form of array of objects

const users = [
    {
        id: 1,
        email: "one@gmail.com"
    },
    {
        id: 1,
        email: "two@gmail.com"
    },
    {
        id: 1,
        email: "three@gmail.com"
    },
]

console.log(users[1].email);

console.log(gitUser);

console.log(Object.keys(gitUser));
console.log(Object.values(gitUser));
console.log(Object.entries(gitUser));

console.log(gitUser.hasOwnProperty('loggedIn'));

const course = {
    courseName: "Javascript",
    price: "799",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);

// const { courseInstructor } = course
// console.log(courseInstructor);

// De- structuring object
const { courseInstructor: inst } = course

console.log(inst);