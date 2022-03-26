/*
The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.

syntax of fineIndex : array.findIndex(function(currentValue, index, arr), thisValue)
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = number.findIndex((currentValue, index, arr) => {
  return currentValue > 7;
});
console.log(result); // outpute : 7 (7 is the index number of the value 8)

const number2 = [1, 2, 3, 4, 5];
const result2 = number2.findIndex((number) => number > 10);
console.log(result2); // outpute : -1;(no match is found thats why returns -1)
