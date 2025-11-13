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
  // Split the input string into an array of individual characters
  let symbols = str.split("");
  // Initialize an empty checkArray to track opening brackets
  let checkArray: string[] = [];

  // Iterate through each character in the string
  for (const symbol of symbols) {
    // Check if the current character is an opening bracket
    if (symbol === "(" || symbol === "{" || symbol === "[") {
      // Push opening brackets onto the checkArray
      checkArray.push(symbol);
    } else {
      // Pop the most recent opening bracket from the checkArray
      let prev = checkArray.pop();
      // Check if the popped bracket matches the current closing bracket
      if (
        (prev === "(" && symbol === ")") ||
        (prev === "{" && symbol === "}") ||
        (prev === "[" && symbol === "]")
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
