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
    // if the letter is at an index higher than the stored start value
    // assign the index of that letter as the start variable.
    if (map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
    }
    // add the current value to the map (eg a=>0)
    map.set(s[i], i);

    // the length of the max substring is greater than the current stored maximum,
    // assign that value as the maximum
    if (i - start + 1 > max) {
      max = i - start + 1;
    }
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
