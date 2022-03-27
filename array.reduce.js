/*
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];
const sum = numbers.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);

console.log(sum); // output : 28
console.log(numbers);