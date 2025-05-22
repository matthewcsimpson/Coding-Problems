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
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphicJS = (s, t) => {
  let ss = s.split("");
  let tt = t.split("");
  let bool = true;

  if (ss.length !== tt.length) {
    return bool;
  }

  for (let i = 0; i < ss.length; i++) {
    const a = ss.indexOf(ss[i]);
    const b = tt.indexOf(tt[i]);
    if (tt[a] !== tt[i] || ss[b] !== ss[i]) {
      bool = false;
    }
  }
  return bool;
};

console.log(isIsomorphicJS("paper", "title"));
console.log(isIsomorphicJS("boop", "school"));
console.log(isIsomorphicJS("one", "two"));
console.log(isIsomorphicJS("thrae", "spree"));
