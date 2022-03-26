//  Ternary operator

let age = 7;
let type;

// if (age >= 18) {
//   type = "Adult.";
// } else {
//   type = "Young.";
// }
// console.log(type);

/* ternary operator
second level
type = (age >= 18) ? "Adult" : "Young" */
 
// third level
type = (age >= 18) ? "Adult" : (age > 10) ? "Young" : "Child"
console.log(type);

let isLoggedin = false;
// let access = isLoggedin ? true : false;
let access = isLoggedin;
console.log(access);