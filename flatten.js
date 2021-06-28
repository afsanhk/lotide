const flatten = function(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    
    if (Array.isArray(inputArray[i])) {
      let temporaryStorage = inputArray[i];
      inputArray.splice(i,1);
      for (let j = 0; j < temporaryStorage.length; j++) {
        inputArray.splice(i + j,0,temporaryStorage[j]);
      }
    }
  }
  return inputArray;
};

module.exports = flatten;

// const assertArraysEqual = require('./assertArraysEqual');

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1,[3,6,7],[8,9,0],2,3,4,[3,4,7],7]));

// assertArraysEqual(flatten([1,2,3,[5,8,9]]),[1,2,3,5,8,9]);