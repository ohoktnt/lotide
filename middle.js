// Impletement Middle Lotide Problem
// take an array and return the middle-most element(s) of the given array

// middle function
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

module.exports = middle;
