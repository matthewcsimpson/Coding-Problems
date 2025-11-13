import { expect, test } from "@jest/globals";
import isValidTS from "./0020-Valid-Parenthesis";

test("0020-Valid-Parenthesis", () => {
  expect(isValidTS("{}{}{}")).toBe(true);
  expect(isValidTS("{}[]()")).toBe(true);
  expect(isValidTS("{}{[]}")).toBe(true);
  expect(isValidTS("{}{]}")).toBe(false);
  expect(isValidTS("{[{[{[]}]}]}")).toBe(true);
  expect(isValidTS("[{[([{)}])]}]")).toBe(false);
});
