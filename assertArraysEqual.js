const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(array1, array2) {
  return eqArrays(array1,array2) ? console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`) : console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
};

module.exports = assertArraysEqual;
