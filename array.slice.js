/*
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

Syntax
array.slice(start, end)
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8];

const result = number.slice(3, 5);
console.log(result); // output :  [4,5]
console.log(number);

const result2 = number.slice(-6, 5);
console.log(result2); // output: [3,4,5]

const fruits = ["banana", "orange ", "mango", "apple", "lemon"];
const fruit = fruits.slice(2, 4);
console.log(fruit);

const animals = ['dog', 'cat', 'elephant', 'rat', 'cow', 'goat']
const animal1 = animals.slice(3)
console.log(animal1); //output : ['rat', 'cow', 'goat']

const animal2 = animals.slice(-2)
console.log(animal2); // output: ['cow', 'goat']

const animal3 = animals.slice()
console.log(animal3); //['dog', 'cat', 'elephant', 'rat', 'cow', 'goat']
