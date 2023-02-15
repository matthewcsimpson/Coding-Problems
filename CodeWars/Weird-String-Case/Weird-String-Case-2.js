/**
 * Function solved with nested .map()s
 * @param {string} string
 * @returns string
 */
const toWeirdCaseTwo = (string)=> {
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
}

module.exports = toWeirdCaseTwo;
