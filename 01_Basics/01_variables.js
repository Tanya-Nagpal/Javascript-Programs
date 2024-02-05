//As Javascript is dynamically typed there is no need to specify datatype while declaring variables
const accountId = 1113777   //value of const variable cannot be changed
let accountEmail = "tanya30@gmail.com"      //let is used to declare variables
var accountPswd = "12345"
/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/
let accountState;

accountCity = "Auroville"   // Possible to reserve memory without specifying let/var(not advised)
// accountId = 333     //not allowed as accountId is constant variable

accountEmail = "tanya@gmail.com"
accountPswd = "123123"
accountCity = "Bangalore"

console.log(accountId);     //prints value of one variable

console.table([accountId, accountEmail, accountPswd, accountCity, accountState]);       //prints values of multiple variables
