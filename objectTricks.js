const a = 5;
const b = 3;
const person = {
  name: "zihad",
  age: 17,
  from: "Bangladesh",
  profession: "student",
  
//   object short hand
  a,
  b,
};

const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);
const entries = Object.entries(person);
console.log(entries);

// object short Hand
console.log(person.a);