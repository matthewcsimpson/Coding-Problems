// 12. Integer to Roman
// Medium

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= num <= 3999

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

console.log(intToRoman(3467));
console.log(intToRoman(3));
console.log(intToRoman(25));
console.log(intToRoman(1994));
