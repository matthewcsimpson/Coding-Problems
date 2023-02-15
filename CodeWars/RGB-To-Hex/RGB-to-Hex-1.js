/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
function rgb(r, g, b) {
  // round the numbers
  let rr = rounder(r);
  let gg = rounder(g);
  let bb = rounder(b);

  // return the string
  return `${convertToHex(Math.floor(rr / 16))}${convertToHex(
    Math.floor(rr % 16)
  )}${convertToHex(Math.floor(gg / 16))}${convertToHex(
    Math.floor(gg % 16)
  )}${convertToHex(Math.floor(bb / 16))}${convertToHex(Math.floor(bb % 16))}`;
}

/**
 *  Takes in a number and rounds any value over 255 to 255, and any number under zero to zero.
 * @param {Number} num
 * @returns Number
 */
function rounder(num) {
  if (num > 255) {
    return 255;
  } else if (num < 0) {
    return 0;
  } else {
    return num;
  }
}

/**
 * Takes in a single-digit number under 16 and returns the
 * corresponding hex value as a string
 * @param {Number} num
 * @returns String
 */
function convertToHex(num) {
  if (num < 16) {
    if (num === 15) {
      return "F";
    }
    if (num === 14) {
      return "E";
    }
    if (num === 13) {
      return "D";
    }
    if (num === 12) {
      return "C";
    }
    if (num === 11) {
      return "B";
    }
    if (num === 10) {
      return "A";
    }
    if (num < 10 && num >= 0) {
      return `${num}`;
    }
  }
}

module.exports = rgb;
