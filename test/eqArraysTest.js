const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TESTS
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should fail


// STRETCH - NESTED ARRAYS WITH RECURSION

console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true)); // => true
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false)); // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false)); // => false

// STRETCH - EXTRA TESTS

const a = [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]];
const b = [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]];
const c = [[[[[[1,2,3,],4],5],6],7], [10], [13], [[[[18]]]]];
console.log(assertEqual(eqArrays(a,b),true));
console.log(assertEqual(eqArrays(a,c),false));

const d = ['hello', [[['I'], ['am']]], ['nested']];
const e = ['hello', [[['I'], ['am']]], ['nested']];
console.log(assertEqual(eqArrays(d,e),true));

