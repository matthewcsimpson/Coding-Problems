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

const isIsomorphicTS = (s: string, t: string): boolean => {
  // Split the strings into arrays of characters
  let ss = s.split("");
  let tt = t.split("");
  // Create a boolean, and start out true.
  let bool: boolean = true;

  // If the arrays are different lenghts, return false because
  // they cannot be isomorphic, so the function can be exited.
  if (ss.length !== tt.length) {
    return false;
  }

  // Loop the arrays
  for (let i = 0; i < ss.length; i++) {
    // check the current letters to the letters at the current index in the other string
    if (tt[ss.indexOf(ss[i])] !== tt[i] || ss[tt.indexOf(tt[i])] !== ss[i]) {
      bool = false;
    }
  }
  return bool;
};

console.log(isIsomorphicTS("paper", "title")); // true
console.log(isIsomorphicTS("boop", "school")); // false
console.log(isIsomorphicTS("one", "two")); // true
console.log(isIsomorphicTS("thrae", "spree")); // false
console.log(isIsomorphicTS("foo", "bar")); // false
