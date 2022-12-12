// 22-10-01
// Given a string s consisting of words and spaces, return the length of the
//last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // trim any whitespaces from the incoming string.
  let st = s.trim();

  // split the trimmed string into its component words.
  let ss = st.split(" ");

  // return the length of the last word in that array.
  return ss[ss.length - 1].length;
};

console.log(lengthOfLastWord("hello world"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("the quick brown fox jumps over the lazy dog"));
