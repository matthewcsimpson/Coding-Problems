/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // create dictionary for the values of all the roman numerals up to 1000.
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // create dictionary for the letter(s) that represent values in roman numerals up to 1000
  // making sure that the indexes match.  ie: "m" and 1000 need to both be at the same index in their
  // respective array
  const letters = [
    "m",
    "cm",
    "d",
    "cd",
    "c",
    "xc",
    "l",
    "xl",
    "x",
    "ix",
    "v",
    "iv",
    "i",
  ];

  // capture the incoming number
  let nextNum = num;
  // an empty string to build the roman numeral with
  let string = "";
  // loop the values dictionary.
  for (let i = 0; i < values.length; i++) {
    // if the number divides by the current value with any remainder....
    if (nextNum % values[i] >= 0) {
      // set a temp value that is the next number, minus the remainder
      // of the next number / the current value
      let temp = nextNum - (nextNum % values[i]);
      // if the temp value is greater than 0...
      if (temp > 0) {
        // set a number to keep track of the loop, which is
        // the temp value divided by the current value.
        // this sets how many times a given letter will need to be added.
        let loopNum = temp / values[i];
        // add the letter that corresponds with the value, {loopNum} number of times.
        for (let j = 0; j < loopNum; j++) {
          string += letters[i];
        }
      }
      // set the next number to be the modulus of the curent nextNum / the current value.
      nextNum = nextNum % values[i];
    }
  }

  // return the string uppercase.
  return string.toUpperCase();
};

module.exports = intToRoman;