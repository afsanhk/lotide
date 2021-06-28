const without = function(sourceArray, removeArray) {
  let intermediateArray = sourceArray;
  let outputArray = intermediateArray.filter(function callBackFn(element) {
    return removeArray.indexOf(element) < 0; //Any element that meets the true condition remains in the filtered array.
  });
  return outputArray;
};

module.exports = without;

// TEST CODE
// const assertArraysEqual = require('./assertArraysEqual')
// // console.log(without([1, 2, 3], [1])) // => [2, 3]
// // console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// // console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"])) // => ["2"]

// assertArraysEqual(without([1,2,3],[1]),[2,3]);


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);