// 2351. First Letter to Appear Twice
// Easy

// Given a string s consisting of lowercase English letters,
//return the first letter to appear twice.

// Note:
// A letter a appears twice before another letter b if the second occurrence of a is
// before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Example 1:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

// Example 2:
// Input: s = "abcdd"
// Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.

// Constraints:
// 2 <= s.length <= 100
// s consists of lowercase English letters.
// s has at least one repeated letter.

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  // split the string into an array
  let array = s.split("");
  // new array to store characters
  let repeatedchar = [];

  // loop the array
  for (let i = 0; i < array.length; i++) {
    // if the repeatedChar array does not contain the current chracter,
    // push the current character into the repeatedChar array.
    if (!repeatedchar.includes(array[i])) {
      repeatedchar.push(array[i]);
      // if the repeatedChar array does contain the current character,
      // return the current character.
    } else {
      return array[i];
    }
  }

  // since the string is guaranteed to always have a repeat, we don't need a return for when it doesn't.
  return "";
};

console.log(repeatedCharacter("strings"));
console.log(repeatedCharacter("thequickbrownfoxjumpsoverthelazydog"));
