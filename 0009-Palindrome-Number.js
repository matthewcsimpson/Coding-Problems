// 22-10-25
// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // if the number is less than zero, OR
  // divides by 10 with no remainder AND isn't exactly zero
  // return false because it cant be a palindrome.
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let y = 0;
  while (x > y) {
    y = y * 10 + (x % 10);
    console.log(y);
    x = Math.floor(x / 10);
    console.log(x);
  }

  return x === y || x === Math.floor(y / 10);
};

console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(12321));
console.log(isPalindrome(-1221));
