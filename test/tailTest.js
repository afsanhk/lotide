const tail = require('../tail.js');
const assert = require('chai').assert;

describe(`#tail()`, () => {
  it(`Returns [2,3] for [1,2,3]`, () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });

  it('Returns [] for [1]', () => {
    assert.deepEqual(tail([1]),[]);
  });

  it(`Returns [] for []`, () => {
    assert.deepEqual(tail([]),[]);
  });

  it(`Should not impact the original array`, () => {
    const original = [1,2,3,4,5];
    const result = tail(original);
    assert.deepEqual(original,original);
  });


});