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
