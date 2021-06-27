const inspect = require('util').inspect;

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
    // RECURISVE CASE -- If object[key] is another object
      if (typeof(object1[key]) === 'object' && typeof(object2[key]) === 'object' && Array.isArray(object1[key]) === false && Array.isArray(object2[key]) === false) {
        return eqObjects(object1[key],object2[key]);
      }
  
      // BASE CASE -- If Object[key] is not another object (not incl. arrays)
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!(eqArrays(object1[key],object2[key]))) { // Why '!'? If this is true, follow the else if statement.
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

};


// //  PRIMITIVE TESTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => false

// // ARRAY TESTS
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),false); // => false


// STRETCH -- NESTED OBJECT TESTS
console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true)); // => true
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false)); // => false
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false)); // => false



// STRETCH -- MORE TESTS:

const x = {
  'number': 2,
  'name': 'Tragedy',
  'array': [1,3,5,7],
  'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
};

const y = {
  'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}} ,
  'number': 2,
  'name': 'Tragedy',
  'array': [1,3,5,7]
};

const z = {
  'obj': {f:{e:{d:{c:{b:{a:{condition: 'poor'}}}}}}} ,
  'number': 2,
  'name': 'Tragedy',
  'array': [1,3,5,7]
};

console.log(assertEqual(eqObjects({ a: { x:0, y: 35, z: 1 }, b: 2 }, { a: { z: 1, x:0,y:35 }, b: 2 }),true)); // => true
console.log(assertEqual(eqObjects({ a: { x:0, y: 'chicken nuggets', z: 1 }, b: 2 }, { a: { z: 1, x:0,y:35 }, b: 2 }),false)); // => false

console.log(assertEqual(eqObjects(x,y),true)); // => true
console.log(assertEqual(eqObjects(x,z),false)); // => false
