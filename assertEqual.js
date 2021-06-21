// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Afsan","Afsan");
assertEqual(1,1);
assertEqual(2,1);

// askjdhaskjdhkajsdh