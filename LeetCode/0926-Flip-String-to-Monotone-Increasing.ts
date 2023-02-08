// A binary string is monotone increasing if it consists of some number of 0's
// (possibly none), followed by some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

// Example 1:
// Input: s = "00110"
// Output: 1
// Explanation: We flip the last digit to get 00111.

// Example 2:
// Input: s = "010110"
// Output: 2
// Explanation: We flip to get 011111, or alternatively 000111.

// Example 3:
// Input: s = "00011000"
// Output: 2
// Explanation: We flip to get 00000000.

// Constraints:

// 1 <= s.length <= 105
// s[i] is either '0' or '1'.

/**
 * @param s string
 * @returns number
 */
function minFlipsMonoIncr(s: string): number {
  // variables to count the number of ones and flips
  let ones: number = 0;
  let flips: number = 0;
  // loop the string
  for (let i = 0; i < s.length; i++) {
    // if the current character is '0'..
    if (s[i] === "0") {
      // reset flips to be either the current number of flips +1
      // or the number of ones, whichever is smaller
      flips = Math.min(flips + 1, ones);
    } else {
      // if the current character is '1', increment ones
      ones++;
    }
  }
  return flips;
}

console.log(minFlipsMonoIncr("00110")); // 1
console.log(minFlipsMonoIncr("010110")); // 2
console.log(minFlipsMonoIncr("00011000")); // 2
console.log(minFlipsMonoIncr("010110110100")); // 5
