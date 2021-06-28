const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe(`#countOnly()`, () => {
  
  it(`Returns 1 for Jason in an array that contains one instance of Jason`, () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result1['Jason'],1);
  });

  it(`Returns undefined for Karima in an array that does not contain a value Karima`, () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result1['Karima'],undefined);
  });

  it(`Returns 2 for Fang in an array that contans 2 instances of Fang`, () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result1['Karima'],undefined);
  });

  it(`Returns undefined for Agouhanna in an array that contains this value but is not asked to count this value in the comparison object`, () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result1['Karima'],undefined);
  });

});