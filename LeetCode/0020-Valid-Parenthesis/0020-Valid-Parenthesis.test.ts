import { expect, test } from "@jest/globals";
import isValidParenthesis from "./0020-Valid-Parenthesis-1";
import isValidParenthesisCondensed from "./0020-Valid-Parenthesis-2";
import isValidParenthesisMap from "./0020-Valid-Parenthesis-3";
import isValidParenthesisReplace from "./0020-Valid-Parenthesis-4";

const testCase1 = "{}{}{}";
const testCase2 = "{}[]()";
const testCase3 = "{}{[]}";
const testCase4 = "{}{]}";
const testCase5 = "{[{[{[]}]}]}";
const testCase6 = "[{[([{)}])]}]";

test("0020-Valid-Parenthesis", () => {
  expect(isValidParenthesis(testCase1)).toBe(true);
  expect(isValidParenthesis(testCase2)).toBe(true);
  expect(isValidParenthesis(testCase3)).toBe(true);
  expect(isValidParenthesis(testCase4)).toBe(false);
  expect(isValidParenthesis(testCase5)).toBe(true);
  expect(isValidParenthesis(testCase6)).toBe(false);
});

test("0020-Valid-Parenthesis-Condensed", () => {
  expect(isValidParenthesisCondensed(testCase1)).toBe(true);
  expect(isValidParenthesisCondensed(testCase2)).toBe(true);
  expect(isValidParenthesisCondensed(testCase3)).toBe(true);
  expect(isValidParenthesisCondensed(testCase4)).toBe(false);
  expect(isValidParenthesisCondensed(testCase5)).toBe(true);
  expect(isValidParenthesisCondensed(testCase6)).toBe(false);
});

test("0020-Valid-Parenthesis-Map", () => {
  expect(isValidParenthesisMap(testCase1)).toBe(true);
  expect(isValidParenthesisMap(testCase2)).toBe(true);
  expect(isValidParenthesisMap(testCase3)).toBe(true);
  expect(isValidParenthesisMap(testCase4)).toBe(false);
  expect(isValidParenthesisMap(testCase5)).toBe(true);
  expect(isValidParenthesisMap(testCase6)).toBe(false);
});

test("0020-Valid-Parenthesis-Replace", () => {
  expect(isValidParenthesisReplace(testCase1)).toBe(true);
  expect(isValidParenthesisReplace(testCase2)).toBe(true);
  expect(isValidParenthesisReplace(testCase3)).toBe(true);
  expect(isValidParenthesisReplace(testCase4)).toBe(false);
  expect(isValidParenthesisReplace(testCase5)).toBe(true);
  expect(isValidParenthesisReplace(testCase6)).toBe(false);
});
