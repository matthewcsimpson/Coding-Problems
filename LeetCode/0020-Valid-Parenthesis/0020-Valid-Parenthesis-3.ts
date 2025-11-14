/**
 *  Determine if the input string of parentheses is valid.
 *
 * An input string is valid if:
 *
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 *
 * @param str
 * @returns boolean
 */
const isValidParenthesisMap = (str: string): boolean => {
  // Initialize an empty stack to track opening brackets
  const stack: string[] = [];
  // Create a map that pairs closing brackets with their corresponding opening brackets
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Iterate through each character in the input string
  for (const char of str) {
    // Check if the current character is a closing bracket (exists in the map)
    if (char in bracketMap) {
      // It's a closing bracket
      // Check if stack is empty (no matching opening bracket) or if the last opening bracket doesn't match
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        // Invalid parentheses - return false
        return false;
      }
    } else {
      // It's an opening bracket
      // Push the opening bracket onto the stack
      stack.push(char);
    }
  }

  // Return true if all brackets are matched (stack is empty), false otherwise
  return stack.length === 0;
};

export default isValidParenthesisMap;
