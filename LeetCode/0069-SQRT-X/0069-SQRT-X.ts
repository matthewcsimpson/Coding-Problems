// Given a non-negative integer x, return the square root of x
// rounded down to the nearest integer. The returned integer should
// be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Constraints:
// - 0 <= x <= 231 - 1

/**
 * Loop all numbers to find the sqrt
 * @param x number
 * @returns number
 */
const mySqrt = (x: number): number => {
  let sqr: number = 0;
  if (x < 2) {
    sqr = x;
  }
  if (x === 2) {
    sqr = 1;
    console.log(sqr);
  }

  for (let i = 0; i <= x / 2 + 1; i++) {
    if (i * i > x) {
      sqr = i - 1;
      console.log(sqr);
      break;
    }
  }
  return sqr;
};

// Tests
console.log(mySqrt(2));
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(10)); // 3
console.log(mySqrt(365)); // 19

// ------------------------------------------------------------------------

/**
 * Binary Search Method
 * @param x - number
 * @returns number
 */
const mySqrtBin = (x: number): number => {
  if (x < 2) return x;
  let r = 0;
  let bottom = 1;
  let top = x / 2;

  while (bottom <= top) {
    let mid = Math.floor(bottom + (top - bottom) / 2);
    let sqr = mid * mid;
    if (sqr == x) {
      return mid;
    } else if (sqr < x) {
      bottom = mid + 1;
      r = mid;
    } else {
      top = mid - 1;
    }
  }
  return r;
};

// Tests
console.log(mySqrtBin(2));
console.log(mySqrtBin(4)); // 2
console.log(mySqrtBin(8)); // 2
console.log(mySqrtBin(10)); // 3
console.log(mySqrtBin(365)); // 19
