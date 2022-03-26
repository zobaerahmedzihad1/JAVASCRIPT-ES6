/* javascript has only 6 falsy value. 

1. false
2. null
3. undefined
4. NaN
5. '' (Empty string)
6. 0 (zero)

*/

const myVar = 0;

if (myVar) {
  console.log("I'm truthy.");
} else {
  console.log("I'm falsy.");
}
