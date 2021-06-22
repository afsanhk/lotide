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


console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1,[3,6,7],[8,9,0],2,3,4,[3,4,7],7]));

assertArraysEqual(flatten([1,2,3,[5,8,9]]),[1,2,3,5,8,9]);