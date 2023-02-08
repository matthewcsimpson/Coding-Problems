// The rgb function is incomplete. Complete it so that passing in RGB decimal values will
// result in a hexadecimal representation being returned. Valid decimal values for
// RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest
// valid value.

// Note: Your answer should always be 6 characters long,
// the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// ---------------------------------------------------------- solution 1
/**
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
function rgb(r, g, b) {
  // round the numbers
  rr = rounder(r);
  gg = rounder(g);
  bb = rounder(b);

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

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3

// ---------------------------------------------------------- solution 2
/**
 *
 * @param {Number } r
 * @param {Number } g
 * @param {Number} b
 * @returns String
 */
function rgb2(r, g, b) {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 *  Function returns the same as in solution one, but using toString(radix) to calculate the hex number
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

console.log(rgb2(255, 255, 255)); // returns FFFFFF
console.log(rgb2(255, 255, 300)); // returns FFFFFF
console.log(rgb2(0, 0, 0)); // returns 000000
console.log(rgb2(148, 0, 211)); // returns 9400D3
