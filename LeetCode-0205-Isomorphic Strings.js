// 22-10-06
// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be
// replaced to get t.

// All occurrences of a character must be replaced with another character
// while preserving the order of characters. No two characters may map to
// the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Constraints:
// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  // split the incoming strings into arrays,
  // and create a boolean to track whether we've achieved the goal.
  let ss = s.split("");
  let tt = t.split("");
  let bool = true;

  // if the arrays are the same length  largely unnecessary as the strings are
  // guaranteed to be the same length
  if (ss.length !== tt.length) {
    return false;
  }

  // loop one of the strings.  since they are the same length, we only need to loop one.
  for (let i = 0; i < ss.length; i++) {
    // create variables for the indexes of the curent characters in each string.
    const a = ss.indexOf(ss[i]);
    const b = tt.indexOf(tt[i]);
    // if the character at the stored index in either array doesn't equal the
    // character at the current index, then the boolean becomess false.
    if (ss[a] !== ss[i] || tt[b] !== tt[i]) {
      bool = false;
    }
  }

  // return the boolean
  return bool;
};

// console.log(isIsomorphic("paper", "title"));
// console.log(isIsomorphic("boop", "school"));
// console.log(isIsomorphic("one", "two"));
console.log(isIsomorphic("thrae", "spree"));
