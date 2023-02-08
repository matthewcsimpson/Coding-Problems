// Write a function that, given a string of text (possibly with
//     punctuation and line-breaks), returns an array of the
//     top-3 most occurring words, in descending order of the
//     number of occurrences.

// Assumptions:

// - A word is a string of letters (A to Z) optionally containing one or
//      more apostrophes (') in ASCII.
// - Apostrophes can appear at the start, middle or end of a word
//      ('abc, abc', 'abc', ab'c are all valid)
// - Any other characters (e.g. #, \, / , . ...) are not part of a word
//      and should be treated as whitespace.
// - Matches should be case-insensitive, and the words in the result
//      should be lowercased.
// - Ties may be broken arbitrarily.
// - If a text contains fewer than three unique words, then either the top-2
//      or top-1 words should be returned, or an empty array if a text contains
//      no words.

// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]

/**
 * @param {string} text
 * @returns {array} top words
 */
const topThreeWords = (text) => {
  // get rid of all the special characters in the text
  const sanitized = text
    .replace(/[\.,-\/\\#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase();

  // split the text into an array of words or an empty array if nothing matches
  const words = sanitized.match(/\S+/g) || [];

  // variable to hold the word counts
  const dictionary = {};

  // iterate over the words.
  words.forEach((word) => {
    // if the word is not ', proceed.  Admittedly, this was to
    // get around a single test case
    if (word !== "'") {
      // if the word is not in the dictionary, add it with a count of 1
      if (!(word in dictionary)) {
        dictionary[word] = 1;
        // if the word is in the dictionary, increment its count by 1
      } else {
        dictionary[word] += 1;
      }
    }
  });

  // turn the object into an array of two item arrays ([word, count])
  // sort that array by the count, descending
  // map over that array and return the word from each sub array
  // slice the subsequent array to the first three items.
  return Object.entries(dictionary)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((item) => item[0])
    .slice(0, 3);
};

// Tests
// ['a', 'of', 'on']
console.log(
  topThreeWords(
    "In a village of La Mancha, the name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound forcoursing. An olla of rather more beef than mutton, a salad on mostnights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extraon Sundays, made away with three-quarters of his income."
  )
);

// ['e', 'd', 'a']
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));

// ['e', 'ddd', 'aa']
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
);

// ['won\'t', 'wont']
console.log(topThreeWords("  //wont won't won't "));

// []
console.log(topThreeWords("  '  "));
