const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
console.log(assertArraysEqual(middle([0,1,3]),[1]));
console.log(assertArraysEqual(middle([0,1,2,4]),[1,2]));
console.log(assertArraysEqual(middle([0,1]),[]));