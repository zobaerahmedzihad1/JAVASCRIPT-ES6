/*
The shift() method removes the first item of an array.

The shift() method changes the original array.

The shift() method returns the shifted element.

Syntax
array.shift()
*/

const friends = ['masum', 'bellal', 'sahin', 'imran']
const bestFriend = friends.shift()
console.log(bestFriend); // output : masum

const animals = []
const animal = animals.shift()
console.log(animal); // output : undefined