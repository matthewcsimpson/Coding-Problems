/**
 * Same problem, solved using toUpperCase & toLowerCase on the entire word.
 * @param {string} word
 * @returns
 */
const detectCapitalUseTwo = (word) => {
    if (word.toLowerCase() === word || word.toUpperCase() === word) {
      return true;
    } else if (word[0] + word.slice(1).toLowerCase() === word) {
      return true;
    } else {
      return false;
    }
  };

  module.exports = detectCapitalUseTwo;

  