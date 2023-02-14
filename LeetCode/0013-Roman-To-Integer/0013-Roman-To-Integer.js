/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = (s) => {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanValues[s[i]] < romanValues[s[i + 1]]) {
      // if the current number is less than the next, it's a modifier.
      num += romanValues[s[i + 1]] - romanValues[s[i]]; // the next number - this number.
      i++; // and skip to the next number, since this number is a modifier on the next.
    } else {
      // otherwise just add the number
      num += romanValues[s[i]];
    }
  }
  return num;
};

module.exports = romanToInt;



