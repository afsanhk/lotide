const findKey = function(inpObj,callback) {
  for (let key in inpObj) {
    if (callback(inpObj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// TEST CASES
// const assertEqual = require('./assertEqual');
// let result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(result1, 'noma'); // ==> TRUE

// console.log('---');

// let result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3); // => "Akaleri

// exports.module = findKey;

// assertEqual(result2, 'Akaleri'); // ==> TRUE
// console.log('---');


// let result3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 0); // => "undefined"

// assertEqual(result3, 'Akaleri'); // ==> FALSE