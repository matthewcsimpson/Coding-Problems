/**
 * Determine if the input string of parentheses is valid.
 *
 * An input string is valid if:
 *
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 * @param str
 * @returns boolean
 */
const isValidParenthesisCondensed = (str: string): boolean => {
  let array = str.split("");
  let checkArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(" || array[i] === "{" || array[i] === "[") {
      checkArray.push(array[i]);
    } else {
      // Pop the most recent opening bracket from the checkArray
      let prev = checkArray.pop();
      // Check if the popped bracket matches the current closing bracket
      if (
        (prev === "(" && array[i] === ")") ||
        (prev === "{" && array[i] === "}") ||
        (prev === "[" && array[i] === "]")
      ) {
        // Valid pair found, continue to next character
        continue;
      } else {
        // Invalid pair or no matching opening bracket, return false
        return false;
      }
    }
  }
  // Return true if all brackets are properly matched (checkArray is empty)
  return checkArray.length === 0;
};

export default isValidParenthesisCondensed;
