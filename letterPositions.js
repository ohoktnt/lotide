// Implement letterPositions Lotide Challenge
// function which will return all indices in the string where the character is found

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

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


assertArraysEqual(letterPositions('hello')["h"], [0]);
assertArraysEqual(letterPositions('hello')["e"], [1]);
assertArraysEqual(letterPositions('hello')["l"], [2,3]);
assertArraysEqual(letterPositions('hello')["o"], [4]);