const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

const letters = countLetters('Afsanul Haque Khan');
console.log(letters);
assertEqual(letters['a'],3);