
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tammytran/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  * `head(array)`: returns an array with the first element of the array
  * `tail(array)`: returns an array with all elements except the first one of the array
  * `middle(array)`: returns the middle index of the array
  * `countLetters(string)`: returns the number of letters in the string
  * `countOnly(array, itemToCount)`: returns how many occurances of itemToCount inside the array
  * `eqArrays(arr1, arr1)`: compares two arrays for a perfect match
  * `eqObjects(obj1,obj2)`: compares two objects for perfect match
  * `findKey(obj, callback)`: finds the key based on the callback function
  * `findKeyByValue(obj, value)`: search for a key on an object where its value matches a given value
  * `flatten(array)`: flatten nested arrays
  * `letterPositions(string)`: return all indices in the string where each character is found
  * `map(array,callback)`: return an array with the callback function mapped to each element
  * `takeUntil(array,callback)`:return the array until the callback function is true
  * `without(array,item)`: return the array without the item