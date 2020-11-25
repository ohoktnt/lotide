// Implement countOnly in Lotide

// Assertion function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings tha we need to look through
// itemsToCount: an object specifying what to count

// my code
// const countOnly = function(allItems, itemsToCount) {
//   const results = {};
//   for (let item in itemsToCount) {
//     if (itemsToCount[item] === true && allItems.includes(item)) {
//       results[item] = 0;
//       console.log(results);
//     }
//   }
//   for (const name of allItems) {
//     if(itemsToCount[name] === true) {
//       results[name] += 1;
//     }
//   }
//   console.log(results);
// };

// compass code
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results)
  return results
}


// Testing
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);