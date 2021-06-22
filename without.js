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

const without = function(sourceArray, removeArray) {
  let intermediateArray = sourceArray;
  let outputArray = intermediateArray.filter(function callBackFn(element) {
    return removeArray.indexOf(element) < 0; //Any element that meets the true condition remains in the filtered array.
  });
  return outputArray;
};

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"])) // => ["2"]

assertArraysEqual(without([1,2,3],[1]),[2,3]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);