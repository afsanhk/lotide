# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @afsanhk/lotide`

**Require it:**

`const _ = require('@afsanhk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first item in an array (undefined if empty array)
* `tail(array)`: returns all items except the first item in an array. Returns empty array for array with one or zero elements.
* `middle(array)`: returns the middle elements in an array for an input array. If the input array has one or 2 elements, it returns an empty array. If odd, it returns a single element array.If even, it returns a two element array. 
* `assertArraysEqual(array1,array2)`: Compares two arrays and returns a success or failure message based on whether they are equal (accounts for nested arrays.)
* `assertEqual()`: Compares two primitive data types and returns a success or failure message based on whether they are equal.
* `assertObjectsEqual()`: Compares two objects and returns a success or failure message whether they are equal (accoutns for nested objects).
* `countLetters(string)`: Takes in a string and returns a count of each letter in the sentence (not including spaces) within an object.
* `countOnly(array,object)`: Will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays(array1,array2)`: Returns true or false based on whether two arrays are equal (considers nested Arrays.)
* `eqObjects()`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey(object, callback)`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(object, value)`: Takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `flatten(array)`: Returns a flattened array - removes nesting and places nested elements in the original array (WARNING: can only handle one level of nesting). 
* `letterPositions(string)`: Will return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: Takes in two arguments (an array and a callback function) and returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: Takes in two arguments (an array and a callback function) and returns a slice of the array with elements taken from the beginning until it meets the element which satisfies the condition in the callback. It does not include this element.
* `without(array1, array2)`: Returns an array with elements from array1 that are also present in array2 (i.e. removes elements in array2 from array1). 