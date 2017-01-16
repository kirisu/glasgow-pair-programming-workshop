/******************************************************

This file contains tests for the katas.  For simplicity,
we will create all our tests in the same file.  In reality
you would probably want to separate tests by module
and/or use case.

******************************************************/

/*
This line is ES6 specific syntax to import exported functions from another file.
In this case the functions are defined in src/katas.js.

Remember to update this list when you add a new function to your source file!
*/
import { countWords, countUniqueWords } from '../src/katas'

// Describe comes from mocha
// Note the use of the fat arrow i.e. () => {...} to define an anonymous function
describe("kata 1 - countWords", () => {
  // each test is contained within an 'it' block
  it("returns one when there is one word", () => {
    // assertions from chai http://chaijs.com/api/bdd/
    expect(countWords("hello")).to.equal(1)
  })
})

// Second describe block to namespace the tests
// for kata 2
describe("kata 2 - countUniqueWords", () => {
})
