const flatten = require('../flatten.js');
const assert = require('chai').assert;

describe(`#flatten()`, () => {
  it(`Returns [1,2,3] for [1,[2],3]`, () => {
    assert.deepEqual(flatten([1,[2],3]),[1,2,3]);
  });

  it(`Returns [1,2,3,4,5,6] for [1, 2, [3, 4], 5, [6]]`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
  });

});