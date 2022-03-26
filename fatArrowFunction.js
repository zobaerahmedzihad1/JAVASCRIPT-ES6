// normal function
function number() {
  return 10;
}
console.log(number());

// convert arrow function
const number1 = () => {
  return 15;
};
console.log(number1());

// single line of arrow function :
/* If the function has only one statement, and the statement returns a value,
  you can remove the brackets and the return keyword. */
const number2 = () => 20;
console.log(number2());

// Arrow function with parameter
// If you have only one parameter, you can skip the parentheses as well.
const number3 = (num1, num2) => num1 + num2;
console.log(number3(7, 10));

// javascript this keyword confution
var javascript = {
  name: "Javascript",
  libraries: ["react", "angular", "vue"],
  printLibraries: function () {
//     console.log(this);
    this.libraries.forEach((a) =>{
     //     console.log(this);
      console.log(`${this.name} loves ${a}`);  
    });
  },
};
javascript.printLibraries();
