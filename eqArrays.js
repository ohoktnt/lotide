// Impletment eqArrays
// a function that can compare two arrays for a perfect match

// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays function
const eqArrays = function(arr1, arr2) {
  let result = '';
  for (let i = 0; i < arr1.length; i++) {
    // if the item in the array is an array
    if (Array.isArray(arr1[i])) {
      // check length of the array
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      result = eqArrays(arr1[i], arr2[i]);
      if (result === false) {
        return false;
      }
    // if the item is not an array
    } else if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

// testing
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// testing nested arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([1,[2],[[[3]]]],[1,[2],[[[3]]]]), true);
assertEqual(eqArrays([[[[[1]]]]], [1]), false);