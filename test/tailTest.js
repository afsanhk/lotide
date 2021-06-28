const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// TEST
const result = tail([1,2,3,4,5,6]);
console.log(tail([1]));
console.log(tail(['a','b']));

assertEqual(result.length,5);
assertEqual(result[0], 2);