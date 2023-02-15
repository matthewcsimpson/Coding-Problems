/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  /// define which numbers hold which letters
  const lettersObj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  // empty array to push the results into.
  const result = [];

  // if there are no digits, return
  if (!digits) {
    return result;
  }

  // recursive function to do the thing. takes in a number (level) and a string
  const doTheWork = (level, string) => {
    // if the incoming string here is the same length as the incoming digits,
    // push that string into the results.
    if (string.length === digits.length) {
      result.push(string);
      return;
    }

    // set the letters we're working with.
    // using the incoming level to select the letters in the letters object.
    let letters = lettersObj[digits[level]];

    // loop through those letters, and call the doTheWork() function on each one,
    // passing in one level higher than the curent level
    // & the current string + the next letter appended
    for (let i = 0; i < letters.length; i++) {
      doTheWork(level + 1, `${string}${letters[i]}`);
    }
  };
  // call the function the first time, with nothing in particular.
  doTheWork(0, "");

  // return the array of results
  return result;
};

module.exports = letterCombinations;