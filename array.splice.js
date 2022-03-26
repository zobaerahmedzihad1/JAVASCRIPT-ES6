/*
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.

Syntax
array.splice(index, howmany, item1, ....., itemX)

*/

const friends = ['zihad', 'jewel', 'bellal', 'masum', 'shahin', 'karima', 'mohema']
const availableFriend = friends.splice(2, 3, 'sumon', 'sahadat')
console.log(availableFriend); 
console.log(friends); // output : [ 'bellal', 'masum', 'shahin' ]

  const friend = friends.splice(3, 0, 'imran')
  console.log(friend); //output : []
  console.log(friends); // ['zihad','jewel','sumon','imran','sahadat','karima', 'mohema']

  const actualFriend = friends.splice(4)
console.log(actualFriend); // [ 'sahadat', 'karima', 'mohema' ]

