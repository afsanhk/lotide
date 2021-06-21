const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(inputArray) {
  let outputArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
};

const result = tail([1,2,3,4,5,6]);
console.log(tail([1]));
console.log(tail(['a','b']));

assertEqual(result.length,5);
assertEqual(result[0], 2);