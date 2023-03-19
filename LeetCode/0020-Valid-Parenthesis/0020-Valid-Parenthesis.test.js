const isValid = require("./0020-Valid-Parenthesis");

test("0020-Valid-Parenthesis", () => {
  expect(isValid("{}{}{}")).toBe(true);
  expect(isValid("{}[]()")).toBe(true);
  expect(isValid("{}{[]}")).toBe(true);
  expect(isValid("{}{]}")).toBe(false);
  expect(isValid("{[{[{[]}]}]}")).toBe(true);
  expect(isValid("[{[([{)}])]}]")).toBe(false);
});
