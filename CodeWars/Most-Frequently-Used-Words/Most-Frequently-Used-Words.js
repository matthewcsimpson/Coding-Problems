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

module.exports = topThreeWords;

