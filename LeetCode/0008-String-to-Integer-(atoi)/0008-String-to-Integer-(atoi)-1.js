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

// Tests
console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("3.14159")); // -3
console.log(myAtoi(".1")); // -0
console.log(myAtoi("21474836460")); // 2147483647