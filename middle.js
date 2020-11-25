// Impletement Middle Lotide Problem
// take an array and return the middle-most element(s) of the given array

// TEST/ASSERTION FUNCTIONS
// eqArrays function
const eqArrays = function(arr1, arr2) {
  let result = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

// assertion function for arrays
const assertArraysEqual = function(actual, expected) {
  const answer = eqArrays(actual, expected);
  if (answer) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};


// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let middleIndex = array.length / 2;
    return [array[middleIndex - 1], array[middleIndex]];
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  }
};

console.log(middle([1])); // should print empty array
console.log(middle([4,1])); // shold print empty array
assertArraysEqual(middle([2,4,6,2,5,5]), [6,2]);
assertArraysEqual(middle([3,4,7,3,1]), [7]);
