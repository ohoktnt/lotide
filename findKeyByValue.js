// Implement findKeyByValue in Lotide
// function to search for a key on an object where its value matches a given value

const findKey = require("./findKey");

// Assertion function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue function
const findKeyByValue = function(obj, keyVal) {
  for (let key in obj) {
    if (obj[key] === keyVal) {
      return key;
    }
  }
};

// Testing
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const someFruitColours = {
  apple: 'red',
  orange: 'orange',
  pear: 'green',
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(someFruitColours, "green"), "pear");
assertEqual(findKeyByValue(someFruitColours, "red"), 'apple');

module.exports = findKeyByValue;