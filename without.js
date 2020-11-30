// Implement without Lotide Problem

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

// pseudo code
// 1. take each item from itemsToRemove list
// 2. compare to each item in source
// 3. if matches, the item in souce is not to be added to result
// 4. if does not match, the item in source to be added to result
// 5. return the result


const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    // prints true if items in source is to be removed 
    // added ! - items that are not on the list to be removed will be added to result
    if(!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};


// Testing
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;