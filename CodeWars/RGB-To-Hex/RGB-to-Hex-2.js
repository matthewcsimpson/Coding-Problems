/**
 * @param {Number } r
 * @param {Number } g
 * @param {Number} b
 * @returns String
 */
function rgb2(r, g, b) {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Function returns the same as in solution one, but using toString(radix) to calculate the hex number
 * which I previously didn't know what as thing.
 * @param {Number} num
 * @returns String
 */
function toHex(num) {
  if (num < 0) {
    return "00";
  }
  if (num > 255) {
    return "FF";
  }
  // Number(num) makes the number a number
  // toString(16) outputs a string of that number in base 16.
  // slice(-2) slices out just the last two characters of the resulting string (eg 0FF becomes FF)
  return ("0" + Number(num).toString(16)).slice(-2).toUpperCase();
}

// Tests
console.log(rgb2(255, 255, 255)); // returns FFFFFF
console.log(rgb2(255, 255, 300)); // returns FFFFFF
console.log(rgb2(0, 0, 0)); // returns 000000
console.log(rgb2(148, 0, 211)); // returns 9400D3
