/**
 * @param {number} n
 * @return {boolean}
 */
const confusingNumber = (n) => {
  // object containing the confusing numbers and their flipped values
  const confusingNums = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
  // empty array to hold the flipped number
  let reversed = [];
  // make a new array of digits from the incoming number which can be iterated.
  const numArray = String(n);

  // iterate the number array
  for (let i = 0; i < numArray.length; i++) {
    // if the current number is not one of the confusing numbers,
    // return false immediately.
    if (!confusingNums.hasOwnProperty(numArray[i])) {
      return false;
    }

    // push the corresponding flipped value from the
    // confusingNums object into the reversed array.
    reversed.push(confusingNums[numArray[numArray.length - 1 - i]]);
  }

  // re-assign the reversed array to a joined version of itself,
  // converted back to a number.
  reversed = Number(reversed.join(""));

  // if the reversed number is not equal to the initial number, then return true.
  // this covers cases like '11'
  return reversed !== n;
};

module.exports = confusingNumber;

