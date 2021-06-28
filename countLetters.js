const countLetters = function(str) {
  const results = {};

  for (let letter of str) {
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;

// TEST CODE
// const assertEqual = require('./assertEqual');

// const letters = countLetters('Afsanul Haque Khan');
// console.log(letters);
// assertEqual(letters['a'],3);