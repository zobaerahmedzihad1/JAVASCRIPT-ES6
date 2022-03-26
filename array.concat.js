/*
The concat() method concatenates (joins) two or more arrays.

The concat() method returns a new array, containing the joined arrays.

The concat() method does not change the existing arrays.

Syntax
array1.concat(array2, array3, ..., arrayX)
*/

const months = ["january", "february", "march"];
const newMonths = ["april", "may", "june"];
const anotherMonths = ["july", "august"];

const allMonths = months.concat(newMonths, anotherMonths);
console.log(months);
console.log(allMonths);

const month = newMonths.concat(['november', 'december'], anotherMonths )
console.log(month);
