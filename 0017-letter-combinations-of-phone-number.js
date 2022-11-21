// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number
// could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone
// buttons) is given below. Note that 1 does not map to any letters.

// 2 = a,b,c
// 3 = d,e,f
// 4 = g,h,i
// 5 = j,k,l
// 6 = m,n,o
// 7 = p,q,r,s
// 8 = t,u,v
// 9 = w,x,y,z

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

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

console.log(letterCombinations("23"));
console.log(letterCombinations("5678"));
console.log(letterCombinations("2468"));
