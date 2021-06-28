// MAP
const map = function(array,callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

module.exports = map;


// TEST CODE
// const assertArraysEqual = require('./assertArraysEqual')
// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(assertArraysEqual(results1,['g','c','t','m','t']));

// const results2 = map(words, word => word[word.length - 1]);
// console.log(assertArraysEqual(results2,['d','l','o','r','m']));

// const results3 = map(words, word => word + 'MAPPED');
// console.log(assertArraysEqual(results3,["groundMAPPED", "controlMAPPED", "toMAPPED", "majorMAPPED", "tomMAPPED"]));
