// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

/**
 *
 * @param {number} sq
 * @returns number
 */
function findNextSquare(sq) {
  // if the input number is not a perfect square, return -1
  if (Math.sqrt(sq) % 1 !== 0) {
    return -1;
  } else {
    // if the number is a perfect square, then find the sqaure root and add one.
    let num = Math.sqrt(sq) + 1;
    // return that number, multiplied by itself.
    return num * num;
  }
}

console.log(findNextSquare(15241383936));
console.log(findNextSquare(155)); // not a perfect square
console.log(findNextSquare(319225));
console.log(findNextSquare(625));
console.log(findNextSquare(121));
