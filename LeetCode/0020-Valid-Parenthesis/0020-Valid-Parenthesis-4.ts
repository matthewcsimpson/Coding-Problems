const isValidParenthesisReplace = (str: string): boolean => {
  while (str.includes("()") || str.includes("{}") || str.includes("[]")) {
    str = str.replace("()", "").replace("{}", "").replace("[]", "");
  }
  return str.length === 0;
};

export default isValidParenthesisReplace;
