/*The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

If the filter method doesn't match anyone in that case it returns an [] empty array.
*/

const numbers = [5, 9, 47, 7, 3, 8, 3, 15, 27];
const result = numbers.filter((number) => number > 10);
console.log(result); // outpute: [47,15,27] it returns an array.

const result2 = numbers.filter((number) => number > 100);
console.log(result2); // outpute: [] (Empty array because it doesn't match any condition.)
