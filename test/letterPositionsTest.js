const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe(`#letterPositions()`, () => {

  it(`Returns [0] as the value for h when 'hello' is the argument`,() => {
    const output = letterPositions('hello');
    assert.deepEqual(output['h'],[0]);
  });

  it(`Returns [2,3] as the value for h when 'hello' is the argument`,() => {
    const output = letterPositions('hello');
    assert.deepEqual(output['l'],[2,3]);
  });

});