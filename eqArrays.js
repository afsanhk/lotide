const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};


const eqArrays = function(array1, array2) { 
  
  if (array1.length !== array2.length) {
    return false;
  } else  {
    for (let i = 0; i < array1.length; i++) { 
      // RECURSIVE CASE -- NESTED ARRAY 
      if(Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (eqArrays(array1[i],array2[i]) === false) {
          return false;
        }
      } 
      // BASE CASE -- NO NESTED ARRAY 
      else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};


// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should fail


// STRETCH - NESTED ARRAYS WITH RECURSION

console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true)) // => true
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false)) // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false)) // => false

// STRETCH - EXTRA TESTS

a = [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]];
b = [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]];
c = [[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]

d = ['hello', [[['I'], ['am']]], ['nested']];
e = ['hello', [[['I'], ['am']]], ['nested']];
console.log(assertEqual(eqArrays(d,e),true));