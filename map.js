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


// MAP

const map = function(array,callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1,['g','c','t','m','t']));

const results2 = map(words, word => word[word.length - 1]);
console.log(assertArraysEqual(results2,['d','l','o','r','m']));

const results3 = map(words, word => word + 'MAPPED');
console.log(assertArraysEqual(results3,["groundMAPPED", "controlMAPPED", "toMAPPED", "majorMAPPED", "tomMAPPED"]));
