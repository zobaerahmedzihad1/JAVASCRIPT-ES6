//  rest operator
/*
Syntax
function f(a, b, ...theArgs) {
 //...
}
*/

const myFunc = (a, b, ...params) => {
     console.log(a, b);
     console.log(rest);
}

myFunc(4,5,6,7,8,9)