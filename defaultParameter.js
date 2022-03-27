/*
Default function parameters allow named parameters to be initialized
 with default values if no value or undefined is passed.

 Syntax
 function fnName(param1 = defaultValue1, ..., paramN = defaultValueN)

*/

function myFunc(x = 7) {
  return x;
}
console.log(myFunc()); // show default value 7
console.log(myFunc(undefined)); // if we call with undefined then it returns 7
console.log(myFunc(null)); // it returns Null.

const sum = (num1, num2 = 1) => {
  return num1 + num2;
};

console.log(sum(7, 3)); // output : 10
console.log(sum(17)); // output : 17
console.log(sum()); // outpute : NaN
