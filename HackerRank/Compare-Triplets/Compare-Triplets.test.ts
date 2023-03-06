import { test, expect } from "@jest/globals";
import compareTriplets from "./Compare-Triplets";

test("Compare Triplets", () => {
  expect(compareTriplets([5, 6, 7], [3, 6, 10])).toStrictEqual([1, 1]);
  expect(compareTriplets([1, 2, 3], [1, 2, 3])).toStrictEqual([0, 0]);
  expect(compareTriplets([1, 2, 3], [5, 6, 7])).toStrictEqual([0, 3]);
});
