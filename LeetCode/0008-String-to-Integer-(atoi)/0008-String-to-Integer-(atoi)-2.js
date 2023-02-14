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

// Tests
console.log(myAtoi2("   -42")); // -42
console.log(myAtoi2("42")); // 42
console.log(myAtoi2("4193 with words")); // 4193
console.log(myAtoi2("words and 987")); // 0
console.log(myAtoi2("-91283472332")); // -2147483648
console.log(myAtoi2("3.14159")); // -3
console.log(myAtoi2(".1")); // -0
console.log(myAtoi2("21474836460")); // 2147483647