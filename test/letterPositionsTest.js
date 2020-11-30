// test/letterPositionsTest.js

// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns [0] for index of letter o in hello', () => {
    assert.deepEqual(letterPositions('hello')["h"], [0]);
  });
  it('returns [1] for index of letter e in hello', () => {
    assert.deepEqual(letterPositions('hello')["e"], [1]);
  });
  it('returns [2,3] for index of letter l in hello', () => {
    assert.deepEqual(letterPositions('hello')["l"], [2,3]);
  });
  it('returns [4] for index of letter o in hello', () => {
    assert.deepEqual(letterPositions('hello')["o"], [4]);
  });
});