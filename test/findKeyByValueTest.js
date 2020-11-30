// test/findKeyByValueTest.js

// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Testing
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const someFruitColours = {
  apple: 'red',
  orange: 'orange',
  pear: 'green',
};

describe('#findKeyByValue', () => {
  it('returns drama for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined for findKeyByValue(bestTVShowsByGenre, "That \'70s Show")', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('returns pear for findKeyByValue(someFruitColours, "green")', () => {
    assert.equal(findKeyByValue(someFruitColours, "green"), "pear");
  });
  it('returns apple for findKeyByValue(someFruitColours, "red"', () => {
    assert.equal(findKeyByValue(someFruitColours, "red"), 'apple');
  });
});

