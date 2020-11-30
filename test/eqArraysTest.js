// test/eqArraysTest.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test codes
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// Test codes for nested arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([1,[2],[[[3]]]],[1,[2],[[[3]]]]), true);
assertEqual(eqArrays([[[[[1]]]]], [1]), false);