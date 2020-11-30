// test/head.js

// assertion function
const assertEqual = require('../assertEqual');

// head function
const head = require('../head');

// Test Code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 0);
assertEqual(head([1]), 1);