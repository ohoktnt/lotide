// Implement countLetters in Lotide

// Assertion function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function
const countLetters = function(str) {
  const result = {};
  str = str.split(' ').join('');
  for (const letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};


// Testing
console.log(countLetters("tammy is cool"));
assertEqual(countLetters('LHL')["L"], 2);

module.exports = countLetters;