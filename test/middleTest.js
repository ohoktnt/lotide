// test/middleTest.js

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test codes
// console.log(middle([1])); // should print empty array
// console.log(middle([4,1])); // shold print empty array
assertArraysEqual(middle([2,4,6,2,5,5]), [6,2]);
assertArraysEqual(middle([3,4,7,3,1]), [7]);
