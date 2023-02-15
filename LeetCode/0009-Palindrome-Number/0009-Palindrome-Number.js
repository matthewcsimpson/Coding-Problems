/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // if the number is less than zero, OR
  // divides by 10 with no remainder AND isn't exactly zero
  // return false because it cannot be a palindrome.
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // set a place to start from
  let y = 0;

  // while x is more than the starting point
  while (x > y) {
    // reset the starting point to itself * 10, plus the remainder of x/10.
    // efectively, accumulate the moduluses.
    y = y * 10 + (x % 10);

    // divide x by 10 and round down.
    x = Math.floor(x / 10);
  }

  // return either when x and y are the same, or if x is the same as y divided by 10.
  return x === y || x === Math.floor(y / 10);
};

module.exports = isPalindrome;

// Tests
console.log(isPalindrome(121)); // true
console.log(isPalindrome(1221)); //true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-1221)); //false
