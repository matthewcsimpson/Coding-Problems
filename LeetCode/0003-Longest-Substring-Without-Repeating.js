// 3. Longest Substring Without Repeating Characters
// Medium
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // starting value
  let start = 0;
  // max length variable
  let max = 0;
  // map to track placements of letters
  let map = new Map();

  // loop
  for (let i = 0; i < s.length; i++) {
    // if the letter is at an index higher than the stored start value...
    // assign the index of that letter as the start variable.
    if (map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
    }
    // add the current value to the map (eg a=>0)
    map.set(s[i], i);

    // the length of the max substring is greater than the current stored maximum,
    // assign that vale as the maximum
    if (i - start + 1 > max) {
      max = i - start + 1;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("dvdf")); //3
console.log(lengthOfLongestSubstring(" ")); //1
