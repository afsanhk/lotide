const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  return eqArrays(array1,array2) ? console.log(`✅ Assertion Passed: Array 1 === Array 2`) : console.log(`❌ Assertion Failed: Array 1 !== Array 2`);
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // False