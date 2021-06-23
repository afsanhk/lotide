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

const takeUntil = function(array, callback) {
  let output = [];

  for (let element of array) {
    if (callback(element)) {
      return output;
    } else {
      output.push(element);
    }
  }

  return output;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1,[1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);

console.log('---')

const data3 = [true, true, true, 'chicken', 34, 45, 'normandy', false, 'cow', 'jaijaijai'];
const results3 = takeUntil(data3, x => x === false);
console.log(results3)

assertArraysEqual(results3,[true, true, true, 'chicken', 34, 45, 'normandy']);