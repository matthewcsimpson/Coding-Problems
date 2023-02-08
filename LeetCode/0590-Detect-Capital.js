// We define the usage of capitals in a word to be right when one of
// the following cases holds:

// - All letters in this word are capitals, like "USA".
// - All letters in this word are not capitals, like "leetcode".
// - Only the first letter in this word is capital, like "Google".

// Given a string word, return true if the usage of capitals in it is right.

// Example 1:
// Input: word = "USA"
// Output: true

// Example 2:
// Input: word = "FlaG"
// Output: false

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

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

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FLaG")); // false
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("leeTcode")); // false

// ------------------------------------------------------

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

console.log(detectCapitalUseTwo("USA")); // true
console.log(detectCapitalUseTwo("FLaG")); // false
console.log(detectCapitalUseTwo("leetcode")); // true
console.log(detectCapitalUseTwo("leeTcode")); // false
