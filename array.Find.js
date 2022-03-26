/*

1) The find() method does not change the original array.
2) The find() method returns the value of the first element that passes a test.
3) The find() method executes a function for each array element.
4) The find() method retuns undefined if no elements are found.
5) The find() method does not execute the function for empty elements.

syntax : array.find(function(currentValue, index, arr),thisValue)
*/

const number = [1,2,3,4,5,6,7]
const result = number.find(number => number > 6)
console.log(result); // outpute : 7


const number2 = [5,3,4,6,8]
const result2 = number2.find(number => number2 > 40)
console.log(result2); // outpute :  undefined

const number3 = []
const result3 = number3.find(number => number3 < 10)
console.log(result3);