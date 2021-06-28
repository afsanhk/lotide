const assert = require('chai').assert;
const middle = require('../middle');

describe(`#middle()`, () => {
  it(`Returns [1] for [0,1,3]`, () => {
    assert.deepEqual(middle([0,1,3]),[1]);
  });

  it(`Returns [1,2] for [0,1,2,3]`, () => {
    assert.deepEqual(middle([0,1,2,3]),[1,2]);
  });

  it(`Returns [] for [0,1]`, () => {
    assert.deepEqual(middle([0,1]),[]);
  });

  it(`Returns [] for [0]`, () => {
    assert.deepEqual(middle([0]),[]);
  });

});