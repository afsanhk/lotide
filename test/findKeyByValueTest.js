const findKeyByValue = require('../findKeyByValue');
const assert = require(`chai`).assert;

describe(`#findKeyByValue()`, () => {

  it(`Should return 'drama' when the:
  
      input object = {
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
        } 
        
        and the value === 'The Wire'`,() => {
      
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"),"drama");
  });

  it(`Should return 'undefined' when the:
  
      input object = {
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
        } 
        
        and the value === 'That '70s show'`,() => {
      
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"),undefined);
  });
    
});