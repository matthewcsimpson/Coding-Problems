// Write a function toWeirdCase (weirdcase in Ruby) that accepts a
// string, and returns the same string with all even
// indexed characters in each word upper cased, and all odd
// indexed characters in each word lower cased. The indexing
// just explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased and you need
// to start over for each word.

// The passed in string will only consist of alphabetical
// characters and spaces(' '). Spaces will only be present
// if there are multiple words. Words will be separated
// by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

/**
 * Function with only one loop
 * @param {string} string
 * @returns string
 */
const toWeirdCase = (string) => {
  // split the string into letters
  const letters = string.split("");
  // keep track of if a letter is even or odd.
  let evenOdd = 0;

  // loop the array
  for (let i = 0; i < letters.length; i++) {
    // if the letter is a space, reset the evenOdd to 1 (so the next value will be even)
    if (letters[i] === " ") {
      evenOdd = 1;
      // if the current letter is even make it uppercase
    } else if (evenOdd % 2 === 0) {
      letters[i] = letters[i].toUpperCase();
      // otherwise, make the letter lowercase
    } else {
      letters[i] = letters[i].toLowerCase();
    }
    evenOdd++;
  }

  console.log(letters);
  return letters.join("");
};

// tests
console.log(toWeirdCase("Weird string case"));
console.log(toWeirdCase("String"));

/**
 * function with nested .map()s
 * @param {string} string
 * @returns string
 */
const toWeirdCase2 = (string) => {
  // split the string into words.
  return (
    string
      .split(" ")
      // map over the words and return an individual word
      .map(function (word) {
        return (
          word
            // split the word into letters
            .split("")
            // map over the letters and track the index of each
            .map(function (letter, index) {
              // if the index is even, uppercase the letter.
              // otherwise make it lowercase
              return index % 2 == 0
                ? letter.toUpperCase()
                : letter.toLowerCase();
            })
            // join the letters back into a word
            .join("")
        );
      })
      // join the words back into a string
      .join(" ")
  );
};

console.log(toWeirdCase2("Weird string case"));
console.log(toWeirdCase2("String"));
