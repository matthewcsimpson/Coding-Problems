import { test, expect } from "@jest/globals";
import validWordSquare from "./0422-Valid-Word-Square-1";
import validWordSquareTwo from "./0422-Valid-Word-Square-2";
import validWordSquareThree from "./0422-Valid-Word-Square-3";

test("Valid Word Square", () => {
  expect(validWordSquare(["abcd", "bnrt", "crmy", "dtye"])).toBe(true);
  expect(validWordSquare(["abcd", "bnrt", "crm", "dt"])).toBe(true);
  expect(validWordSquare(["ball", "area", "read", "lady"])).toBe(false);
});

test("Valid Word Square Two", () => {
  expect(validWordSquareTwo(["abcd", "bnrt", "crmy", "dtye"])).toBe(true);
  expect(validWordSquareTwo(["abcd", "bnrt", "crm", "dt"])).toBe(true);
  expect(validWordSquareTwo(["ball", "area", "read", "lady"])).toBe(false);
});

test("Valid Word Square Three", () => {
  expect(validWordSquareThree(["abcd", "bnrt", "crmy", "dtye"])).toBe(true);
  expect(validWordSquareThree(["abcd", "bnrt", "crm", "dt"])).toBe(true);
  expect(validWordSquareThree(["ball", "area", "read", "lady"])).toBe(false);
});
