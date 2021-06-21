const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(inputArray) {
  return inputArray[0];
}

assertEqual(head([5,6,7]),5);
assertEqual(head(['Hello','Lighthouse','Labs']),'Hello');
assertEqual(head([5]),5);
assertEqual(head([]),5);
assertEqual(head(['Lighthouse','Labs']),'Hello');
