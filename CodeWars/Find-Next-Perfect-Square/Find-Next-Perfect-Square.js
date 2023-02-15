/**
 * @param {number} sq
 * @returns number
 */
const findNextSquare = (sq) => {
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

module.exports = findNextSquare;


