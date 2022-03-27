/*
Spread Operator
The JavaScript spread operator (...) allows us to quickly copy all or part
 of an existing array or object into another array or object.
*/

const numbers = [1, 2, 3, 4];

// Old way

// const newNumbers = [numbers[0], numbers[1], numbers[2], numbers[3], 5, 6];
// console.log(newNumbers);

const newNumbers = [...numbers, 5, 6, 7];
console.log(newNumbers);

const copyNumber = [...numbers];
numbers.push(20);
console.log(copyNumber); //[1, 2, 3, 4] exact copy

const myObj1 = {
  x: 1,
  y: 2,
};
const myObj2 = {
  a: 1,
  b: 2,
};

const myObj = { ...myObj1, ...myObj2 };
console.log(myObj);
