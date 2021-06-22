const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  return eqArrays(array1,array2) ? console.log(`✅ Assertion Passed: Array 1 === Array 2`) : console.log(`❌ Assertion Failed: Array 1 !== Array 2`);
};

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
}

const output = letterPositions('hello');
console.log(output);
console.log(assertArraysEqual(output['h'],[0]));
console.log(assertArraysEqual(output['e'],[1]));
console.log(assertArraysEqual(output['l'],[2,3]));
console.log(assertArraysEqual(output['o'],[4]));

const output2 = letterPositions('lighthouse in the house');
console.log(output2);