// Implement the myAtoi(string s) function, which converts a string to a 32-bit
// signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'.
// Read this character in if it is either. This determines if the final result is negative
// or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input
// is reached. The rest of the string is ignored.  Convert these digits into an integer
// (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0.
// Change the sign as necessary (from step 2). If the integer is out of the 32-bit signed
// integer range [-231, 231 - 1], then clamp the integer so that it remains in the range.
// Specifically, integers less than -231 should be clamped to -231, and integers greater than
// 231 - 1 should be clamped to 231 - 1. Return the integer as the final result.

// Note:
// - Only the space character ' ' is considered a whitespace character.
// - Do not ignore any characters other than the leading whitespace or the rest of the string
// after the digits.

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.

// Example 2:
// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.

// Example 3:
// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  if (str.length === 0 || !(parseInt(str) * parseInt(str) >= 0)) {
    return 0;
  }
  if (parseInt(str) > 2147483647) {
    return 2147483647;
  }
  if (parseInt(str) < -2147483648) {
    return -2147483648;
  }
  return parseInt(str);
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("3.14159")); // -3
console.log(myAtoi(".1")); // -0
console.log(myAtoi("21474836460")); // 2147483647

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi2 = (s) => {
  // Read in and ignore any leading whitespace
  let count = 0;
  while (count < s.length && s[count] === " ") {
    count++;
  }

  // value to keep track of if the result is negative or positive. assumeing positive to start.
  let negorpos = 1;
  
  // Check if the next character is '-' or '+" and read it in if it is".
  // Assume the result is positive if neither is present.
  if (count < s.length && (s[count] === "-" || s[count] === "+")) {
    if (s[count] === "-") {
      negorpos = -1;
    }
    count++;
  }

  // Read in the next characters until the next non-digit character or the end of the input is reached.
  let result = 0;
  while (count < s.length && isNaN(parseInt(s[count])) === false) {
    result = result * 10 + parseInt(s[count]);
    count++;
  }

  // multiply the result by the negorpos value.
  result *= negorpos;

  // if the result is outside the range of 32 bit integers, then clamp it to the exteme values of that range (pos or neg)
  if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1;
  }
  if (result < Math.pow(2, 31) * -1) {
    result = Math.pow(2, 31) * -1;
  }

  // Return the result with the correct sign
  return result;
};

console.log(myAtoi2("   -42")); // -42
console.log(myAtoi2("42")); // 42
console.log(myAtoi2("4193 with words")); // 4193
console.log(myAtoi2("words and 987")); // 0
console.log(myAtoi2("-91283472332")); // -2147483648
console.log(myAtoi2("3.14159")); // -3
console.log(myAtoi2(".1")); // -0
console.log(myAtoi2("21474836460")); // 2147483647

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var myAtoi = function (s) {
//     const negRegex = /\-/;
//     const numRegex = /[0-9]/;
//     const charRegex = /[A-Za-z]/;
//     const dotRegex = /\./;
//     let numCheck = false;
//     let num = [];
//     let neg = false;

//     for (let i = 0; i < s.length; i++) {
//       if (s[i].match(negRegex)) {
//         neg = true;
//       }
//       if (s[i].match(numRegex)) {
//         numCheck = true;
//         num.push(s[i]);
//       }
//       if (s[i].match(charRegex) && numCheck === false) {
//         console.log(s[i]);
//         return 0;
//       }
//       if (
//         s[i].match(dotRegex) &&
//         s[i + 1].match(numRegex) &&
//         numCheck === false
//       ) {
//         return 0;
//       }
//       if (s[i].match(dotRegex) && numCheck === true) {
//         break;
//       }
//     }

//     let ans = parseInt(num.join(""));

//     if (ans > Math.pow(2, 31) - 1) {
//       ans = Math.pow(2, 31);
//     }
//     if (ans < Math.pow(2, 31) * -1) {
//       ans = Math.pow(2, 31) * -1;
//     }
//     if (neg === true) {
//       ans *= -1;
//     }

//     return ans;
//   };
