// test/eqObjectsTest.js

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  // Testing Primative Values
  it('returns true for eqObjects(ab,ba)', () => {
    const ab = {a: '1', b: '2'};
    const ba = {b: '2', a: '1'};
    assert.equal(eqObjects(ab,ba), true);
  });
  it('returns false for eqObjects(ab,abc)', () => {
    const ab = {a: '1', b: '2'};
    const abc = {a: '1', b: '2', c: '3'};
    assert.equal(eqObjects(ab, abc), false);
  });
  // Testing Arrays Values
  it('returns true for eqObjects(cd,dc)', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true);
  });
  it('returns false for eqObjects(cd,cd2)', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, cd2), false);
  });
  // Testing Nested Objects as Values
  it('returns true for eqObjects(obj1,obj2)', () => {
    const obj1 = {a: {b: 1}};
    const obj2 = {a: {b: 1}};
    assert.equal(eqObjects(obj1,obj2), true);
  });
  it('returns true if obj1 === obj2', () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('returns false if obj1 !== obj2', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false if obj1 !== obj2', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});