// Implement eqObjects Lotide Problem
// assertion tests for objects

// eqArrays function
const eqArrays = require('./eqArrays');

// Object Assertion Function
// returns true if both objects have identical keys with identical values.
// otherwise you get false

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
      // if the value of the key is not an array, and is an object
      } else if ((typeof object1[value]) === 'object') {
        let result = eqObjects(object1[value], object2[value]);
        if (!result) {
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

module.exports = eqObjects;