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
const isValidParenthesisReplace = (str: string): boolean => {
  while (str.includes("()") || str.includes("{}") || str.includes("[]")) {
    str = str.replace("()", "").replace("{}", "").replace("[]", "");
  }
  return str.length === 0;
};

export default isValidParenthesisReplace;
