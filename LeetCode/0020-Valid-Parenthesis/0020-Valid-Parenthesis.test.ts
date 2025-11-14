import { expect, test } from "@jest/globals";
import isValidParenthesis from "./0020-Valid-Parenthesis-1";
import isValidParenthesisCondensed from "./0020-Valid-Parenthesis-2";
import isValidParenthesisMap from "./0020-Valid-Parenthesis-3";
import isValidParenthesisReplace from "./0020-Valid-Parenthesis-4";

const testCase1 = "{}{}{}"; // true
const testCase2 = "{}[]()"; // true
const testCase3 = "{}{[]}"; // true
const testCase4 = "{}{]}"; // false
const testCase5 = "((("; // false
const testCase6 = ")))"; // false

test("0020-Valid-Parenthesis", () => {
  expect(isValidParenthesis(testCase1)).toBe(true);
  expect(isValidParenthesis(testCase2)).toBe(true);
  expect(isValidParenthesis(testCase3)).toBe(true);
  expect(isValidParenthesis(testCase4)).toBe(false);
  expect(isValidParenthesis(testCase5)).toBe(false);
  expect(isValidParenthesis(testCase6)).toBe(false);
});

test("0020-Valid-Parenthesis-Condensed", () => {
  expect(isValidParenthesisCondensed(testCase1)).toBe(true);
  expect(isValidParenthesisCondensed(testCase2)).toBe(true);
  expect(isValidParenthesisCondensed(testCase3)).toBe(true);
  expect(isValidParenthesisCondensed(testCase4)).toBe(false);
  expect(isValidParenthesisCondensed(testCase5)).toBe(false);
  expect(isValidParenthesisCondensed(testCase6)).toBe(false);
});

test("0020-Valid-Parenthesis-Map", () => {
  expect(isValidParenthesisMap(testCase1)).toBe(true);
  expect(isValidParenthesisMap(testCase2)).toBe(true);
  expect(isValidParenthesisMap(testCase3)).toBe(true);
  expect(isValidParenthesisMap(testCase4)).toBe(false);
  expect(isValidParenthesisMap(testCase5)).toBe(false);
  expect(isValidParenthesisMap(testCase6)).toBe(false);
});

test("0020-Valid-Parenthesis-Replace", () => {
  expect(isValidParenthesisReplace(testCase1)).toBe(true);
  expect(isValidParenthesisReplace(testCase2)).toBe(true);
  expect(isValidParenthesisReplace(testCase3)).toBe(true);
  expect(isValidParenthesisReplace(testCase4)).toBe(false);
  expect(isValidParenthesisReplace(testCase5)).toBe(false);
  expect(isValidParenthesisReplace(testCase6)).toBe(false);
});
