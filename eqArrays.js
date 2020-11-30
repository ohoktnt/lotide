// Impletment eqArrays
// a function that can compare two arrays for a perfect match

// eqArrays function
const eqArrays = function(arr1, arr2) {
  let result = '';
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // if the item in the array is an array
    if (Array.isArray(arr1[i])) {
      // check length of the array
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      result = eqArrays(arr1[i], arr2[i]);
      if (result === false) {
        return false;
      }
    // if the item is not an array
    } else if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

module.exports = eqArrays;