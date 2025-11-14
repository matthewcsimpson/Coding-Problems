/**
 * Determine if the input string of parentheses is valid.
 *
 * An input string is valid if:
 *
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} str
 * @return {boolean}
 */
const isValidParenthesis = (str: string): boolean => {
  // Convert string to array of characters for easier iteration
  const array = str.split("");
  // Stack to keep track of opening brackets waiting for their closing pairs
  let checkArray = [];

  // Iterate through each character in the string
  for (let i = 0; i < array.length; i++) {
    // Push any opening bracket onto the stack
    if (array[i] === "(" || array[i] === "{" || array[i] === "[") {
      checkArray.push(array[i]);
    }

    // Handle closing parenthesis ')'
    if (array[i] === ")") {
      // If matching opening parenthesis is on top of stack, remove it (valid pair)
      if (checkArray[checkArray.length - 1] === "(") {
        checkArray.pop();
      } else {
        // No matching opening bracket found, push to mark invalid sequence
        checkArray.push(array[i]);
      }
    }

    // Handle closing curly brace '}'
    if (array[i] === "}") {
      // If matching opening brace is on top of stack, remove it (valid pair)
      if (checkArray[checkArray.length - 1] === "{") {
        checkArray.pop();
      } else {
        // No matching opening bracket found, push to mark invalid sequence
        checkArray.push(array[i]);
      }
    }

    // Handle closing square bracket ']'
    if (array[i] === "]") {
      // If matching opening bracket is on top of stack, remove it (valid pair)
      if (checkArray[checkArray.length - 1] === "[") {
        checkArray.pop();
      } else {
        // No matching opening bracket found, push to mark invalid sequence
        checkArray.push(array[i]);
      }
    }
  }

  // Return true if stack is empty (all brackets properly matched), false otherwise
  return checkArray.length === 0;
};

export default isValidParenthesis;
