const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

// TEST CODE
assertEqual(head([5,6,7]),5);
assertEqual(head(['Hello','Lighthouse','Labs']),'Hello');
assertEqual(head([5]),5);
assertEqual(head([]),5);
assertEqual(head(['Lighthouse','Labs']),'Hello');