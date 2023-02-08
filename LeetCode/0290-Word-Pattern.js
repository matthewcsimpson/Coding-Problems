// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a
// letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Constraints:
// - 1 <= pattern.length <= 300
// - pattern contains only lower-case English letters.
// - 1 <= s.length <= 3000
// - s contains only lowercase English letters and spaces ' '.
// - s does not contain any leading or trailing spaces.
// - All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  // split the words string into an array which can be iterated over by the word
  const a = s.split(" ");

  // we need two logs, one to store the pattern value and one for the word
  const checkKey = {},
    checkValue = {};

  // the the pattern length and word array length are different,
  //then they are mismatched and cannot return true.
  if (a.length !== pattern.length) {
    return false;
  }

  // loop through the pattern
  for (let i = 0; i < pattern.length; i++) {
    // if the current pattern value OR the current word are in their respective maps...
    if (pattern[i] in checkKey || a[i] in checkValue) {
      // check if the current word matches the word stored with the current key
      // if not, return false.
      if (checkKey[pattern[i]] !== a[i]) {
        return false;
      }
    } else {
      // otherwise,
      // add the current pattern value to the pattern map
      // add the current word to the value map.
      checkKey[`${pattern[i]}`] = a[i];
      checkValue[`${a[i]}`] = pattern[i];
    }
  }

  // return true here, because if you got here it would have had to pass all the checks.
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("ababa", "dog cat dog cat dog")); // true
console.log(wordPattern("abbba", "dog cat cat cat dog")); // true
console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("abcba", "dog cat fish cat dog")); // true
console.log(wordPattern("aba", "dog cat cat")); // false
console.log(wordPattern("abc", "c b a")); // true
