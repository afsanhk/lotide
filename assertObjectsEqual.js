const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return eqObjects(actual,expected) ? console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;



// TEST CODE

// const assertEqual = require('./assertEqual');
// const eqArrays = require('./eqArrays');
// //  PRIMITIVES
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// console.log(assertObjectsEqual(ab,ba));

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertObjectsEqual(ab, abc)); // => false

// // ARRAYS
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertObjectsEqual(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertObjectsEqual(cd, cd2)); // => false