/*
 map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.

Syntax
array.map(function(currentValue, index, arr), thisValue)
*/

const numbers = [1, 2, 3, 4, 5, 6];
const multiply = numbers.map((num) => {
  return num * 5;
});

console.log(multiply); // output : [ 5, 10, 15, 20, 25, 30 ]
console.log(numbers);
