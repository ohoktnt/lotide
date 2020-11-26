// Implement takeUntil Lotide Challenge
// function takes in two parameters: an array to work with
// the callback. will return a "slice of the array with elements
// taken from the beginning"

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

// TAKEUNTIL IMPLEMENTATION
const takeUntil = function(array, callback) {
  let result = [];
  for (let data of array) {
    if (callback(data)) {
      return result;
    } else {
      result.push(data);
    }
  }
  return result;
};



// Testing code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["cat", "mouse", "chicken", "dog", "fish"];
const data4 = [324,123,56,322,456];

// Assertion Testing
assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data3, x => x === 'chicken'), ["cat","mouse"]);
assertArraysEqual(takeUntil(data4, x => x < 100), [324,123]);
assertArraysEqual(takeUntil(data1, x => x < -3), data1);