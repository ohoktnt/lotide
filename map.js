// Implement Map Lotide Assignment
// map function will take in two arguments: an array to map
// and a callback function

// eqArrays function
const eqArrays = function(arr1, arr2) {
  let result = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]){
      result = true;
    } else {
       return false
    }
  }
  return result;
}

// assertion function for arrays
const assertArraysEqual = function(actual, expected) {
  const answer = eqArrays(actual, expected);
  if (answer) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
}

// MAP IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Test Codes
const words = ["ground", "control", "to", "major", "tom"];
const names = ['Tammy', 'Lisa', 'Jessica'];
const numbers = [5,7,3];
const animals = ['dog', 'fish', 'cat', 'tiger'];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(names, word => word[0]), ['T','L','J']);
assertArraysEqual(map(numbers, num => num*10), [50,70,30]);
assertArraysEqual(map(animals, animal => animal + "1"), ['dog1', 'fish1', 'cat1', 'tiger1']);

module.exports = map;