// Implement assertArraysEqual - Lotide Problem

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

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([2,3,4], [2,6,4]);