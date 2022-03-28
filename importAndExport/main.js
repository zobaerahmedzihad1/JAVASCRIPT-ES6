// import and export
import { pi, a } from "./External"; // named import
import { pi as varPI, a as varA } from "./External"; // named import with alias.
import * as test from './External.js'
import external from './External.js' // default export
import external , {pi} from './External.js' // default export with named export
import {myFunc} from './External';

console.log(pi, a);
console.log(test.a);
console.log(varPI, varA);
console.log(external);
console.log(myFunc);