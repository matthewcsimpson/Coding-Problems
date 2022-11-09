// 22-09-30
// 20. Valid Parentheses
// Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let array = s.split("");
  let checkArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(" || array[i] === "{" || array[i] === "[") {
      checkArray.push(array[i]);
    }

    if (array[i] === ")") {
      if (checkArray[checkArray.length - 1] === "(") {
        checkArray.pop();
      } else {
        checkArray.push(array[i]);
      }
    }

    if (array[i] === "}") {
      if (checkArray[checkArray.length - 1] === "{") {
        checkArray.pop();
      } else {
        checkArray.push(array[i]);
      }
    }

    if (array[i] === "]") {
      if (checkArray[checkArray.length - 1] === "[") {
        checkArray.pop();
      } else {
        checkArray.push(array[i]);
      }
    }
  }

  return checkArray.length > 0 ? false : true;
};

console.log(isValid("{}{}{}"));
console.log(isValid("{}[]()"));
console.log(isValid("{}{[]}"));
console.log(isValid("{}{]}"));
