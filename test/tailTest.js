// test/tailTest.js

// chai assertion
const assert = require('chai').assert;
// tail function
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns [] for ["hello"]', () => {
    assert.deepEqual(tail(["hello"]), []);
  });
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});