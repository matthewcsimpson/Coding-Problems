// A confusing number is a number that when rotated 180 degrees becomes a
// different number with each digit valid.

// We can rotate digits of a number by 180 degrees to form new digits.

// When 0, 1, 6, 8, and 9 are rotated 180 degrees, they become 0, 1, 9, 8, and 6 respectively.
// When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid.

// Note that after rotating a number, we can ignore leading zeros.
// For example, after rotating 8000, we have 0008 which is considered as just 8.

// Given an integer n, return true if it is a confusing number, or false otherwise.

// Example 1:
// Input: n = 6
// Output: true
// Explanation: We get 9 after rotating 6, 9 is a valid number, and 9 != 6.

// Example 2:
// Input: n = 89
// Output: true
// Explanation: We get 68 after rotating 89, 68 is a valid number and 68 != 89.

// Example 3:
// Input: n = 11
// Output: false
// Explanation: We get 11 after rotating 11, 11 is a valid number but the value remains the same, thus 11 is not a confusing number

// Constraints:

// 0 <= n <= 109

/**
 * @param {number} n
 * @return {boolean}
 */
const confusingNumber = (n) => {
  // object containing the confusing numbers and their flipped values
  const confusingNums = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
  // empty array to hold the flipped number
  let reversed = [];
  // make a new array of digits from the incoming number which can be iterated.
  const numArray = String(n);

  // iterate the number array
  for (let i = 0; i < numArray.length; i++) {
    // if the current number is not one of the confusing numbers,
    // return false immediately.
    if (!confusingNums.hasOwnProperty(numArray[i])) {
      return false;
    }

    // push the corresponding flipped value from the
    // confusingNums object into the reversed array.
    reversed.push(confusingNums[numArray[numArray.length - 1 - i]]);
  }

  // re-assign the reversed array to a joined version of itself,
  // converted back to a number.
  reversed = Number(reversed.join(""));

  // if the reversed number is not equal to the initial number, then return true.
  // this covers cases like '11'
  return reversed !== n;
};

console.log(confusingNumber(6)); // true
console.log(confusingNumber(9)); // true
console.log(confusingNumber(0)); // false
console.log(confusingNumber(68)); // true
console.log(confusingNumber(11)); // false
console.log(confusingNumber(1234)); // false
console.log(confusingNumber(168990)); // true
console.log(confusingNumber(8)); // false
