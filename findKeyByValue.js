const findKeyByValue = function(inputObject, refValue) {
  for (let key in inputObject) {
    if (inputObject[key] === refValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// const assertEqual = require('./assertEqual');

// // TEST CODE

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");