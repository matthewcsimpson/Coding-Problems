import { expect, test } from "@jest/globals";
import findTheArrayConcVal from "./2562-Find-the-Array-Concatenation-Value";
// import twoSum from "./0001-Two-SumJS";

test("2562-Find-the-Array-Concatenation-Value", () => {
  expect(findTheArrayConcVal([7, 52, 2, 4])).toBe(596);
  expect(findTheArrayConcVal([5, 14, 13, 8, 12])).toBe(673);
});
