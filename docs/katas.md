# Katas

## Small Katas

### Total Word Count

Inspired by [exercism.io](http://exercism.io/exercises/ecmascript/word-count/readme)

TDD a function/module that given a phrase can count number of words in the phrase.

For example...

```javascript
wordCount("hello world")  // returns 2
wordCount("")  // returns 0
wordCount("yo yo     yo")  // returns 3
```

### Word Frequencies

Inspired by [exercism.io](http://exercism.io/exercises/ecmascript/word-count/readme)

TDD a function/module that given a phrase can count the occurrences of each word in that phrase.

For example...

```javascript
wordCount("hello world")  // returns {hello: 1, world: 1}
wordCount("")  // returns {}
wordCount("yo yo     yo")  // returns {yo: 3}
```

### Reverse a String

TDD a function that reverses a string

For example...

```javascript
reverse_string("abcd") // returns "dcba"
reverse_string("") // returns ""
```

Note that JavaScript does noit include a built in string reverse function

### FizzBuzz

Copied from the [C2 Wiki](http://wiki.c2.com/?FizzBuzzTest)

TDD a function that returns an Array of numbers from 1 to a given maximum. But for multiples of three includes “Fizz” instead of the number and for the multiples of five includes “Buzz”. For numbers which are multiples of both three and five include “FizzBuzz”.

For example...

```javascript
fizzBuzz(5) // Returns [1, 2, "Fizz", 4, "Buzz"]
fizzBuzz(0) // Returns []
```

## Large Katas  

### Roman Numerals Kata (Converting Arabic to Roman)

From http://agilekatas.co.uk/katas/RomanNumerals-Kata

The Romans wrote their numbers using letters; specifically the letters 'I' meaning '1', 'V' meaning '5', 'X' meaning '10', 'L' meaning '50', 'C' meaning '100', 'D' meaning '500', and 'M' meaning '1000'. There were certain rules that the numerals followed which should be observed.

The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row. The symbols 'V', 'L', and 'D' can never be repeated. The '1' symbols ('I', 'X', and 'C') can only be subtracted from the 2 next highest values ('IV' and 'IX', 'XL' and 'XC', 'CD' and 'CM'). Only one subtraction can be made per numeral ('XC' is allowed, 'XXC' is not). The '5' symbols ('V', 'L', and 'D') can never be subtracted.

```
As a game developer
I want to be able to convert a number to a numeral
So that I can label my game releases using Roman numerals

Given I have started the converter
When I enter $number
Then $numeral is returned
```

### Conway's Game Of Life

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated" (the difference may seem minor, except when viewing it as an early model of human/urban behaviour simulation or how one views a blank space on a grid). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

  1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
  2. Any live cell with two or three live neighbours lives on to the next generation.
  3. Any live cell with more than three live neighbours dies, as if by overpopulation.
  4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

See: https://en.wikipedia.org/wiki/Conway's_Game_of_Life

### Bowling Scores

TDD a solution to http://code.joejag.com/coding-dojo/bowling-scores/

The goal of this program is to model a game of bowling. Given a series of input the program should output the players final score.

### Data Munging

TDD a solution to http://codekata.com/kata/kata04-data-munging/

## If you finish them all!

Give yourselves a big pat on the back and go to http://codekata.com and pick another one.
