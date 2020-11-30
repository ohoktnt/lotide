// test/middleTest.js

const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [6,2] for [2,4,6,2,5,5]', () => {
    assert.deepEqual(middle([2,4,6,2,5,5]), [6,2]);
  });
  it('returns [7] for [3,4,7,3,1]', () => {
    assert.deepEqual(middle([3,4,7,3,1]), [7]);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for [4,1]', () => {
    assert.deepEqual(middle([4,1]), []);
  });
});
