import { expect, test } from "@jest/globals";
import isHappy from "./0202-Happy-Number";

test("0202-Happy-Number", () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(2)).toBe(false);
  expect(isHappy(1)).toBe(true);
  expect(isHappy(7)).toBe(true);
  expect(isHappy(4)).toBe(false);
});
