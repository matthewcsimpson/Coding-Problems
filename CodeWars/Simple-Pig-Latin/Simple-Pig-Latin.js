/**
 * @param {string} str
 * @returns string
 */
function pigIt(str) {
  // all in one expression
  return (
    str
      // remove whitespace from string
      .trim()
      // slit the string at the spaces, using regex
      .split(/\s{1,}/)
      // map through the array of words in the string
      .map((word) => {
        // if the beginning and end of the string are both letter, then pig-latin-ize the word.
        if (/^[A-Za-z]+$/.test(word)) {
          return `${word.slice(1)}${word.slice(0, 1)}ay`;
        }
        // else return the word
        return word;
      })
      .join(" ")
  );
}

module.exports = pigIt;
