// Object destructuring.
const user = {
  name: "zihad",
  age: 19,
  id: 01,
  education: {
    degree: "masters",
    subject: { major: "English" },
  },
};

// Old way
// const name = user['name']
// console.log(name);

// destructuring way
const { name: title, id } = user;
console.log(title, id);

const { education: { degree } = {} } = user; // set default value
console.log(degree);

const {
  education: {
    subject: { major },
  },
} = user; // Super Nested
console.log(major);

// Array Destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [a, b] = numbers;
console.log(a, b);

const newNumbers = [7, 8, 9, 10, 11, 12];
const [, , , x, y] = newNumbers; // x = 10 and y = 11
console.log(x, y);

const friends = ["zihad", "bellal", ["masum", "imran"], "shahin"];
const [First, , [three], four] = friends; // Nested.
console.log(First, three, four); // zihad masum shahin


var num1 = 1;
var num2 = 2;

// Old way
// var temp = num1;
// num1 = num2;
// num2 = temp;

// console.log(num1, num2);

// with destructuring
[num2, num1] = [num1, num2]
console.log(num1, num2);

