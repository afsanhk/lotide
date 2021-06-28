const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// TEST CODE
// const assertArraysEqual = require('./assertArraysEqual')
// const output = letterPositions('hello');
// console.log(output);
// console.log(assertArraysEqual(output['h'],[0]));
// console.log(assertArraysEqual(output['e'],[1]));
// console.log(assertArraysEqual(output['l'],[2,3]));
// console.log(assertArraysEqual(output['o'],[4]));

// const output2 = letterPositions('lighthouse in the house');
// console.log(output2);