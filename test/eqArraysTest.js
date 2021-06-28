const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe(`#eqArrays()`, () => {

  describe(`Non-nested arrays`, () => {

    it(`Should return true comparing [1,2,3] with [1,2,3]`, () => {
      assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
    });

    it(`Should return false comparing [3,2,1] with [1,2,3]`, () => {
      assert.isFalse(eqArrays([3,2,1], [1, 2, 3]));
    });

    it(`Should return false comparing [1,2,3] with [1,2,"3"]`, () => {
      assert.isFalse(eqArrays([1, 2, 3], [1, 2, "3"]));
    });

  });

  describe(`Nested arrays`, () => {
    it(`Should return true comparing [[2, 3], [4]] with [[2, 3], [4]]`, () => {
      assert.isTrue(eqArrays([[2, 3], [4]],[[2, 3], [4]]));
    });

    it(`Should return false comparing [[2, 3], [4]] with [[2, 3], [4, 5]]`, () => {
      assert.isFalse(eqArrays([[2, 3], [4]],[[2, 3], [4, 5]]));
    });
    
    it(`Should return false comparing [[2, 3], [4]] with [[2, 3], 4]`, () => {
      assert.isFalse(eqArrays([[2, 3], [4]],[[2, 3], 4]));
    });

    it(`Should return false comparing [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]] with [[[[[[1,2,3,],4],5],6],7], [10], [13], [[[[18]]]]]`, () => {
      assert.isFalse(eqArrays([[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]],[[[[[[1,2,3,],4],5],6],7], [10], [13], [[[[18]]]]]));
    });

  });

});

// // STRETCH - NESTED ARRAYS WITH RECURSION

// console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true)); // => true
// console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false)); // => false
// console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false)); // => false

// // STRETCH - EXTRA TESTS

// const a = [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]];
// const b = [[[[[[1,2,3,],4],5],6],7],9, [10], [13], [[[[18]]]]];
// const c = [[[[[[1,2,3,],4],5],6],7], [10], [13], [[[[18]]]]];
// console.log(assertEqual(eqArrays(a,b),true));
// console.log(assertEqual(eqArrays(a,c),false));

// const d = ['hello', [[['I'], ['am']]], ['nested']];
// const e = ['hello', [[['I'], ['am']]], ['nested']];
// console.log(assertEqual(eqArrays(d,e),true));

