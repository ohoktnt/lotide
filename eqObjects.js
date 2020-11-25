// Implement eqObjects Lotide Problem
// assertion tests for objects

// Assertion function
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
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

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
      // if the value of the key is a primitive value
      } else if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};


// Testing Primitive Values
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertEqual(eqObjects(ab,ba), true);

const abc = {a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab, abc), false);


// Testing Arrays as Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);