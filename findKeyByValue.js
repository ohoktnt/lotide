// Implement findKeyByValue in Lotide
// function to search for a key on an object where its value matches a given value

const findKeyByValue = function(obj, keyVal) {
  for (let key in obj) {
    if (obj[key] === keyVal) {
      return key;
    }
  }
};

module.exports = findKeyByValue;