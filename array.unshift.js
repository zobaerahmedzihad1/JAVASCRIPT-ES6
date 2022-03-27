/*
The unshift() method adds new elements to the beginning of an array.

The unshift() method overwrites the original array.

The unshift() method adds one or more elements to the beginning 
of an array and returns the new length of the array.

Syntax
array.unshift(item1, item2, ..., itemX
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];
const addNew = numbers.unshift(10, 20);
console.log(addNew); // output : 9
console.log(numbers);

const addNegetiveNumber = numbers.unshift();
console.log(addNegetiveNumber); //output : 7
console.log(numbers);
