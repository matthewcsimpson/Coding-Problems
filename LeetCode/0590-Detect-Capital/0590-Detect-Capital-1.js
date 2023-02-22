/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  // we need to count capitals
  let count = 0;

  // loop through the word
  for (let i = 0; i < word.length; i++) {
    // if the letter at the current index is a capital, iterate the count
    if (word[i].toUpperCase() === word[i]) {
      count += 1;
    }
  }
  // if the count and the word length are the same, then all letters are capital (true)
  // if the count is 0, then no letter are capital (true)
  // if the first letter of the word is capital AND the count is 1, then it
  // is correctly capitalized. (true)
  return (
    count === word.length ||
    count === 0 ||
    (word[0].toUpperCase() === word[0] && count < 2)
  );
};

module.exports = detectCapitalUse;



