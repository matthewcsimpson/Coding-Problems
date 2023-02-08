
/**
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
