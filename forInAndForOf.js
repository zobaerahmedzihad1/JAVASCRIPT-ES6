// for in()
/*
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/
const myObj = {
  name: "zihad",
  age: 19,
  from: "Bangladesh",
};

for (proparity in myObj) {
  console.log(proparity);
}

// forOf()

/*
The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays,
 Strings, Maps, NodeLists, and more:

SYNTAX
 for (variable of iterable) {
  statement
}
*/

const friends = ["zihad", "masum", "bellal", "shahin"];
for (const name of friends) {
  console.log(name);
}

let string = "Bangladesh";
for (const letter of string) {
  console.log(letter);
}

string = "Bangladesh";
for (const letter in string) {
  console.log(letter);
}

const friendInformation = [
  { name: "zihad", age: 19 },
  { name: "bellal", age: 20 },
  { name: "masum", age: 22 },
  { name: "jumman", age: 17 },
];

for (const friend of friendInformation) {
  console.log(friend);
}
