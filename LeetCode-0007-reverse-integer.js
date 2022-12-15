// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer
// range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let answer = parseInt(x.toString().split("").reverse().join("").toString());

  if (answer < Math.pow(2, 31) * -1 || answer > Math.pow(2, 31) - 1) {
    return 0;
  }

  return x < 0 ? answer * -1 : answer;
};


console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(Math.pow(2, 29)));