// 22-10-06
// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t,
// or false otherwise.

// A subsequence of a string is a new string that is formed from the
// original string by deleting some (can be none) of the characters
// without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // if the shorter string is longer, it can't be a substring can it?
  if (s.length > t.length) {
    return false;
  }

  // split strings into arrays, add an empty array, and a counter for it.
  let ss = s.split("");
  let tt = t.split("");
  let check = [];
  let subIndex = 0;

  // loop the longer string/array.
  // If the character inthe longer array is the same as the specified
  // character in the short array, then add it to the empty array and incement the counter.
  for (let i = 0; i < tt.length; i++) {
    if (tt[i] === ss[subIndex]) {
      check.push(tt[i]);
      subIndex++;
    }
  }

  // Now if the empty/check array is the same length as the shorter string, the answer should work.
  return ss.length === check.length;
};

let one = "abc";
let two = "ahbkcd";
console.log(isSubsequence(one, two));
