const isValidTS = (s: string): boolean => {
  let symbols = s.split("");
  let stack: string[] = [];

  for (const symbol of symbols) {
    if (symbol === "(" || symbol === "{" || symbol === "[") {
      stack.push(symbol);
    } else {
      let prev = stack.pop();
      if (
        (prev === "(" && symbol === ")") ||
        (prev === "{" && symbol === "}") ||
        (prev === "[" && symbol === "]")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default isValidTS;
