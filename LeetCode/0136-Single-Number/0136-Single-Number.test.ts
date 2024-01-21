import { expect, test } from "@jest/globals";
import singleNumber from "./0136-Single-Number";

test("0136-single-number", () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  expect(singleNumber([1])).toBe(1);
});
