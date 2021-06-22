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
  return eqArrays(array1,array2) ? console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`) : console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
};

const middle = function(array) {
  let outputArray = [];
  
  if (array.length > 2) {
    array.length % 2 !== 0 ? outputArray.push(array[Math.floor(array.length / 2)]) : outputArray.push(array[array.length / 2 - 1],array[array.length / 2]);
  }

  return outputArray;
};


console.log(assertArraysEqual(middle([0,1,3]),[1]));
console.log(assertArraysEqual(middle([0,1,2,4]),[1,2]));
console.log(assertArraysEqual(middle([0,1]),[]));