// test/countOnlyTest.js

// Assertion function
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const countOnly = require('../countOnly');

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

const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('should return true for results["Jason"] = 1', () => {
    assert.equal(results["Jason"], 1);
  });
  it('should return true for results["Karima"] = undefined', () => {
    assert.equal(results["Karima"], undefined);
  });
  it('should return true for results["Fang"] = 2', () => {
    assert.equal(results["Fang"], 2);    
  });
  it('should return true for results["Agouhanna"] = undefined', () => {
    assert.equal(results["Agouhanna"], undefined);
  });
});


