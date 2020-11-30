// test/eqArraysTest.js

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () =>{
  it('should return true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false for [1, 2, 3] and [3, 2, 1]', () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('should return true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it('should return false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it('should return true for [[2, 3], [4]] and [[2, 3], [4]]', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  // Test code for nested arrays
  it('should return false for [2, 3], [4]] and [[2, 3], [4, 5]]', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it('should return false for [[2, 3], [4]] and [[2, 3], 4]', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it('shoudl return true for [1,[2],[[[3]]]] and [1,[2],[[[3]]]]', () => {
    assert.equal(eqArrays([1,[2],[[[3]]]],[1,[2],[[[3]]]]), true);
  });
  it('should return false for [[[[[1]]]]] and [1]', () => {
    assert.equal(eqArrays([[[[[1]]]]], [1]), false);
  });
});