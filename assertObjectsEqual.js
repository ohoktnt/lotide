// Implement assertObjectsEqual
// function that will help easily test functions that return objects


// function to compare objects
const eqObjects = function(object1, object2) {
  // checking the number of keys per object
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    // verify each value for each key if they match
    for (const value in object1) {
      // if the value of the key is an array
      if (Array.isArray(object1[value])) {
        const result = eqArrays(object1[value], object2[value]);
        if (result === false) {
          return false;
        }
      // if the value of the key is a primitive value
      } else if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};

// eqArrays function: to comapre arrays
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

// Assertion Function Implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const answer = eqObjects(actual, expected);
  if (answer) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '2'});
assertObjectsEqual({a:1, b: 2}, {a: '1', b: 4});