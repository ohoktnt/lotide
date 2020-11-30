// test/tailTest.js

// assertEqual function to check results
const assertEqual = require('../assertEqual');

// tail function
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!l have 3 elements!inal array should still have 3 elements!l have 3 elements!!inal array should still have 3 elements!l have 3 elements!
// Test Case: Check the returned array elements
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test an array with only one element to yield an empty array
// const test1 = ['hello'];
// let result1 = tail(test1);
// console.log(result1);

// // Test an empty array to yield an empty array
// const test2 = [];
// let result2 = tail(test2);
// console.log(result2);