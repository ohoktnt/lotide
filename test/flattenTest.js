// test/flattenTest.js

// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns flatten array [1,2,3,4,5,6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns flatten array [12,56,3,4,5,1]', () => {
    assert.deepEqual(flatten([[12], 56, [3, 4], 5, 1]), [12, 56, 3, 4, 5, 1]);
    
  })
});
